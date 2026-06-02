export type Topic =
  | "UI/UX Dasar"
  | "Landing Page"
  | "Scrolling"
  | "Figma Prototype"
  | "Component"
  | "Variable";

export type Difficulty = "Mudah" | "Sedang" | "Sulit";

export type Question = {
  id: number;
  topic: Topic;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  source: string;
};
