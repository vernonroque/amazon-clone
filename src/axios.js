import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-bfd8a/us-central1/api' //The API (cloud function) URL
});
                //http://127.0.0.1:5001/clone-bfd8a/us-central1/api ; local hosting api

                //'https://us-central1-clone-bfd8a.cloudfunctions.net/api'

export default instance;


