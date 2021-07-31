<template>
<h1 align="center"> Rekapitulasi Data Pinjaman Online </h1>
<img src="../assets/logo-cic.jpg">
<Slider />
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'Slider',
  components: {
        Slider
  }
}

</script>
<style>
img {
  height: 500px;
  width: 1100px;
}
</style>
