import React from 'react';
import { Card } from 'react-bootstrap';

const StatsCard = ({ title, value, bgColor = "primary", textColor = "light" }) => (
  <Card className={`my-3 shadow-lg rounded border-${bgColor} bg-${bgColor} text-${textColor} hover-shadow`}>
    <Card.Body>
      <Card.Title className="h5">{title}</Card.Title>
      <Card.Text className="display-4">{value}</Card.Text>
    </Card.Body>
  </Card>
);

export default StatsCard;
