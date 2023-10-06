import fullpage from "fullpage.js";

new fullpage("#smooth_scroll", {
  licenseKey: 'C7F41B00-5E824594-9A5EFB99-B556A3D5',
  anchors: ["describe", "products", "about_us", "contacts_footer"],
  menu: "#menu",
  scrollingSpeed: 900,
  scrollOverflow: true,
  easing: "easeInOutCubic",
});
