import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';


//config environment variables
dotenv.config()


// rest Object
const app = express();

//PORT 
const PORT = process.env.PORT

//Middleware configuration
app.use(cors())
app.use(express.json());

app.get('/',(req, res) => {
    res.send("<h3>Welcome to the Ashwani Portfolio App</h3>");
})



//run listen
app.listen(PORT, () => {
    console.log(`Server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.bgYellow.white)
})