// models/Slide.js
const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // URL to the image for the slide
    required: true
  },
  link: {
    type: String, // Optional link for each slide
    required: false
  },
  position: {
    type: Number, // For ordering slides (1st, 2nd, etc.)
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Slide model
module.exports = mongoose.model('Slide', slideSchema);
