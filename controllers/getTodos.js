const Todo = require("../models/todo");

exports.getTodos = async (req, res) => {
    try {
        //fetch all todo items with a database
        const todos = await Todo.find({});
        //send json with a success flag
        res.status(200).json(
            {
                success: true,
                data: todos,
                message: "entire dtaa fetched succesfully"
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

exports.getTodosById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.find({ _id: id })

        if (!todo) {
            res.status(404).json(
                {
                    success: false,
                    message: "no data founfd with given id",
                }
            )
        }
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: `todo ${id} data succesfully fetched`,
            }
        )
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