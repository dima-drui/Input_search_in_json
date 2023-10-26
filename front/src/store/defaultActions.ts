import api from "@/utils/api";
import { DefaultActions } from "../utils/types";

interface ReqMap {
    [key: string]: AbortController
}
const reqMap: ReqMap = {}

export const defaultActions: DefaultActions = {
    async getSearch(this: any, params?: any):Promise<void>  {
        try {
            const reqKey = JSON.stringify(params)
            this.error = ''
            this.list = []
            this.loading = true
            removePendingRequest(reqKey)
            const controller = createController(reqKey)
            const { data }: any = await api.get(this.entity, { params: params, signal: controller.signal })
            this.list = data
            this.loading = false
        }
        catch(error: any){
            if(error.message !== 'canceled'){
                this.error = 'Something went wrong, try again'
                this.loading = false
            }
        }
        finally{
            delete reqMap[JSON.stringify(params)]
        }
    }
}

function removePendingRequest(key: string): void {
    if(reqMap[key]) {
        reqMap[key].abort()
        delete reqMap[key]
    }
}

function createController(key: string): AbortController{
    const controller = new AbortController()
    reqMap[key] = controller
    return controller
}
