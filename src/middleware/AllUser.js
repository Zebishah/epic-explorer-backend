import User from "../Models/User.js";

const getallUser = async (req, res, next) => {
  try {
    const user = await User.find();
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    req.user = user;
    // Attach the user object to the request object
    next();
    return;
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export default getallUser;
