const { stkPushRequest } = require('../services/mpesaService');

const stkPush = async (req, res) => {
  const { amount, phoneNumber, accountReference, transactionDesc } = req.body;

  try {
    const result = await stkPushRequest(amount, phoneNumber, accountReference, transactionDesc);
    res.status(200).json(result); // Return the response from MPESA API
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

module.exports = { stkPush };
