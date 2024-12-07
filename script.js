// JavaScript untuk navigasi antar halaman dengan efek
function showPage(pageId) {
    // Ambil semua halaman
    const pages = document.querySelectorAll('.container');
  
    // Tambahkan animasi keluar (fade-out)
    pages.forEach(page => {
      if (page.classList.contains('active')) {
        page.classList.remove('active');
      }
    });
  
    // Setelah animasi keluar selesai, tampilkan halaman baru
    setTimeout(() => {
      document.getElementById(pageId).classList.add('active');
    }, 300);
  }
  
