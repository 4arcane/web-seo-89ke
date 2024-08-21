<script>
import TopBarRight from "./components/TopBarRight.vue";
import HeaderDetail from './components/HeaderDetail.vue'
import FixFooter from "./components/FixFooter.vue";
import FooterDetail from "./components/FooterDetail.vue";
import ToTop from "./components/ToTop.vue";

export default {
  components: {
    TopBarRight,
    // TopBarLeft,
    HeaderDetail,
    FixFooter,
    FooterDetail,
    ToTop,
    // MyModal
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<template>
  <!-- <TopBarLeft /> -->
  <TopBarRight />
  <HeaderDetail />

  <router-view />

  <FixFooter />
  <FooterDetail />
  <ToTop />
  <!-- <MyModal /> -->
</template>

<style scoped></style>
