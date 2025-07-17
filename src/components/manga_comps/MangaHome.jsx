import React, { useState } from 'react';
import axios from 'axios';
import { Manga, Search } from 'novel-cool';

const manga_url = 'https://animeapi-xi.vercel.app/manga/mangahere/';
const manga_info_url = 'https://animeapi-xi.vercel.app/manga/mangahere/info?id=';
const manga_info_url_chap = "https://animeapi-xi.vercel.app/manga/mangahere/read?chapterId=";

function MangaHome() {
  const [manga_val, setManga_val] = useState('');
  const [manga_res_arr, setManga_res_arr] = useState([]);
  const [searched, setSearched] = useState(false);
  const [img_url, setImgUrl] = useState('');



  async function fetch_manga(url, query) {
    let full_url = `${url}${query}`;
    const res = await axios.get(full_url);
    console.log('Manga search results:', res.data.results);
    setManga_res_arr(res.data.results);
  }

  async function fetch_manga(url, query) {
    let full_url = `${url}${query}`;
    const res = await axios.get(full_url);
    console.log('Manga search results:', res.data.results);
    setManga_res_arr(res.data.results);
  }
  

  async function novel_cool(quesry) {
    const res = await Search({
      lang: "es",
      id: quesry
    })
    console.log(res)
  }
  async function fetch_info(url, id) {
    let full = `${url}${id}`;
    const res = await axios.get(full);
    console.log('Manga info:', res.data);
  }

  async function fetch_info_chap(url, id) {
    let full = `${url}${id}`;
    const options = {
      headers: {
        'Referer': 'http://www.mangahere.cc',
      },
    };

    try {
      console.log('Fetching chapter image:', full);
      const res = await fetch(full, options);
      console.log('Fetch response:', res);
  
      if (res.ok) {
        const blob = await res.blob();
        console.log('Blob type:', blob.type);
  
        if (blob.type.startsWith('image/')) {
          const imageObjectUrl = URL.createObjectURL(blob);
          setImgUrl(imageObjectUrl);
          console.log('Image URL set:', imageObjectUrl);
        } else {
          console.error('The fetched content is not an image.');
          const text = await blob.text();
          console.log('Blob content:', text);
        }
      } else {
        console.error('Failed to fetch the image:', res.statusText);
      }
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearched(true);
    alert(`Entered values: ${manga_val}`);
    fetch_manga(manga_url, manga_val);
  };

  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex grow justify-center w-full">
            <input
              className="flex h-10 w-full max-w-lg rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search"
              value={manga_val}
              onChange={(e) => setManga_val(e.target.value)}
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>
      </div>

      <div>
        {searched ? (
          manga_res_arr.length > 0 ? (
            manga_res_arr.map((manga, index) => (
              <div key={index}>
                {manga.title}
              </div>
            ))
          ) : (
            <div>Check spelling...</div>
          )
        ) : (
          <div>Search your favorite manga and begin reading :)</div>
        )}
      </div>

      <div>
        <button onClick={() => fetch_info(manga_info_url, "jujutsu_kaisen")} className='bg-green-900'>Fetch Info</button>
      </div>

      <div>
        <button onClick={() => fetch_info_chap(manga_info_url_chap, "jujutsu_kaisen/c266")} className='bg-green-900'>Fetch Chapter Image</button>
      </div>

      {/* Display the fetched image */}
      {img_url && (
        <div>
          <img src={img_url} alt="Manga Cover" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
      )}

      <div><img src="http://www.mangahere.cc/manga/jujutsu_kaisen/c266/1.html" alt="noo.." /></div>
      <div>
        <button onClick={()=>novel_cool('jujutsu kaisen')}>novel cool</button>
      </div>
    </>
  );
}

export default MangaHome;
