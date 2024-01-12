import crypto from "crypto"

const sec  ='asd'

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: String, password: String) => {
    return crypto.createHmac('sha256',[salt,password].join('/')).update(sec).digest('hex')
}