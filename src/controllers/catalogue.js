const { Catalogue } = require('../models');
const createError = require('http-errors');

const getCatalogue = async (req, res, next) => {
  try {
    const { name_contains, offers, limit, page, start } = req.query;
    const skip = page ? (page-1)*limit : start
    let query = {}

    if(name_contains) query['$text'] = {
      $search: name_contains,
      $caseSensitive: false
    }
    if(offers == 'true') query['price_final'] = {
      $gt: 0
    }
    console.log(query)
    let result = null
    if(parseInt(limit)) result = await Catalogue.find(query).limit(parseInt(limit)).skip(parseInt(skip))
    else result = await Catalogue.find(query);
    return res.send({ result });
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { body: data } = req
    const product = await Catalogue.create(data)
    return res.send({ product })
  } catch (e) {
    res.status(500).send(e)
  }
}

module.exports = {
  getCatalogue,
  createProduct
};
