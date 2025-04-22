export async function GoToSignUp() {
    await navigateTo('/users/signup');
}

export async function GoToHome() {
    await navigateTo('/');
    window.location.reload();
}

export async function GoToLogin() {
    await navigateTo('/users/login');
}