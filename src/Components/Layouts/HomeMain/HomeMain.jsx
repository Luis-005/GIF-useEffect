import React, { useState, useEffect } from 'react';

const URL = 'https://api.giphy.com/v1/gifs'
const apiKey = 'B9E9suNuM2lt5XO1EBJFVhVm1WarJkYL'

export const HomeMain = ({ styles, search }) => {
  const [data, setData] = useState([]);

  useEffect(() =>{

    const contentApi = async() =>{

      let endpoint;
      
      if(search){
        endpoint =  `${URL}/search?api_key=${apiKey}&q=${search}`
      }else{      
        endpoint = `${URL}/trending?api_key=${apiKey}`
      }  

    const response = await fetch(endpoint);
    const resData = await response.json();
    setData(resData.data);
    }

    contentApi()

  },[search])

  return (
    <main className={styles}>
      {data.map((gif) =>
        <div key={gif.id} className='cardGif'>
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      )}
    </main>
  );
};
