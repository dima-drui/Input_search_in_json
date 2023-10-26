import { rgx } from '../../common/rgx'

export const validateEmail = (email: string): boolean => {
        if (!email || !rgx.email().test(email)) return false
        return true;
    }

export const validateNumber = (number: string): boolean => {
    if (number && number.length == 0 || number.length == 6) return true
    return false;
}

