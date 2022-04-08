<template>
  <div>
    <q-page class="flex flex-center">
      <MainModal />
    </q-page>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import MainModal from "src/components/modal/MainModal";
export default defineComponent({
  components: { MainModal },
  name: "PageIndex",
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
