
import { useState } from 'react'
import './App.css'
import AnimeBtn from './components/AnimeBtn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import AnimeHome from './components/AnimeHome'
import LightNHome from './components/LightNHome'
import AnimeDescPage from './components/pageComponents/AnimeDescPage'
import RecentAnimePlayer from './components/pageComponents/RecentAnimePlayer'
import AnimePlayer from './components/pageComponents/AnimePlayer'
import MangaHome from './components/manga_comps/MangaHome'
import MangaHome2 from './components/manga_comps/MangaHome2'
import Mangadex22 from './components/manga_comps/Mangadex22'
import MangaDesc from './components/manga_comps/MangaDesc'



function App() {

  const [anime, setAnime] = useState('')
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/anime",
      element:<AnimeHome/>
    },
    {
      path:"/ln",
      element:<LightNHome/>
    },
    {
      path:"/manga",
      element: <Mangadex22/>
    },
    {
      path: "/manga/desc/:manga_id",
      element: <MangaDesc/>
    },
    {
      path:"/anime/:title",
      element: <AnimeDescPage/>
    },
    {
      path:"anime/recent/watch/:id/:title",
      element: <RecentAnimePlayer/>
    },
    {
      path:"anime/watch/:title",
      element: <AnimePlayer/>
    }

  ])

  return (
    <>
        <RouterProvider router={routers}/>
    </>
  )
}

export default App
