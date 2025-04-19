import type { IReviewUpload } from "~/Interfaces/IReview";

export const uploadReview = async (name:string, model:IReviewUpload, resultRef:Ref<string>) => {
    const config = useRuntimeConfig();
    const uploadReviewUrl = config.public.uploadReviewService;

  let url = `${uploadReviewUrl}ItemName=${name}`;


  try {
    console.log(url)
    
    const res = await fetch(url , {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${sessionStorage.getItem('jwt')}`,
        },
        body:JSON.stringify(model)
    });

    console.log(res)

    if (!res.ok) {
        resultRef.value = `${res.status} failed to upload review`
        return false
    }else {
        return true
    }


  } catch (error) {
    throw error;
  }
}