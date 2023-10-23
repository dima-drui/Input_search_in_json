import { Request, Response } from "express";
import UserServices from "../services/users";

class UsersController {

    search = async (req: Request, res: Response) => {
        try{
            const params = req.query
            const users = await UserServices.search(params)
            return res.json({ data: users });
        }
        catch(error: any){
            return res.status(404).json({ error: error.message })
        }
    }

}

export default new UsersController()

