import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photo = () => {

    const [data, setData] = useState([]);
    const [copyrightData, setCopyrightData] = useState([]);
    const [copyrightDataLink, setCopyrightDataLink] = useState([]);
    const [dateData, setDateData] = useState([]);
    const [titleData, setTitleData] = useState([]);

    useEffect(() => {
        axios
        .get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15"
        )
            .then(fetch => {
                console.log(fetch.data)
                setData(`${fetch.data.hdurl}`)
                setCopyrightData(`${fetch.data.copyright}`)
                setCopyrightDataLink(`https://www.google.com/search?q=${fetch.data.copyright}`)
                setDateData(`${fetch.data.date}`)
                setTitleData(`${fetch.data.title}`)
                console.log("Data fetched successfully.")
            }
            )
            .catch(() =>
            console.log('Error in fetching server data.'))
            }, [])

    return (
      <div >
        <div className="creditContainer">
          <div className="credits">
            <p>|</p>
            <p><a href={copyrightDataLink}>{copyrightData}</a></p>
            <p>|</p>
            <p>{dateData}</p>
            <p>|</p>
            <p>{titleData}</p>
            <p>|</p>
          </div>
        </div>
        <img className="photo" src={data} alt="Photo of the Day."></img>
      </div>
    );

    
  };

export default Photo;