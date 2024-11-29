const bcrypt = require("bcrypt");
const Admin = require("../models/adminSchema");
const { generateJWT } = require("../utils/generateToken");

const createAdmin = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    if (!name || !username || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }
    const admins = await Admin.find();
    if (admins.length > 0) {
      return res.status(400).json({
        message: "No more admins are allowed to register.",
        success: false,
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, username, password: hash });
    let token = await generateJWT({
      username: admin.username,
      id: admin._id,
    });
    console.log(token);
    console.log(admin);
    return res.status(200).json({
      message: "Admin created successfully",
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        username: admin.username,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }
    const admin = await Admin.findOne({ username }).populate();
    if (!admin) {
      return res.status(500).json({
        message: "Admin not found",
        success: false,
      });
    }
    let token = await generateJWT({
      username: admin.username,
      id: admin._id,
    });
    const pass = await bcrypt.compare(password, admin.password);
    if (!pass) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Admin login successfully",
      success: true,
      user: {
        id: admin._id,
        name: admin.name,
        username: admin.username,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

const updateAdminPassword = async (req, res) => {
  try {
    let { password } = req.body;
    let { id } = req.params;
    const hash = await bcrypt.hash(password, 10);
    let newAdmin = await Admin.findByIdAndUpdate(
      id,
      {
        $set: { password: hash },
      },
      { new: true }
    );
    if (!newAdmin) {
      return res.status(200).json({
        message: "Admin not found",
        success: false,
      });
    }
    // users[userIndex] = { ...users[userIndex], ...req.body };
    return res.status(200).json({
      message: "Password updated successfully",
      success: true,
      newAdmin,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find().populate({
//       path: "blogs",
//       select: "-creator",
//     });
//     return res.status(200).json({
//       success: true,
//       message: "Users fetched successfully",
//       users,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

// const getSingleUser = async (req, res) => {
//   try {
//     let { id } = req.params;
//     let user = await User.findById(id).populate({
//       path: "blogs",
//     });
//     if (!user) {
//       return res.status(200).json({
//         message: "User not found",
//         success: false,
//       });
//     }
//     return res.status(200).json({
//       message: "User fetched successfully",
//       success: true,
//       user,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     let { id } = req.params;
//     const delUser = await User.findByIdAndDelete(id);
//     if (!delUser) {
//       return res.status(200).json({
//         message: "User not found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       message: "User deleted successfully",
//       success: true,
//       delUser,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "Something went wrong",
//       success: false,
//     });
//   }
// };

module.exports = {
  createAdmin,
  loginAdmin,
  updateAdminPassword,
  //   getUsers,
  //   getSingleUser,
  //   deleteUser,
};
