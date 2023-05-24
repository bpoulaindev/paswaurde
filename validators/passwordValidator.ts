export const validatePassword = (password: string) => {
    const errors = [];
    if (password.length < 8) {
        errors.push("Le mot de passe doit comporter au moins 8 caractères");
    }

    if (password.match(/\d/) === null) {
        errors.push("Le mot de passe doit contenir au moins 1 chiffre");
    }
    return {
        isValid: errors.length === 0,
        errors: errors,
    };
}
