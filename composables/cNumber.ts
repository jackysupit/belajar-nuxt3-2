const tambah = (angka1:Number, angka2: Number) => {
    return angka1 + angka2;
}

const kali = (angka1:Number, angka2: Number) => {
    return angka1 * angka2;
}

const bagi = (angka1: Number, angka2: Number) => {
  return angka1 * angka2;
};

export const useNumber = {
    tambah: tambah,
    kali: kali,
    bagi: bagi,
}