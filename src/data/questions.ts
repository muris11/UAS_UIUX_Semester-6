import type { Question, Topic } from "@/types/quiz";

export const topics: Topic[] = [
  "UI/UX Dasar",
  "Landing Page",
  "Scrolling",
  "Figma Prototype",
  "Component",
  "Variable",
];

export const questions: Question[] = [
  {
    id: 1,
    topic: "Landing Page",
    difficulty: "Mudah",
    question:
      "Sebuah landing page memiliki terlalu banyak teks, warna tidak konsisten, serta tombol call-to-action yang kurang jelas. Dampak yang paling mungkin terjadi adalah …",
    options: [
      "Pengguna lebih cepat memahami tujuan halaman",
      "Pengguna kesulitan memahami tujuan utama halaman",
      "Website otomatis menjadi lebih responsive",
      "Backend aplikasi menjadi lebih cepat",
      "Database menjadi lebih ringan",
    ],
    answerIndex: 1,
    explanation:
      "Landing page yang terlalu ramai dan CTA tidak jelas membuat tujuan halaman sulit dipahami, sehingga pengguna mudah meninggalkan website.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 2,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Sebuah aplikasi mobile memiliki tampilan modern dan animasi menarik. Namun, pengguna membutuhkan waktu lama menyelesaikan tugas utama karena navigasi terlalu rumit. Kesimpulan paling tepat adalah …",
    options: [
      "Tampilan visual menarik selalu menjamin UX baik",
      "UX penting karena aplikasi harus mudah digunakan selain terlihat menarik",
      "Animasi harus dihapus seluruhnya",
      "Desain tidak membutuhkan user testing",
      "Warna adalah satu-satunya faktor keberhasilan UX",
    ],
    answerIndex: 1,
    explanation:
      "UI yang menarik tidak cukup. UX menilai kemudahan, efisiensi, dan kenyamanan pengguna dalam menyelesaikan tugas.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 3,
    topic: "Landing Page",
    difficulty: "Sedang",
    question:
      "Sebuah startup memperbaiki landing page dengan menyusun ulang hero section, memperjelas CTA, dan mengurangi elemen visual yang terlalu ramai. Tujuan utama perbaikan tersebut adalah …",
    options: [
      "Mengurangi penggunaan database",
      "Meningkatkan performa backend",
      "Mempermudah pengguna memahami tujuan aplikasi dan meningkatkan konversi",
      "Mengubah aplikasi menjadi responsive otomatis",
      "Mengurangi kebutuhan maintenance server",
    ],
    answerIndex: 2,
    explanation:
      "Hero section dan CTA berfungsi mengarahkan perhatian pengguna pada pesan utama serta tindakan yang diharapkan.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 4,
    topic: "Scrolling",
    difficulty: "Sedang",
    question:
      "Pada aplikasi e-commerce, pengguna dapat melihat daftar produk terus-menerus tanpa menekan tombol 'halaman berikutnya', tetapi sulit menemukan footer karena konten terus dimuat. Teknik tersebut adalah …",
    options: [
      "Horizontal scrolling",
      "Fixed scrolling",
      "Overlay scrolling",
      "Infinite scrolling",
      "Smart navigation scrolling",
    ],
    answerIndex: 3,
    explanation:
      "Infinite scrolling memuat konten terus menerus. Kelemahannya, footer dan informasi bawah halaman bisa sulit ditemukan.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 5,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Desain aplikasi yang baik tidak hanya fokus pada tampilan visual menarik, tetapi juga usability dan accessibility agar dapat digunakan oleh berbagai jenis pengguna.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Desain UI/UX yang baik harus memperhatikan tampilan, kemudahan penggunaan, dan aksesibilitas pengguna.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 6,
    topic: "Scrolling",
    difficulty: "Sedang",
    question:
      "Infinite scrolling selalu menjadi pilihan terbaik untuk seluruh jenis aplikasi karena tidak pernah menimbulkan masalah navigasi maupun pengalaman pengguna.",
    options: ["Benar", "Salah"],
    answerIndex: 1,
    explanation:
      "Infinite scrolling tidak selalu cocok. Pada beberapa kasus, pengguna bisa kehilangan konteks, sulit menemukan footer, atau sulit kembali ke item tertentu.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 7,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Animasi transisi pada aplikasi mobile banking dibuat agar perpindahan halaman terasa halus dan pengguna memahami perubahan konteks. Manfaat utama animasi tersebut adalah …",
    options: [
      "Menambah ukuran file aplikasi",
      "Membantu pengguna memahami alur interaksi dan memberi pengalaman nyaman",
      "Mengurangi penggunaan warna",
      "Menghilangkan kebutuhan prototype",
      "Mengganti fungsi navigasi utama",
    ],
    answerIndex: 1,
    explanation:
      "Animasi yang tepat membantu memberi feedback, menjelaskan perubahan state, dan membuat perpindahan antarlayar terasa natural.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 8,
    topic: "Figma Prototype",
    difficulty: "Mudah",
    question:
      "Prototype dalam Figma memungkinkan designer melakukan simulasi interaksi antarhalaman sehingga alur penggunaan dapat diuji sebelum coding.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Prototype digunakan untuk menguji alur desain, navigasi, dan interaksi sebelum aplikasi dikembangkan.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 9,
    topic: "Component",
    difficulty: "Mudah",
    question:
      "Dalam Figma, component digunakan untuk membuat elemen desain berulang sehingga ketika component utama diperbarui, elemen turunannya ikut berubah otomatis.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Component membantu menjaga konsistensi elemen berulang seperti button, card, form, dan navbar.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 10,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Dalam aplikasi layanan kesehatan, pengguna lanjut usia kesulitan membaca teks karena font kecil dan kontras rendah. Solusi terbaik adalah …",
    options: [
      "Menambahkan animasi lebih banyak",
      "Mengurangi ukuran tombol",
      "Meningkatkan accessibility dengan memperbesar font dan memperjelas kontras",
      "Menghapus icon dan mengganti dengan teks panjang",
      "Menggunakan background lebih ramai",
    ],
    answerIndex: 2,
    explanation:
      "Aksesibilitas ditingkatkan melalui ukuran teks yang nyaman, kontras jelas, dan elemen interaktif yang mudah digunakan.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 11,
    topic: "Variable",
    difficulty: "Sedang",
    question:
      "Feature variable pada Figma hanya dapat digunakan untuk menyimpan warna utama dan tidak bisa untuk typography, spacing, maupun ukuran elemen.",
    options: ["Benar", "Salah"],
    answerIndex: 1,
    explanation:
      "Variable dapat digunakan untuk mengelola nilai desain seperti color, typography, spacing, dan sizing secara terpusat.",
    source: "Soal fix/Kuis 2 UI/UX Design + Praktikum 12",
  },
  {
    id: 12,
    topic: "Landing Page",
    difficulty: "Mudah",
    question:
      "Dalam landing page produk digital, terdapat headline jelas, subheadline singkat, ilustrasi produk, serta CTA mencolok. Prinsip desain paling dominan adalah …",
    options: [
      "Data redundancy",
      "Error prevention",
      "Server scalability",
      "Network optimization",
      "Visual hierarchy",
    ],
    answerIndex: 4,
    explanation:
      "Visual hierarchy mengatur urutan perhatian pengguna melalui ukuran, warna, posisi, jarak, dan penekanan elemen.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 13,
    topic: "Landing Page",
    difficulty: "Mudah",
    question:
      "Visual hierarchy membantu pengguna memahami informasi paling penting terlebih dahulu melalui ukuran teks, warna, posisi elemen, dan penempatan CTA.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Hierarki visual memandu mata pengguna dari informasi utama ke informasi pendukung.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 14,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Seorang desainer membuat microinteraction berupa perubahan warna dan efek bayangan ketika tombol 'Login' ditekan. Fungsi utama microinteraction adalah …",
    options: [
      "Mengurangi kapasitas memori aplikasi",
      "Memberikan feedback visual terhadap tindakan pengguna",
      "Menggantikan fungsi navigasi",
      "Mempercepat coding backend",
      "Menambahkan dekorasi tanpa fungsi",
    ],
    answerIndex: 1,
    explanation:
      "Microinteraction memberi sinyal bahwa aksi pengguna sudah diterima sistem, misalnya hover, tap, loading, atau sukses.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 15,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Konsistensi warna, typography, icon, component, dan pola navigasi penting karena membantu pengguna memahami cara penggunaan aplikasi.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Konsistensi mengurangi beban kognitif pengguna karena pola yang sama mudah dikenali kembali.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 16,
    topic: "Variable",
    difficulty: "Sedang",
    question:
      "Sebuah tim menggunakan variable Figma untuk typography, warna primer, dan spacing. Saat rebranding, seluruh tampilan diperbarui dari satu variable utama. Fungsi variable adalah …",
    options: [
      "Membuat animasi lebih cepat",
      "Mengelola style desain secara terpusat dan konsisten",
      "Menghubungkan aplikasi dengan database",
      "Mengubah prototype menjadi aplikasi native",
      "Menghapus seluruh layer otomatis",
    ],
    answerIndex: 1,
    explanation:
      "Variable bekerja seperti design token, yaitu nilai desain yang bisa dipakai berulang dan diperbarui secara terpusat.",
    source: "Soal fix/Kuis 2 UI/UX Design + Praktikum 12",
  },
  {
    id: 17,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Aplikasi dapat dikatakan memiliki UX baik hanya karena tampilannya modern dan animasinya menarik, meskipun pengguna kesulitan mencari menu.",
    options: ["Benar", "Salah"],
    answerIndex: 1,
    explanation:
      "UX tidak hanya soal visual. UX baik harus memudahkan pengguna mencapai tujuan dengan jelas dan efisien.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 18,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Pada usability testing aplikasi tiket, pengguna kesulitan menemukan tombol checkout karena posisinya tidak konsisten di setiap halaman. Masalah utama adalah kurangnya …",
    options: [
      "Variasi warna",
      "Konsistensi antarmuka pengguna",
      "Animasi transisi",
      "Efek scrolling",
      "Integrasi backend",
    ],
    answerIndex: 1,
    explanation:
      "Posisi dan pola elemen penting harus konsisten agar pengguna tidak perlu belajar ulang di setiap halaman.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 19,
    topic: "Component",
    difficulty: "Mudah",
    question:
      "Designer membuat button component yang digunakan berulang. Ketika warna utama tombol diubah pada component utama, seluruh tombol lain ikut berubah. Keuntungan utama component adalah …",
    options: [
      "Mengurangi penggunaan internet",
      "Mempercepat rendering mobile",
      "Mempermudah konsistensi dan efisiensi pengelolaan desain",
      "Menghilangkan kebutuhan user testing",
      "Mengubah desain menjadi source code otomatis",
    ],
    answerIndex: 2,
    explanation:
      "Component mempercepat perubahan desain karena satu master component dapat memengaruhi banyak instance.",
    source: "Soal fix/Kuis 2 UI/UX Design + Praktikum 11",
  },
  {
    id: 20,
    topic: "UI/UX Dasar",
    difficulty: "Mudah",
    question:
      "Animasi dan transisi harus mempertimbangkan kenyamanan pengguna karena animasi berlebihan dapat mengganggu fokus pengguna saat menjalankan tugas utama.",
    options: ["Benar", "Salah"],
    answerIndex: 0,
    explanation:
      "Animasi harus bermakna, tidak terlalu lambat, tidak berlebihan, dan mendukung tugas pengguna.",
    source: "Soal fix/Kuis 2 UI/UX Design",
  },
  {
    id: 21,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Scrolling UI adalah pendekatan desain antarmuka yang menyusun konten secara …",
    options: [
      "Horizontal saja tanpa batas",
      "Vertikal sehingga pengguna dapat mengakses informasi dengan menggulir layar",
      "Acak agar tampilan terlihat unik",
      "Berdasarkan database server",
      "Berdasarkan jumlah pengguna aktif",
    ],
    answerIndex: 1,
    explanation:
      "Scrolling UI menyajikan konten secara vertikal mengikuti reading flow pengguna dari atas ke bawah.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 22,
    topic: "Landing Page",
    difficulty: "Mudah",
    question: "Dalam landing page berbasis scrolling, struktur section yang umum digunakan adalah …",
    options: [
      "Login, database, API, server, deployment",
      "Hero, fitur, testimoni, CTA, dan footer",
      "Navbar, coding, compiler, terminal",
      "Password, email, OTP, token",
      "Router, controller, model, migration",
    ],
    answerIndex: 1,
    explanation:
      "Landing page long-scroll biasanya disusun dari hero, fitur, bukti sosial/testimoni, CTA, dan footer.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 23,
    topic: "Landing Page",
    difficulty: "Sedang",
    question: "Tujuan penerapan top-to-bottom hierarchy pada landing page adalah …",
    options: [
      "Membuat pengguna membaca informasi secara acak",
      "Mengarahkan pengguna memahami informasi dari yang paling penting ke pendukung",
      "Menghilangkan semua tombol CTA",
      "Membuat halaman hanya bisa dibuka di desktop",
      "Mempercepat koneksi internet",
    ],
    answerIndex: 1,
    explanation:
      "Top-to-bottom hierarchy menyusun informasi utama di awal, lalu diikuti detail pendukung agar alur mudah dipahami.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 24,
    topic: "Scrolling",
    difficulty: "Sedang",
    question: "Horizontal scrolling di dalam vertical scrolling, seperti carousel kategori dalam halaman panjang, disebut juga …",
    options: ["Nested scrolling", "Fixed scrolling", "Error scrolling", "Backend scrolling", "Database scrolling"],
    answerIndex: 0,
    explanation:
      "Nested scrolling terjadi ketika satu arah scroll berada di dalam konteks scroll lain, misalnya carousel horizontal dalam halaman vertikal.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 25,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Penggunaan grid system pada tampilan kalender di UI bermanfaat untuk …",
    options: [
      "Membuat susunan tanggal lebih terstruktur dan mudah dipahami",
      "Menghapus seluruh elemen visual",
      "Mengubah kalender menjadi database",
      "Membuat tombol tidak bisa diklik",
      "Menghilangkan kebutuhan alignment",
    ],
    answerIndex: 0,
    explanation:
      "Grid system membantu menjaga alignment, konsistensi, dan keterbacaan susunan tanggal.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 26,
    topic: "Scrolling",
    difficulty: "Sedang",
    question: "Salah satu tantangan pada halaman scrolling yang terlalu panjang adalah …",
    options: [
      "Semua pengguna pasti membaca sampai akhir",
      "Risiko pengguna melewatkan informasi penting di bagian bawah",
      "Website tidak bisa memiliki gambar",
      "Prototype tidak dapat dibuat",
      "Warna otomatis menjadi tidak konsisten",
    ],
    answerIndex: 1,
    explanation:
      "Over-scrolling dapat membuat pengguna lelah, kehilangan fokus, atau melewatkan bagian penting.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 27,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Agar overflow scrolling dapat aktif di Figma, frame harus memiliki …",
    options: [
      "Konten yang melampaui batas frame",
      "Warna background hitam",
      "Minimal 10 halaman",
      "Koneksi ke database",
      "File ukuran besar",
    ],
    answerIndex: 0,
    explanation:
      "Overflow scrolling hanya relevan ketika konten lebih besar daripada batas frame sehingga ada bagian yang bisa digulir.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 28,
    topic: "Scrolling",
    difficulty: "Sedang",
    question: "Kesalahan umum saat membuat overflow scrolling di Figma adalah menggunakan group, bukan frame. Dampaknya adalah …",
    options: [
      "Konten menjadi tidak bisa overflow dengan benar",
      "Warna berubah otomatis",
      "Prototype langsung menjadi aplikasi native",
      "Semua layer terhapus",
      "Design system menjadi aktif otomatis",
    ],
    answerIndex: 0,
    explanation:
      "Frame memiliki batas dan perilaku overflow, sedangkan group cenderung mengikuti ukuran kontennya.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 29,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Overflow scrolling horizontal paling cocok digunakan untuk …",
    options: [
      "Carousel gambar atau konten yang digeser ke samping",
      "Form login satu kolom",
      "Halaman error 404",
      "Database admin",
      "Loading screen tanpa konten",
    ],
    answerIndex: 0,
    explanation:
      "Horizontal overflow sering dipakai pada carousel, gallery, tab, atau visual yang lebih lebar dari frame.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 30,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Overflow scrolling vertikal sering digunakan untuk …",
    options: [
      "Menampilkan konten tersembunyi di bagian bawah halaman",
      "Mengganti warna mode gelap",
      "Menghapus frame",
      "Mengubah component menjadi variable",
      "Membuat icon menjadi 3D",
    ],
    answerIndex: 0,
    explanation:
      "Vertical scrolling digunakan ketika tinggi konten melebihi area tampilan frame.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 31,
    topic: "Scrolling",
    difficulty: "Sedang",
    question: "Overflow scrolling horizontal dan vertikal secara bersamaan cocok digunakan untuk tampilan seperti …",
    options: [
      "Peta atau diagram besar yang perlu digeser ke segala arah",
      "Tombol login kecil",
      "Headline landing page",
      "Logo aplikasi",
      "Field password",
    ],
    answerIndex: 0,
    explanation:
      "Konten seperti peta, kanvas, atau diagram besar sering membutuhkan navigasi ke atas, bawah, kiri, dan kanan.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 32,
    topic: "Scrolling",
    difficulty: "Mudah",
    question: "Fungsi Clip Content pada Figma adalah …",
    options: [
      "Menyembunyikan konten yang melewati batas frame",
      "Menghapus semua layer secara permanen",
      "Mengubah prototype menjadi HTML",
      "Menambahkan database ke desain",
      "Mengganti font otomatis",
    ],
    answerIndex: 0,
    explanation:
      "Clip Content membuat frame seperti jendela yang hanya menampilkan konten di dalam batasnya.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 33,
    topic: "Scrolling",
    difficulty: "Sedang",
    question: "Fitur posisi tetap saat menggulir berguna untuk …",
    options: [
      "Membuat header atau navigation tetap diam ketika konten discroll",
      "Membuat semua elemen bergerak acak",
      "Menghapus kebutuhan prototype",
      "Mengubah ukuran layar pengguna",
      "Mengunci warna agar tidak berubah",
    ],
    answerIndex: 0,
    explanation:
      "Fixed position saat scrolling menjaga elemen penting seperti header, tab bar, atau side navigation tetap terlihat.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 34,
    topic: "Figma Prototype",
    difficulty: "Sedang",
    question: "Preserve Scroll Position pada prototype berguna untuk …",
    options: [
      "Mempertahankan posisi gulir terakhir saat berpindah frame",
      "Menghapus posisi scroll pengguna",
      "Membuat frame tidak bisa discroll",
      "Mengubah group menjadi component",
      "Menambahkan halaman baru otomatis",
    ],
    answerIndex: 0,
    explanation:
      "Preserve Scroll Position membuat transisi antarframe terasa realistis karena posisi scroll tidak reset.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 35,
    topic: "Figma Prototype",
    difficulty: "Sedang",
    question: "Jika Preserve Scroll Position tidak digunakan pada interaksi tertentu, kemungkinan yang terjadi adalah …",
    options: [
      "Frame baru dapat kembali ke posisi awal/atas sehingga interaksi terasa kurang realistis",
      "Semua tombol menjadi component",
      "Warna otomatis berubah ke dark mode",
      "Prototype tidak bisa dibuka sama sekali",
      "Semua frame terhapus",
    ],
    answerIndex: 0,
    explanation:
      "Tanpa preserve scroll position, prototipe dapat membuka frame tujuan dari bagian awal sehingga konteks interaksi hilang.",
    source: "Praktikum 9 - Scrolling",
  },
  {
    id: 36,
    topic: "Figma Prototype",
    difficulty: "Mudah",
    question: "Tujuan utama prototyping dalam proses UI/UX adalah …",
    options: [
      "Menguji alur aplikasi sebelum dikembangkan oleh developer",
      "Menyimpan password pengguna",
      "Membuat database produksi",
      "Menghapus kebutuhan desain",
      "Mengganti semua proses coding",
    ],
    answerIndex: 0,
    explanation:
      "Prototype membantu mengevaluasi flow, navigasi, dan interaksi sebelum desain diserahkan untuk pengembangan.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 37,
    topic: "Figma Prototype",
    difficulty: "Mudah",
    question: "Paper prototyping adalah metode prototype yang menggunakan …",
    options: [
      "Kertas sebagai media perancangan halaman",
      "Server sebagai media penyimpanan desain",
      "Database sebagai alat gambar",
      "API sebagai pengganti UI",
      "Browser sebagai compiler",
    ],
    answerIndex: 0,
    explanation:
      "Paper prototyping memakai kertas untuk menggambarkan layar dan alur perpindahan halaman secara sederhana.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 38,
    topic: "Figma Prototype",
    difficulty: "Mudah",
    question: "Digital prototyping dapat dilakukan menggunakan tools seperti …",
    options: [
      "Figma, Adobe XD, InVision, atau Zeplin",
      "MySQL saja",
      "CMD dan terminal saja",
      "Spreadsheet saja",
      "Antivirus saja",
    ],
    answerIndex: 0,
    explanation:
      "Digital prototyping menggunakan aplikasi desain/prototype untuk menyimulasikan pengalaman pengguna.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 39,
    topic: "Figma Prototype",
    difficulty: "Sedang",
    question: "Pada Figma, menu Interaction Details digunakan untuk mengatur …",
    options: [
      "Trigger, tujuan navigasi, dan animasi antarframe",
      "Password akun pengguna",
      "Struktur tabel database",
      "Kecepatan internet",
      "Kapasitas RAM laptop",
    ],
    answerIndex: 0,
    explanation:
      "Interaction Details menentukan pemicu interaksi, action, destination frame, dan animation.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 40,
    topic: "Figma Prototype",
    difficulty: "Sedang",
    question: "Jika sebuah frame dalam prototype tidak pernah tampil saat preview, kemungkinan penyebabnya adalah …",
    options: [
      "Frame tersebut tidak terhubung dalam alur/flow prototype",
      "Warna frame terlalu terang",
      "Font terlalu besar",
      "Laptop tidak memiliki kamera",
      "Halaman memiliki terlalu banyak icon",
    ],
    answerIndex: 0,
    explanation:
      "Frame yang tidak dihubungkan melalui flow atau tombol tidak akan muncul dalam simulasi navigasi prototype.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 41,
    topic: "Component",
    difficulty: "Mudah",
    question: "Component dalam Figma paling tepat dipahami sebagai …",
    options: [
      "Template elemen desain yang dapat digunakan berulang",
      "Database untuk menyimpan pengguna",
      "File coding aplikasi",
      "Gambar yang tidak bisa diedit",
      "Animasi khusus untuk video",
    ],
    answerIndex: 0,
    explanation:
      "Component adalah elemen reusable yang membuat desain lebih konsisten dan mudah dikelola.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 42,
    topic: "Component",
    difficulty: "Mudah",
    question: "Contoh elemen yang cocok dibuat sebagai component adalah …",
    options: [
      "Button, card, form input, dan navbar",
      "Password asli pengguna",
      "Data transaksi server",
      "File installer Figma",
      "Koneksi internet",
    ],
    answerIndex: 0,
    explanation:
      "Elemen UI yang sering dipakai berulang cocok dijadikan component agar konsisten.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 43,
    topic: "Component",
    difficulty: "Sedang",
    question: "Keuntungan utama menggunakan component dibanding membuat elemen satu per satu adalah …",
    options: [
      "Perubahan pada component utama dapat diterapkan ke instance secara konsisten",
      "Semua prototype langsung online",
      "Desain tidak perlu diuji",
      "Semua file menjadi lebih besar",
      "Pengguna tidak perlu navigasi",
    ],
    answerIndex: 0,
    explanation:
      "Dengan component, perubahan style pada master component dapat berdampak pada instance yang memakainya.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 44,
    topic: "Component",
    difficulty: "Mudah",
    question: "Untuk membuat component di Figma, langkah yang tepat adalah …",
    options: [
      "Seleksi elemen lalu klik Create Component",
      "Hapus semua frame lalu export PDF",
      "Buat database baru",
      "Jalankan npm install",
      "Klik tombol preview saja",
    ],
    answerIndex: 0,
    explanation:
      "Elemen yang ingin dijadikan reusable component harus dipilih, lalu dibuat menjadi component melalui fitur Create Component.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 45,
    topic: "Component",
    difficulty: "Sedang",
    question: "Jika klien meminta perubahan warna pada puluhan tombol yang sama, fitur paling tepat digunakan adalah …",
    options: ["Component", "Random layer", "Manual edit satu per satu", "Screenshot", "Delete page"],
    answerIndex: 0,
    explanation:
      "Component mengurangi pekerjaan berulang karena perubahan cukup dilakukan pada component utama.",
    source: "Praktikum 11 - Desain Component pada Figma",
  },
  {
    id: 46,
    topic: "Variable",
    difficulty: "Mudah",
    question: "Variable pada Figma berfungsi untuk …",
    options: [
      "Menyimpan nilai desain seperti warna, typography, spacing, dan sizing secara terpusat",
      "Menyimpan data login pengguna",
      "Membuat server backend",
      "Menghapus semua animasi",
      "Mengganti laptop designer",
    ],
    answerIndex: 0,
    explanation:
      "Variable menyimpan nilai desain yang dapat dipakai ulang dan mudah diperbarui dalam proyek UI/UX.",
    source: "Praktikum 12 - Variable pada Figma",
  },
  {
    id: 47,
    topic: "Variable",
    difficulty: "Mudah",
    question: "Saat membuat variable warna di Figma, nilai warna biasanya dapat diisi menggunakan …",
    options: ["Kode HEX", "Password database", "Nomor telepon pengguna", "Script backend", "File APK"],
    answerIndex: 0,
    explanation:
      "Kode HEX digunakan untuk menentukan nilai warna, misalnya #FFFFFF atau #111827.",
    source: "Praktikum 12 - Variable pada Figma",
  },
  {
    id: 48,
    topic: "Variable",
    difficulty: "Sedang",
    question: "Penamaan warna seperti Grey/100, Grey/200, Grey/300 berguna untuk …",
    options: [
      "Mengelompokkan warna dalam keluarga yang sama berdasarkan tingkatannya",
      "Mengacak warna agar tidak konsisten",
      "Menghapus color palette",
      "Mengganti variable menjadi component",
      "Menonaktifkan dark mode",
    ],
    answerIndex: 0,
    explanation:
      "Skala warna memudahkan designer memilih variasi warna sesuai kebutuhan teks, border, atau background.",
    source: "Praktikum 12 - Variable pada Figma",
  },
  {
    id: 49,
    topic: "Variable",
    difficulty: "Sedang",
    question: "Koleksi 'Token' dalam pengelolaan variable digunakan untuk …",
    options: [
      "Menentukan penggunaan warna seperti text, background, dan border",
      "Menyimpan data admin aplikasi",
      "Menjalankan prototype otomatis",
      "Membuat semua halaman menjadi PDF",
      "Menghapus local variable",
    ],
    answerIndex: 0,
    explanation:
      "Token menghubungkan warna dasar dengan fungsi desain, misalnya text primary, background primary, dan border secondary.",
    source: "Praktikum 12 - Variable pada Figma",
  },
  {
    id: 50,
    topic: "Variable",
    difficulty: "Sedang",
    question: "Dalam pembuatan Light Mode dan Dark Mode menggunakan variable Figma, designer perlu …",
    options: [
      "Membuat mode berbeda pada collection dan menyesuaikan nilai warna tiap mode",
      "Menghapus semua warna dari desain",
      "Mengubah semua component menjadi group",
      "Menambahkan database baru",
      "Membuat aplikasi native secara otomatis",
    ],
    answerIndex: 0,
    explanation:
      "Mode Light/Dark dibuat dengan collection mode yang memiliki nilai warna berbeda untuk kondisi tampilan yang berbeda.",
    source: "Praktikum 12 - Variable pada Figma",
  },
];

export const totalQuestions = questions.length;
