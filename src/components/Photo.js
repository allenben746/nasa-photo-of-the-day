import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photo = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
        .get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
        )
            .then(fetch => {
                console.log(fetch.data)
                setData(`${fetch.data.hdurl}`)
                console.log("Data fetched successfully.")
            }
            )
            .catch(() =>
            console.log('Error in fetching server data.'))
            }, [])

    return (
      <div className="photo">
        <img src={data} alt="Photo of the Day."></img>
      </div>
    );

    
  };

export default Photo;