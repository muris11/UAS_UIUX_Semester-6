# Latihan UAS UI/UX Design — Next.js

Website latihan UAS UI/UX Design berisi 50 soal pilihan ganda, jawaban, pembahasan, mode belajar, simulasi ujian, timer, bookmark, filter topik, dark mode, dan progress lokal.

## Fitur

- 50 soal UI/UX berdasarkan soal fix/kuis dan materi Praktikum 9, 11, 12.
- Mode Belajar: jawab soal dan pembahasan langsung tampil.
- Mode Simulasi UAS: timer 50 menit, navigasi nomor soal, hasil akhir setelah selesai.
- Review jawaban salah.
- Filter berdasarkan topik, level, keyword, dan bookmark.
- Progress tersimpan di `localStorage` browser.
- Dark mode dan responsive untuk HP, tablet, laptop, dan desktop.
- Next.js App Router, TypeScript, Tailwind CSS v4.
- SEO metadata, sitemap, robots, manifest, dan favicon.

## Tech Stack

- Next.js latest
- React latest
- TypeScript
- Tailwind CSS v4
- Vercel-ready

## Cara Jalankan Lokal

```bash
npm install
npm run dev
```

Buka:

```bash
http://localhost:3000
```

## Build Production

```bash
npm run build
npm run start
```

## Push ke GitHub

```bash
git init
git add .
git commit -m "init uiux uas practice app"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA_REPO.git
git push -u origin main
```

## Deploy ke Vercel

1. Push project ke GitHub.
2. Buka Vercel.
3. Import repository.
4. Framework akan terdeteksi sebagai Next.js.
5. Klik Deploy.

## Struktur Project

```txt
uiux-uas-nextjs/
├─ public/
│  ├─ favicon.svg
│  └─ manifest.webmanifest
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ robots.ts
│  │  └─ sitemap.ts
│  ├─ components/
│  │  ├─ Icons.tsx
│  │  └─ QuizApp.tsx
│  ├─ data/
│  │  └─ questions.ts
│  └─ types/
│     └─ quiz.ts
├─ package.json
├─ postcss.config.mjs
├─ tsconfig.json
├─ next.config.ts
└─ vercel.json
```

## Edit Soal

Semua soal ada di:

```txt
src/data/questions.ts
```

Format data:

```ts
{
  id: 1,
  topic: "Landing Page",
  difficulty: "Mudah",
  question: "Pertanyaan ...",
  options: ["A", "B", "C", "D", "E"],
  answerIndex: 1,
  explanation: "Pembahasan ...",
  source: "Sumber materi",
}
```

`answerIndex` dimulai dari 0. Jadi:

- 0 = A
- 1 = B
- 2 = C
- 3 = D
- 4 = E
# UAS_UIUX_Semester-6
