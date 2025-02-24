import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
};

// get single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "Data get successfully",
      data: tour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Getting data fail. Try again" });
  }
};

// get all tour
export const getAllTour = async (req, res) => {
  try {
    const page = parseInt(req.query.page);

    console.log(page);

    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully",
      data: tours,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Getting data fail. Try again" });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroup = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroup },
    });

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "getTourBySearch data not found. Try again",
    });
  }
};

export const getFeaturedtours = async () => {
  const tours = await Tour.find({ featured: true }).limit(8);
  try {
    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "data not found. Try again",
    });
  }
};

export const getTourCount = async () => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(400).json({ success: false, message: "data not found" });
  }
};
