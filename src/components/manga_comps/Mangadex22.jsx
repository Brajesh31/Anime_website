import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
const info_url = "/aviv2/manga/info/"



function Mangadex22() {

  const [inputvalue, setInputValue] = useState('')
  const [mangaList, setMangaList] = useState([])
  const [mangaCover,setMangaCover] = useState([])

  async function fetch_info(url,query) {
    let full = `${url}${query}`
    const resp = await axios.get(full)
    console.log(resp.data)
    setMangaList(resp.data.data)
  }

  async function fetch_info_cover(url,query) {
    let full = `${url}${query}`
    const resp = await axios.get(full)
    console.log(resp.data)
    return 
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputvalue}`);
    await fetch_info(info_url, inputvalue)

  };

  useEffect( () => {
    mangaList.map(async (manga,index)=>{
    await fetch_cover(url,manga.id)
    })  
  
  }, [mangaList])
  

  return (
    <>
    <div>
      this is manga dex
      <button onClick={()=>fetch_info(info_url, inputvalue)} >clickkk</button>
    </div>
    <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex grow justify-center w-full">
            <input
              className="flex h-10 w-full max-w-lg rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search"
              value={inputvalue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>
      </div>

      {
        mangaList.map((manga,index)=>(
          <Link to={`desc/${manga.id}`}>

          <h1 key={index}>{manga.attributes.title.en}</h1>
          
          </Link>
        ))
      }

    </>
  )
}

export default Mangadex22
