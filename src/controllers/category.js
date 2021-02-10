const { Category } = require('../models');
const createError = require('http-errors');

const getCategories = async (req, res, next) => {
  const { name } = req.query;
  let category = await Category.find({});
  console.log(category)
  return res.send({ category });
};

const createCategory = async (req, res, next) => {
  try {
    const { body: data } = req
    const createdCategory = await Category.create(data)
    return res.send({ createdCategory })
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getCategories,
  createCategory
};
