import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, InputGroup, Pagination, Modal } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaPlus, FaEdit, FaTrash, FaLaptop, FaMusic, FaGamepad, FaCog } from 'react-icons/fa';
import { ImAndroid } from "react-icons/im";
import { FaDumbbell, FaPlane, FaCamera, FaBook, FaBrush, FaFilm, FaUtensils, FaPaw, FaSpa, FaTshirt } from 'react-icons/fa';
import { GiLipstick, GiEarthAmerica } from 'react-icons/gi';
import './ApplicationManager.css'; // Import your CSS file

const ApplicationManager = () => {
    const [applications, setApplications] = useState([]);
    const [application, setApplication] = useState({
        id: null,
        name: '',
        description: '',
        releaseDate: '',
        version: '',
        genre: '',
        visibility: true,
        downloadCount: 0,
        rating: 0.0,
    });
    const [genreFilter, setGenreFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage] = useState(6);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [showReviewsModal, setShowReviewsModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchApplications();
    }, [currentPage, genreFilter]);

    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/applications',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            let filteredApplications = response.data;
            if (genreFilter) {
                filteredApplications = filteredApplications.filter(app =>
                    app.genre.toLowerCase().includes(genreFilter.toLowerCase())
                );
            }
            setApplications(filteredApplications);
        } catch (error) {
            console.error('Error fetching applications', error);
        }
    };

    const handleVisibilityToggle = async (app) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/applications/${app.id}/toggle-visibility`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setApplications(applications.map(a => (a.id === app.id ? response.data : a)));
        } catch (error) {
            console.error('Error toggling visibility', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplication({ ...application, [name]: value });
    };

    const handleSubmit = async () => {
        setLoading(true); 
        try {
            await axios.post('http://localhost:8081/api/applications', application,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert('Application created successfully!');
            resetForm();
            fetchApplications();
        } catch (error) {
            console.error('Error saving application', error);
        } finally {
            setLoading(false); 
        }
    };

    const handleEdit = async () => {
        setLoading(true); 
        try {
            await axios.put(`http://localhost:8081/api/applications/${application.id}`, application,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert('Application updated successfully!');
            resetForm();
            fetchApplications();
        } catch (error) {
            console.error('Error updating application', error);
        } finally {
            setLoading(false); 
        }
    };

    const handleDelete = async () => {
        setLoading(true); 
        try {
            await axios.delete(`http://localhost:8081/api/applications/${application.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert('Application deleted successfully!');
            setShowDeleteConfirm(false);
            fetchApplications();
        } catch (error) {
            console.error('Error deleting application', error);
        } finally {
            setLoading(false); 
        }
    };

    const fetchReviews = async (applicationId) => {
        try {
            const response = await axios.get(`http://localhost:8081/api/reviews/${applicationId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setReviews(response.data);
            setShowReviewsModal(true);
        } catch (error) {
            console.error('Error fetching reviews', error);
        }
    };

    const resetForm = () => {
        setApplication({
            id: null,
            name: '',
            description: '',
            releaseDate: '',
            version: '',
            genre: '',
            visibility: true,
            downloadCount: 0,
            rating: 0.0,
        });
        setShowAddForm(false);
        setShowEditForm(false);
        setShowDeleteConfirm(false);
    };

    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
    const currentApplications = applications.slice(indexOfFirstApplication, indexOfLastApplication);

    const totalPages = Math.ceil(applications.length / applicationsPerPage);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getIconForGenre = (genre) => {
        switch (genre) {
            case 'Utility':
            case 'Lifestyle':
                return <GiEarthAmerica className='icon-large' style={{ color: '#ff6f61' }} />; // Earth icon for lifestyle/general utility
            case 'Game':
            case 'Games':
                return <FaGamepad className='icon-large' style={{ color: '#ff6f61' }} />; // Game controller icon for games
            case 'Fashion':
                return <FaTshirt className='icon-large' style={{ color: '#ff6f61' }} />; // T-shirt icon for fashion
            case 'Health & Fitness':
            case 'Fitness':
                return <FaDumbbell className='icon-large' style={{ color: '#ff6f61' }} />; // Dumbbell icon for health & fitness
            case 'Wellness':
            case "Women''s Health":
            case 'Health & Wellness':
                return <FaSpa className='icon-large' style={{ color: '#ff6f61' }} />; // Spa icon for wellness
            case 'Beauty':
                return <GiLipstick className='icon-large' style={{ color: '#ff6f61' }} />; // Lipstick icon for beauty
            case 'Travel':
                return <FaPlane className='icon-large' style={{ color: '#ff6f61' }} />; // Plane icon for travel
            case 'Food & Drink':
                return <FaUtensils className='icon-large' style={{ color: '#ff6f61' }} />; // Utensils icon for food & drink
            case 'Pets':
                return <FaPaw className='icon-large' style={{ color: '#ff6f61' }} />; // Paw icon for pets
            case 'Books':
                return <FaBook className='icon-large' style={{ color: '#6a1b9a' }} />; // Book icon for books
            case 'Music':
                return <FaMusic className='icon-large' style={{ color: '#26a69a' }} />; // Music note icon for music
            case 'Art & Design':
            case 'Arts & Crafts':
            case 'Hobbies':
                return <FaBrush className='icon-large' style={{ color: '#ff6f61' }} />; // Paintbrush icon for art & design
            case 'Photography':
                return <FaCamera className='icon-large' style={{ color: '#6a1b9a' }} />; // Camera icon for photography
            case 'Entertainment':
                return <FaFilm className='icon-large' style={{ color: '#ff6f61' }} />; // Film icon for entertainment
            case 'Yoga':
                return <FaDumbbell className='icon-large' style={{ color: '#6a1b9a' }} />; // Yoga pants icon for yoga and mindfulness
            case 'social':
            case 'Social':
                return <FaCog className='icon-large' style={{ color: '#6a1b9a' }} />;
            case 'Productivity':
                return <FaLaptop className='icon-large' style={{ color: '#26a69a' }} />; // Laptop icon for technology
            default:
                return <ImAndroid className='icon-large' style={{ color: '#607d8b' }} />; // Default Android icon
        }
    };

    return (
        <div className="container mt-4">
            {loading && <div className="loading-overlay"><div className="spinner-border" role="status"></div></div>} {/* Loading overlay */}
            <div className="d-flex justify-content-between mb-3">
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Filter by Genre"
                        value={genreFilter}
                        onChange={(e) => setGenreFilter(e.target.value)}
                        className="filter-input"
                    />
                </InputGroup>

                <Button 
                    className="me-2 btn-custom" 
                    variant="success" 
                    onClick={() => setShowAddForm(true)}
                    disabled={loading} // Disable button when loading
                >
                    Add Application <FaPlus />
                </Button>
            </div>

            <div className="row">
                {currentApplications.map((app) => (
                    <div className="col-md-4 mb-4" key={app.id}>
                        <Card>
                            <Card.Body className="card-body">
                                <Card.Title>
                                    {app.name} {getIconForGenre(app.genre)}
                                </Card.Title>
                                <Card.Text>
                                    {app.description.length > 100 ? `${app.description.substring(0, 100)}...` : app.description}
                                </Card.Text>
                                <Card.Text><strong>Release Date:</strong> {new Date(app.releaseDate).toLocaleDateString()}</Card.Text>
                                <Card.Text><strong>Version:</strong> {app.version}</Card.Text>
                                <Card.Text><strong>Genre:</strong> {app.genre} </Card.Text>
                                <Card.Text><strong>Visibility:</strong> {app.visibility ? 'Visible' : 'Hidden'}</Card.Text>
                                <div className="card-action">
                                    <Button 
                                        variant="outline-info" 
                                        size="sm" 
                                        onClick={() => fetchReviews(app.id)}
                                    >
                                        View Reviews <FaEye />
                                    </Button>
                                    <Button 
                                        variant="outline-danger" 
                                        size="sm" 
                                        className="ms-2"
                                        onClick={() => {
                                            setApplication(app);
                                            setShowDeleteConfirm(true);
                                        }}
                                    >
                                        Delete <FaTrash />
                                    </Button>
                                    <Button 
                                        variant="outline-primary" 
                                        size="sm" 
                                        className="ms-2"
                                        onClick={() => {
                                            setApplication(app);
                                            setShowEditForm(true);
                                        }}
                                    >
                                        Edit <FaEdit />
                                    </Button>
                                    <Button
                                        variant={app.visibility ? "outline-secondary" : "outline-success"}
                                        size="sm"
                                        className="ms-2"
                                        onClick={() => handleVisibilityToggle(app)}
                                    >
                                        {app.visibility ? 'Disable' : 'Enable'} {app.visibility ? <FaEyeSlash /> : <FaEye />}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Pagination className="justify-content-center pagination">
                <Pagination.Prev onClick={goToPreviousPage} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={goToNextPage} disabled={currentPage === totalPages} />
            </Pagination>

            <Modal show={showAddForm} onHide={() => resetForm()} dialogClassName="modal-90w">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Add New Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={application.name}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={application.description}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="releaseDate"
                                value={application.releaseDate}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Version</Form.Label>
                            <Form.Control
                                type="text"
                                name="version"
                                placeholder="Version"
                                value={application.version}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                name="genre"
                                placeholder="Genre"
                                value={application.genre}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={() => resetForm()} disabled={loading}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Creating...' : 'Create Application'} 
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditForm} onHide={() => resetForm()} dialogClassName="modal-90w">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Edit Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={application.name}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={application.description}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="releaseDate"
                                value={application.releaseDate}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Version</Form.Label>
                            <Form.Control
                                type="text"
                                name="version"
                                placeholder="Version"
                                value={application.version}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                type="text"
                                name="genre"
                                placeholder="Genre"
                                value={application.genre}
                                onChange={handleChange}
                                disabled={loading} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={() => resetForm()} disabled={loading}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit} disabled={loading}>
                        {loading ? 'Updating...' : 'Update Application'} {/* Change button text based on loading */}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)} dialogClassName="modal-90w">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the application "{application.name}"?
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)} disabled={loading}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete} disabled={loading}>
                        {loading ? 'Deleting...' : 'Delete'} 
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showReviewsModal} onHide={() => setShowReviewsModal(false)} dialogClassName="modal-90w">
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>Application Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {reviews.length > 0 ? (
                        <ul>
                            {reviews.map((review) => (
                                <li key={review.id}>
                                    <strong>{review.username}</strong> rated it {review.rating}/5
                                    <p>{review.comment}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews available for this application.</p>
                    )}
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button variant="secondary" onClick={() => setShowReviewsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ApplicationManager;
