const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
    { 
    email: {type:String, required: true},
    amount_paid:{type:Number},
    ticket_count: { type: Number, required: true , default:0},
    no_sold: { type: Number , default: 0},
    reference_no: { type: String, required: true },
    access_code: { type: String, required: true },
    payment_status: { type: String, required: true , default: false}
  },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

const ticketModel = mongoose.model('tickets', ticketSchema)

module.exports = ticketModel