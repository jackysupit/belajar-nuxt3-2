<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>

ICONS: <br/>
<Icon name="logos:google-icon"></Icon> <br/>
<Icon name="logos:facebook"></Icon> <br/>
<Icon name="logos:apple" fill="#97a3b6"></Icon> <br/>




hasilTambah = {{hasilTambah}} <hr/>
hasilKali = {{hasilKali}} <hr/>
hasilBagi = {{hasilBagi}} <hr/>
haloNama = {{haloNama}} <hr/>
hasilEncrypt = {{hasilEncrypt}} <hr/>


  </div>
</template>
<script setup lang="ts">
  const angka1 = 10;
  const angka2 = 20;
  const nama = "Andi";

  const hasilTambah = useNumber.tambah(angka1, angka2);
  const hasilKali = useNumber.kali(angka1, angka2);
  const hasilBagi = useNumber.bagi(angka1, angka2);
  const haloNama = useNama.hello(nama);
  const hasilEncrypt = useNama.encrypt(nama);



</script>
