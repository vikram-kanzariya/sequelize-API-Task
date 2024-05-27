const { generalResponse } = require("../helpers/response.helper");
const {
  getUsers,
  getUserWithPosts,
  createUser,
  deleteUser,
  updateUser,
} = require("../repositories/user.repository");

async function getAllUsers(req, res) {
  try {
 
    const users = await getUsers();
    return generalResponse(res, users, "Users Retrieved!", true);
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function insertUser(req, res) {
  try {
    const currentTime = new Date().toISOString();
    const { userName, phoneNumber, email } = req.body;
    // don't pass this custom TimeStamps to database this way - add NOW() in default and updatedAt should be null while inserting data.
    const newUser = await createUser({
      userName,
      phoneNumber,
      email,
      createdAt: currentTime,
      updatedAt: null,
    });
    return generalResponse(
      res,
      newUser,
      "Inserted New User Successfully!",
      true
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function getUserPosts(req, res) {
  try {
    const userId = req.query.id;
    console.log(userId);
    const userPosts = await getUserWithPosts(userId);
    return generalResponse(res, userPosts, "User posts fetched.", true);
  } catch (error) {
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching users!",
      "error",
      true
    );
  }
}

async function removeUser(req, res) {
  try {
    const userId = req.query.id;
    const user = await deleteUser(userId);

    return generalResponse(res, user, "User Deleted...", true);
  } catch (error) {
    return generalResponse(
      res,
      { success: false },
      "error While Deleting",
      "error",
      true
    );
  }
}

async function updateUserData(req, res) {
  try {
    const userId = req.params.id;
    const userData = req.body;

    const user = await updateUser(userData, userId);

    return generalResponse(res, user, "User Updated Successfully", true);
  } catch (error) {
    return generalResponse(
      res,
      { success: false },
      "Error While Updating User...",
      "error",
      true
    );
  }
}

module.exports = {
  getAllUsers,
  insertUser,
  getUserPosts,
  updateUserData,
  removeUser,
};
