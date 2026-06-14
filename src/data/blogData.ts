import { type BlogPost } from "../types/blog.types";

export const categories = [
  "Semua",
  "Teknologi",
  "Mobile App",
  "Bisnis Digital",
  "Desain",
  "Infrastruktur",
  "Keamanan",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bagaimana Edge Computing Mengubah Arsitektur Jaringan Perusahaan",
    excerpt:
      "Pelajari bagaimana teknologi Edge Computing memangkas latensi, meningkatkan kecepatan akses, dan mendesentralisasikan pengolahan data perusahaan Anda.",
    category: "Infrastruktur",
    date: "12 Juni 2026",
    readTime: "6",
    color: "#DC2626", // Red primary accent
    bg: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
    tag: "Terpopuler",
    content: [
      {
        type: "intro",
        text: "Di era cloud computing, pengiriman seluruh data ke server pusat sering kali menimbulkan latensi tinggi. Edge computing hadir untuk menyelesaikan tantangan ini dengan membawa daya komputasi lebih dekat ke sumber data.",
      },
      {
        type: "heading",
        text: "Mengapa Edge Computing Penting bagi Bisnis?",
      },
      {
        type: "paragraph",
        text: "Dengan memproses data secara lokal di tepi jaringan, organisasi dapat mengurangi ketergantungan pada bandwidth internet global. Ini sangat krusial bagi aplikasi real-time yang membutuhkan respon instan seperti monitoring pabrik otomatis atau sistem transaksi keuangan cepat.",
      },
      {
        type: "heading",
        text: "Keuntungan Utama Implementasi Edge Computing",
      },
      {
        type: "list",
        items: [
          "Reduksi latensi hingga di bawah 10 milidetik.",
          "Penghematan biaya bandwidth pusat data karena data disaring terlebih dahulu.",
          "Kelangsungan operasional yang tetap berjalan meskipun koneksi internet utama terputus.",
          "Kepatuhan regulasi lokal yang lebih mudah melalui penyimpanan data terdistribusi.",
        ],
      },
      {
        type: "paragraph",
        text: "PT XERANET berpengalaman dalam merancang arsitektur jaringan berbasis edge untuk integrasi IoT dan kantor cabang terdistribusi demi memaksimalkan kinerja operasional Anda.",
      },
    ],
  },
  {
    id: 2,
    title: "Panduan Lengkap Membangun Mobile App yang Skalabel di Tahun 2026",
    excerpt:
      "Dari arsitektur clean code hingga manajemen state, ketahui praktik terbaik membuat aplikasi seluler yang siap menampung jutaan pengguna aktif.",
    category: "Mobile App",
    date: "8 Juni 2026",
    readTime: "8",
    color: "#1D4ED8", // Navy secondary accent
    bg: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
    tag: "Terbaru",
    content: [
      {
        type: "intro",
        text: "Membangun aplikasi mobile yang dapat diunduh ribuan kali adalah pencapaian luar biasa. Namun, memastikan aplikasi tetap stabil saat pengguna tumbuh menjadi jutaan adalah tantangan rekayasa perangkat lunak yang berbeda.",
      },
      {
        type: "heading",
        text: "Gunakan Arsitektur Clean & Modular",
      },
      {
        type: "paragraph",
        text: "Pemisahan tanggung jawab (Separation of Concerns) dalam kode sangat penting. Dengan memisahkan UI, logika bisnis, dan lapisan data, pengembang dapat melakukan iterasi fitur tanpa mengacaukan bagian kode yang lain.",
      },
      {
        type: "list",
        items: [
          "Penerapan MVVM atau Clean Architecture untuk struktur file.",
          "Manajemen state global yang efisien dan minim re-render.",
          "Optimalisasi ukuran aset gambar dan database lokal (SQLite/Room).",
          "Automated CI/CD pipelines untuk testing dan deployment ke Play Store & App Store.",
        ],
      },
      {
        type: "paragraph",
        text: "Memilih teknologi yang tepat, baik native (Swift/Kotlin) maupun cross-platform (React Native/Flutter), harus didasarkan pada strategi bisnis dan ketersediaan talenta jangka panjang.",
      },
    ],
  },
  {
    id: 3,
    title:
      "Mengapa Cybersecurity Mesh Architecture Adalah Masa Depan Keamanan IT",
    excerpt:
      "Metode keamanan tradisional berbasis perimeter tidak lagi cukup. Pelajari arsitektur mesh yang menempatkan pertahanan di setiap titik akses data.",
    category: "Keamanan",
    date: "4 Juni 2026",
    readTime: "5",
    color: "#1E3A5F", // Dark corporate accent
    bg: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
    content: [
      {
        type: "intro",
        text: "Dengan maraknya kerja remote (WFH) dan migrasi cloud, perimeter kantor konvensional telah runtuh. Keamanan tidak bisa lagi bertumpu pada satu tembok firewall di kantor pusat.",
      },
      {
        type: "heading",
        text: "Konsep Dasar Cybersecurity Mesh Architecture (CSMA)",
      },
      {
        type: "paragraph",
        text: "CSMA adalah pendekatan keamanan modular terdistribusi yang mendefinisikan batas keamanan di sekitar identitas seseorang atau perangkat, bukan lokasi fisik. Setiap perangkat memiliki kebijakan keamanannya sendiri yang terintegrasi secara dinamis.",
      },
      {
        type: "heading",
        text: "Pilar Utama CSMA yang Harus Diadopsi",
      },
      {
        type: "list",
        items: [
          "Identitas terpusat namun penegakan aturan terdistribusi.",
          "Sistem kecerdasan ancaman (threat intelligence) yang saling berbagi data secara real-time.",
          "Kebijakan Zero Trust: Verifikasi eksplisit untuk setiap permintaan akses.",
          "Dashboard manajemen tunggal untuk visibilitas menyeluruh di seluruh aset digital.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tren Desain UI/UX 2026: Interaksi Mikro & Asimetri Estetika",
    excerpt:
      "Temukan bagaimana animasi halus dan tata letak dinamis dapat meningkatkan retensi pengguna pada aplikasi web dan mobile Anda.",
    category: "Desain",
    date: "1 Juni 2026",
    readTime: "4",
    color: "#0891B2", // Cyan accent
    bg: "linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)",
    content: [
      {
        type: "intro",
        text: "Desain yang statis sudah kuno. Pengguna digital modern mendambakan umpan balik visual yang interaktif namun tidak berlebihan saat menjelajahi sebuah platform.",
      },
      {
        type: "heading",
        text: "Kekuatan Micro-Animations",
      },
      {
        type: "paragraph",
        text: "Animasi mikro seperti efek transisi tombol saat ditekan, pergeseran halaman yang halus, atau perubahan bentuk ikon memberikan kepuasan psikologis bagi pengguna dan memperjelas navigasi fungsional.",
      },
      {
        type: "list",
        items: [
          "Gunakan kurva transisi yang natural (ease-in-out).",
          "Batasi durasi animasi agar tidak melebihi 300ms.",
          "Pastikan animasi tetap mendukung fitur aksesibilitas (reduced motion).",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Strategi Transformasi Digital bagi UMKM Menuju Go-Global",
    excerpt:
      "Langkah taktis bagi pelaku usaha menengah untuk memanfaatkan adopsi cloud dan sistem pembayaran digital guna menjangkau pasar internasional.",
    category: "Bisnis Digital",
    date: "25 Mei 2026",
    readTime: "7",
    color: "#16A34A", // Green accent
    bg: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
    content: [
      {
        type: "intro",
        text: "Transformasi digital bukan monopoli korporasi besar. Bisnis kecil menengah kini memiliki alat yang sama kuatnya untuk bersaing di panggung global berkat internet.",
      },
      {
        type: "heading",
        text: "Langkah Awal: Automasi dan Visibilitas",
      },
      {
        type: "paragraph",
        text: "UMKM harus mulai mendigitalisasikan pencatatan keuangan dan inventaris mereka. Langkah berikutnya adalah membangun kehadiran online resmi seperti website portofolio profesional atau aplikasi e-commerce kustom untuk meningkatkan kredibilitas.",
      },
      {
        type: "list",
        items: [
          "Migrasi ke pencatatan berbasis Cloud (SaaS).",
          "Penerapan sistem pembayaran multi-channel (QRIS, payment gateway internasional).",
          "Pemanfaatan SEO lokal dan global untuk menjaring lalu lintas organik.",
          "Analisis data perilaku konsumen sederhana melalui Google Analytics.",
        ],
      },
    ],
  },
  {
    id: 6,
    title:
      "Mengenal WebAssembly (Wasm) dan Dampaknya pada Aplikasi Web Masa Depan",
    excerpt:
      "Bagaimana WebAssembly memungkinkan performa tingkat native di dalam browser web biasa, membuka jalan untuk pengolahan grafis 3D dan kalkulasi rumit.",
    category: "Teknologi",
    date: "20 Mei 2026",
    readTime: "5",
    color: "#4F46E5", // Indigo accent
    bg: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
    tag: "Trending",
    content: [
      {
        type: "intro",
        text: "JavaScript telah lama menjadi raja pemrograman web. Namun untuk tugas-tugas berat seperti rendering video atau game 3D, browser membutuhkan teknologi pendamping yang jauh lebih cepat.",
      },
      {
        type: "heading",
        text: "Apa itu WebAssembly?",
      },
      {
        type: "paragraph",
        text: "WebAssembly adalah format kode biner tingkat rendah yang dapat dijalankan oleh browser modern dengan kecepatan mendekati aplikasi desktop asli (native). Wasm bertindak sebagai target kompilasi untuk bahasa pemrograman seperti C++, Rust, dan Go.",
      },
      {
        type: "list",
        items: [
          "Kecepatan eksekusi yang konsisten dan dapat diprediksi.",
          "Membuka jalan bagi porting aplikasi desktop (seperti Figma atau Adobe Photoshop) ke web.",
          "Keamanan terisolasi penuh di dalam kotak pasir (sandbox) browser.",
        ],
      },
    ],
  },
];
