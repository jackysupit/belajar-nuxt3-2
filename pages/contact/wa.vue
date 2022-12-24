<template>
    <div>
        <h1 class="title">
            ini route /contact/wa
        </h1>
        <br/>
        
ICONS: <br/>
<Icon name="logos:google-icon"></Icon> <br/>
<Icon name="logos:facebook"></Icon> <br/>
<Icon name="logos:apple" fill="#97a3b6"></Icon> <br/>


        angka = {{ angka }} <hr/>
        nama = {{ nama }} <hr/>       

        getKali = {{ getKali }} <hr/>        
        getTambah = {{ getTambah }} <hr/>        
        getKurang = {{ getKurang }} <hr/>        


<button class="btn btn-primary" @click="tambah" >Tambah</button>
<button class="btn btn-primary" @click="kurang" >Kurang</button>
<button class="btn btn-primary" @click="menambah" >menambah</button>
<button class="btn btn-primary" @click="mengurang" >mengurang</button>

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