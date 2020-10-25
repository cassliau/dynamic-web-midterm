import React, { useState, useEffect } from "react";
import axios from "axios";

// const NEWSAPI = process.env.REACT_APP_NEWS_API_KEY;
// console.log(`api key`, NEWSAPI);

function Home() {
  const [category, setCategory] = useState("bitcoin");
  const [newsData, setNewsData] = useState([]);
  const [memeData, setMeme] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=548f1408238c4a3d8013767237f2c84d`
      )
      .then(function (response) {
        const articleDataResponse = response.data.articles;
        setNewsData(articleDataResponse);
        console.log(`article data response`, articleDataResponse);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.imgflip.com/get_memes`)
      .then(function (response) {
        const memeDataResponse = response.data.data.memes;
        setMeme(memeDataResponse);
        console.log("meme data response", memeDataResponse);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {newsData.map((articles, i) => (
        <div key={i}>
          <h3>Article Title: </h3>
          <p>{articles.title}</p>
        </div>
      ))}
      {memeData.map((memes, i) => (
        <div key={i}>
          <h3>Meme: </h3>
          <img src={memes.url} alt=""></img>
        </div>
      ))}
    </div>
  );
}

export default Home;
