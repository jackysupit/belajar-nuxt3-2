<template>
    <div>
        <h1>
            ini route /contact/wa
        </h1>


        angka = {{ angka }} <hr/>
        nama = {{ nama }} <hr/>       

        getKali = {{ getKali }} <hr/>        
        getTambah = {{ getTambah }} <hr/>        
        getKurang = {{ getKurang }} <hr/>        


<button @click="tambah" >Tambah</button>
<button @click="kurang" >Kurang</button>

<button @click="menambah" >menambah</button>
<button @click="mengurang" >mengurang</button>

    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/sCounter';
import {storeToRefs} from 'pinia'; //membuat variable menjadi reactive 

//ini meng-import function 
const { tambah, kurang } = useCounterStore();

//kita mengimport variable dengan storeToRefs
const { angka, nama, getKali, getTambah, getKurang } = storeToRefs(useCounterStore());


const menambah = () => {
    tambah();
}

const mengurang = () => {
    kurang();
}

</script>