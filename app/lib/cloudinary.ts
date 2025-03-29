import { v2 as cloudinary } from "cloudinary";

//config cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: string, folder: string) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: `exute_shop/${folder}`,
      transformation: { width: 300, height: 300, crop: "fill" },
      resource_type: "image",
    });
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
}
