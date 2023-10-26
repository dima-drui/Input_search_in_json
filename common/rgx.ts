import { Rgx } from "./types";

export const rgx: Rgx = {
    email: ()=> /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
}