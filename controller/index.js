const ErrorResponse = require("../utils/errResponse");
const asyncHandler = require("../middleware/async");
const { sendMail } = require("../mail");

const Ticket = require("../Models/ticket");
//const Concert = require("../Models/concert");

const axios = require("axios")
const dotenv = require("dotenv")
const crypto = require('crypto');
const ticketModel = require("../Models/ticket");
dotenv.config()
/**
 * @author GUEST <******@gmail.com>
 * @description  Get User Detail To create  a Ticket State
 * @route `/`
 * @access Public
 * @type POST
 */




//Make Payments

exports.initializePayments = asyncHandler(async(req,res,next)=>{

      const {email, quantity} = req.body

      if(!(email && quantity)){
        return next(new ErrorResponse('Incomplete details', 400));

      }
        url = "https://api.paystack.co/transaction/initialize"

        const headers = {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "Content-Type": "application/json"
      }
  
      data = { 
        email: email,
        amount : 2000
      }
  try {
    const resp = await axios.post(url,data,{headers})
    console.log(resp.data,"resp")

   // create tickets
    const ticket = await ticketModel.create({
      email: email,
      ticket_count: quantity,
      reference_no: resp.data?.data?.reference,
      access_code: resp.data?.data?.access_code
    })
    res.status(200).json({message:'Authorization URL created', data:resp?.data})
  } catch (error) {
    next(error)
    //console.log(error, "error")
  }
})

exports.verifyPayment = asyncHandler(async (req,res,next)=>{

      const hash = crypto.createHmac('sha512', process.env.SECRET_KEY).update(JSON.stringify(req.body)).digest('hex');
      if (hash != req.headers['x-paystack-signature']) {
        return
      }
      // Retrieve the request's body
      const data = req.body;
  try {
    if (data.event === "charge.success") {
      
      const updateTicket = await ticketModel.updateOne(
        { reference_no: data?.data?.reference },
        { $set: { amount: data?.data?.amount, payment_status: true } }
      )
     
      return res.status(200).json({ message: "Successful payment" })
    }
    return res.status(200).json({ message: "Unsuccessful payment" })
  } catch (error) {
    next(error)
    console.log(error,"error")
  }
})