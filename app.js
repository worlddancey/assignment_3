const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const blogPosts = [];

app.get('/', (req, res) => {
    res.render('home', { blogPosts });
});

app.get('/new-post', (req, res) => {
    res.render('new-post');
});

app.post('/new-post', (req, res) => {
    const { title, content } = req.body;
    
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content
    };
    blogPosts.push(newPost);
    res.redirect('/');
});

app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === postId);
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 