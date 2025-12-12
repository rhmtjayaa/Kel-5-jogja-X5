document.addEventListener('DOMContentLoaded', function() {

    // ===========================================
    // 1. Efek FADE-IN (UX Enhancement)
    // ===========================================
    const headerElement = document.querySelector('header.hero-image'); 
    const containerElement = document.querySelector('.container');

    // Perintah untuk membuat teks muncul
    setTimeout(() => {
        if (headerElement) {
            // Perubahan: Menggunakan string '1'
            headerElement.style.opacity = '1'; 
        }
        if (containerElement) {
            // Perubahan: Menggunakan string '1'
            containerElement.style.opacity = '1';
        }
    }, 100); 

    // ===========================================
    // 2. Setup Interaksi KULINER (Clickable Food Cards)
    //    Menghapus semua onclick="..." di HTML dan mengurusnya di JS
    // ===========================================
    const foodItems = document.querySelectorAll('.food-item');
    foodItems.forEach(item => {
        // Menghapus onclick dari HTML jika masih ada
        item.removeAttribute('onclick'); 

        item.addEventListener('click', function() {
            const foodNameElement = this.querySelector('strong');

            if (foodNameElement) {
                // Membersihkan teks dari emoji dan spasi yang tidak perlu
                const foodName = foodNameElement.textContent.trim();
                alert(`Anda memilih ${foodName}. Selamat menikmati cita rasa khas Yogyakarta!`);
            }
        });
    });

    // ===========================================
    // 3. Fungsi Tambahan untuk TOMBOL INTERAKTIF (Interactive Buttons)
    // ===========================================
    window.tampilkanInfo = function(sectionId) {
        let pesan = "";
        switch(sectionId) {
            case 'sejarah':
                pesan = "Anda telah memilih untuk mempelajari lebih lanjut. Kunjungi Museum Keraton untuk detail sejarah yang lebih mendalam!";
                break;
            case 'filosofi':
                pesan = "Sumbu Filosofi adalah warisan UNESCO. Simbol ini adalah panduan moral dan spiritual masyarakat Jawa.";
                break;
            case 'kesenian':
                pesan = "Galeri Kesenian dibuka setiap hari di kompleks Keraton. Jangan lewatkan pertunjukan Tari Klasik dan Wayang Kulit!";
                break;
            case 'kuliner':
                pesan = "Banyak warung Angkringan dan Gudeg terkenal di sekitar Malioboro. Selamat Mencoba!";
                break;
            case 'peta':
                window.open("https://visitingjogja.com/", '_blank'); 
                return; 
            default:
                pesan = "Informasi tambahan tersedia.";
        }
        alert(pesan);
    };
});