import jsonwebtoken from "jsonwebtoken"
import {config} from "dotenv"

config()    


export async function gerarToken(id) {
    return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
}