export const ValidateJWT = async () => {
const config = useRuntimeConfig()
const url = `${config.public.authService}/validate`
    try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`,
            }
        })
        console.log(res)
        if(!res.ok){
            return false
        }
    
        return true
    } catch (error) {
        return false
    }
    

    
}