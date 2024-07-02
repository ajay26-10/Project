const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User =require ('./model/user.js');
const Project = require ('./model/project.js')
const donation = require ('./model/donation.js')
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const PORT= 3000;
const uri= process.env.mongodb_uri;
mongoose.connect(
    uri
);

const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log("Database Connected");
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/signup', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'dash.html'));
});

app.get('/new-project', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'newpro.html'));
});

app.get('/payment', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'payment.html'));
});

app.get('/payment-success', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'paysuccess.html'));
});

app.get('/admin-login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'adminlogin.html'));
});

app.get('/admin-dash', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'admindashboard.html'));
});

app.get('/admin-users', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'adminalluser.html'));
});

app.get('/admin-review', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'reviewprofile.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view-projects.html'));
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find().populate('createdBy', 'name email');
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Error fetching projects' });
    }
});


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
        res.send(`User already exists. Please choose a different email.`);
    } else {
        const userdata = await User.create({ name, email, password });
        console.log(userdata);
        res.redirect('/');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ message: 'Login Successful', redirect: '/dashboard'  });
            
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        console.log('User Not Found', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage: storage });

app.post('/new-project', upload.single('image'), async (req, res) => {
    const { title, tagline, description, targetAmount } = req.body;
    const image = req.file ? req.file.path : '';

    const project = new Project({
        title,
        tagline,
        description,
        targetAmount,
        image,
        createdBy: req.user ? req.user._id : null  // Adjust according to how you handle user authentication
    });

    try {
        await project.save();
        res.status(201).redirect('/dashboard');
    } catch (error) {
        res.status(400).send('Error saving project');
    }
});

app.listen(PORT, (error) =>{
    if(!error){console.log(`Server is Successfully Running, and App is listening on port ${PORT}`)}
        
    else {console.log("Error occurred, server can't start", error);}
        
});