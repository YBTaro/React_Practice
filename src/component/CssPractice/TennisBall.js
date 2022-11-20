import React from 'react'
import "./TennisBall.css"
function TennisBall() {
    return (
        <div className="ballcontainer">
            <div className="outer">
                <div className="inner">
                    Digital Piano
                </div>
                <div className="line a"></div>
                <div className="line b"></div>
                <div className="line c"></div>
            </div>
            <div className="outcircle up">
                <div className="innercircle one"></div>
            </div>
            <div className="outcircle down">
                <div className="innercircle two"></div>
            </div>
        </div>
    )
}

export default TennisBall
