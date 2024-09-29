const axios = require('axios');
const { getAuthToken } = require('../utils/mpesaAuth');
const moment = require('moment'); 
require('dotenv').config();

const stkPushRequest = async (amount, phoneNumber, accountReference, transactionDesc) => {
  try {
    const token = await getAuthToken();
    console.log('Token retrieved:', token);

    const shortCode = process.env.SHORTCODE; // Shortcode from your MPESA account
    const passKey = process.env.PASSKEY; // Lipa na MPESA PassKey from Safaricom
    const timestamp = moment().format('YYYYMMDDHHmmss'); // Current timestamp
    const password = Buffer.from(`${shortCode}${passKey}${timestamp}`).toString('base64'); // Generate password

    // Prepare payload for STK Push request
    const payload = {
      BusinessShortCode: shortCode,
      //  Password: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber, // Phone number sending the money
      PartyB: shortCode, // MPESA Shortcode receiving the money
      PhoneNumber: phoneNumber, // Phone number to send the STK Push to
      CallBackURL: process.env.CALLBACK_URL, // The callback URL for payment result
      AccountReference: accountReference|| "Test", // Reference for the payment (like invoice number)
      TransactionDesc: transactionDesc || "Payment for goods", // A description for the payment
    };

    console.log('Preparing payload for STK Push request:', payload);

    // Send STK Push request to MPESA API
    console.log('Sending STK Push request...');
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      // 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      payload, // Use the payload object as the payload
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('STK Push response:', response.data); // Log the response from MPESA
    return response.data; // Return the response from MPESA
} catch (error) {
    console.error('Error processing STK Push transaction:', error.message);
    if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Request data:', error.request);
    } else {
        // Something happened in setting up the request
        console.error('Error message:', error.message);
    }
    throw new Error('Failed to process STK Push transaction');
}

};

module.exports = { stkPushRequest };
