export default function gereneratePass(){
    let password: string = ''
    let characters: string = '!@$#%0123456789abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ'
    let passwordLength = 8

    for (let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}