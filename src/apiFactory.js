import axios from 'axios';

export const api = axios.create({
  baseURL: "http://api.broccoliapp.io:8080/broccoliapi"
})

