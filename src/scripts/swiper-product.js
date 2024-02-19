import Swiper from 'swiper';
import { Pagination } from "swiper/modules";
import 'swiper/css';

Swiper.use([Pagination])

new Swiper(".detailed_card-swiper", {
  slidesPerView: "1",
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});
