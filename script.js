function toggleMenu() {
  var overlay = document.getElementById("overlay-menu");
  if (overlay.style.height === "100%") {
    overlay.style.height = "0%";
  } else {
    overlay.style.height = "100%";
  }
}

function closeMenu() {
  document.getElementById("overlay-menu").style.height = "0%";
}

// document.addEventListener("DOMContentLoaded", function () {
//   var wisataDesaBtn = document.getElementById("wisataDesaBtn");
//   var wisataDesaDropdown = document.getElementById("wisataDesaDropdown");

//   wisataDesaBtn.addEventListener("click", function () {
//     var isHidden = wisataDesaDropdown.style.display === "none";
//     wisataDesaDropdown.style.display = isHidden ? "block" : "none";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Cek jika perangkat adalah layar sentuh
//   if ("ontouchstart" in window || navigator.maxTouchPoints) {
//     // Menonaktifkan hover untuk dropdown pada perangkat layar sentuh
//     document.querySelectorAll(".dropdown-content").forEach(function (item) {
//       item.classList.add("clickable");
//     });
//   }

//   // Event listener untuk klik pada dropdown
//   document.querySelectorAll(".dropdown > a").forEach((item) => {
//     item.addEventListener("click", function (event) {
//       event.preventDefault(); // Menghentikan link dari navigasi
//       let dropdownContent = event.target.nextElementSibling;
//       if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//       } else {
//         dropdownContent.style.display = "block";
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Cek jika perangkat adalah layar sentuh
  if ("ontouchstart" in window || navigator.maxTouchPoints) {
    document.querySelectorAll(".dropdown-content").forEach(function (item) {
      item.classList.add("clickable"); // Kode sebelumnya
    });
  }

  // Event listener untuk klik pada dropdown
  document.querySelectorAll(".dropdown > a").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan link dari navigasi
      event.stopPropagation(); // Menambahkan ini untuk mencegah event menggelembung ke atas
      let dropdownContent = event.target.nextElementSibling;
      // Toggle display
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        // Tutup dropdown lain jika ada yang terbuka
        document
          .querySelectorAll(".dropdown-content")
          .forEach(function (content) {
            content.style.display = "none"; // Memastikan dropdown lain tertutup
          });
        dropdownContent.style.display = "block";
      }
    });
  });

  // Menutup dropdown jika klik di luar
  window.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown-content").forEach(function (content) {
      if (!content.contains(e.target)) {
        content.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("linkTidakAktif");
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah aksi default, yaitu navigasi
    // Anda juga bisa menambahkan kode lain di sini jika perlu
  });
});
