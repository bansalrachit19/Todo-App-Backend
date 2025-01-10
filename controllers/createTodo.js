//yahan par har ek function ka alag controller banta hai, jaise ye vala createTodo ke liye hai,
//createTodo means ki todo database mein todo type ki entry karne ke liye
//so agar create karna hai todo type ka to mujhe todo ka schema bhi pata hona chahiye
//isliye jo models mein maine todo ka schema banaya hai, use import karvaynga pehle yahan par

//and ye controller kisi na kisi router se definitelly mapped hota hai
//which means ki koi router pakka hit hua hoga tabhi ham controller par aaye hain
//to jis bhi route ko click karne se yahan aaye hain, us route ke liye ek handler likhna padega

const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
    try {
        //extract title and description from req body
        const { title, description } = req.body;
        //create a new todo object and insert in database
        const response = await Todo.create({ title, description });
        //send json with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created succesfully"
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json(
                {
                    success: false,
                    data: "internal server error",
                    message: err.message,
                }
            )

    }
}