// src/utils/apiUtils.js
const axios = require('axios');

async function fetchData(url, headers = {}) {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data: ' + error.message);
  }
}

module.exports = { fetchData };
