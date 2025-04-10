import type { Ref } from "vue";

//check string length is >= length
//check string is valid (dosnt contain certain words)
//set error message
export const ValidateText = (
  fieldName: string,
  text: string,
  minLength: number = 1,
  maxLength: number = 80,
  errorRef: Ref<string>,
  invalidChars? : string[]
) => {
  //clear existing err message
  errorRef.value = "";

  if (text === "") {
    errorRef.value = `${fieldName} is required`;
  }

  if(containsNonAscii(text)){
    errorRef.value = `${fieldName} cannot contain non-ascii characters`;
  }

  if (text.length < minLength) {
    console.log(text.length);
    errorRef.value = `${fieldName} must have ${minLength} characters or more`;
  }

  if (text.length > maxLength) {
    errorRef.value = `${fieldName} must not have more than ${maxLength} characters`;
  }
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

function containsNonAscii(input: string): boolean {
    return /[^\x00-\x7F]/.test(input) // Checks if any non-ASCII character is present
  }
