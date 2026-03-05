import { useState } from "react";
import { Lesson } from "@/lib/lessons";
import { useSpeech } from "@/hooks/useSpeech";

interface LessonViewProps {
  lesson: Lesson;
  onComplete: () => void;
  onBack: () => void;
  isCompleted: boolean;
}

const LessonView = ({ lesson, onComplete, onBack, isCompleted }: LessonViewProps) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const { speak } = useSpeech();

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);

    if (index === lesson.quiz.correct) {
      speak(`Correct! Great job completing the lesson on ${lesson.title}.`);
      onComplete();
    } else {
      speak("Not quite. Try reviewing the lesson content again.");
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-lg mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1"
      >
        ← Back to lessons
      </button>

      <div className="animate-slide-up">
        <div className="text-5xl mb-4">{lesson.icon}</div>
        <h2 className="text-2xl font-heading font-bold mb-2">{lesson.title}</h2>
        <p className="text-muted-foreground mb-6 font-body">{lesson.description}</p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <p className="text-foreground leading-relaxed font-body">{lesson.content}</p>
        </div>

        <button
          onClick={() => speak(lesson.content)}
          className="mb-6 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-body flex items-center gap-2"
        >
          🔊 Read Aloud
        </button>

        {isCompleted && !showQuiz ? (
          <div className="text-center p-6 bg-success/10 border border-success/30 rounded-lg">
            <div className="text-4xl mb-2 animate-confetti-pop">🏆</div>
            <p className="font-heading font-semibold text-success">Lesson Completed!</p>
          </div>
        ) : !showQuiz ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full py-4 bg-secondary text-secondary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Take Quiz →
          </button>
        ) : (
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">{lesson.quiz.question}</h3>
            {lesson.quiz.options.map((option, i) => {
              let classes = "w-full text-left p-4 rounded-lg border-2 font-body transition-all ";
              if (!answered) {
                classes += "bg-card border-border hover:border-primary/50";
              } else if (i === lesson.quiz.correct) {
                classes += "bg-success/10 border-success";
              } else if (i === selected) {
                classes += "bg-destructive/10 border-destructive";
              } else {
                classes += "bg-card border-border opacity-50";
              }

              return (
                <button key={i} onClick={() => handleAnswer(i)} className={classes}>
                  {option}
                </button>
              );
            })}
            {answered && selected !== lesson.quiz.correct && (
              <button
                onClick={() => { setAnswered(false); setSelected(null); }}
                className="w-full py-3 bg-muted text-foreground font-heading rounded-lg hover:opacity-90 transition-all"
              >
                Try Again
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;
