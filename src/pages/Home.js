import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Home.css'


toast.configure()

// const NewProductsToast = ({ toastClose }) => {
//     return (
//             <div>
//                 See new Digital Pianos <Link to="/DigitalPiano">here</Link>
//             </div>    
//     )
// }


function Home() {

    const [jokes, setJokes] = useState([])
    const [loading, setLoading] = useState(false)
    const [isToast, setIsToast] = useState(true)

    useEffect(() => {
        // toast.success(
        //     <NewProductsToast />,
        //     {
        //         position: toast.POSITION.BOTTOM_RIGHT,
        //         autoClose: 5000,
        //     }
        // )

        setLoading(true)
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
            .then(res => {
                const data = res.data
                setJokes(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    const closeToast = () => {
        setIsToast(false)
    }


    return (
        <div>
            <h1>Home</h1>
            <div>Some jokes for you</div>
            {loading ? "Wait for it !" :
                <table>
                    <thead>
                        <tr>
                            <th>type</th>
                            <th>setup</th>
                            <th>punchline</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            jokes.map((joke => (
                                <tr key={joke.id}>
                                    <td>{joke.type}</td>
                                    <td>{joke.setup}</td>
                                    <td>{joke.punchline}</td>
                                </tr>
                            )))
                        }
                    </tbody>

                </table>
            }

            {isToast &&
                <div className="toast">
                    See new Digital Pianos <Link to="/DigitalPiano">here</Link>
                    <button className="close-toast" onClick={closeToast}>X</button>
                </div>
            }


        </div>
    )
}

export default Home
