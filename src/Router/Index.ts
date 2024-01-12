import { SignUp } from "../Controllers/authentication"
import express from "express"

const router = express.Router()

router.post('/register',SignUp)

export default router