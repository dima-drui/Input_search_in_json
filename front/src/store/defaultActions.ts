import api from "@/utils/api";
import { DefaultActions } from "../utils/types";

interface ReqMap {
    [key: string]: AbortController
}
const reqMap: ReqMap = {}

export const defaultActions: DefaultActions = {
    async getSearch(this: any, params?: any):Promise<void>  {
        try {
            this.loading = true
            this.list = []
            const reqKey = JSON.stringify(params)
            removePendingRequest(reqKey)
            const controller = createController(reqKey)
            const { data }: any = await api.get(this.entity, { params: params, signal: controller.signal })
            this.list = data
        }
        catch(error: any){
            console.warn(`getSearch error: ${error.message}`)
        }
        finally{
            delete reqMap[JSON.stringify(params)]
            this.loading = false
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
