// formData.js
export const createImageFormData = (file, lang, tone) => {
  const formData = new FormData();
  formData.append("image", file); // must match multer field name
  formData.append("lang", lang);
  formData.append("tone", tone);
  return formData;
};
