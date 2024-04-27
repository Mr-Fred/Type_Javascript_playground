import dotenv from 'dotenv';
dotenv.config();

const api_key=process.env['api_key']

const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

const movieGrid = document.getElementById("section");
const searchForm = document.getElementById("form");
const searchInput = document.getElementById("query");

