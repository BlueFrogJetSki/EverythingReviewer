import type { IProfile } from "~/Interfaces/IProfile";

export const editProfile = async (model: IProfile) => {
  const config = useRuntimeConfig();
  const profileServiceUrl = config.public.profileService;

  const res = await fetch(profileServiceUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
    },
    body:JSON.stringify(model)
  });

  const data = await res.json();
  console.log(data)

  if (!res.ok) {
    return data.message;
  } else {
    return "Profile updated sucessfully";
  }
};
