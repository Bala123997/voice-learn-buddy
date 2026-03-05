import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSpeech } from "@/hooks/useSpeech";
import { lessons } from "@/lib/lessons";
import WelcomeScreen from "@/components/WelcomeScreen";
import ProgressBar from "@/components/ProgressBar";
import LessonCard from "@/components/LessonCard";
import LessonView from "@/components/LessonView";

const Index = () => {
  const [userName, setUserName] = useLocalStorage<string>("vpl-user-name", "");
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>("vpl-completed", []);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const { speak } = useSpeech();

  const handleStart = (name: string) => {
    setUserName(name);
    speak(`Welcome, ${name}! Let's start learning.`);
  };

  const handleComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleReset = () => {
    setUserName("");
    setCompletedLessons([]);
    setActiveLessonId(null);
  };

  if (!userName) return <WelcomeScreen onStart={handleStart} />;

  const activeLesson = lessons.find((l) => l.id === activeLessonId);

  if (activeLesson) {
    return (
      <LessonView
        lesson={activeLesson}
        isCompleted={completedLessons.includes(activeLesson.id)}
        onComplete={() => handleComplete(activeLesson.id)}
        onBack={() => setActiveLessonId(null)}
      />
    );
  }

  const allDone = completedLessons.length === lessons.length;

  return (
    <div className="min-h-screen p-6 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-8 animate-slide-up">
        <div>
          <p className="text-muted-foreground text-sm font-body">Welcome back,</p>
          <h1 className="text-2xl font-heading font-bold">{userName} 👋</h1>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors font-body"
        >
          Reset
        </button>
      </div>

      <div className="mb-8">
        <ProgressBar completed={completedLessons.length} total={lessons.length} />
      </div>

      {allDone && (
        <div className="mb-8 p-6 bg-card border border-primary/30 rounded-lg text-center animate-slide-up">
          <div className="text-5xl mb-2 animate-confetti-pop">🎉</div>
          <h2 className="font-heading font-bold text-xl text-primary">All Lessons Complete!</h2>
          <p className="text-muted-foreground text-sm mt-1 font-body">
            Amazing work, {userName}! You've mastered all lessons.
          </p>
        </div>
      )}

      <div className="space-y-3">
        {lessons.map((lesson, i) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isCompleted={completedLessons.includes(lesson.id)}
            onClick={() => setActiveLessonId(lesson.id)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
