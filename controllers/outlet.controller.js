const { outletService } = require('../services');

const getAllOutlets = async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const region = req.query.region || '';
    const category = req.query.category || '';

    const result = await outletService.getAllOutlets({
      page,
      limit,
      region,
      category
    });

    res.status(200).json({
      message: 'Outlets fetched successfully',
      data: result.data,
      pagination: result.pagination
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch outlets', error: err.message });
  }
};


const createOutlet = async (req, res) => {
  try {
    const outlet = await outletService.createOutlet(req.body);
    res.status(201).json({ message: 'Outlet created successfully', data: outlet });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create outlet', error: err.message });
  }
};

module.exports = {
  getAllOutlets,
  createOutlet
};
