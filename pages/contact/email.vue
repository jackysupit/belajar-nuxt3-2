<template>
    <div>
        ini route /contact/email

        <div>
            Variable reactive jika dipanggil dari tempalte, tidak perlu .value <hr/>
            Nama = {{ nama }}
        </div>

        <ul>
            <li>
                <input name="name" @click="gantiNama('Andi')" type="radio"/> Andi 
            </li>
            <li>
                <input name="name" @click="gantiNama(123)" type="radio"/> Budi
            </li>
            <li>
                <input name="name" @click="gantiNama('Chintya')" type="radio"/> Chintya 
            </li>
            <li>
                <input name="name" @click="gantiNama(namaCounter)" type="radio"/> {{ namaCounter }}
            </li>
        </ul>


        <button @click="sayHello">Hello</button>
    </div>
</template>

<!-- composition API  milik Nuxt  -->
<script setup lang="ts">
import { useCounterStore } from '@/stores/sCounter';
import {storeToRefs} from 'pinia'; //membuat variable menjadi reactive 

definePageMeta({
    layout: "custom",
});
// const { $swal } = useNuxtApp();

const nama = ref(); //ini adalah deklarasi variable reactive

const sayHello = () => {
    useSwal.pesan(nama.value); //pemanggilan variable reactive dari script, butuh .value 
}

const gantiNama = (str) => {
    nama.value = str; //memanggil variable reactive dari script, butuh .value 
}
const { angka, nama: namaCounter } = storeToRefs(useCounterStore());



//di jquery ini seperti $.ready()
// onMounted(()=>{
//     $swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//     })
// })

</script>