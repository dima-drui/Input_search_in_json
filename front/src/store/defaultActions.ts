import api from "@/utils/api";
import { DefaultActions } from "../utils/types";

export const defaultActions: DefaultActions = {
    async getSearch(this: any, params?: any):Promise<void>  {
        try {
            this.error = ''
            this.list = []
            this.loading = true
            const { data }: any = await api.get(this.entity, { params })
            this.list = data
            this.loading = false
        }
        catch(error: any){
            if(error.message !== 'canceled'){
                this.error = 'Something went wrong, try again'
                this.loading = false
            }
        }
    }
}
