
//returns an empty string if password is good, else return error message
export function ValidatePassword(password: string): string{
    // Check if password length is at least 12 characters
    if (password.length < 8) {
        return "Password must be at least 12 characters long.";
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
        return "Password must contain at least one number.";
    }

    // Check for at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    // If all checks pass, return true
    return "";
}