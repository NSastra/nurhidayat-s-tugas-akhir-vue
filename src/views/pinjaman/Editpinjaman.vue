<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Data Peminjaman </h5>

   <div class="form-group">
    <label for="exampleInputEmail1">Kategori ID</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama" v-model="pinjamen.kategori_id">
  </div>
  <div class="alert alert-danger" v-if="validation.kategori_id">
    {{ validation.kategori_id=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Nama Peminjaman</label>
    <input type="text" class="form-control"  placeholder="Masukkan Nama" v-model="pinjamen.nama">
  </div>
  <div class="alert alert-danger" v-if="validation.nama">
    {{ validation.nama=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">NIK Peminjam</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon" v-model="pinjamen.nik">
  </div>
  <div class="alert alert-danger" v-if="validation.nik">
    {{ validation.nik=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Jumlah Pinjaman</label>
    <textarea type="text" class="form-control" placeholder="Masukkan Alamat" v-model="pinjamen.jumlah"> </textarea>
  </div>
  <div class="alert alert-danger" v-if="validation.jumlah">
    {{ validation.jumlah=[0] }}
  </div>
  
  <div class="form-group">
    <label for="exampleInputPassword1">Jaminan Peminjaman</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="pinjamen.jaminan">
  </div>
  <div class="alert alert-danger" v-if="validation.jaminan">
    {{ validation.jaminan=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Status Peminjaman</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="pinjamen.status">
  </div>
  <div class="alert alert-danger" v-if="validation.status">
    {{ validation.status=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {

    const pinjamen = reactive({
      nama: '',
      nik: '',
      jumlah: '',
      jaminan: '',
      status: '',
      kategori_id: ''
    })

    const kategori = ref([])

    const validation = ref ([])

    const router = useRouter()

    const route = useRoute()

    onMounted(() =>{
      axios.get(`localhost:8000/api/pinjaman/${route.params.id}/edit`)
      .then(response => {
        pinjamen.nama = response.data.data.nama
        pinjamen.nik = response.data.data.nik
        pinjamen.jumlah = response.data.data.jumlah
        pinjamen.jaminan = response.data.data.jaminan
      }).catch(error =>{
        console.log(error)
      })
      axios.get('localhost:8000/api/kategori/', {
        
      }).then((response) => {
        kategori.value = response.data.data
        console.log(response)
        })
      }).catch(error => {
        console.log(error)
      })

    function update(){
      let nama = pinjamen.nama
      let nik = pinjamen.nik
      let jumlah = pinjamen.jumlah
      let jaminan = pinjamen.jaminan

      axios.put(`localhost:8000/api/pinjaman/${route.params.id}`, {
        nama: nama,
        nik: nik,
        jumlah: jumlah,
        jaminan: jaminan
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      pinjamen,
      validation,
      router,
      update,
      route,
    }

  },
}
</script>