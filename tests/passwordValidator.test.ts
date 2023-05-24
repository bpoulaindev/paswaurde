import { test, expect } from "vitest";
import { validatePassword } from "../validators/passwordValidator";

test("Mot de passe valide", () => {
    const result = validatePassword("@Password123");
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
});

test("Mot de passe trop court", () => {
    const result = validatePassword("pass");
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(4);
    expect(result.errors[0]).toBe("Le mot de passe doit comporter au moins 8 caractères");
});

test("Mot de passe sans chiffre", () => {
    const result = validatePassword("Password");
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBe(2);
    expect(result.errors[0]).toBe("Le mot de passe doit contenir au moins 1 chiffre");
});

test("Le mot de passe doit contenir au moins une lettre majuscule", () => {
    const result = validatePassword("password123");
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Le mot de passe doit contenir au moins une lettre majuscule");
});

test("Le mot de passe doit contenir au moins un caractère spécial", () => {
    const result = validatePassword("password123");
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Le mot de passe doit contenir au moins un caractère spécial");
});

