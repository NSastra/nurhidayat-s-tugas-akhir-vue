<template>
<div class="row">
    <Slider />
  <div class="card text-center col-4 mt-3" v-for="(kategori, index) in kategoris" :key="index">
      <div class="card">
            <div class="card-header">{{kategori.jenis}}</div>
                <div class="card-body">
                <h5 class="card-title"> {{kategori.jangka}} </h5>
                <p class="card-text">
                {{kategori.nilai}}
                </p>
                <p class="card-text"> Daftar Peminjam : <br/>
                {{kategori.pinjamen.nama}}
                </p>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["kategoris"],
}
</script>

<style>

</style>