"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { questions, topics, totalQuestions } from "@/data/questions";
import type { Difficulty, Question, Topic } from "@/types/quiz";
import {
  BookIcon,
  CheckIcon,
  MoonIcon,
  ResetIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
  TargetIcon,
  TimerIcon,
  TrophyIcon,
  XIcon,
} from "@/components/Icons";

type Mode = "practice" | "exam" | "result";
type Theme = "light" | "dark";
type Answers = Record<number, number>;
type BooleanMap = Record<number, boolean>;

const STORAGE_KEY = "uiux-uas-progress-v1";
const EXAM_DURATION_SECONDS = 50 * 60;
const optionLabels = ["A", "B", "C", "D", "E"];
const difficulties: Difficulty[] = ["Mudah", "Sedang", "Sulit"];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatTime(seconds: number) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function getGrade(score: number) {
  if (score >= 45) return { label: "Sangat Siap", note: "Tinggal review tipis sebelum UAS." };
  if (score >= 38) return { label: "Siap", note: "Sudah bagus, fokus ke soal salah." };
  if (score >= 30) return { label: "Cukup", note: "Masih perlu ulang materi yang sering salah." };
  return { label: "Perlu Latihan", note: "Gas ulang mode belajar dulu bro." };
}

export default function QuizApp() {
  const [mode, setMode] = useState<Mode>("practice");
  const [theme, setTheme] = useState<Theme>("light");
  const [answers, setAnswers] = useState<Answers>({});
  const [revealed, setRevealed] = useState<BooleanMap>({});
  const [favorites, setFavorites] = useState<BooleanMap>({});
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<Topic | "Semua">("Semua");
  const [difficulty, setDifficulty] = useState<Difficulty | "Semua">("Semua");
  const [showFavoriteOnly, setShowFavoriteOnly] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(EXAM_DURATION_SECONDS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as {
        answers?: Answers;
        revealed?: BooleanMap;
        favorites?: BooleanMap;
        theme?: Theme;
      };
      if (parsed.answers) setAnswers(parsed.answers);
      if (parsed.revealed) setRevealed(parsed.revealed);
      if (parsed.favorites) setFavorites(parsed.favorites);
      if (parsed.theme) setTheme(parsed.theme);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (!hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, revealed, favorites, theme }),
    );
  }, [answers, revealed, favorites, hydrated, theme]);

  useEffect(() => {
    if (mode !== "exam") return;
    if (remainingSeconds <= 0) {
      setMode("result");
      return;
    }
    const timer = window.setInterval(() => {
      setRemainingSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [mode, remainingSeconds]);

  const answeredCount = useMemo(
    () => questions.filter((question) => answers[question.id] !== undefined).length,
    [answers],
  );

  const correctCount = useMemo(
    () => questions.filter((question) => answers[question.id] === question.answerIndex).length,
    [answers],
  );

  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);
  const grade = getGrade(correctCount);

  const filteredQuestions = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();
    return questions.filter((question) => {
      const matchTopic = topic === "Semua" || question.topic === topic;
      const matchDifficulty = difficulty === "Semua" || question.difficulty === difficulty;
      const matchFavorite = !showFavoriteOnly || favorites[question.id];
      const matchQuery =
        !normalizedQuery ||
        question.question.toLowerCase().includes(normalizedQuery) ||
        question.explanation.toLowerCase().includes(normalizedQuery) ||
        question.topic.toLowerCase().includes(normalizedQuery) ||
        question.options.some((option) => option.toLowerCase().includes(normalizedQuery));
      return matchTopic && matchDifficulty && matchFavorite && matchQuery;
    });
  }, [difficulty, favorites, query, showFavoriteOnly, topic]);

  const currentQuestion = questions[currentIndex];
  const wrongQuestions = questions.filter(
    (question) => answers[question.id] !== undefined && answers[question.id] !== question.answerIndex,
  );

  function handleAnswer(questionId: number, answerIndex: number) {
    setAnswers((current) => ({ ...current, [questionId]: answerIndex }));
    if (mode === "practice") {
      setRevealed((current) => ({ ...current, [questionId]: true }));
    }
  }

  function revealAnswer(questionId: number) {
    setRevealed((current) => ({ ...current, [questionId]: true }));
  }

  function toggleFavorite(questionId: number) {
    setFavorites((current) => ({ ...current, [questionId]: !current[questionId] }));
  }

  function startExam() {
    setMode("exam");
    setCurrentIndex(0);
    setRemainingSeconds(EXAM_DURATION_SECONDS);
    setAnswers({});
    setRevealed({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetProgress() {
    setAnswers({});
    setRevealed({});
    setFavorites({});
    setMode("practice");
    setCurrentIndex(0);
    setRemainingSeconds(EXAM_DURATION_SECONDS);
    setQuery("");
    setTopic("Semua");
    setDifficulty("Semua");
    setShowFavoriteOnly(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute right-0 top-56 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl dark:bg-fuchsia-500/10" />
      </div>

      <Header
        mode={mode}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        onModeChange={setMode}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-8 pt-6 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:pb-12 lg:pt-10">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/30 sm:p-8 lg:p-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200">
            <BookIcon className="h-4 w-4" />
            UAS UI/UX Design
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Latihan 50 Soal UI/UX yang siap dipakai buat belajar UAS.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Website ini berisi soal fix dari kuis dan tambahan materi Praktikum 9, 11, dan 12. Ada mode belajar, simulasi ujian, pembahasan, bookmark, filter topik, progress lokal, timer, dan tampilan responsive.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={startExam}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-100"
            >
              <TargetIcon className="h-5 w-5" />
              Mulai Simulasi UAS
            </button>
            <button
              onClick={() => setMode("practice")}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-violet-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <BookIcon className="h-5 w-5" />
              Mode Belajar
            </button>
          </div>
        </div>

        <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <StatCard icon={<BookIcon className="h-5 w-5" />} label="Total soal" value={`${totalQuestions}`} helper="Pilihan ganda + benar/salah" />
          <StatCard icon={<CheckIcon className="h-5 w-5" />} label="Progress" value={`${progressPercent}%`} helper={`${answeredCount}/${totalQuestions} sudah dijawab`} />
          <StatCard icon={<TrophyIcon className="h-5 w-5" />} label="Skor saat ini" value={`${correctCount}`} helper={grade.label} />
        </aside>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {mode === "practice" && (
          <PracticeView
            answers={answers}
            difficulty={difficulty}
            favorites={favorites}
            filteredQuestions={filteredQuestions}
            onAnswer={handleAnswer}
            onDifficultyChange={setDifficulty}
            onFavoriteToggle={toggleFavorite}
            onQueryChange={setQuery}
            onReveal={revealAnswer}
            onReset={resetProgress}
            onTopicChange={setTopic}
            query={query}
            revealed={revealed}
            showFavoriteOnly={showFavoriteOnly}
            topic={topic}
            onFavoriteOnlyChange={setShowFavoriteOnly}
          />
        )}

        {mode === "exam" && currentQuestion && (
          <ExamView
            answers={answers}
            currentIndex={currentIndex}
            currentQuestion={currentQuestion}
            onAnswer={handleAnswer}
            onFinish={() => setMode("result")}
            onMove={setCurrentIndex}
            remainingSeconds={remainingSeconds}
          />
        )}

        {mode === "result" && (
          <ResultView
            answers={answers}
            correctCount={correctCount}
            grade={grade}
            onBackToPractice={() => setMode("practice")}
            onRestartExam={startExam}
            wrongQuestions={wrongQuestions}
          />
        )}
      </section>
    </main>
  );
}

function Header({
  mode,
  theme,
  onThemeToggle,
  onModeChange,
}: {
  mode: Mode;
  theme: Theme;
  onThemeToggle: () => void;
  onModeChange: (mode: Mode) => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => onModeChange("practice")}
          className="flex items-center gap-3 rounded-2xl text-left focus:outline-none focus:ring-4 focus:ring-violet-200"
          aria-label="Kembali ke mode belajar"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
            <BookIcon className="h-5 w-5" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black leading-none">UI/UX UAS</span>
            <span className="mt-1 block text-xs font-medium text-slate-500 dark:text-slate-400">Practice App</span>
          </span>
        </button>

        <nav className="hidden items-center rounded-2xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5 md:flex">
          <NavButton active={mode === "practice"} onClick={() => onModeChange("practice")}>Belajar</NavButton>
          <NavButton active={mode === "exam"} onClick={() => onModeChange("exam")}>Simulasi</NavButton>
          <NavButton active={mode === "result"} onClick={() => onModeChange("result")}>Hasil</NavButton>
        </nav>

        <button
          onClick={onThemeToggle}
          className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-violet-200 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </header>
  );
}

function NavButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-bold transition",
        active
          ? "bg-white text-violet-700 shadow-sm dark:bg-white/15 dark:text-white"
          : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

function StatCard({ icon, label, value, helper }: { icon: ReactNode; label: string; value: string; helper: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-200">
          {icon}
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-1 text-3xl font-black text-slate-950 dark:text-white">{value}</p>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">{helper}</p>
    </div>
  );
}

function PracticeView({
  answers,
  difficulty,
  favorites,
  filteredQuestions,
  onAnswer,
  onDifficultyChange,
  onFavoriteToggle,
  onQueryChange,
  onReveal,
  onReset,
  onTopicChange,
  query,
  revealed,
  showFavoriteOnly,
  topic,
  onFavoriteOnlyChange,
}: {
  answers: Answers;
  difficulty: Difficulty | "Semua";
  favorites: BooleanMap;
  filteredQuestions: Question[];
  onAnswer: (questionId: number, answerIndex: number) => void;
  onDifficultyChange: (difficulty: Difficulty | "Semua") => void;
  onFavoriteToggle: (questionId: number) => void;
  onQueryChange: (query: string) => void;
  onReveal: (questionId: number) => void;
  onReset: () => void;
  onTopicChange: (topic: Topic | "Semua") => void;
  query: string;
  revealed: BooleanMap;
  showFavoriteOnly: boolean;
  topic: Topic | "Semua";
  onFavoriteOnlyChange: (value: boolean) => void;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
      <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 lg:sticky lg:top-24">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black">Mode Belajar</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Cari soal, jawab, lalu lihat pembahasan langsung.</p>
          </div>
          <button
            onClick={onReset}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 dark:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Reset progress"
          >
            <ResetIcon className="h-5 w-5" />
          </button>
        </div>

        <label className="mt-6 block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="search-question">
          Cari soal
        </label>
        <div className="mt-2 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/5">
          <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
          <input
            id="search-question"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Cari: CTA, component, scrolling..."
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <SelectField
            label="Topik"
            value={topic}
            onChange={(value) => onTopicChange(value as Topic | "Semua")}
            options={["Semua", ...topics]}
          />
          <SelectField
            label="Level"
            value={difficulty}
            onChange={(value) => onDifficultyChange(value as Difficulty | "Semua")}
            options={["Semua", ...difficulties]}
          />
        </div>

        <button
          onClick={() => onFavoriteOnlyChange(!showFavoriteOnly)}
          className={cn(
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-violet-200",
            showFavoriteOnly
              ? "bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-100"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
          )}
        >
          <StarIcon className="h-5 w-5" />
          {showFavoriteOnly ? "Tampilkan Semua" : "Tampilkan Bookmark"}
        </button>

        <div className="mt-6 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600 dark:bg-white/5 dark:text-slate-300">
          Tips cepat: kerjakan dulu tanpa buka jawaban, lalu bookmark soal yang masih ragu. Besok sebelum UAS tinggal review yang bookmark dan yang salah.
        </div>
      </aside>

      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Hasil filter</p>
            <h3 className="text-2xl font-black">{filteredQuestions.length} soal ditemukan</h3>
          </div>
          <button
            onClick={() => {
              filteredQuestions.forEach((question) => onReveal(question.id));
            }}
            className="rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
          >
            Buka Jawaban Filter Ini
          </button>
        </div>

        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            answerIndex={answers[question.id]}
            isFavorite={Boolean(favorites[question.id])}
            isRevealed={Boolean(revealed[question.id])}
            mode="practice"
            onAnswer={(answerIndex) => onAnswer(question.id, answerIndex)}
            onFavoriteToggle={() => onFavoriteToggle(question.id)}
            onReveal={() => onReveal(question.id)}
            question={question}
          />
        ))}

        {filteredQuestions.length === 0 && (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-lg font-black">Belum ada soal yang cocok.</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Coba ubah keyword, topik, level, atau matikan filter bookmark.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-violet-400/10"
      >
        {options.map((option) => (
          <option className="bg-white text-slate-900" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ExamView({
  answers,
  currentIndex,
  currentQuestion,
  onAnswer,
  onFinish,
  onMove,
  remainingSeconds,
}: {
  answers: Answers;
  currentIndex: number;
  currentQuestion: Question;
  onAnswer: (questionId: number, answerIndex: number) => void;
  onFinish: () => void;
  onMove: (index: number) => void;
  remainingSeconds: number;
}) {
  const answeredCount = questions.filter((question) => answers[question.id] !== undefined).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Simulasi UAS</p>
            <h2 className="mt-1 text-2xl font-black">Soal {currentIndex + 1} dari {totalQuestions}</h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-white dark:bg-white dark:text-slate-950">
            <TimerIcon className="h-5 w-5" />
            <span className="font-mono text-xl font-black">{formatTime(remainingSeconds)}</span>
          </div>
        </div>

        <QuestionCard
          answerIndex={answers[currentQuestion.id]}
          isFavorite={false}
          isRevealed={false}
          mode="exam"
          onAnswer={(answerIndex) => onAnswer(currentQuestion.id, answerIndex)}
          onFavoriteToggle={() => undefined}
          onReveal={() => undefined}
          question={currentQuestion}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            onClick={() => onMove(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:enabled:hover:bg-white/10"
          >
            Sebelumnya
          </button>
          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={() => onMove(Math.min(totalQuestions - 1, currentIndex + 1))}
              className="rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
            >
              Selanjutnya
            </button>
          ) : (
            <button
              onClick={onFinish}
              className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
            >
              Selesai Ujian
            </button>
          )}
        </div>
      </div>

      <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 lg:sticky lg:top-24">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Terjawab</p>
            <h3 className="text-3xl font-black">{answeredCount}/{totalQuestions}</h3>
          </div>
          <button
            onClick={onFinish}
            className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-700 dark:bg-white dark:text-slate-950"
          >
            Finish
          </button>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10 lg:grid-cols-5">
          {questions.map((question, index) => {
            const isActive = index === currentIndex;
            const isAnswered = answers[question.id] !== undefined;
            return (
              <button
                key={question.id}
                onClick={() => onMove(index)}
                className={cn(
                  "flex h-10 items-center justify-center rounded-xl text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-violet-200",
                  isActive && "bg-violet-600 text-white shadow-lg shadow-violet-500/20",
                  !isActive && isAnswered && "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-100",
                  !isActive && !isAnswered && "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10",
                )}
                aria-label={`Ke soal ${question.id}`}
              >
                {question.id}
              </button>
            );
          })}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Di mode simulasi, jawaban dan pembahasan baru tampil setelah selesai supaya rasanya mirip UAS beneran.
        </p>
      </aside>
    </div>
  );
}

function ResultView({
  answers,
  correctCount,
  grade,
  onBackToPractice,
  onRestartExam,
  wrongQuestions,
}: {
  answers: Answers;
  correctCount: number;
  grade: { label: string; note: string };
  onBackToPractice: () => void;
  onRestartExam: () => void;
  wrongQuestions: Question[];
}) {
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
      <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 lg:sticky lg:top-24">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20">
          <TrophyIcon className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Hasil Simulasi</p>
        <h2 className="mt-2 text-5xl font-black">{correctCount}/{totalQuestions}</h2>
        <p className="mt-2 text-xl font-black text-violet-700 dark:text-violet-200">{grade.label}</p>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{grade.note}</p>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600" style={{ width: `${scorePercent}%` }} />
        </div>
        <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">Nilai perkiraan: {scorePercent}</p>
        <div className="mt-6 grid gap-3">
          <button onClick={onRestartExam} className="rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700">
            Ulang Simulasi
          </button>
          <button onClick={onBackToPractice} className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            Balik ke Mode Belajar
          </button>
        </div>
      </aside>

      <div className="space-y-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="text-2xl font-black">Review jawaban salah</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Ini bagian paling penting buat belajar cepat. Baca pembahasan, lalu ulang soal yang salah.
          </p>
        </div>

        {wrongQuestions.length === 0 ? (
          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100">
            <p className="text-2xl font-black">Mantap, tidak ada jawaban salah.</p>
            <p className="mt-2 text-sm font-medium">Tetap review konsep besarnya biar aman pas UAS.</p>
          </div>
        ) : (
          wrongQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              answerIndex={answers[question.id]}
              isFavorite={false}
              isRevealed
              mode="review"
              onAnswer={() => undefined}
              onFavoriteToggle={() => undefined}
              onReveal={() => undefined}
              question={question}
            />
          ))
        )}
      </div>
    </div>
  );
}

function QuestionCard({
  answerIndex,
  isFavorite,
  isRevealed,
  mode,
  onAnswer,
  onFavoriteToggle,
  onReveal,
  question,
}: {
  answerIndex: number | undefined;
  isFavorite: boolean;
  isRevealed: boolean;
  mode: "practice" | "exam" | "review";
  onAnswer: (answerIndex: number) => void;
  onFavoriteToggle: () => void;
  onReveal: () => void;
  question: Question;
}) {
  const canShowAnswer = mode === "review" || isRevealed;
  const selectedIsCorrect = answerIndex === question.answerIndex;

  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white dark:bg-white dark:text-slate-950">No. {question.id}</span>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 dark:bg-violet-400/15 dark:text-violet-100">{question.topic}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">{question.difficulty}</span>
        </div>
        {mode === "practice" && (
          <button
            onClick={onFavoriteToggle}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm font-bold transition",
              isFavorite
                ? "bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-100"
                : "bg-slate-100 text-slate-500 hover:text-slate-900 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white",
            )}
            aria-pressed={isFavorite}
          >
            <StarIcon className="h-4 w-4" />
            {isFavorite ? "Saved" : "Save"}
          </button>
        )}
      </div>

      <h3 className="mt-5 text-lg font-black leading-8 text-slate-950 dark:text-white sm:text-xl">{question.question}</h3>

      <div className="mt-5 grid gap-3">
        {question.options.map((option, optionIndex) => {
          const isSelected = answerIndex === optionIndex;
          const isCorrectAnswer = question.answerIndex === optionIndex;
          const isWrongSelection = canShowAnswer && isSelected && !isCorrectAnswer;
          return (
            <button
              key={option}
              onClick={() => onAnswer(optionIndex)}
              disabled={mode === "review"}
              className={cn(
                "group flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-default",
                !canShowAnswer && !isSelected && "border-slate-200 bg-slate-50 hover:border-violet-200 hover:bg-violet-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10",
                !canShowAnswer && isSelected && "border-violet-300 bg-violet-50 dark:border-violet-400/40 dark:bg-violet-400/15",
                canShowAnswer && isCorrectAnswer && "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-100",
                isWrongSelection && "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-400/30 dark:bg-rose-400/15 dark:text-rose-100",
                canShowAnswer && !isCorrectAnswer && !isWrongSelection && "border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-black",
                  !canShowAnswer && isSelected && "bg-violet-600 text-white",
                  !canShowAnswer && !isSelected && "bg-white text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-300",
                  canShowAnswer && isCorrectAnswer && "bg-emerald-600 text-white",
                  isWrongSelection && "bg-rose-600 text-white",
                  canShowAnswer && !isCorrectAnswer && !isWrongSelection && "bg-white text-slate-400 dark:bg-white/10",
                )}
              >
                {optionLabels[optionIndex]}
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold leading-6 sm:text-base">{option}</span>
              {canShowAnswer && isCorrectAnswer && <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-200" />}
              {isWrongSelection && <XIcon className="mt-1 h-5 w-5 shrink-0 text-rose-600 dark:text-rose-200" />}
            </button>
          );
        })}
      </div>

      {mode === "practice" && !canShowAnswer && (
        <button
          onClick={onReveal}
          className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Lihat Jawaban & Pembahasan
        </button>
      )}

      {canShowAnswer && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("rounded-full px-3 py-1 text-xs font-black", selectedIsCorrect ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-100" : "bg-rose-100 text-rose-800 dark:bg-rose-400/20 dark:text-rose-100")}> 
              {answerIndex === undefined ? "Belum dijawab" : selectedIsCorrect ? "Jawaban kamu benar" : "Jawaban kamu salah"}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm dark:bg-white/10 dark:text-slate-200">
              Kunci: {optionLabels[question.answerIndex]}. {question.options[question.answerIndex]}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{question.explanation}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Sumber: {question.source}</p>
        </div>
      )}
    </article>
  );
}
