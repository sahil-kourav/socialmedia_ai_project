const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
    const response = imagekit.upload({
        file: file,
        fileName: fileName,
        folder: "SocialMeadia_AI_project",
    })
    return response

}

module.exports = uploadFile