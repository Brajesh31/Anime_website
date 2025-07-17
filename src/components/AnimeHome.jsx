import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "https://animeapi-xi.vercel.app/anime/gogoanime/";
const recent_url = "https://animeapi-xi.vercel.app/anime/gogoanime/recent-episodes"
const recent_url_watch = "https://animeapi-xi.vercel.app/anime/gogoanime/watch/"

// const url = "https://cors.consumet.stream/animeapi-gbxe8g2dp-arka-basaks-projects.vercel.app/anime/gogoanime/";
// const recent_url = "https://cors.consumet.stream/animeapi-gbxe8g2dp-arka-basaks-projects.vercel.app/anime/gogoanime/recent-episodes"
// const recent_url_watch = "https://animeapi-gbxe8g2dp-arka-basaks-projects.vercel.app/anime/gogoanime/watch/"

function AnimeHome() {
    const [inputValue, setInputValue] = useState('');
    const [titles, setTitles] = useState([]);
    const [recentTitle, setRecentTitles] = useState([])
    const [searched, setSearched] = useState(false)

    async function fetchStreamingLink(url,epid) {
        let x= url + epid
        const data = await axios.get(x)
        console.log(data)      
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Submitted value: ${inputValue}`);
        await fetchAnime(url, inputValue, setTitles);
        setSearched(true)
    };

    async function fetchRecentAnime(url) {
        try {
            const { data } = await axios.get(url);
            console.log(data);  // Log the entire data to check the structure
    
            if (data.results) {
                setRecentTitles(data.results);
            } else {
                console.error('Unexpected data structure:', data);
                setRecentTitles([]);  // Reset titles if the structure is not as expected
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }
    


    useEffect(() => {
      fetchRecentAnime(recent_url)
    //   setRecentTitles()
    }, [])
    

    async function fetchAnime(url, text, setTitles) {
        try {
            const { data } = await axios.get(url + text);
            console.log(data);  // Log the entire data to check the structure

            if (data.results) {
                setTitles(data.results);
            } else {
                console.error('Unexpected data structure:', data);
                setTitles([]);  // Reset titles if the structure is not as expected
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    }

    return (
        <>
            {/*  this is navbar */}
            <div className="relative w-full bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="flex grow justify-center w-full">
                        <input
                            className="flex h-10 w-full max-w-lg rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Search"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="hidden">Submit</button>
                    </form>
                </div>
            </div>
            {/* this is Search result */}
            <div className='flex justify-center'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {/* {titles.length > 0 ? (
                        titles.map((anime, index) => (
                            <div className='flex flex-col bg-white items-center justify-center p-4 rounded-md shadow-md' key={index}>
                                <Link to={`/anime/${encodeURIComponent(anime.id)}`}>
                                <img src={anime.image} width={200} alt="" />
                                <div>{anime.title}</div>
                                
                                </Link>
                            </div>
                        ))
                    ) : (

                        
                        <p className=' rounded-lg p-2 shadow-md'> <span className='text-red-400 font-bold'>Your Search</span> <span className='text-blue-400 font-bold'>Result Will appear Here</span> </p>
                        
                    )}  */}
                    {
                        searched ? (
                            titles.length > 0 ? (
                                titles.map((anime, index)=> (
                                    <div className='flex flex-col bg-white items-center justify-center p-4 rounded-md shadow-md' key={index}>
                                    <Link to={`/anime/${encodeURIComponent(anime.id)}`}>
                                    <img src={anime.image} width={200} alt="" />
                                    <div>{anime.title}</div>
                                    
                                    </Link>
                                    </div>
                                ))
                            ):(
                                <div className=' p-2 text-purple-400  m-1 text-xl font-medium '>CHECK SPELLING....... T_T</div>
                            )
                        ):(
                            <p className=' rounded-lg p-2 shadow-md'> <span className='text-red-400 font-bold'>Your Search</span> <span className='text-blue-400 font-bold'>Result Will appear Here</span> </p>
                        )
                    }
                </div>
            </div>

            <div>

            </div>

            {/* this is for recent episodes */}

            <div className='flex items-center justify-center flex-col gap-4 p-2 m-2 '>
                <h1 className='font-medium text-1xl bg-indigo-500 w-1/4 text-center rounded-2xl border p-3 shadow-2xl' >RECENT ANIME EPISODES </h1>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {recentTitle.length > 0 ? (
                        recentTitle.map((ranime,index)=>(
                            
                            <div className='flex flex-col bg-white items-center justify-center gap-2 p-4 rounded-md shadow-md' key={index}>
                            {/* Replace with actual link and image when data is verified */}
                                <Link to = {`recent/watch/${encodeURIComponent(ranime.id)}/${encodeURIComponent(ranime.episodeId)}`}>
                                    <img src={ranime.image} width={200} alt="" />
                                    <div>{ranime.title} EP : {ranime.episodeNumber}</div>
                                
                                </Link>

                                {/* <button 
                                onClick={()=>fetchStreamingLink(recent_url_watch,ranime.episodeId)}
                                className='border rounded-xl p-3 bg-cyan-500'>Watch Now</button> */}
                            </div>

                        ))
                    ):(
                        <div>rendered</div>
                    )}
                </div>
            </div>

            <div className='h-[40rem] m-2 bg-indigo-500'>
                top airing anime............
            </div>
        </>
    );
}

export default AnimeHome;
