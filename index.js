const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/music_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/auth', require('./routes/authRoutes'));
app.use('/playlists', require('./routes/playlistRoutes'));
app.use('/songs', require('./routes/songRoutes'));
app.use('/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
