import express from 'express';
import {
    authUser,
    getUserProfile,
    registerUser,
    getUsers
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'
import {admin} from '../middleware/authMiddleware.js'

const router = express.Router();

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect, getUserProfile)

export default router