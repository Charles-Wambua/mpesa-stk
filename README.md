# mpesa-stk
# MPESA STK Push API

This project implements a Node.js and Express application that allows sending STK Push requests to initiate payments using Safaricom's MPESA API. The application is set up to work in the sandbox environment for testing purposes.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- Axios
- MPESA API (Sandbox Environment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mpesa-stk-push.git

cd mpesa-stk-push
npm install

CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
SHORTCODE=your_shortcode

npm start
  
  {
  "amount": 1,
  "partyA": "2547XXXXXXXX", // Customer's phone number
  "accountReference": "Test123", // Reference for the payment
  "transactionDesc": "Payment for testing"
}


### Notes:

- Replace `yourusername` in the clone command with your actual GitHub username.
- Update any placeholders (e.g., `your_consumer_key`, `your_consumer_secret`, `your_shortcode`) with the actual credentials you will use.
- Adjust the content as needed based on your project specifics or additional features you may add.

Feel free to customize it further to fit your project's needs!

