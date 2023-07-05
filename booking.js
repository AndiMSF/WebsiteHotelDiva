let registForm = () => {
    const username = document.getElementById('nama').value
    const jumlahOrang = document.getElementById('jumlahOrang').value
    const nomorTelepon = document.getElementById('nomorTelepon').value
    const hotelDropdown = document.getElementById("hotel");
    const pembayaranDropdown = document.getElementById("pembayaran");

    // Retrieve the selected values
    const selectedHotel = hotelDropdown.value;
    const selectedPembayaran = pembayaranDropdown.value;

    // Use the selected values as needed
    console.log("Selected Hotel:", selectedHotel);
    console.log("Selected Pembayaran:", selectedPembayaran);


    if (!username || !jumlahOrang || !nomorTelepon ||!pembayaranDropdown ||!hotelDropdown) {
        alert("Lengkapi Data!")
    } else {
        const acc = confirm('Apakah data sudah benar?')
        if(acc) {
            alert('Pendaftaran berhasil! \n Username : '+username+' \n Jumlah Orang : '+jumlahOrang+' \n Nomor Telepon : '+nomorTelepon+ ' \n Hotel : '+selectedHotel+' \n Metode Pembayaran : '+ selectedPembayaran)
        } else {
            alert('Pendaftaran gagal!')
        }
    } 
}
