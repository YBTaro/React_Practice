import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../component/contexts/AuthContext'

function ForgetPassword() {
    const emailRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const { resetPassword } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError('')
            setMessage('')
            await resetPassword(emailRef.current.value)
            setMessage('Go to check your mailbox!')
        } catch {
            setError('Failed to login an account')
        }

        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Reset Password</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Button disable={loading.toString()} className="w-100" type="submit">Send reset Email</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <Link to="/SignUpPage">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgetPassword
