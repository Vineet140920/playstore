import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaUsers, FaHandsHelping } from 'react-icons/fa';
import './About.css';

// Importing the image from the assets folder
import ProfileImage from '../assets/vineet1.jpg'; // Replace with your image filename

const About = () => {
    return (
        <Container className="about-us-page mt-4">
            {/* Introduction Section */}
            <Row className="mission-section text-center mb-5">
                <Col md={4}>
                    <FaBullseye size={50} className="mission-icon" />
                    <h3>My Mission</h3>
                    <p>To create impactful digital solutions that enhance user experiences and solve real-world problems.</p>
                </Col>
                <Col md={4}>
                    <FaUsers size={50} className="mission-icon" />
                    <h3>My Vision</h3>
                    <p>To innovate and develop applications that are accessible, user-friendly, and efficient.</p>
                </Col>
                <Col md={4}>
                    <FaHandsHelping size={50} className="mission-icon" />
                    <h3>My Values</h3>
                    <p>Integrity, continuous learning, and commitment to quality in every project I undertake.</p>
                </Col>
            </Row>

            {/* Profile Section */}
            <Row className="profile-section mb-5 align-items-center">
                <Col md={6} className="text-center">
                    <img src={ProfileImage} alt="Profile" className="profile-image" />
                </Col>
                <Col md={6}>
                    <h2>Vineet Pachouri</h2> {/* Replace with your name */}
                    <h4>Software Developer & Founder</h4>
                    <p>
                        I am a passionate software developer with a love for creating innovative and user-centric applications.
                        My journey in technology started from a curiosity to understand how things work and has grown into a career
                        dedicated to building impactful digital solutions. I believe in continuous learning, integrity, and a commitment
                        to quality in every project I undertake.
                    </p>
                </Col>
            </Row>

          
          
          
        </Container>
    );
};

export default About;
