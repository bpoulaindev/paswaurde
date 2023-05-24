export const validatePassword = (password: string) => {
    const errors = [];

    if (password.length < 8) {
        errors.push("Le mot de passe doit comporter au moins 8 caractères");
    }

    if (!/\d/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins 1 chiffre");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins une lettre majuscule");
    }

    if (!/[!@#$%^&*]/.test(password)) {
        errors.push("Le mot de passe doit contenir au moins un caractère spécial");
    }

    return {
        isValid: errors.length === 0,
        errors: errors,
    };
};
