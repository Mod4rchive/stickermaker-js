import { Sticker, createSticker, StickerTypes } from 'wa-sticker-formatter' // ES6
// const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter') // CommonJS

const sticker = new Sticker("file.jpeg", {
    pack: 'Bot Aurora', // The pack name
    author: 'Xocatl +569 8771 7158', // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['😭', '🐦'], // The sticker category
    id: '56953', // The sticker id
    quality: 100, // The quality of the output file
    background: '#000000' // The sticker background color (only for full stickers)
})

await sticker.toFile('sticker.webp')