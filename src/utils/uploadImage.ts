import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";

export const uploadImage = async (file?: File) => {
  try {
    if (!file) {
      throw new Error("You must select an image to upload");
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = fileName;

    await supabase.storage.from("images").upload(filePath, file);

    return { filePath, fileName };
  } catch (e) {
    if (e instanceof Error) {
    console.error("Upload failed:", e.message);
  } else {
    console.error("Unknown error", e);
  }
  }
};
