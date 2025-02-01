import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save updated details (you can integrate with a backend if required)
  };

  return (
    <Card className="my-3 shadow-lg rounded">
      <Card.Body>
        <div className="d-flex align-items-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="User Avatar" 
            className="rounded-circle" 
            style={{ width: 90, height: 90, marginRight: 20 }}
          />
          <div>
            {isEditing ? (
              <Form.Control 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="mb-2 border-dark"
                placeholder="Enter your name"
              />
            ) : (
              <Card.Title className="text-dark fs-4">{name}</Card.Title>
            )}
            {isEditing ? (
              <Form.Control 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="mb-2 border-dark"
                placeholder="Enter your email"
              />
            ) : (
              <Card.Text className="text-muted">{email}</Card.Text>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          {isEditing ? (
            <Button 
              variant="success" 
              onClick={handleSave} 
              className="px-4"
            >
              Save Changes
            </Button>
          ) : (
            <Button 
              variant="outline-warning" 
              onClick={handleEdit} 
              className="px-4"
            >
              Edit Profile
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
