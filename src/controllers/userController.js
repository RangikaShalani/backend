const { createUser } = require("../services/userServices");
const User = require("../models/userModel");

const creatNewUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

   
    const userExists = await User.findOne({ email: email });
    if (userExists && userExists.isVerified) {
        res.status(400).json("User already exists");

    }
    try {
        // create user
        const user = await createUser({
            firstname,
            lastname,
            email,
            password,
            userType: "buyer",
        });
        console.log(user);
         res.status(200).json("created");

    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    creatNewUser,
};