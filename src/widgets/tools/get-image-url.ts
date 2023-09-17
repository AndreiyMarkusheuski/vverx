const getImageURL = (img_url: string) => {
  const gallery = Object.values(
    import.meta.glob("@assets/*.{png,svg,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  );
  return gallery.filter((item) => item.includes(img_url))[0];
};

export default getImageURL;
