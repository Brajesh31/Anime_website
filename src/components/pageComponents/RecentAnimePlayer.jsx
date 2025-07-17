import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const recent_url_watch = "https://animeapi-xi.vercel.app/anime/gogoanime/watch/"
const anime_info_url = "https://animeapi-xi.vercel.app/anime/gogoanime/info/"

function RecentAnimePlayer() {
    const { title, id } = useParams()  // Combine destructuring
    const [videoSrc, setVideoSrc] = useState('')
    const [infoAnime, setInfoAnime] = useState('')
    const [engName, setEngName] = useState('')

    async function fetchStreamingLink(url, epid) {
        const fullUrl = `${url}${epid}`
        try {
            const response2 = await axios.get(fullUrl)
            // console.log(response2)
            const streamingLink = response2.data.sources[2].url // Adjust according to the API response
            setVideoSrc(streamingLink)
        } catch (error) {
            console.error("Error fetching streaming link:", error)
        }
    }

    async function fetchAnimeInfo(url, animeId) {
        const fullUrl_info = `${url}${animeId}`
        try {
            const res = await axios.get(fullUrl_info)
            console.log(res)
            // Here you could set more state for displaying the anime info if needed
            // setInfoAnime(res.data)
            // console.log(res.data.description)
            setInfoAnime(res.data.description)
            setEngName(res.data.otherName)

        } catch (error) {
            console.error("Error fetching anime info:", error)
        }
    }

    // useEffect for fetching anime details 
    useEffect(() => {
        if (id) {
            fetchAnimeInfo(anime_info_url, id)
        }
    }, [id])  // Include id as a dependency

    // useEffect for fetching streaming link 
    useEffect(() => {
        if (title) {
            fetchStreamingLink(recent_url_watch, title)
        }
    }, [title])  // Include title as a dependency

    return (
        <div className='flex flex-col m-2 p-2 justify-center gap-3 items-center'>
            <div className='font-bold uppercase  text-cyan-400 text-lg md:text-xl'>
                RECENT EPISODE OF {title}
            </div>
            <div className='font-bold   text-cyan-400 text-lg md:text-xl'>
                Other Names : {engName}
            </div>
            <div className="p-1 border border-cyan-400 rounded-md shadow-2xl w-full max-w-4xl">
                {videoSrc ? (
                    <ReactPlayer 
                        url={videoSrc} 
                        controls 
                        playing 
                        width='100%' 
                        height='auto'
                        className="border rounded-md"
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            

            <div className='bg-green-500 border rounded-lg p-2 font-medium'>
                <Link to='/anime'> Back To Anime List</Link>
                
            </div>
        </div>
    )
}

export default RecentAnimePlayer
