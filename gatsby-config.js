require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-cloudinary-gallery",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUDNAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        type: 'upload',
        maxResults:15
      },
    },
  ],
};
