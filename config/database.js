//server ko database se link mongoose se karwate hain
const mongoose = require("mongoose");

//.env mein sab jo defined hai, usko process object ke ander leke aane ke liye sabse pehle i need to install dotenv library by npm i dotenv
//uske baad require("dotenv").config() karke, env ke ander jo bhi defined hai vo sab process object ke ander aa jayega and can use wherever we want

require("dotenv").config();//isse jo bhi hamne env mein define kia hoga, vo load ho jayega process object ke ander

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("connection succesfull"))
        .catch((error) => {
            console.log("issue in connection to database");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;