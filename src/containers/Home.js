import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState("heart");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=trump&apiKey=548f1408238c4a3d8013767237f2c84d`
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

  return (
    <div>
      <h1>Home</h1>
      {newsData.map((articles, i) => (
        <div key={i}>
          <h3>Article Title: </h3>
          <p>{articles.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
