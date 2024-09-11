import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaDownload, FaAppStore, FaAndroid, FaGamepad } from 'react-icons/fa';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
    return (
        <Container className="home-page mt-4">
            {/* Introduction Section */}
            <Row className="mb-5 text-center">
                <Col>
                    <h1>Welcome to the Playstore</h1>
                    <p>Your one-stop destination for the best apps and games across all genres. Explore, download, and enjoy top-rated apps curated just for you.</p>
                    <Button variant="primary" size="lg" href="#download-section">
                        Download Now <FaDownload />
                    </Button>
                </Col>
            </Row>

            {/* Features Section */}
            <Row className="features-section text-center mb-5">
                <Col md={4}>
                    <FaAppStore size={50} className="feature-icon" />
                    <h3>Wide Selection</h3>
                    <p>Discover a diverse range of applications across multiple categories, from games to productivity tools.</p>
                </Col>
                <Col md={4}>
                    <FaAndroid size={50} className="feature-icon" />
                    <h3>For All Devices</h3>
                    <p>Our applications are optimized for all devices, ensuring a seamless experience whether you’re on mobile or tablet.</p>
                </Col>
                <Col md={4}>
                    <FaGamepad size={50} className="feature-icon" />
                    <h3>Top-rated Games</h3>
                    <p>Play the best games, from action-packed adventures to relaxing puzzles, all in one place.</p>
                </Col>
            </Row>

            {/* Categories Section */}
            <Row className="mb-5">
                <Col>
                    <h2>Popular Categories</h2>
                </Col>
            </Row>
            <Row className="categories-section">
                <Col md={4}>
                    <Card className="mb-4 category-card">
                        <Card.Body>
                            <Card.Title>Action</Card.Title>
                            <Card.Text>
                                Dive into thrilling action games that will keep you on the edge of your seat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 category-card">
                        <Card.Body>
                            <Card.Title>Adventure</Card.Title>
                            <Card.Text>
                                Explore vast worlds and embark on epic quests in our adventure games category.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 category-card">
                        <Card.Body>
                            <Card.Title>Productivity</Card.Title>
                            <Card.Text>
                                Boost your productivity with top-rated tools and apps designed to help you get more done.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Call-to-Action Section */}
            <Row id="download-section" className="text-center mt-5">
                <Col>
                    <h2>Get Started Now!</h2>
                    <p>Download the Playstore app and start exploring thousands of applications today.</p>
                    <Button variant="success" size="lg">
                        Download for Android <FaDownload />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
