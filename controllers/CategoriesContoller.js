import CategoryModel from '../models/CategoryModel.js';
import ProductModel from '../models/ProductModel.js';

export const getAllCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Cannot get all categories' });
  }
};

export const createCategory = async (req, res) => {
  try {
    const doc = new CategoryModel(req.body);

    const newCategory = await doc.save();
    res.json({ data: newCategory, success: true });

  } catch (error) {
    res.status(500).json({ message: error });
  }
};


export const deleteCategory = async (req, res) => {
  try {
    const { _id } = req.body;

    await ProductModel.updateMany({ categoryId: _id }, { categoryId: null });
    await CategoryModel.findByIdAndDelete(_id);
    res.json({ message: 'Category successfully deleted' });

  } catch (error) {
    res.status(500).json({ message: error });
  }
};