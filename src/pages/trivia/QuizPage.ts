import type { Page } from "../../types";
import triviaData from "./data/quizes.json";
import versesData from "./data/verses.json";
import "./QuizPage.css";

export const QuizPage: Page = {
    render: () => /* html */ `
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
            const notes = [523.25, 659.25, 783.99, 1046.50];
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

        // --- Visual Celebration Effects ---
        const triggerCelebration = () => {
            const canvas = document.getElementById('celebration-canvas') as HTMLCanvasElement;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

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

            interface Particle {
                x: number; y: number; vx: number; vy: number;
                color: string; size: number; alpha: number; gravity: number;
            }

            const particles: Particle[] = [];

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
            trivia: { data: [] as any[], order: [] as number[], index: 0, score: 0, container: document.getElementById('trivia-container') },
            verses: { data: [] as any[], order: [] as number[], index: 0, score: 0, container: document.getElementById('verses-container') }
        };

        // --- 3. Reliable Index-Based LocalStorage Helpers ---
        const getStorageKey = (type: 'trivia' | 'verses') => `bible_quiz_save_${type}`;

        const saveProgress = (type: 'trivia' | 'verses') => {
            const state = gameState[type];
            const payload = {
                index: state.index,
                score: state.score,
                order: state.order
            };
            localStorage.setItem(getStorageKey(type), JSON.stringify(payload));
        };

        const loadProgress = (type: 'trivia' | 'verses', rawData: any[]) => {
            const savedStr = localStorage.getItem(getStorageKey(type));
            if (savedStr) {
                try {
                    const parsed = JSON.parse(savedStr);
                    if (Array.isArray(parsed.order) && parsed.order.length === rawData.length) {
                        return {
                            data: parsed.order.map((idx: number) => rawData[idx]),
                            order: parsed.order,
                            index: parsed.index || 0,
                            score: parsed.score || 0
                        };
                    }
                } catch (e) {
                    console.error(`Failed to load saved progress for ${type}`, e);
                }
            }

            // Fresh start: Create index array and shuffle
            const order = rawData.map((_, i) => i).sort(() => 0.5 - Math.random());
            const freshState = {
                data: order.map(i => rawData[i]),
                order,
                index: 0,
                score: 0
            };
            localStorage.setItem(getStorageKey(type), JSON.stringify({ index: 0, score: 0, order }));
            return freshState;
        };

        const resetProgress = (type: 'trivia' | 'verses', rawData: any[]) => {
            localStorage.removeItem(getStorageKey(type));
            const order = rawData.map((_, i) => i).sort(() => 0.5 - Math.random());
            gameState[type].order = order;
            gameState[type].data = order.map(i => rawData[i]);
            gameState[type].index = 0;
            gameState[type].score = 0;
            saveProgress(type);
        };

        // --- 4. UI Renderer for Quizzes ---
        const renderQuestion = (type: 'trivia' | 'verses') => {
            const state = gameState[type];
            if (!state.container) return;

            // Completion Screen
            if (state.index >= state.data.length && state.data.length > 0) {
                state.container.innerHTML = `
          <div class="quiz-card fade-in" style="text-align: center;">
            <h2>Quiz Complete!</h2>
            <p class="score-display">Your Score: ${state.score} / ${state.data.length}</p>
            <button class="next-btn" style="display: inline-block;" id="restart-${type}">Play Again</button>
          </div>
        `;
                document.getElementById(`restart-${type}`)?.addEventListener('click', () => {
                    const rawData = type === 'trivia' ? triviaData : versesData;
                    resetProgress(type, rawData);
                    renderQuestion(type);
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

                    saveProgress(type);
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
                        saveProgress(type);
                        renderQuestion(type);
                    }, 300);
                }
            });
        };

        // --- 5. Load Progress or Initialize ---
        const loadData = () => {
            try {
                // Trivia Progress
                const triviaProgress = loadProgress('trivia', triviaData);
                gameState.trivia.data = triviaProgress.data;
                gameState.trivia.order = triviaProgress.order;
                gameState.trivia.index = triviaProgress.index;
                gameState.trivia.score = triviaProgress.score;
                renderQuestion('trivia');

                // Verses Progress
                const versesProgress = loadProgress('verses', versesData);
                gameState.verses.data = versesProgress.data;
                gameState.verses.order = versesProgress.order;
                gameState.verses.index = versesProgress.index;
                gameState.verses.score = versesProgress.score;
                renderQuestion('verses');
            } catch (error) {
                console.error("Error loading JSON data:", error);
            }
        };

        loadData();
    }
};