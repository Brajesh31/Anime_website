import React, { useState } from 'react';
import axios from 'axios';






const mnaga_fetch_url_base = "aviv2/manga/info/"
const manga_cover_url =  '/aviv2/manga/cover/'

function Mangadex() {
  const [inputvalue, setInputValue] = useState('')
  const [mangaList, setMangaList] = useState([])
  // async function fetchImage() {
  //   try {
  //     const response = await axios.get(url, { responseType: 'blob' });
  //     const imageObjectURL = URL.createObjectURL(response.data);
  //     document.getElementById('manga-image').src = imageObjectURL;
  //     console.log("fetching")
  //   } catch (error) {
  //     console.error('Error fetching the image', error);
  //   }
  // }

  async function fetch_manga(url, query) {
    let full = `${url}${query}`
    let resp = await axios.get(full)
    console.log(full)
    console.log(resp)
    setMangaList(resp.data.data)
    console.log(resp.data.data)
    console.log(resp.data.data[0].id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputvalue}`);
    await fetch_manga(mnaga_fetch_url_base, inputvalue)

  };

  async function manga_cover(url,id){
    let full = `${url}${id}`
    let resp = await axios.get(full)
    console.log(resp.data)
  }

  return (
    // <div className='flex flex-col gap-5'>
    //   <h1>This is MangaDex</h1>
    //   {/* <img id="manga-image" alt="Manga Cover" /> */}
    //   {/* <button onClick={fetchImage}>Fetch Jujutsu Kaisen Image</button> */}
    //   {/* <img src="https://express-img.vercel.app/manga/image" alt="image" /> */}
    //   <button onClick={()=>fetch_manga(mnaga_fetch_url_base,'naruto')} >fetch info </button>
    // </div>

    <>
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

      <div>
        Manga List
      </div>



    </>

  );
}

export default Mangadex;
