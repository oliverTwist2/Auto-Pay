const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
    { 
    email: {type:String, required: true},
    recepit_id : {type:String, required: true},
    amount:{type:String, required:true},
    ticket_count: { type: Number, required: true },
    no_sold: { type: Number, required: true }
  },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

const ticketModel = mongoose.model('tickets', ticketSchema)

module.exports = ticketModel