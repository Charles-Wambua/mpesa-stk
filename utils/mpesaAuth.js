const axios = require('axios');
require('dotenv').config();

const getAuthToken = async () => {
  const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    // console.log("token", response)
    return response.data.access_token;
  

  } catch (error) {
    throw new Error('Failed to authenticate with MPESA API');
  }
};

module.exports = { getAuthToken };
