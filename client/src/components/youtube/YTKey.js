import axios from 'axios'

const KEY = 'AIzaSyC2gFpH8Bn5psllvUrEtVSd7mtcBO7Fd74'

export default axios.create({
  baseURL: 'http://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    responseType: "json",
    maxResults: 5,
    key: KEY,
  }
})