const { Cinema } = require('../models/cinema.model');

const addNewCinema = async (req, res) => {
  const data = req.body;

  try {
    const cinemaData = new Cinema(data);
    await cinemaData.save();
    res.status(201).json({
      success: true,
      data: cinemaData,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging.
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

const getCinemas = async (req, res) => {
  try {
    const data = await Cinema.find();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging.
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
}

const getCinema = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Cinema.findById(id);

    if (!data) {
      return res.status(404).json({
        error: 'Cinema not found',
      });
    }

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging.
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
}

module.exports = { addNewCinema, getCinemas, getCinema };
