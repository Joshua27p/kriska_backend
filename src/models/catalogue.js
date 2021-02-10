import mongoose, { Schema } from "mongoose";
import refIsValid from '../utils/refIsValid';
import Category from './category';

// build user schema
const CatalogueSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      index: true,
      unique: true,
      required: true,
    },
    categoryId: {
      type: String,
      index: true,
      required: true
    },
    category: {
      type: String,
      uppercase: true,
      trim: true,
      index: true,
      required: true,
    },
    images: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    size: {
      type: Array,
      default: "",
    },
  },
  {
    timestamps: true,
    collection: "catalogue"
  }
);

CatalogueSchema.index({ name: 1, category: 1, categoryId: 1, name: 'text', category: 'text' })

CatalogueSchema.path('categoryId').validate((value, respond) => (
  refIsValid(value, respond, Category)
), 'Invailid categoryId')

const Catalogue = mongoose.model('Catalogue', CatalogueSchema)

export default Catalogue
