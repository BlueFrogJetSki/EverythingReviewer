import type { Ref } from "vue";

//check string length is >= length
//check string is valid (dosnt contain certain words)
//set error message
export const ValidateText = (
  fieldName: string,
  text: string,
  minLength: number = 1,
  maxLength: number = 80,
//   invalidChars? : string[]
) => {
  //clear existing err message

  if (text === "") {
    return`${fieldName} is required`;
  }

  if(containsNonAscii(text)){
    return`${fieldName} cannot contain non-ascii characters`;
  }

  if (text.length < minLength) {
    return`${fieldName} must have ${minLength} characters or more`;
  }

  if (text.length > maxLength) {
    return`${fieldName} must not have more than ${maxLength} characters`;
  }
  return ''
};

export const ValidateDateTime = (
  fieldName: string,
  datetimeString: string,
  errorRef: Ref<string>
) => {
  errorRef.value = "";

  if (datetimeString === "") {
    errorRef.value = `${fieldName} is required`;
  }

  if (new Date(datetimeString) < new Date()) {
    errorRef.value = `${fieldName} must be in the future`;
  }

 
};
export function ValidateEmail(email: string): string {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if( !regex.test(email)) {return "Please enter valid email"}

  return ''
}


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

function containsNonAscii(input: string): boolean {
    return /[^\x00-\x7F]/.test(input) // Checks if any non-ASCII character is present
  }
