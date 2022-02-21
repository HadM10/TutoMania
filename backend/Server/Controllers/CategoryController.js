//CONNECT TO DATABASE
require('../connectDB')
const Category = require('../models/Category')

//GET CATEGORIES
exports.Category = async (req, res) => {
  try {
    const Categories = await Category.find()
    .populate({ path: 'CategoryId', model: 'SubCategory' })
    res.json(Categories);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

// ADD OR POST CATEGORY
exports.addCategory = async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    photo: req.body.photo,
    CategoryId: req.body.CategoryId
    
  });

  try {
    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//DELETE CATEGORY
exports.deleteCategory = async (req, res) => {
  const CategoryId = req.params.id;
  try {
    const data = await Category.deleteOne({ _id: CategoryId });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}

//EDIT OR UPDATE CATEGORY
exports.editCategory = async (req, res) => {
  const CategoryId = req.params.id;
  const newCategory = {
    name: req.body.name,
    photo: req.body.photo,
    CategoryId: req.body.CategoryId
  };
  try {
    const updateCategory = await Category.findByIdAndUpdate({ _id: CategoryId }, newCategory);
    res.json(updateCategory);
  } catch (error) {
    res.status(400).json({ message: error })
  }
}