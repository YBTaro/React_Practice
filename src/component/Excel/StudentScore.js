import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase'

function StudentScore() {

    const [datas, setDatas] = useState([])
    const [selector, setSelector] = useState('English')
    const [order, setOrder] = useState('asc')
    const [testName, setTestName] = useState('')
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const unsubscribe = firestore.collection('students_test_score').doc(`${selector}`).collection(`${selector}`).orderBy('score', `${order}`).onSnapshot((res) => {
            setDatas(res.docs.map(data => ({ id: data.id, ...data.data() })))
        })
        return unsubscribe
    }, [order, selector])

    useEffect(() => {
        filterHandler()
    }, [testName, datas])

    const filterHandler = () => {
        if (testName == "") {
            setFilter(datas)
        }
        else { setFilter(datas.filter((data) => data.testName === testName)) }
    }


    const filterChange = (e) => {
        setTestName(e.target.value)
    }

    return (
        <div>
            <select value={selector} onChange={(e) => { setSelector(e.target.value) }}>
                <option value="English">English</option>
                <option value="Math">Math</option>
                <option value="Physics">Physics</option>
            </select>
            <select value={order} onChange={(e) => { setOrder(e.target.value) }}>
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            Test Name:<input value={testName} onChange={filterChange} />

            <table>
                <thead>
                    <tr>
                        <th>Test Name</th>
                        <th>Studnent Name</th>
                        <th>Score</th>
                    </tr>
                </thead>


                <tbody>
                    {filter.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.testName}</td>
                                <td>{data.name}</td>
                                <td>{data.score}</td>
                            </tr>
                        )
                    })}

                </tbody>


            </table>
        </div>
    )
}

export default StudentScore
