<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="store">
      <h5 class="card-title"> Tambah Data </h5>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama Peminjam</label>
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
    <label for="exampleInputPassword1">Jaminan</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="friend.jaminan">
  </div>
  <div class="alert alert-danger" v-if="validation.jaminan">
    {{ validation.jaminan=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Status Peminjaman</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="friend.status">
  </div>
  <div class="alert alert-danger" v-if="validation.status">
    {{ validation.status=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Kategori ID</label>
    <input type="text" class="form-control" placeholder="Masukkan Kode Group"  v-model="pinjamen.kategori_id">
  </div>
  <div class="alert alert-danger" v-if="validation.kategori_id">
    {{ validation.kategori_id=[0] }}
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
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

    const validation = ref([])

    const router = useRouter()

    onMounted(() => {
        axios.get('localhost:8000/api/pinjaman/', {
        
      }).then((response) => {
        pinjamen.value = response.data.data
        console.log(response)
        })
      }).catch(error => {
        console.log(error)
      })

    function store(){
      let nama = pinjamen.nama
      let nik = pinjamen.nik
      let jumlah = pinjamen.jumlah
      let jaminan = pinjamen.jaminan
      let status = pinjamen.status
      let kategori_id = pinjamen.kategori_id

      axios.post('localhost:8000/api/pinjaman/', {
        nama: nama,
        nik: nik,
        jumlah: jumlah,
        jaminan: jaminan,
        status: status,
        kategori_id: kategori_id
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }

    return {
      validation,
      router,
      store,
      pinjamen
    }

  },
}
</script>