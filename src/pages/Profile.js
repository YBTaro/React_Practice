import { Button, Card, Alert, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import { useAuth } from '../component/contexts/AuthContext'
import { Link, Redirect, useHistory } from 'react-router-dom'

function Profile() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()


    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            history.push("/")
        } catch {
            setError('Fail to log out')
        }


    }
    return (
        <>
            {currentUser
                ?
                <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <strong>Email:</strong>{currentUser.email}
                                <Link to="/UpdateProfile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                            </Card.Body>


                        </Card>
                        <div className="w-100 text-center mt-2">
                            <Button variant="link" onClick={handleLogout}>Log Out</Button>
                        </div>
                    </div>
                </Container>
                : <Redirect to='/LoginPage' />
            }
        </>
    )
}

export default Profile
