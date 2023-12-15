import express from "express";
import {createUser, deleteUser, updateUser, userList,singleList} from "../controller/userController.js"

const router = express.Router()

router.post('/create-user',createUser)
router.get('/user-list',userList)
router.get('/user-list/:id',singleList)
router.delete('/user-delete/:id',deleteUser)
router.put('/user-update/:id',updateUser)


export default router