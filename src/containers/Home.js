import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

// const NEWSAPI = process.env.REACT_APP_NEWS_API_KEY;
// console.log(`api key`, NEWSAPI);

function Home() {
  const [category, setCategory] = useState();
  const [newsData, setNewsData] = useState([]);
  const [memeData, setMeme] = useState([]);
  const history = useHistory();

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
  }, [category]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const category = urlParams.get("category");
    if (category) {
      setCategory(category);
    }
  }, [history]);

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

  const { articles } = useMemo(() => {
    let articles = [];
    let memes = [];
    newsData.forEach((article) => {
      articles.push({
        title: article.title,
        description: article.description,
        source: article.source,
      });
    });
    memeData.forEach((meme) => {
      memes.push({
        url: meme.url,
      });
    });

    return (
      <div>
        <h3>Home</h3>
        <div>
          {articles.map((item) => (
            <div>
              <h3>item.title</h3>
              <div>item.description</div>
              <a href={item.source}>CLICK HERE</a>
            </div>
          ))}
        </div>
        <div>
          {memes.map((item) => (
            <div>item.url</div>
          ))}
        </div>
      </div>
    );
  });
}

export default Home;
