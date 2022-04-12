<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide class="cols">Slide 1</swiper-slide>
    <swiper-slide class="cols">Slide 2</swiper-slide>
    <swiper-slide class="cols">Slide 3</swiper-slide>
  </swiper>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
// more module style...

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  .cols {
    width: 100px;
    height: 100px;
    background-color: #000;
  }
}
</style>
