export interface Res<T> {
    data: T | any,
    error: any,
}

export interface User {
    email: string
    number: string
}

export interface Rgx {
    [key: string]: ()=> RegExp
}