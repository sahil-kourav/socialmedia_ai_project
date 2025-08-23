import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { uploadImage } from "../api/imageApi";
import LanguageDropdown from "./LanguageDropdown";
import ToneDropdown from "./ToneDropdown";
import Loader from "./Loader";
import CopyButton from "./CopyButton";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";

const ImageUploader = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [imgLink, setImgLink] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const imagedata = async (data) => {
    if (!isAuthenticated) {
      toast.error("Please login first to upload images.");
      return;
    }

    try {
      setLoading(true);
      setCaption("");

      const file = data.file[0];
      const language = data.language?.value;
      const tone = data.tone?.value;
      setImgLink(URL.createObjectURL(file));
      const res = await uploadImage(file, language, tone);
      setCaption(res.data.post.caption);
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (errors.file) {
      toast.error(errors.file.message);
    }
  }, [errors.file]);

  return (
    <div className="flex flex-col items-center mt-15 gap-8 p-6 rounded-lg lg:flex-row xl:gap-[20%] lg:justify-between lg:px-[10%] xl:px-[10%] lg:items-baseline">
      <div className="flex justify-center flex-col items-center gap-5">
        <h1 className="font-bold text-[#34495E] text-2xl sm:text-3xl">
          Upload Image
        </h1>
        <form
          onSubmit={handleSubmit(imagedata)}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col items-center gap-4">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer w-65 h-35 md:w-120 lg:w-100 xl:w-120 md:h-40  flex flex-col justify-center items-center border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-100 transition-all"
            >
              <span className="text-gray-500">Click to upload image</span>
            </label>

            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              {...register("file", {
                required: "Image is required",
                onChange: (e) => {
                  const file = e.target.files && e.target.files[0];
                  if (file instanceof Blob) {
                    setImgLink(URL.createObjectURL(file));
                  }
                },
              })}
            />

            {imgLink && (
              <img
                src={imgLink}
                alt="Preview"
                className="max-w-xs rounded border border-gray-300"
              />
            )}

            {errors.file && (
              <p className="text-red-500">{errors.file.message}</p>
            )}
          </div>

          {/* Language + Tone */}
          <div className="flex justify-center flex-col gap-2 md:flex-row md:items-center mt-5 mb-2">
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <LanguageDropdown
                  value={field.value?.value || null}
                  onChange={(option) => field.onChange(option)}
                />
              )}
            />
            <Controller
              name="tone"
              control={control}
              render={({ field }) => (
                <ToneDropdown
                  value={field.value?.value || null}
                  onChange={(option) => field.onChange(option)}
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="mt-4 cursor-pointer px-6 py-2 md:px-18 md:text-2xl bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-200"
          >
            Generate Caption
          </button>
        </form>
      </div>
      <div>
        <div className="flex justify-center flex-col items-center gap-5 lg:w-[35vw] xl:w-[30vw] w-70 sm:w-80 md:w-100">
          <h1 className="font-bold text-[#34495E] text-2xl sm:text-3xl">
            Caption
          </h1>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 border rounded h-[50vh]"
          ></textarea>
          {caption ? <CopyButton caption={caption} /> : ""}
          {loading ? <Loader /> : null}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
