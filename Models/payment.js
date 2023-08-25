const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema(
    {
      
        ticket_id: { type: String, required: true },
        reference_no: { type: String, required: true },
        payment_status: { type: Number, required: true }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

const paymentModel = mongoose.model('payments', paymentSchema)

module.exports = paymentModel