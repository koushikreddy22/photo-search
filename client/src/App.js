import React, { useState } from 'react'
import axios from 'axios'
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/photos/?client_id=Hyw3O6ipt1PO84ktmJdXDXpviDxkmcfpcQNybmtORmE`)
            .then((response) => {
                console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>
            <div >
                <input type="text"  value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={changePhoto}>Get Photo</button>
            </div>

            <div >
                <div >
                    {result.map((value) => {
                        return (
                            <div>
                                    <img src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App