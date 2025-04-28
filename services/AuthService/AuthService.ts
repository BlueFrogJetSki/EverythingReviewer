import type { ILoginModel } from "~/Interfaces/ILoginInModel";
import type { ISignUpModel } from "~/Interfaces/ISignUpModel";

export const handleSignUp = async (
  model: ISignUpModel,
  errorRef: Ref<string>
) => {
  const config = useRuntimeConfig();
  const url = `${config.public.authService}/signup`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(model),
    });
    if (!res.ok) {
      const error = await res.json();
      console.log(error)
      errorRef.value = error?.message?.RegistrationError?.errors?.[0]?.errorMessage || 'Unknown error';
      return false;
    }
    

    const data = await res.json();
    const token = data.token;
    sessionStorage.setItem("jwt", token);

    return true; // or res.status if no body is returned
  } catch (error: any) {
    errorRef.value = error.message;
    return false;
  }
};

export const handleLoginIn = async (
  model: ILoginModel,
  errorRef: Ref<string>
) => {
  const config = useRuntimeConfig();
  const url = `${config.public.authService}/login`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(model),
    });
    if (res.status == 401) {
      errorRef.value = "Incorrect email or password";
      return false;
    }
    if (!res.ok) {
      const error = await res.json();
      errorRef.value = error.message;
      return false;
    }

    const data = await res.json();
    const token = data.token;
    sessionStorage.setItem("jwt", token);
    return true; // or res.status if no body is returned
  } catch (error: any) {
    errorRef.value = error.message;
    return false;
  }
};
