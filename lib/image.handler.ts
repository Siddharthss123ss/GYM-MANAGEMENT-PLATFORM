import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export interface UploadResult {
    url: string;
    public_id: string;
}

export class ImageHandler {

    static async handleUpload(file: Blob, folder = "uploads"): Promise<UploadResult> {
        const buffer = Buffer.from(await file.arrayBuffer());

        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                {
                    folder,
                    resource_type: "image",
                    transformation: [
                        { width: 400, height: 400, crop: "fill", gravity: "face" },
                        { quality: "auto", fetch_format: "auto" }
                    ],
                },
                (error, result) => {
                    if (error || !result) return reject(error);
                    resolve({
                        url: result.secure_url,
                        public_id: result.public_id,
                    });
                }
            ).end(buffer);
        });
    }

    static async safeDelete(public_id?: string) {
        if (!public_id) return;
        try {
            await cloudinary.uploader.destroy(public_id);
        } catch (err) {
            console.error("Cloudinary delete failed:", err);
        }
    }
}