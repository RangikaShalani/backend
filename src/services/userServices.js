const User = require("../models/userModel");


exports.createUser = async (payload) => {
    const { userType, ...userData } = payload;
  
    // Assign the userType manualy
    userData.userType = "buyer";
    console.log(userData);
    return User.create(userData);
  };