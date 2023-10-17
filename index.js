const express = require('express');
const app = express();

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    //res.send('こんにちは、えくすぷれす。');
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    //console.log('Start server port:3000');
    console.log('Please access >> http://localhost:3000');
});

