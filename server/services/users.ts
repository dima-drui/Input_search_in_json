import db from '../data.json'
import { User } from '../../common/types';

class UserService  {

    public async search(params: any): Promise<User[]> {
        try {
            const result: User[] = db.filter((a: User) => {
                return params.number
                    ? a.number == params.number && a.email == params.email
                    : a.email == params.email
            })
            return result
        }
        catch (error: any) {
            throw new Error(`"search" operation failed: ${error.message}`);
        }
    }
}

export default new UserService()


