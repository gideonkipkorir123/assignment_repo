const { blogService } = require('../services');

const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const blogs = await blogService.getAllBlogs({ page, limit, search });

    res.status(200).json({
      message: 'Blogs fetched successfully',
      data: blogs.data,
      total: blogs.total,
      currentPage: blogs.currentPage,
      totalPages: blogs.totalPages,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blogs', error: err.message });
  }
};



const createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog({ ...req.body, author: req.user.id });
    res.status(201).json({ message: 'Blog created successfully', data: blog });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create blog', error: err.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog
};
