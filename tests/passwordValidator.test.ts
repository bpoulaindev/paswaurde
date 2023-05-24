import { test, assert } from "vitest";
import { validatePassword } from "../validators/passwordValidator";

test("Mot de passe valide", () => {
    const result = validatePassword("Password123");
    assert(result.isValid, "Le mot de passe doit être valide");
    assert(result.errors.length === 0, "Il ne doit y avoir aucune erreur de validation");
});

test("Mot de passe trop court", () => {
    const result = validatePassword("pass");
    assert(!result.isValid, "Le mot de passe doit être invalide");
    assert(result.errors.length === 0, "Il doit y avoir une erreur de validation");
    assert(
        result.errors[0] === "Le mot de passe doit comporter au moins 8 caractères",
        "Le message d'erreur doit être correct"
    );
});

test("Mot de passe sans chiffre", () => {
    const result = validatePassword("Password");
    assert(!result.isValid, "Le mot de passe doit être invalide");
    assert(result.errors.length === 0, "Il doit y avoir une erreur de validation");
    assert(
        result.errors[0] === "Le mot de passe doit contenir au moins 1 chiffre",
        "Le message d'erreur doit être correct"
    );
});
