import express from 'express'
import { authentication, random } from '../Helpers/Index'
import { createUser, getUserEmail } from '../Model/UserModel'

export const SignUp = async (req: express.Request, res: express.Response) => {
    try {
        const { userName, email, password } = req.body
        if (!userName || !email || !password) {
            res.send({
                message:"username or email or password missing"
            })
        }
        const existingUser = await getUserEmail(email)
        if (existingUser) {
            res.send({
                message:"User already exist"
            })
        } else {
            const salt = random()
            const user = await createUser({
                userName, email,
                authentication: {
                    salt,
                    password: authentication(salt, password)
                }
            })
            return res.status(200).send(user)
        }
    } catch (error) {
        res.sendStatus(500)
        console.log(error);

    }
}