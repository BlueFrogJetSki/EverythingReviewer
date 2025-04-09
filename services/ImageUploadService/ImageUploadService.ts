import imageCompression from 'browser-image-compression';

//get nuxt config
const config = useRuntimeConfig();

async function getImageUploadUrl(imageName: string): Promise<string> {
  const getSecureUrlServiceUrl = config.public.secureUrlService;

  let url = `${getSecureUrlServiceUrl}key=${imageName}`;

  try {
    const res = await fetch(url);

    const data = (await res.json()) as any;
    //data will have a secure_url
    return data.secure_url;
  } catch (error) {
    console.log(error);
    throw error;
  }
}



function generateUniqueImageName(file:File) {
  const ext = file.name.split('.').pop(); // get file extension
  const uuid = crypto.randomUUID(); // generates a unique ID
  return `${uuid}.${ext}`;
}

function isImageFile(file:File) {
  return file.type.startsWith('image/');
}

async function  resizeAndCompressImage (file: File): Promise<File> {

  const maxSizeMB = 1;
  const maxWidthOrHeight = 1024;
  const useWebWorker = true;

  const options = {
    maxSizeMB: maxSizeMB, // max size in MB
    maxWidthOrHeight: maxWidthOrHeight, // resize if larger
    useWebWorker: useWebWorker,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Image compression error:', error);
    throw error;
  }
}
//validate file is an image
//resize the image if nesscessary
//upload file from event to s3 bucket
//throws a ton of erros if smth goes wrong, be prepared :>
export async function handleImageUpload(file: File) {
  const formData = new FormData();
  const fileName = generateUniqueImageName(file)
  let secure_url = null;

  if(!isImageFile(file)) {throw("invalid file type")}

  if (file == null) {
    throw("Invalid file or file missing")
  }

  file = await resizeAndCompressImage(file)

  formData.append("file", file);

  secure_url = await getImageUploadUrl(fileName);

  if (secure_url == null)
    throw ("failed to get secure url to upload image due to server error");

  //upload to s3 bucket
  const res = await fetch(secure_url, {
    method: "PUT",
    headers: { "Content-Type": "multipart/form-data" },
    body: file,
  });

  if (!res.ok) {
    throw (`failed to upload image status code : ${res.status}`);
  }

  return secure_url.split('?')[0]


}



