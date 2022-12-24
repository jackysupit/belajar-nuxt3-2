import { defineStore } from "pinia";
import { iCounter } from '~~/interfaces/iCounter';
import { iProduk } from '~~/interfaces/iProduk';

//OOP

const dataDefault2:iProduk  = {
  id: 0,
  nama: "",
  keterangan: ""
}

const dataDefault: iCounter = {
  angka: 0,
  nama: "",
}



export const useCounterStore = defineStore("counter", {
  state: () :iCounter => dataDefault,
  getters: { //function yang read only
    getKali: (state) => state.angka * 2,
    getTambah: (state) => state.angka + 2,
    getKurang: (state) => ()=>{
      //perhitungan-2 rumit disini
      return state.angka - 2;
    },
  },
  actions: { //function yang editable 
    tambah() {
      this.angka++;

      //lakukan proses yang rumit disini
      //hit ke API 
      //ambil data dari API
      //POST data ke API 
    },
    kurang() {
      this.angka--;
    },
  },
});