const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  tittle: {
    type: String,
    require: true,
  },
  editorial: {
    type: String,
    require: true,
  },
  back_matter: {
    type: Object,
    require: true,
    languaje: {
      type: String,
      require: true,
    },
    others: {
      type: Array,
      require: true,
      subgenre: {
        type: String,
        require: true,
      },
      Format: {
        type: String,
        require: true,
      },
      year_of_birth: {
        type: String,
        require: true,
      },
    },
  },
  author: {
    type: Object,
    require: true,
    personal_data: {
      type: Object,
      require: true,
      year_of_birth: {
        type: String,
        require: true,
      },
    },
    author_name: {
      type: String,
      require: true,
    },
  },
  motto: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("BookCollection", bookSchema);
