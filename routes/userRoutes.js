const express = require("express");

const {
    createUser,
    getAllUser,
    getUserById, updateUser, deleteUser
} = require("../controllers/userController");


const router = express.Router();

router.route("/")
    .get(getAllUser)
    .post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;

