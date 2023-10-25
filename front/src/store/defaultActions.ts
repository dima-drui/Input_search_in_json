import api from "@/utils/api";
import { DefaultActions } from "../utils/types";

const reqMap = new Map<string, AbortController>()
let controller

export const defaultActions: DefaultActions = {
    async getSearch(this: any, params?: any):Promise<void>  {

        if(reqMap.has(params)) {
            reqMap.get(params)?.abort()
            reqMap.delete(params)
        }

        let controller = new AbortController()
        reqMap.set(params, controller);

        this.loading = true
        this.list = []
        const { data }: any = await api.get(this.entity, { params: params, signal: controller.signal })
        this.list = data
        this.loading = false
    }
}