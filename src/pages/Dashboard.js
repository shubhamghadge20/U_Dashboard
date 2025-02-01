import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import StatsCard from '../components/StatsCard';
import ChartComponent from '../components/ChartComponent';
import ActivityLog from '../components/ActivityLog';
import ProfileCard from '../components/ProfileCard'; // Import the ProfileCard component

const Dashboard = () => (
  <Container className="my-4">
    <h2 className="text-center mb-4 text-primary">Dashboard</h2>

    {/* User Profile Section */}
    <Row className="mb-4">
      <Col md={4} sm={12}>
        <ProfileCard /> {/* Display the profile card */}
      </Col>
    </Row>

    {/* User Statistics Cards */}
    <Row className="mb-4">
      <Col md={4} sm={12}>
        <StatsCard title="Total Orders" value="15" bgColor="info" textColor="light" />
      </Col>
      <Col md={4} sm={12}>
        <StatsCard title="Recent Activity" value="5 Activities" bgColor="success" textColor="light" />
      </Col>
      <Col md={4} sm={12}>
        <StatsCard title="Saved Items" value="8 Items" bgColor="warning" textColor="dark" />
      </Col>
    </Row>

    {/* Chart Section */}
    <Row className="mb-4">
      <Col>
        <Card className="shadow-sm rounded border-info">
          <Card.Body>
            <h5 className="card-title text-info">User Engagement Chart</h5>
            <ChartComponent />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    {/* Activity Log Section */}
    <Row>
      <Col>
        <Card className="shadow-sm rounded border-success">
          <Card.Body>
            <h5 className="card-title text-success">Activity Log</h5>
            <ActivityLog />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
