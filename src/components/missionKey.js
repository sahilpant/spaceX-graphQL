import React from 'react'

const missionKey = () => {
    return (
        <div>
            <h2 style = {{margin: "auto",textAlign:"center", fontFamily:"cursive", color:"tomato",marginBottom:"30px"}}>Launches</h2>
            <div className="my-3">
                <p>
                    <span className="px-3 mr-2 bg-success"/> = Success
                </p>
                <p>
                    <span className="px-3 mr-2 bg-danger"/> = Fail
                </p>
            </div>
        </div>
    )
}

export default missionKey
