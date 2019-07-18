import axios from 'axios'

const KEY = ''

export default axios.create({
  baseURL: 'http://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    responseType: "json",
    maxResults: 5,
    key: KEY,
  }
})