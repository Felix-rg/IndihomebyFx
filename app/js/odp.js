let map;
    let marker;

    function inisialisasiMap(lat, lng) {
      const posisi = [lat, lng];
      map = L.map('map').setView(posisi, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
      }).addTo(map);

      marker = L.marker(posisi).addTo(map)
        .bindPopup('Lokasi Anda Sekarang')
        .openPopup();

      // Isi koordinat ke form
      document.getElementById("latitude").value = lat.toFixed(6);
      document.getElementById("longitude").value = lng.toFixed(6);

      // Tambahkan event klik untuk pindah marker
      map.on('click', function (e) {
        const newLat = e.latlng.lat.toFixed(6);
        const newLng = e.latlng.lng.toFixed(6);
        marker.setLatLng(e.latlng);

        document.getElementById("latitude").value = newLat;
        document.getElementById("longitude").value = newLng;
      });
    }

    // Ambil lokasi pengguna
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          inisialisasiMap(lat, lng);
        },
        function (error) {
          alert("Gagal mendeteksi lokasi, menggunakan default Jakarta.");
          inisialisasiMap(-6.2, 106.8); // fallback: Jakarta
        }
      );
    } else {
      alert("Browser tidak mendukung geolocation.");
      inisialisasiMap(-6.2, 106.8);
    }

    // Kirim ke WA
    document.getElementById("lokasiForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const lat = document.getElementById("latitude").value;
      const lng = document.getElementById("longitude").value;
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      
      
      if (!lat || !lng) {
        alert("Lokasi belum tersedia.");
        return;
      }

      const nomorWA = "6281330578052";
      const pesan = `Halo, Saya Ingin cek ODP di WIlayah Saya\nNama : ${name}\nEmail : ${email}\n No Hp : ${phone}\nLokasi Saya : https://www.google.com/maps?q=${lat},${lng}`;
      const waURL = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

      window.open(waURL, '_blank');
    });


  document.addEventListener('DOMContentLoaded', function () {
    const sidenav = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(sidenav, {
      onOpenStart: () => {
        document.body.classList.add('sidebar-open');
      },
      onCloseEnd: () => {
        document.body.classList.remove('sidebar-open');
      }
    });
  });