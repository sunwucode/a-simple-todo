var mongoose = require("mongoose");

var UserSchema = new mongoose.SchemaType({
  name: {
    type: String,
    required: "name cannot be blank"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;