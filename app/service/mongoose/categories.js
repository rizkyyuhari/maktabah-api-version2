const Categories = require("../../api/v1/categories/model");
const { BadRequestError } = require("../../errors");
const { generateID } = require("../../utils/index");

const createCategories = async (req) => {
  const { name } = req.body;
  const check = await Categories.findOne({ name });
  if (check) throw new BadRequestError("Kategori Sudah Tersedia");
  const result = await Categories.create({ _id: generateID(), name });
  return result;
};

const getAllCategories = async () => {
  const result = await Categories.find().populate({
    path: "subKategori",
    select: "_id name",
  });
  return result;
};

module.exports = {
  createCategories,
  getAllCategories,
};
