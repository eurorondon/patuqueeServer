import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dkvgwj9ow",
  api_key: "378898854247796",
  api_secret: "93LJNmRJzBZ6UxFzFTlPUBBVUno",
});

export const uploadImage = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "Patuquee/Productos",
  });
};

export const uploadImageComprobante = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "Patuquee/ComprobantesDePago",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
