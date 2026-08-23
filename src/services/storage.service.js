const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
    const result = await imagekit.files.upload({
        file: file,
        fileName: "music-" + Date.now() + ".mp3",
        folder: "Backend/Spotify/music",
    });

    return result;
}

module.exports = { uploadFile };