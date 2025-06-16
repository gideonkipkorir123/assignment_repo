const { dashboardService } = require('../services');

const getDashboard = async (req, res) => {
  try {
    const stats = await dashboardService.getDashboardStats();
    res.status(200).json({
      message: 'Dashboard metrics fetched successfully',
      data: stats
    });
  } catch (err) {
    res.status(500).json({
      message: 'Failed to fetch dashboard metrics',
      error: err.message
    });
  }
};

module.exports = {
  getDashboard
};
