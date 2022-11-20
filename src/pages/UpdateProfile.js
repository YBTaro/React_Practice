import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../component/contexts/AuthContext'

function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()


        setLoading(true)
        setError('')

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError('Fail to update account')
            })
            .finally(() => {
                setLoading(false)
            })


    }
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control defaultValue={currentUser.email} type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirm" className="mb-4">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disable={loading.toString()} className="w-100" type="submit">Update Profile</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default UpdateProfile
