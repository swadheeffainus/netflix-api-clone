import axios from "axios";
import { baseUrl } from "../constants/constants";

const instance = axios.create({
    baseUrl : 'https://api.themoviedb.org/3',
  });



  export default instance