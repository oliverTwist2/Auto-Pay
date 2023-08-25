const ErrorResponse = require("../utils/errResponse");
const asyncHandler = require("../middleware/async");
const { sendMail } = require("../mail");

const Ticket = require("../Models/ticket");
const Concert = require("../Models/concert");
const Payment = require("../Models/payment");

/**
 * @author GUEST <******@gmail.com>
 * @description  Get User Detail To create  a Ticket State
 * @route `/`
 * @access Public
 * @type POST
 */
exports.createTicket = asyncHandler(async (req, res, next) => {
  const { email, quantity, concert, name } = req.body;
  if (!email) {
    return next(new ErrorResponse("Email Is Required", 400));
  }

  if (!quantity) {
    return next(new ErrorResponse("Missing Entry, quantity is required", 400));
  }
  if (!concert) {
    return next(
      new ErrorResponse("Missing Entry, concert ID is required", 400)
    );
  }
  const isValid = await Concert.findOne({_id:concert});

  if (!isValid) {
    return next(
      new ErrorResponse("Concert Not Found", 404)
    );
  }

  if (isNaN(quantity)) {
    return next(new ErrorResponse("Invaild Data Type", 400));
  }

  let amount =  isValid.amount * quantity
  const data = await Ticket.create({ email, quantity, concert, name, amount });

  res.status(200).json({
    success: true,
    data: data,
  });
});
