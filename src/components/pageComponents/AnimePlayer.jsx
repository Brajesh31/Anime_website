import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player'

const url_watch = "https://animeapi-xi.vercel.app/anime/gogoanime/watch/"

function AnimePlayer() {
    const { title } = useParams()
    const [videoSrc, setVideoSrc] = useState('')

    async function fetchStreamingLink(url, epid) {
        const fullUrl = `${url}${epid}`
        try {
            const response2 = await axios.get(fullUrl)
            const streamingLink = response2.data.sources[2].url // Adjust according to the API response
            setVideoSrc(streamingLink)
            console.log(streamingLink)
        } catch (error) {
            console.error("Error fetching streaming link:", error)
        }
    }

    useEffect(() => {
        if (title) {
            fetchStreamingLink(url_watch, title)
        }
    }, [title])

    return (
        <div className="flex flex-col items-center p-4 md:p-8">
            <div className="text-center font-bold text-cyan-500 text-lg md:text-xl mb-4">
                Watching: <span className='uppercase text-emerald-400'>{title}</span>
            </div>
            <div className="relative w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-2">
                {videoSrc ? (
                    <ReactPlayer 
                        url={videoSrc} 
                        controls 
                        playing 
                        width='100%' 
                        height='auto'
                        className="rounded-md border border-cyan-300 shadow-lg"
                    />
                ) : (
                    <p className="text-gray-500 text-center">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default AnimePlayer
