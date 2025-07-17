import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MangaHome2() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const imageUrl = 'http://fmcdn.mangahere.com/store/manga/29763/cover.jpg?token=67876bcffaddc7657b19ad3b151e61a876b311d5&ttl=1724263200&v=1723854424';

    // Fetch the image with the required headers
    axios({
      method: 'get',
      url: imageUrl,
      responseType: 'blob',
      headers: {
        'Referer': 'http://www.mangahere.cc'
      }
    })
    .then(response => {
      // Create a URL for the image blob
      const imageObjectUrl = URL.createObjectURL(response.data);
      setImageSrc(imageObjectUrl);
    })
    .catch(error => {
      console.error('Error fetching the image:', error);
    });

    // Cleanup the object URL when the component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc]);

  return (
    <div>
      {imageSrc ? (
        <img 
          src={imageSrc} 
          alt="Manga Cover" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}

export default MangaHome2;
