export default function generatePass(passwordLength: number = 8): string {
    let password = '';
    const characters =
      '!@$#%0123456789abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ';
  
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  
    return password;
  }
  