module.exports = {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [
      "administrator",
      "user",
    ],
    required: true,
  },
  Image: {
    type: String,
    default:
      "https://www.seekpng.com/png/small/143-1435868_headshot-silhouette-person-placeholder.png",
    required: false,
  },
};
