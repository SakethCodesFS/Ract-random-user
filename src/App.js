import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching the random user:', error);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Header>
              <h2>Random User</h2>
            </Card.Header>
            <Card.Body>
              {user && (
                <div>
                  <Card.Img
                    variant="top"
                    src={user.picture.large}
                    alt="User Image"
                  />
                  <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {user.email}
                    <br />
                    <strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}
                  </Card.Text>
                </div>
              )}
              <Button variant="primary" onClick={fetchRandomUser}>
                Get Another Random User
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
