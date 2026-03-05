import { useState } from "react";
import heroPattern from "@/assets/hero-pattern.jpg";

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) onStart(name.trim());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroPattern})` }}
      />
      <div className="relative z-10 w-full max-w-md animate-slide-up">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4 animate-float">🎓</div>
          <h1 className="text-4xl font-heading font-bold mb-2">
            Voice Progress
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn. Track. Listen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
              className="w-full px-5 py-4 bg-card border-2 border-border rounded-lg text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full py-4 bg-primary text-primary-foreground font-heading font-semibold text-lg rounded-lg hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed animate-pulse-glow"
          >
            Start Learning →
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
