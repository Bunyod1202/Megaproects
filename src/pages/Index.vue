<template>
  <q-page class="flex flex-center"> <MainModal /> </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import MainModal from "src/components/modal/MainModal";
export default defineComponent({
  components: { MainModal },
  name: "PageIndex",
  setup() {
    return {};
  },
});
</script>
