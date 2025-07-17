import React, { useState } from 'react';
import axios from 'axios';

const url = "https://animeapi-xi.vercel.app/anime/gogoanime/";

async function handleFetch(url, text, setTitle) {
    try {
        const { data } = await axios.get(url + text);
        console.log(data);  // Log the entire data to check the structure
        
        if (data.results) {
            setTitle(data.results);
        } else {
            console.error('Unexpected data structure:', data);
            setTitle([]);  // Reset title if the structure is not as expected
        }
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

function AnimeBtn({ name }) {
    const [title, setTitle] = useState([]);

    return (
        <div>
            <button onClick={() => handleFetch(url, name, setTitle)}>Click me</button>
            <div>
                {title.length > 0 ? (
                    title.map((anime, index) => (
                        <div key={index}>
                            {title[index].title}
                            <img src= {title[index].image} alt="" />
                            <a href= {title[index].url}>watch {title[index].id}</a> {/* Replace this with actual data from `anime` */}
                        </div>
                    ))
                ) : (
                    <p>No data available</p>  // Show this if no data is available
                )}
            </div>
        </div>
    );
}

export default AnimeBtn;
