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

  const { articles } = useMemo(() => {
    let articles = [];
    newsData.forEach((article) => {
      articles.push({
        title: article.title,
        description: article.description,
        source: article.source,
      });
    });
    return articles;
  });

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

  const { memes } = useMemo(() => {
    let memes = [];
    memeData.forEach((meme) => {
      memes.push({
        url: meme.url,
      });
    });
    return memes;
  });

  return <h1>HOME</h1>;
}

export default Home;
