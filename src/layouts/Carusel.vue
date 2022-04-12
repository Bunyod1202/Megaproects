<template>
  <q-carousel
    class="carusel"
    swipeable
    animated
    v-model="slide"
    thumbnails
    infinite
  >
    <q-carousel-slide :name="1" img-src="/foto/photo_2022-04-12_11-09-34.jpg" />
    <q-carousel-slide
      :name="2"
      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
    />
    <q-carousel-slide
      :name="3"
      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
    />
    <q-carousel-slide
      :name="4"
      img-src="https://cdn.quasar.dev/img/quasar.jpg"
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
  height: 75vh;
}
</style>
