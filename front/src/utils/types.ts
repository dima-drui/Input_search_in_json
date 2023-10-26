export interface Column {
    value: string, 
    header: string,
}

export interface Fields {
    field: any, 
    label: string, 
    placeholder?: string,
    mask?: any,
    counter?: number
}

export interface DefaultActions {
    getSearch(params?: any): Promise<void>
}

export interface ReqMap {
    [key: string]: AbortController
}