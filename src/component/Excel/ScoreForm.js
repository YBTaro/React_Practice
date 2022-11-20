import { Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import { firestore } from '../../firebase'

function ScoreForm() {
    const [subject, setSubject] = useState('English')
    const [testName, setTestName] = useState('')
    const [name, setName] = useState('')
    const [score, setScore] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')



        const data = {
            name,
            subject,
            testName,
            score: parseInt(score)
        }

        try {
            await firestore.collection('students_test_score').doc(`${subject}`).collection(`${subject}`).add(data)

            setName('')
            setScore('')

        } catch {
            setError('Fail to add test score')
        }

    }


    return (
        <div>
            <h2>Add Score</h2>
            <form onSubmit={handleSubmit}>
                <label>Subject:</label>
                <select name="subject" required value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Math">Math</option>
                    <option value="Physics">Physics</option>
                </select><br />
                Test Name:<input name="testName" type="text" required value={testName} onChange={(e) => setTestName(e.target.value)} /><br />
                Name:<input name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} /><br />
                Score:<input name="score" type="text" required value={score} onChange={(e) => setScore(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
            {error && <Alert variant="danger">{error}</Alert>}
        </div>
    )
}

export default ScoreForm
