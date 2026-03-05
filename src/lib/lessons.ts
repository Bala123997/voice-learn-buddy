export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
  quiz: { question: string; options: string[]; correct: number };
}

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Introduction to Variables",
    description: "Learn how to store and use data",
    icon: "📦",
    content: "Variables are containers for storing data values. In programming, we use variables to hold information that can change or be reused throughout our code. Think of them like labeled boxes where you put things.",
    quiz: { question: "What is a variable?", options: ["A type of loop", "A container for data", "A function", "An operator"], correct: 1 },
  },
  {
    id: "2",
    title: "Understanding Loops",
    description: "Repeat actions efficiently",
    icon: "🔄",
    content: "Loops let you run a block of code multiple times. Instead of writing the same code over and over, loops automate repetition. The most common types are 'for' loops and 'while' loops.",
    quiz: { question: "What do loops do?", options: ["Store data", "Repeat code", "Define functions", "Create variables"], correct: 1 },
  },
  {
    id: "3",
    title: "Functions & Methods",
    description: "Organize code into reusable blocks",
    icon: "⚡",
    content: "Functions are reusable blocks of code that perform a specific task. They help organize your code, make it readable, and avoid repetition. You define a function once and call it whenever needed.",
    quiz: { question: "Why use functions?", options: ["To slow code down", "To reuse code blocks", "To create errors", "To delete data"], correct: 1 },
  },
  {
    id: "4",
    title: "Conditional Logic",
    description: "Make decisions in your code",
    icon: "🔀",
    content: "Conditionals allow your program to make decisions. Using if/else statements, your code can execute different actions based on different conditions, like choosing a path at a fork in the road.",
    quiz: { question: "What do conditionals do?", options: ["Loop forever", "Make decisions", "Store files", "Print text"], correct: 1 },
  },
  {
    id: "5",
    title: "Arrays & Lists",
    description: "Work with collections of data",
    icon: "📋",
    content: "Arrays are ordered collections of items stored under a single variable name. They let you group related data together, like a shopping list. You can access items by their position (index).",
    quiz: { question: "What is an array?", options: ["A single value", "A collection of items", "A loop type", "A condition"], correct: 1 },
  },
];
