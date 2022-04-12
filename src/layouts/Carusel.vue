<template>
  <q-carousel
    class="carusel"
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
  >
    <q-carousel-slide :name="1" img-src="fotos/photo_2022-04-12_11-09-34.jpg" />
    <q-carousel-slide :name="2" img-src="fotos/photo_2022-04-12_11-09-47.jpg" />
    <q-carousel-slide :name="3" img-src="fotos/photo_2022-04-12_11-09-51.jpg" />
    <q-carousel-slide :name="4" img-src="fotos/photo_2022-04-12_11-09-55.jpg" />
    <q-carousel-slide :name="5" img-src="fotos/photo_2022-04-12_11-10-00.jpg" />
    <q-carousel-slide :name="6" img-src="fotos/photo_2022-04-12_11-10-04.jpg" />
    <q-carousel-slide :name="7" img-src="fotos/photo_2022-04-12_11-10-10.jpg" />
    <q-carousel-slide :name="8" img-src="fotos/photo_2022-04-12_11-10-16.jpg" />
    <q-carousel-slide :name="9" img-src="fotos/photo_2022-04-12_11-10-19.jpg" />
    <q-carousel-slide
      :name="10"
      img-src="fotos/photo_2022-04-12_11-10-24.jpg"
    />
  </q-carousel>
</template>

<script>
import { ref } from "vue";
export default {
  components: {},
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style lang="scss" scoped>
.carusel {
  width: 100%;
  height: 690px;
}
@media (max-width: 1700px) {
  .carusel {
    width: 100%;
    height: 507px;
  }
}
</style>
