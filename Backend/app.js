const express = require ('express')
const  { mongoose } = require ('mongoose')
const app = express();
const cors = require ('cors')
const routes = require('./routes/routes')
const admin = require('./routes/adminroutes')
const authRoute = require('./routes/auth')
const adminRoutes = require('./routes/adminauth')
const cookieParser = require('cookie-parser')
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT= 5000;
app.use(express.json());
app.use(cookieParser());
app.use('/',routes);
app.use('/', authRoute);
app.use('/', adminRoutes);
app.use('/',admin)
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


app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);




app.listen(PORT, (error) =>{
    if(!error){console.log(`Server is Successfully Running, and App is listening on port ${PORT}`)}
        
    else {console.log("Error occurred, server can't start", error);}
        
});