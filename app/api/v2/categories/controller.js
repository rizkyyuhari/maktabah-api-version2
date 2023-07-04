const {
  createCategories,
  getAllCategories,
} = require("../../../service/mongoose/categories");

const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(201).json({
      message: "SUCCESSFULLY CREATED",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  index,
};
