import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const ActivityLog = () => {
  const [filter, setFilter] = useState('all');
  const activities = [
    { id: 1, date: '2025-01-29', text: 'Order #1234 placed' },
    { id: 2, date: '2025-01-15', text: 'Profile updated' },
    { id: 3, date: '2025-01-10', text: 'Password changed' },
    { id: 4, date: '2025-01-05', text: 'Item added to wishlist' },
    { id: 5, date: '2025-01-01', text: 'Account created' },
  ];

  const filteredActivities = activities.filter((activity) => {
    const activityDate = new Date(activity.date);
    const today = new Date();
    let daysDiff = Math.floor((today - activityDate) / (1000 * 60 * 60 * 24));

    if (filter === '7days' && daysDiff <= 7) return true;
    if (filter === '30days' && daysDiff <= 30) return true;
    if (filter === 'all') return true;
    return false;
  });

  return (
    <Card className="my-3 shadow-lg rounded border-primary">
      <Card.Header className="d-flex justify-content-between align-items-center bg-info text-white">
        <h5>Recent Activity</h5>
        <div>
          <Button variant="outline-light" className="me-2" onClick={() => setFilter('all')}>All</Button>
          <Button variant="outline-success" className="me-2" onClick={() => setFilter('7days')}>Last 7 Days</Button>
          <Button variant="outline-warning" onClick={() => setFilter('30days')}>Last 30 Days</Button>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        {filteredActivities.map((activity) => (
          <ListGroup.Item 
            key={activity.id} 
            className="d-flex justify-content-between align-items-center p-3 border-0 hover-shadow"
            style={{ cursor: 'pointer', transition: 'all 0.3s' }}
          >
            <span>{activity.text}</span>
            <span className="text-muted">{new Date(activity.date).toLocaleDateString()}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ActivityLog;
