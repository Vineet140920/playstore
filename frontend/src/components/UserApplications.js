import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Form, Pagination, Modal, Spinner } from 'react-bootstrap';
import { FaDownload, FaStar, FaEye, FaPlus, FaLaptop, FaMusic, FaGamepad, FaCog, FaDumbbell, FaPlane, FaCamera, FaBook, FaBrush, FaFilm, FaUtensils, FaPaw, FaSpa, FaTshirt } from 'react-icons/fa';
import { GiLipstick, GiEarthAmerica } from 'react-icons/gi';
import { ImAndroid } from "react-icons/im";
import './UserApplications.css'; // Import your CSS file

const UserApplications = () => {
    const [applications, setApplications] = useState([]);
    const [genreFilter, setGenreFilter] = useState('');
    const [topRated, setTopRated] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage] = useState(6);
    const [showReviewsModal, setShowReviewsModal] = useState(false);
    const [showAddReviewModal, setShowAddReviewModal] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [selectedAppId, setSelectedAppId] = useState(null);
    const [reviewForm, setReviewForm] = useState({
        username: '',
        rating: 1,
        comment: ''
    });
    const [loading, setLoading] = useState(false);
     const token = localStorage.getItem('token');

    useEffect(() => {
        if (topRated) {
            fetchTopRatedApplications();
        } else if (genreFilter) {
            fetchApplicationsByGenre();
        } else {
            fetchVisibleApplications();
        }
    }, [topRated, genreFilter, currentPage]);

    const fetchVisibleApplications = async () => {
        try {
            const response = await axios.get('http://localhost:8082/api/applications',

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            if (Array.isArray(response.data)) {
                setApplications(response.data);
            } else {
                setApplications([]);
                console.error('Expected an array but got:', response.data);
            }
        } catch (error) {
            console.error('Error fetching visible applications', error);
        }
    };

    const fetchTopRatedApplications = async () => {
        try {
            const response = await axios.get('http://localhost:8082/api/applications/top-rated',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            if (Array.isArray(response.data)) {
                setApplications(response.data);
            } else {
                setApplications([]);
                console.error('Expected an array but got:', response.data);
            }
        } catch (error) {
            console.error('Error fetching top-rated applications', error);
        }
    };

    const fetchApplicationsByGenre = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/api/applications/genre/${genreFilter}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

            if (Array.isArray(response.data)) {
                setApplications(response.data);
            } else {
                setApplications([]);
                console.error('Expected an array but got:', response.data);
            }
        } catch (error) {
            console.error('Error fetching applications by genre', error);
        }
    };

    const handleDownload = async (applicationId) => {
        setLoading(true); // Start loading
        try {
           
            const response = await axios.get(`http://localhost:8082/api/applications/${applicationId}/download`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    
                }
            );
            alert(`Downloaded: ${response.data.name}`);
        } catch (error) {
            console.error('Error downloading application', error);
            alert('Failed to download application. Please try again.');
        } finally {
            setLoading(false); // End loading
        }
    };

    const fetchReviews = async (applicationId) => {
        try {
            const response = await axios.get(`http://localhost:8082/api/reviews/${applicationId}`,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setReviews(response.data);
            setSelectedAppId(applicationId);
            setShowReviewsModal(true);
        } catch (error) {
            console.error('Error fetching reviews', error);
        }
    };

    const handleAddReview = async () => {
        try {
            const review = { ...reviewForm, applicationId: selectedAppId };
            await axios.post('http://localhost:8082/api/reviews', review,

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert('Review added successfully!');
            setReviewForm({
                username: '',
                rating: 1,
                comment: ''
            });
            setShowAddReviewModal(false);
            fetchReviews(selectedAppId); // Refresh reviews list
        } catch (error) {
            console.error('Error adding review', error);
        }
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
        <div className="container mt-5">
            <h2 className="text-center mb-4">Applications</h2>

            {loading && (
                <div className="loading-overlay">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}

            <div className={`content ${loading ? 'blurred' : ''}`}>
                <div className="d-flex justify-content-between mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Filter by genre"
                        value={genreFilter}
                        onChange={(e) => setGenreFilter(e.target.value)}
                        className="filter-input"
                        disabled={loading} // Disable input when loading
                    />
                    <Button
                        variant={topRated ? "success" : "primary"}
                        onClick={() => setTopRated(!topRated)}
                        className="btn-custom"
                        disabled={loading} // Disable button when loading
                    >
                        {topRated ? "Show All" : "Show Top Rated"}
                    </Button>
                </div>

                <div className="row">
                    {currentApplications.map((app) => (
                        <div className="col-md-4 mb-4" key={app.id}>
                            <Card className="card-custom">
                                <Card.Body>
                                    <Card.Title>{app.name} {getIconForGenre(app.genre)}</Card.Title>
                                    <Card.Text>
                                        {app.description.length > 100 ? `${app.description.substring(0, 100)}...` : app.description}
                                    </Card.Text>
                                    <Card.Text><strong>Release Date:</strong> {new Date(app.releaseDate).toLocaleDateString()}</Card.Text>
                                    <Card.Text><strong>Version:</strong> {app.version}</Card.Text>
                                    <Card.Text><strong>Genre:</strong> {app.genre}</Card.Text>
                                    <Card.Text><strong>Download Count:</strong> {app.downloadCount}</Card.Text>
                                    <Card.Text><strong>Rating:</strong> {app.rating.toFixed(1)}</Card.Text>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        onClick={() => handleDownload(app.id)}
                                        className="icon-button"
                                        disabled={loading} // Disable button when loading
                                    >
                                        <FaDownload /> Download
                                    </Button>
                                    <Button
                                        variant="outline-info"
                                        size="sm"
                                        className="ms-2 icon-button"
                                        onClick={() => fetchReviews(app.id)}
                                        disabled={loading} // Disable button when loading
                                    >
                                        <FaEye /> View Reviews
                                    </Button>
                                    <Button
                                        variant="outline-success"
                                        size="sm"
                                        className="ms-2 icon-button"
                                        onClick={() => {
                                            setSelectedAppId(app.id);
                                            setShowAddReviewModal(true);
                                        }}
                                        disabled={loading} // Disable button when loading
                                    >
                                        <FaPlus /> Add Review
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <Button onClick={goToPreviousPage} disabled={currentPage === 1}>&laquo; Previous</Button>
                    <Pagination>
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                    <Button onClick={goToNextPage} disabled={currentPage === totalPages}>Next &raquo;</Button>
                </div>
            </div>

            {/* Reviews Modal */}
            <Modal show={showReviewsModal} onHide={() => setShowReviewsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {reviews.length > 0 ? (
                        <ul>
                            {reviews.map((review) => (
                                <li key={review.id}>
                                    <strong>{review.username}</strong>: {review.comment} ({review.rating} stars)
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews available for this application.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowReviewsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Add Review Modal */}
            <Modal show={showAddReviewModal} onHide={() => setShowAddReviewModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your username"
                                value={reviewForm.username}
                                onChange={(e) => setReviewForm({ ...reviewForm, username: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                max="5"
                                value={reviewForm.rating}
                                onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your comment"
                                value={reviewForm.comment}
                                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddReview}>
                            Submit Review
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddReviewModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserApplications;
