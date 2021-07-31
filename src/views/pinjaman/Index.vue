<template>
  <div class="home">
    <Slider />
    <hr class="my-3">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Kode Pinjaman</th>
      <th scope="col">Nama Peminjam</th>
      <th scope="col">NIK Peminjam</th>
      <th scope="col">Jumlah Pinjaman</th>
      <th scope="col">Jaminan Pinjaman</th>
      <th scope="col">Status Pinjaman</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(pinjaman, index) in Pinjamen" :key="index">
      <td>{{ pinjaman.nama }}</td>
      <td>{{ pinjaman.no_tlp }}</td>
      <td>{{ pinjaman.alamat }}</td>
      <td>{{ pinjaman.nama }}</td>
      <td>{{ pinjaman.no_tlp }}</td>
      <td>{{ pinjaman.alamat }}</td>
      <td> 
        <router-link class="btn btn-warning" :to="{name: 'Editpinjaman', params:{id:pinjamen.id}}">Edit</router-link>
        <button @click.prevent="pinjamanDelete(pinjaman.id)" class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>

import axios from 'axios'

// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { onMounted, ref } from 'vue'
  
export default {
  name: 'Home',
  components: {
    Slider,
        
  },

  setup(){
    let pinjamen = ref([])

    onMounted(() => {
      axios.get('localhost:8000/api/pinjaman/')
      .then(response => {
        pinjamen.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function pinjamanDelete(id){
      axios.delete(`localhost:8000/api/pinjaman/${id}`)
      .then(() =>{
        let x = this.pinjamen.map(pinjamen => pinjamen.id).indexOf(id);
        this.pinjamen.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }

    return  {
      pinjamen,
      pinjamanDelete
    }
  }
    
};
</script>
