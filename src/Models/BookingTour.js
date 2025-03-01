import mongoose from "mongoose";
const Schema = mongoose.Schema;
let bookingTourSchema = new Schema({
  tourId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pickUpLocation: {
    type: String,
    required: true,
  },
  dropOffLocation: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: String,
    required: true,
  },
  bookerName: {
    type: String,
    required: true,
  },
  bookerEmail: {
    type: String,
    required: true,
  },
  bookerPhone: {
    type: String,
    required: true,
  },
  bookerAddress: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
  bookerId: {
    type: String,
    required: true,
  },
  members: {
    type: String,
    required: true,
  },
});
export default mongoose.model("BookingTour", bookingTourSchema);
