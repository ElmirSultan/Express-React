import express from "express"
import { crateUser, deleteUser, editUser, getSingleUser, getUsers } from "../controllers/user.js"

const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getSingleUser);
router.post("/",crateUser);
router.put("/:id",editUser)
router.delete("/:id",deleteUser)


export default router;
