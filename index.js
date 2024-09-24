const express = require('express');
const dotenv = require('dotenv');
const mpesaRoutes = require('./routes/mpesa');
const { swaggerDocs } = require('./config/swagger');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/mpesa', mpesaRoutes);

swaggerDocs(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
