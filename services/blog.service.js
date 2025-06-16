const { Blog } = require('../models');

const getAllBlogs = async ({ page, limit, search }) => {
  const skip = (page - 1) * limit;
  const query = {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
    ]
  };

  const [blogs, total] = await Promise.all([
    Blog.find(query)
      .populate('author', 'username email') // Only include username and email
      .sort({ createdAt: -1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit)),
    Blog.countDocuments(query)
  ]);

  return {
    data: blogs,
    total,
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / limit),
  };
};


const createBlog = async (data) => {
  return await Blog.create(data);
};

module.exports = {
  getAllBlogs,
  createBlog
};
