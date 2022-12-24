<template>
    <div>
        <h1>ini route /contact</h1>

        angka = {{ angka }} <hr/>
        nama = {{ nama }} <hr/>
    </div>
</template>
<script setup lang="ts">
/**
 * ini conventionnya es6
 * semua import, harus di baris paling atas 
 * 
 * Hanya karena kita bisa, tidak berarti kita harus melakukan itu
 * Just because we can do it, doesn't mean we have to do it!
 * 
 */
import { useCounterStore } from '@/stores/sCounter';
import {storeToRefs} from 'pinia'; //membuat variable menjadi reactive 
const store = useCounterStore();
const { angka, nama } = storeToRefs(useCounterStore());

</script>