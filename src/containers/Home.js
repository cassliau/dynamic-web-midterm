import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import shuffle from "shuffle-array";

const NEWSAPI = process.env.REACT_APP_NEWS_API_KEY;

function Home() {
  const [category, setCategory] = useState("top-headlines");
  const [newsData, setNewsData] = useState([]);
  const [memeData, setMeme] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${category}&apiKey=${NEWSAPI}`)
      .then(function (response) {
        const articleDataResponse = response.data.articles;
        setNewsData(articleDataResponse);
        // console.log(`article data response`, articleDataResponse);
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
        // console.log("meme data response", memeDataResponse);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, []);

  const articles = useMemo(() => {
    let articles = [];
    let memes = [];

    newsData.forEach((article) => {
      articles.push({
        title: article.title,
        description: article.description,
        url: article.url,
        meme: memeData.pop().url,
      });
    });

    shuffle(memeData);
    // console.log(`shuffle`, memeData);

    return (
      <div>
        <div className="categoryTitle">
          <br />
          <h1 className="horizontalLine2">
            <span>you are viewing the category: </span>
            {category}
          </h1>
        </div>
        <div className="articles">
          {articles.map((item) => (
            <div>
              <h3 className="articleTitle">{item.title}</h3>
              <div className="description">
                {item.description} <a href={item.url}> read more</a>
              </div>
              <br />
              <div className="meme img">
                <img src={item.meme} />
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    );
  });
  return articles;
}

export default Home;
