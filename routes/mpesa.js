const express = require('express');
const { stkPush } = require('../controllers/mpesaController');
const router = express.Router();

/**
 * @swagger
 * /mpesa/stkpush:
 *   post:
 *     summary: Initiate MPESA STK Push
 *     description: Sends a request to MPESA for an STK push transaction.
 *     tags: [MPESA]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - amount
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: "254712345678"
 *               amount:
 *                 type: number
 *                 example: 10
 *     responses:
 *       200:
 *         description: STK push initiated successfully
 *       500:
 *         description: Error occurred
 */
router.post('/stkpush', stkPush);

module.exports = router;
