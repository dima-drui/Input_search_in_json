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