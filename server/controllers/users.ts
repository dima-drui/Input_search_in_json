import { Request, Response } from "express";
import UserServices from "../services/users";
import { validateEmail, validateNumber } from "../utils/validations";
import { User } from "../../common/types";

class UsersController {

    search = async (req: Request, res: Response) => {
        try{
            const { email, number } = req.query

            if (!email || !(typeof email === 'string') || !validateEmail(email)) {
                return res.status(404).json({ error: "email is invalid" });
            }
            if(number){
                if ( !(typeof number == 'string') || !validateNumber(number)) {
                    return res.status(404).json({ error: "nummber is invalid" });
                }
            }
            const users: User[] = await UserServices.search({email, number})
            return res.json({ data: users });
        }
        catch(error: any){
            return res.status(404).json({ error: error.message })
        }
    }
}

export default new UsersController()

