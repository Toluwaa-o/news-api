const axios = require("axios");

const getNews = async (req, res) => {
  const { q } = req.query;

  const limit = 10;
  const page = req.query.page || 1;
  const skip = (+page - 1) * limit;

  const url = q
    ? `https://newsapi.org/v2/everything?apiKey=${process.env.API_KEY}&q=${q}`
    : `https://newsapi.org/v2/everything?apiKey=${process.env.API_KEY}&q=a`;

  const news = await axios.get(url);
  const result = news.data.articles.splice(+page - 1, 10);

  return res.json(result);
};

const getCountryHeadlines = async (req, res) => {
  const { country } = req.query;

  const limit = 10;
  const page = req.query.page || 1;
  const skip = (+page - 1) * limit;

  const url = country
    ? `https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&country=${country}`
    : `https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&country=country`;

  const news = await fetch(url);

  const result = news.data.articles.splice(+page - 1, 10);

  return res.json({ news: news.data, result });
};

module.exports = { getNews, getCountryHeadlines };
