import type { Page } from "../../types";
import triviaData from "./data/quizes.json";
import versesData from "./data/verses.json";

export const QuizPage: Page = {
    render: () => /* html */ `
    <style>
      .quiz-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 24px;
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-md);
}

.quiz-card h3 {
  color: var(--color-text);
  font-family: var(--font-serif, serif);
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 24px;
}

.quiz-card h3 i,
.quiz-card h3 em {
  color: var(--color-text-muted);
}

.score-display {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--color-accent);
}

.quiz-btn {
  display: block;
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  background: var(--color-surface-muted);
  border: 2px solid var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-md, 8px);
  font-size: 1.1rem;
  font-family: var(--font-sans, system-ui, sans-serif);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
}

.quiz-btn:hover:not(:disabled) {
  background: var(--color-surface);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.quiz-btn:disabled {
  cursor: default;
}

.quiz-btn.correct {
  background: rgba(40, 167, 69, 0.2) !important;
  border-color: #28a745 !important;
  color: var(--color-text) !important;
}

.quiz-btn.wrong {
  background: rgba(220, 53, 69, 0.2) !important;
  border-color: #dc3545 !important;
  color: var(--color-text) !important;
}

.next-btn {
  padding: 10px 24px;
  background: var(--color-primary);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-family: var(--font-sans, system-ui, sans-serif);
  cursor: pointer;
  margin-top: 16px;
  display: none;
  transition: background 0.2s ease-in-out;
}

.next-btn:hover {
  background: var(--color-primary-dark);
}

.fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

.fade-out {
  animation: fadeOut 0.3s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
}

/* Celebration Canvas & Floating Balloons CSS */
#celebration-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.balloon {
  position: fixed;
  bottom: -100px;
  width: 40px;
  height: 55px;
  border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  animation: floatUp 3.5s ease-in forwards;
  pointer-events: none;
  z-index: 9998;
}

.balloon::after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  width: 2px;
  height: 14px;
  background: rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-115vh) rotate(20deg); opacity: 0; }
}
    </style>

    <canvas id="celebration-canvas"></canvas>

    <div class="section">
      <div class="container" style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <div class="text-center" style="margin-bottom: 32px; text-align: center;">
          <h1 style="margin-bottom: 8px;">Bible Knowledge</h1>
          <p class="about-lead" style="color: #666;">Test your knowledge with our Trivia and Verse quizzes.</p>
        </div>

        <!-- Tab Selection Navigation -->
        <div class="tabs-nav" style="display: flex; justify-content: center; gap: 16px; margin-bottom: 32px; border-bottom: 2px solid #eee; padding-bottom: 8px;">
          <button id="tab-btn-trivia" style="padding: 8px 16px; background: none; border: none; font-size: 1.1rem; cursor: pointer; font-weight: bold; border-bottom: 3px solid #333;">
            Bible Trivia
          </button>
          <button id="tab-btn-verses" style="padding: 8px 16px; background: none; border: none; font-size: 1.1rem; cursor: pointer; color: #666; border-bottom: 3px solid transparent;">
            Verse Quiz
          </button>
        </div>

        <!-- Trivia Tab -->
        <div id="tab-content-trivia" class="tab-pane" style="display: block;">
          <div id="trivia-container" class="story-cards">
            <p style="text-align: center; color: #666;">Loading trivia...</p>
          </div>
        </div>

        <!-- Verses Tab -->
        <div id="tab-content-verses" class="tab-pane" style="display: none;">
          <div id="verses-container" class="story-cards">
            <p style="text-align: center; color: #666;">Loading verses...</p>
          </div>
        </div>
      </div>
    </div>
  `,
    mount: () => {
        // --- 0. Sound Effects Synthesizer (Web Audio API) ---
        let audioCtx: AudioContext | null = null;
        const initAudio = () => {
            if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();
        };

        const playCorrectSound = () => {
            initAudio();
            if (!audioCtx) return;
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
            notes.forEach((freq, idx) => {
                const osc = audioCtx!.createOscillator();
                const gain = audioCtx!.createGain();
                osc.type = 'triangle';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.15, audioCtx!.currentTime + idx * 0.07);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx!.currentTime + idx * 0.07 + 0.25);
                osc.connect(gain);
                gain.connect(audioCtx!.destination);
                osc.start(audioCtx!.currentTime + idx * 0.07);
                osc.stop(audioCtx!.currentTime + idx * 0.07 + 0.25);
            });
        };

        const playWrongSound = () => {
            initAudio();
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(70, audioCtx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
        };

        // --- Visual Celebration Effects (Confetti, Fireworks & Balloons) ---
        const triggerCelebration = () => {
            const canvas = document.getElementById('celebration-canvas') as HTMLCanvasElement;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // 1. Spawn Balloons
            const colors = ['#ff4d4d', '#4da6ff', '#5cd65c', '#ffcc00', '#ff66cc', '#9966ff'];
            for (let i = 0; i < 12; i++) {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = `${Math.random() * 85 + 5}%`;
                balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.animationDelay = `${Math.random() * 0.6}s`;
                document.body.appendChild(balloon);
                setTimeout(() => balloon.remove(), 4000);
            }

            // 2. Confetti & Fireworks Particles
            interface Particle {
                x: number; y: number; vx: number; vy: number;
                color: string; size: number; alpha: number; gravity: number;
            }

            const particles: Particle[] = [];

            // Burst Confetti from Top
            for (let i = 0; i < 80; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: -20,
                    vx: (Math.random() - 0.5) * 6,
                    vy: Math.random() * 5 + 3,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 8 + 4,
                    alpha: 1,
                    gravity: 0.05
                });
            }

            // Firework Shell Explosion from Center
            const fireworkX = canvas.width / 2;
            const fireworkY = canvas.height / 3;
            for (let i = 0; i < 60; i++) {
                const angle = (Math.PI * 2 / 60) * i;
                const speed = Math.random() * 8 + 4;
                particles.push({
                    x: fireworkX,
                    y: fireworkY,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 4 + 2,
                    alpha: 1,
                    gravity: 0.1
                });
            }

            let frame = 0;
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((p, idx) => {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += p.gravity;
                    p.alpha -= 0.012;

                    ctx.save();
                    ctx.globalAlpha = Math.max(p.alpha, 0);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(p.x, p.y, p.size, p.size);
                    ctx.restore();

                    if (p.alpha <= 0) particles.splice(idx, 1);
                });

                if (particles.length > 0 && frame < 180) {
                    frame++;
                    requestAnimationFrame(animate);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            };
            animate();
        };

        // --- 1. Tab Navigation Logic ---
        const tabs = {
            trivia: { btn: document.getElementById('tab-btn-trivia'), content: document.getElementById('tab-content-trivia') },
            verses: { btn: document.getElementById('tab-btn-verses'), content: document.getElementById('tab-content-verses') }
        };

        const switchTab = (activeKey: 'trivia' | 'verses') => {
            Object.entries(tabs).forEach(([key, tab]) => {
                if (!tab.btn || !tab.content) return;
                const isActive = key === activeKey;
                tab.content.style.display = isActive ? 'block' : 'none';
                tab.btn.style.fontWeight = isActive ? 'bold' : 'normal';
                tab.btn.style.color = isActive ? '#000' : '#666';
                tab.btn.style.borderBottom = isActive ? '3px solid #333' : '3px solid transparent';
            });
        };

        tabs.trivia.btn?.addEventListener('click', () => switchTab('trivia'));
        tabs.verses.btn?.addEventListener('click', () => switchTab('verses'));

        // --- 2. Game State ---
        const gameState = {
            trivia: { data: [] as any[], index: 0, score: 0, container: document.getElementById('trivia-container') },
            verses: { data: [] as any[], index: 0, score: 0, container: document.getElementById('verses-container') }
        };

        // --- 3. UI Renderer for Quizzes ---
        const renderQuestion = (type: 'trivia' | 'verses') => {
            const state = gameState[type];
            if (!state.container) return;

            if (state.index >= state.data.length && state.data.length > 0) {
                state.container.innerHTML = `
          <div class="quiz-card fade-in" style="text-align: center;">
            <h2>Quiz Complete!</h2>
            <p class="score-display">Your Score: ${state.score} / ${state.data.length}</p>
            <button class="next-btn" style="display: inline-block;" id="restart-${type}">Play Again</button>
          </div>
        `;
                document.getElementById(`restart-${type}`)?.addEventListener('click', () => {
                    state.index = 0; state.score = 0; renderQuestion(type);
                });
                return;
            }

            const item = state.data[state.index];

            let questionText = "";
            let options: string[] = [];
            let correctAnswer = "";
            let reference = "";

            if (type === 'trivia') {
                questionText = item.question;
                correctAnswer = item.answer;
                reference = item.reference || "";
                try { options = typeof item.options === 'string' ? JSON.parse(item.options) : item.options; }
                catch { options = item.options || []; }
            } else {
                // Updated to use item.words instead of item.text
                const verseText = item.words || item.text || "";
                questionText = `"${verseText}"<br><br><i>Which reference is this verse from?</i>`;
                correctAnswer = item.book;
                reference = item.book;

                const allBooks = [...new Set(gameState.verses.data.map(v => v.book))];
                const otherBooks = allBooks.filter(b => b !== correctAnswer).sort(() => 0.5 - Math.random()).slice(0, 3);
                options = [correctAnswer, ...otherBooks].sort(() => 0.5 - Math.random());
            }

            state.container.innerHTML = `
        <div class="quiz-card fade-in" id="card-${type}">
          <div class="score-display">Question ${state.index + 1} of ${state.data.length} | Score: ${state.score}</div>
          <h3 style="margin-bottom: 24px; font-size: 1.4rem; line-height: 1.5;">${questionText}</h3>
          <div id="options-${type}">
            ${options.map((opt) => `<button class="quiz-btn" data-val="${opt}">${opt}</button>`).join('')}
          </div>
          <div id="feedback-${type}" style="margin-top: 16px; font-weight: bold; min-height: 24px;"></div>
          <button class="next-btn" id="next-${type}">Next Question ➔</button>
        </div>
      `;

            const optionBtns = state.container.querySelectorAll('.quiz-btn');
            const nextBtn = document.getElementById(`next-${type}`);
            const feedback = document.getElementById(`feedback-${type}`);
            const card = document.getElementById(`card-${type}`);

            optionBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selected = (e.target as HTMLButtonElement).getAttribute('data-val');
                    const isCorrect = selected === correctAnswer;

                    if (isCorrect) {
                        state.score++;
                        playCorrectSound();
                        triggerCelebration();
                        if (feedback) { feedback.innerText = `Correct! (${reference})`; feedback.style.color = '#28a745'; }
                        (e.target as HTMLButtonElement).classList.add('correct');
                    } else {
                        playWrongSound();
                        if (feedback) { feedback.innerText = `Incorrect. The answer is ${correctAnswer}.`; feedback.style.color = '#dc3545'; }
                        (e.target as HTMLButtonElement).classList.add('wrong');
                        optionBtns.forEach(b => {
                            if (b.getAttribute('data-val') === correctAnswer) b.classList.add('correct');
                        });
                    }

                    optionBtns.forEach(b => (b as HTMLButtonElement).disabled = true);
                    if (nextBtn) nextBtn.style.display = 'inline-block';
                });
            });

            nextBtn?.addEventListener('click', () => {
                if (card) {
                    card.classList.remove('fade-in');
                    card.classList.add('fade-out');
                    setTimeout(() => {
                        state.index++;
                        renderQuestion(type);
                    }, 300);
                }
            });
        };
        // --- 4. Load JSON Data ---
        const loadData = () => {
            try {
                gameState.trivia.data = [...triviaData].sort(() => 0.5 - Math.random());
                renderQuestion('trivia');

                gameState.verses.data = [...versesData].sort(() => 0.5 - Math.random());
                renderQuestion('verses');
            } catch (error) {
                console.error("Error loading JSON data:", error);
            }
        };

        loadData();
    }
};