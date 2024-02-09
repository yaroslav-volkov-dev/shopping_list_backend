import mongoose from 'mongoose';

const ProductModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: null
  }
});

export default mongoose.model('Product', ProductModel);