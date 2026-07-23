"use client";

import { useEffect, useState } from "react";

const learningExamples = [
  "Liderar conversaciones difíciles",
  "Vender con valor, no con descuentos",
  "Diseñar un onboarding memorable",
  "Aplicar una nueva política de compliance",
];

export function HeroLearningForm() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [learningGoal, setLearningGoal] = useState("");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    const rotation = window.setInterval(() => {
      setExampleIndex((current) => (current + 1) % learningExamples.length);
    }, 2600);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <form
      id="hero-learning-form"
      className="hero-learning-form"
      action="https://www.heycourse.ai/register"
      method="get"
    >
      <div className="learning-form-heading">
        <label htmlFor="learning-goal">¿Qué quieres aprender?</label>
        <span>Escribe una idea</span>
      </div>
      <div className="learning-input-row">
        <span className="learning-spark" aria-hidden="true">✦</span>
        <div className="learning-input-shell">
          <input
            id="learning-goal"
            name="learning_goal"
            type="text"
            value={learningGoal}
            onChange={(event) => setLearningGoal(event.target.value)}
            maxLength={160}
            aria-describedby="learning-form-help"
          />
          {!learningGoal && (
            <span
              className="animated-learning-example"
              key={learningExamples[exampleIndex]}
              aria-hidden="true"
            >
              <i>Ej.</i> {learningExamples[exampleIndex]}
            </span>
          )}
        </div>
      </div>
      <div className="learning-form-note" id="learning-form-help">
        <span><i className="pulse-dot" /> La IA diseña el primer recorrido</span>
        <span>Prueba gratuita · sin tarjeta</span>
      </div>
    </form>
  );
}
