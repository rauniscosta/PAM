export default function generatePassword() {
    //Cadeia de caracteres que compõem a senha
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+-=';
    let password = '';
    let passwordLength = 10;
    //Gera uma senha de 10 caracteres
    for (let i = 0; i < passwordLength; i++) {
        //Adiciona um caractere aleatório a senha a cada iteração do loop for, até que a senha tenha 10 caracteres. 
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
