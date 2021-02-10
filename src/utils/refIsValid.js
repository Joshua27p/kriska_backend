import mongoose from 'mongoose'

const refIsValid = (value, respond, modelName) => (
  modelName
    .countDocuments({ _id: value })
    .exec()
    .then(function(count) {
      return count > 0;
    })
    .catch(function(err) {
      throw err;
    })
)

export default refIsValid
