import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};

// update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
};

// delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
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

// get single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Data get successfully",
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Getting data fail. Try again" });
  }
};

// get all User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Successfully",
      data: users,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Getting data fail. Try again" });
  }
};
