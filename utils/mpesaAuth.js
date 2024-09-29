const axios = require('axios');
require('dotenv').config();

const getAuthToken = async () => {
  const credentials = Buffer.from(`${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`).toString('base64');
  
  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error.response?.data || error.message);
    throw new Error('Failed to fetch authentication token');
  }
};

module.exports = { getAuthToken };
