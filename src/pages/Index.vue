<template>
  <MainModal />
</template>

<script>
import { defineComponent, ref } from "vue";
import MainModal from "src/components/modal/MainModal";
export default defineComponent({
  name: "MainLayout",

  components: {
    MainModal,
  },

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
