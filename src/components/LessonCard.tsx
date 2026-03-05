import { Lesson } from "@/lib/lessons";

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onClick: () => void;
  index: number;
}

const LessonCard = ({ lesson, isCompleted, onClick, index }: LessonCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group animate-slide-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl shrink-0">
          {isCompleted ? "✅" : lesson.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {lesson.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 truncate">
            {lesson.description}
          </p>
        </div>
        {isCompleted && (
          <span className="text-xs font-heading font-semibold text-success px-2 py-1 bg-success/10 rounded-md">
            DONE
          </span>
        )}
      </div>
    </button>
  );
};

export default LessonCard;
