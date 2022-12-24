const { $swal } = useNuxtApp();

const pesan = (msg: string) => {
  $swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

export const useSwal = {
    pesan: pesan,
}