import { v2 as cloudinary } from 'cloudinary';

// Validate Cloudinary config
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.warn('Cloudinary configuration is missing. Image uploads will not work.');
}

cloudinary.config({
  cloud_name: cloudName || '',
  api_key: apiKey || '',
  api_secret: apiSecret || '',
  secure: true,
});

export default cloudinary;

export const uploadImage = async (file: File | Buffer): Promise<string> => {
  let buffer: Buffer;
  
  if (file instanceof File) {
    const bytes = await file.arrayBuffer();
    buffer = Buffer.from(bytes);
  } else {
    buffer = file;
  }

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'image',
          folder: 'ap-cake',
        },
        (error: any, result: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(result?.secure_url || '');
          }
        }
      )
      .end(buffer);
  });
};

