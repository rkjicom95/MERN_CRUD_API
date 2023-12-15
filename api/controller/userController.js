import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const {fname, lname,email, username, age, salary } = req.body;
    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.status(200).send({
        message: "User already register",
      });
    }
    const userObj = new User({
      fname,
      lname,
      email,
      username,
      age,
      salary,
    });
    const data = await userObj.save();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(404).send({
      message: error.message,
    });
  }
};

export const userList = async (req, res) => {
  try {
    const userListData = await User.find({});
    return res.status(200).send(userListData);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).send({
      message: "Delete Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fname, lname,email,username, age, salary } = req.body;
    await User.findByIdAndUpdate(id, { fname, lname,email,username, age, salary });
    res.status(200).send({
      message: "Data is Updated",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export const singleList = async (req,res)=>{
  try {
    const {id} = req.params
    const userListData = await User.findById(id);
    return res.status(200).send(userListData);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
}
