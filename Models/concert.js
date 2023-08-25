const mongoose = require('mongoose')

const concertSchema = new mongoose.Schema(
    {
         name: { type: String, required: true },
        artist: { type: String, required: true },
        venue: { type: String, required: true },
        no_sold: { type: Number, required: true }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

const ticketModel = mongoose.model('tickets', ticketSchema)

module.exports = ticketModel