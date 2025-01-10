const Todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await Todo.findByIdAndDelete({ _id: id });

        res.status(200).json(
            {
                success: true,
                data: todo,
                message: `deleted succesfully`,
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