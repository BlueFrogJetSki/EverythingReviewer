export function GoToSignUp() {
    return  navigateTo('/users/signup');
}

export async function GoToHome() {
    await navigateTo('/');
    window.location.reload();
}

export function GoToLogin() {
    return  navigateTo('/users/login');
}

export function GoToProfile() {
    return navigateTo('/users/profile');
}

export function GoToEditProfile() {
    return navigateTo('/users/profile/edit');
}
export function GoToItems(item:string) {
    console.log(item)
    if (item === '') { return }
    return navigateTo(`/items/${item}`);
  
  }