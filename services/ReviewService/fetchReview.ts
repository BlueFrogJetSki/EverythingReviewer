

export const fetchReview = async (name:string, resultRef:Ref<string>) => {
    const config = useRuntimeConfig();
    const uploadReviewUrl = config.public.fetchReviewService;

    name = name.toUpperCase()

    let url = `${uploadReviewUrl}/${name}`;


    
    console.log(url)
    
    const res = await fetch(url , {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
        }    
    });

    console.log(res)

    if(res.status == 404) {
        resultRef.value = `No reviews yet, be the first to review this item!`
        return []
    }

    if (!res.ok) {
        resultRef.value = `${res.status} failed to upload review`
        return []
    }else {
        const data =await res.json()
        console.log(data)
        return data
    }


  
}