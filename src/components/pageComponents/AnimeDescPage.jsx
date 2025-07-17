import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const anime_info_url = "https://animeapi-xi.vercel.app/anime/gogoanime/info/"

function AnimeDescPage() {
  const { title } = useParams()
  const [imageAnime, setImageAnime] = useState('')
  const [descAnime, setDescAnime] = useState('')
  const [episodes, setEpisodes] = useState([])

  async function fetchAnimeInfo(url, animeId) {
    const fullUrl_info = `${url}${animeId}`
    try {
      const res = await axios.get(fullUrl_info)
      setImageAnime(res.data.image)
      setDescAnime(res.data.description)
      setEpisodes(res.data.episodes)
    } catch (error) {
      console.error("Error fetching anime info:", error)
    }
  }

  useEffect(() => {
    fetchAnimeInfo(anime_info_url, title)
  }, [title])

  // Function to group episodes into smaller chunks
  const groupEpisodes = (episodes, groupSize) => {
    const grouped = []
    for (let i = 0; i < episodes.length; i += groupSize) {
      grouped.push(episodes.slice(i, i + groupSize))
    }
    return grouped
  }

  // Group episodes into chunks of 10
  const groupedEpisodes = groupEpisodes(episodes, 10)

  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <img 
          src={imageAnime} 
          alt={title} 
          className="rounded-lg shadow-lg w-full object-cover" 
        />
      </div>
      <div className="w-full max-w-2xl text-center px-4">
        <div className='flex flex-start underline text-2xl font-bold' >About:</div>
        <p className="text-gray-700  text-sm md:text-base lg:text-lg">
          {descAnime}
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-500 mb-4">
          Episodes
        </h2>
        {groupedEpisodes.map((group, index) => (
          <details key={index} className="mb-4">
            <summary className="cursor-pointer font-medium text-gray-800 bg-gray-100 p-3 rounded-md shadow-md">
              Episodes {group[0].number} - {group[group.length - 1].number}
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {group.map((episode, index) => (
                <Link
                  key={index}
                  to={`/anime/watch/${episode.id}`}
                  className="p-3 md:p-4 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-gray-900 font-semibold text-sm md:text-base">
                    {`Episode ${episode.number}`}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">
                    {episode.title}
                  </div>
                </Link>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export default AnimeDescPage
