export const fetchProfile = async () => {
    const config = useRuntimeConfig();
    const profileServiceUrl = config.public.profileService;
    
    
    const res = await fetch(profileServiceUrl , {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`
        }    
    });

    console.log(res)

    if (!res.ok) {
        return null
    }else {
        const data =await res.json()
        console.log(data)
        return data
    }


  
}