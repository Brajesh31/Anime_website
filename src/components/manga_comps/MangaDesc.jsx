import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const cover_url = "/aviv2/manga/cover/";
const img_url = '/avi2/manga/image/';

function MangaDesc() {
  let { manga_id } = useParams();
  const [fileName, setFileName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function fetch_cover(url, query) {
    let full = `${url}${query}`;
    const resp = await axios.get(full);
    console.log(resp.data.data);

    if (resp.data.data.length > 0) {
      const fetchedFileName = resp.data.data[0].attributes.fileName;
      setFileName(fetchedFileName);
    }
  }

  // async function fetch_cover_image(id, file) {
  //   if (file) {
  //     let full = `${img_url}${id}/${file}`;
  //     try {
  //       const resp = await axios.get(full);
  //       console.log(resp.data);
  //     } catch (error) {
  //       console.error("Failed to fetch cover image:", error);
  //     }
  //   }
  // }

  async function fetch_cover_image(id, file) {
    if (file) {
        let full = `${img_url}${id}/${file}`;
        try {
            const resp = await axios.get(full, {
                responseType: 'blob', // Ensure the image is received as a blob
            });
            const imageBlob = resp.data;
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImageUrl(imageObjectURL);
        } catch (error) {
            console.error("Failed to fetch cover image:", error);
        }
    }
}

  useEffect(() => {
    fetch_cover(cover_url, manga_id);
  }, [manga_id]);

  useEffect(() => {
    fetch_cover_image(manga_id, fileName);
  }, [fileName, manga_id]);

  return (
    <div>
      This is manga description {manga_id}
      and file name {fileName}
    </div>
  );
}

export default MangaDesc;
