const SubCategories = require("./model");
const Category = require("../categories/model");

const create = async (req, res) => {
  const { name, kategoriID } = req.body;
  try {
    const kategori = await Category.findById(kategoriID);
    if (!kategori) {
      throw new Error("Kategori tidak ditemukan.");
    }

    const subKategoriBaru = new SubCategories({
      name: name,
      kategori: kategoriID,
    });

    kategori.subKategori.push(subKategoriBaru._id);
    await subKategoriBaru.save();
    await kategori.save();

    res.status(201).json({
      message: "Succefully Created",
      data: subKategoriBaru,
    });
  } catch (error) {
    console.log(error);
  }
};

const index = async (req, res) => {
  try {
    const result = await SubCategories.find().select("_id name");
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
  index,
};
