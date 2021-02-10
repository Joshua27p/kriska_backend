import mongoose, { Schema } from "mongoose";

// build user schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      uppercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "category"
  }
);

// CategorySchema.pre('save', (next) => {
//   this.id = this._id.toString();
//   next();
// })

CategorySchema.index({ name: 1, id: 1 })

const Category = mongoose.model('Category', CategorySchema)

export default Category
