const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    minlength: [3, "Panjang nama kategori minimal 3 karakter"],
    maxLength: [20, "Panjang nama kategori maksimal 20 karakter"],
    required: [true, "Nama Kategori harus diisi"],
  },
  subKategori: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  ],
});

module.exports = model("Category", categorySchema);
