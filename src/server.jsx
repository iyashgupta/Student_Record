import axios from 'axios'; // Make sure 'axios' is imported correctly

const baseUrl = process.env.REACT_APP_SERVER_URL;

// Function to return headers (e.g., for authorization)
const getHeader = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    };
  };

// Function to perform GET request
const _get = (endpoint) => {
  return axios.get(`${baseUrl}${endpoint}`, getHeader())
    .then((res) => res.data)
    .catch((error) => {
      console.error("GET Request Error:", error);
      throw error;
    });
};

// Function to perform POST request
const _post = (endpoint, data) => {
  return axios.post(`${baseUrl}${endpoint}`, data, getHeader())
    .then((res) => res.data)
    .catch((error) => {
      console.error("POST Request Error:", error);
      throw error;
    });
};

export {
  _get,
  _post
};
