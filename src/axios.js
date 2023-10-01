import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-bfd8a.cloudfunctions.net/api' //The API (cloud function) URL
});

//https://us-central1-clone-bfd8a.cloudfunctions.net/api
//http://127.0.0.1:5001/clone-bfd8a/us-central1/api    <<<<<< Use this for debugging purposes
export default instance;