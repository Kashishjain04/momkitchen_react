import axios from "axios";

const baseURL = "https://api.spoonacular.com";

export default axios.create({
  baseURL,
  params: { apiKey: process.env.REACT_APP_SPOONACULAR_KEY },
});
