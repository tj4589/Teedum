```
import { useState, useEffect, useRef } from "react";
import { Gamepad2, MessageCircleHeart, UtensilsCrossed, Lock, Unlock, Sparkles, MoonStar, MapPin, RefreshCw, Check, CalendarDays, ArrowRight } from "lucide-react";

const SECRET_CODE = "netflix";

const activities = [
    {
        id: "games",
        icon: <Gamepad2 size={48} strokeWidth={1.5} />,
        title: "Game Night",
        description: "Pick a game to play together online — Skribbl, Chess, or a fun multiplayer?",
        color: "#a78bfa",
        suggestions: ["Skribbl.io", "Chess.com", "Gartic Phone", "Among Us"],
    },
    {
        id: "talk",
        icon: <MessageCircleHeart size={48} strokeWidth={1.5} />,
        title: "Deep Talk",
        description: "Just the two of you. No topic off limits. Pure connection.",
        color: "#c084fc",
        suggestions: ["Would you rather?", "21 Questions", "Tell me a secret", "Future dreams"],
    },
    {
        id: "eat",
        icon: <UtensilsCrossed size={48} strokeWidth={1.5} />,
        title: "Eat Together",
        description: "Order the same food or cook something together over video call.",
        color: "#818cf8",
        suggestions: ["Order matching meals", "Cook the same recipe", "Try a new cuisine", "Dessert date 🍰"],
    },
];

const DAYS = ["Friday", "Saturday", "Sunday"];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${ Math.random() * 95 }% `,
    delay: `${ Math.random() * 8 } s`,
    dur: `${ 6 + Math.random() * 6 } s`,
    size: `${ 0.8 + Math.random() * 1.2 } rem`,
    icon: [<Sparkles size={16} />, <MoonStar size={16} />, "☁️", "✨"][Math.floor(Math.random() * 4)],
}));

export default function App() {
    const [unlocked, setUnlocked] = useState(false);
    const [code, setCode] = useState("");
    const [shake, setShake] = useState(false);
    const [wrongMsg, setWrongMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // Stages: 'landing' (lock) -> 'select-day' -> 'wheel' -> 'spinning' -> 'result'
    const [stage, setStage] = useState("select-day");
    const [selectedDay, setSelectedDay] = useState("");

    const [picked, setPicked] = useState(null);
    const [spinning, setSpinning] = useState(false);
    const [spinDeg, setSpinDeg] = useState(0);
    const [checked, setChecked] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!unlocked && inputRef.current) inputRef.current.focus();
    }, [unlocked]);

    const handleUnlock = () => {
        if (code.trim().toLowerCase() === SECRET_CODE) {
            setSuccess(true);
            setTimeout(() => setUnlocked(true), 1200);
        } else {
            setShake(true);
            setWrongMsg("Hmm, that's not right... 🤔");
            setTimeout(() => { setShake(false); setWrongMsg(""); }, 1800);
            setCode("");
        }
    };

    const handleDaySelect = (day) => {
        setSelectedDay(day);
        setStage("wheel");
    };

    const spin = () => {
        if (spinning) return;
        setSpinning(true);
        setStage("spinning");
        setChecked([]);

        const activityIndex = Math.floor(Math.random() * activities.length);
        const activity = activities[activityIndex];

        // The wheel has 3 segments: 0-120, 120-240, 240-360.
        // The centers of these sectors are at 60, 180, 300 degrees.
        const activityAngles = [60, 180, 300];
        const targetAngle = activityAngles[activityIndex];

        const rotationToTarget = (360 - targetAngle) % 360;
        const extraSpins = (4 + Math.floor(Math.random() * 2)) * 360;
        const targetRotation = spinDeg + extraSpins + rotationToTarget - (spinDeg % 360);

        setSpinDeg(targetRotation);

        setTimeout(() => {
            setPicked(activity);
            setStage("result");
            setSpinning(false);
        }, 2600);
    };

    const reset = () => { setStage("select-day"); setPicked(null); setChecked([]); setSelectedDay(""); };
    const toggleChip = (s) => setChecked((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);

    return (
        <div className="root-wrapper">
            <style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        *, *:: before, *::after { box - sizing: border - box; margin: 0; padding: 0; }

        :root {
    --purple - deep: #4c1d95;
    --purple - main: #8b5cf6;
    --purple - mid: #a78bfa;
    --purple - light: #ddd6fe;
    --purple - pale: #f5f3ff;
    --purple - soft: #ede9fe;
    --white: #ffffff;
    --glass: rgba(255, 255, 255, 0.7);
    --glass - border: rgba(139, 92, 246, 0.2);
}

        body {
    background: linear - gradient(135deg, var(--purple - pale) 0 %, var(--purple - soft) 50 %, #f3e8ff 100 %);
    font - family: 'Outfit', sans - serif;
    min - height: 100vh;
    overflow - x: hidden;
    color: var(--purple - deep);
}

/* Essential Utility & Animation */
@keyframes floatUp {
    0 % { transform: translateY(105vh) scale(.6); opacity: 0; }
    10 % { opacity: .5; }
    90 % { opacity: .4; }
    100 % { transform: translateY(-10vh) scale(1.1); opacity: 0; }
}
@keyframes popIn {
    0 % { transform: scale(.8); opacity: 0; }
    100 % { transform: scale(1); opacity: 1; }
}
@keyframes shake {
    0 %, 100 % { transform: translateX(0); }
    25 % { transform: translateX(-8px); }
    75 % { transform: translateX(8px); }
}
@keyframes glow {
    0 %, 100 % { text- shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}
50 % { text- shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
        }

        /* ── STRUCTURAL WRAPPERS ── */
        .root - wrapper {
    min - height: 100vh;
    width: 100vw;
    display: flex;
    align - items: center;
    justify - content: center;
    padding: 1.5rem;
    position: relative;
}

        /* ── LOCK SCREEN ── */
        .lock - container {
    position: fixed; inset: 0; z - index: 100;
    background: rgba(245, 243, 255, 0.95);
    backdrop - filter: blur(20px);
    display: flex; align - items: center; justify - content: center;
    padding: 1.5rem;
    transition: opacity 0.8s ease, transform 0.8s ease;
}
        .lock - container.fading { opacity: 0; pointer - events: none; transform: scale(1.02); }

        .lock - card {
    background: var(--white);
    border: 1px solid var(--glass - border);
    border - radius: 32px;
    padding: 2.5rem 2rem;
    width: 100 %;
    max - width: 440px;
    text - align: center;
    box - shadow: 0 20px 50px rgba(167, 139, 250, 0.15);
}
        .lock - card.shaking { animation: shake .4s ease; border - color: #f87171; }

        .lock - title {
    font - family: 'Playfair Display', serif;
    font - size: min(10vw, 2.4rem);
    color: var(--purple - deep);
    margin - top: 1rem;
    margin - bottom: 0.5rem;
}
        .lock - subtitle {
    color: var(--purple - main);
    font - weight: 500;
    margin - bottom: 2rem;
    font - size: 0.95rem;
}

        .code - input {
    background: var(--purple - pale);
    border: 2px solid transparent;
    border - radius: 16px;
    color: var(--purple - deep);
    font - size: 1.1rem;
    font - weight: 600;
    padding: 18px;
    width: 100 %;
    text - align: center;
    outline: none;
    transition: all 0.3s;
    margin - bottom: 1rem;
}
        .code - input:focus { border - color: var(--purple - mid); background: var(--white); box - shadow: 0 0 15px rgba(167, 139, 250, 0.1); }

        .btn - primary {
    background: linear - gradient(135deg, var(--purple - main), var(--purple - mid));
    color: white;
    border: none;
    border - radius: 16px;
    padding: 18px 32px;
    font - size: 1rem;
    font - weight: 700;
    cursor: pointer;
    width: 100 %;
    display: flex;
    align - items: center;
    justify - content: center;
    gap: 0.5rem;
    transition: transform 0.2s, box - shadow 0.2s;
    box - shadow: 0 10px 20px rgba(139, 92, 246, 0.2);
}
        .btn - primary:hover { transform: translateY(-2px); box - shadow: 0 15px 30px rgba(139, 92, 246, 0.3); }
        .btn - primary:active { transform: scale(0.98); }

        /* ── MAIN CONTENT ── */
        .app - container {
    width: 100 %;
    max - width: 1200px;
    display: flex;
    flex - direction: column;
    align - items: center;
    z - index: 1;
}

        .header { text - align: center; margin - bottom: 3rem; }
        .header h1 {
    font - family: 'Playfair Display', serif;
    font - size: min(12vw, 4rem);
    color: var(--purple - deep);
    margin - bottom: 0.5rem;
    animation: glow 4s infinite ease -in -out;
    line - height: 1.1;
}
        .header p { color: var(--purple - main); font - weight: 600; letter - spacing: 1px; font - size: 0.9rem; }

        /* ── DAY SELECTION ── */
        .day - card {
    background: rgba(255, 255, 255, 0.85);
    backdrop - filter: blur(15px);
    border: 1px solid var(--glass - border);
    border - radius: 32px;
    padding: clamp(2rem, 5vw, 3.5rem);
    width: 100 %;
    max - width: 500px;
    text - align: center;
    box - shadow: 0 30px 60px rgba(139, 92, 246, 0.12);
    animation: popIn 0.5s cubic - bezier(0.175, 0.885, 0.32, 1.275);
}
        .day - grid {
    display: flex;
    flex - direction: column;
    gap: 1rem;
    margin - top: 2rem;
}
        .day - btn {
    background: var(--purple - pale);
    border: 2px solid transparent;
    color: var(--purple - deep);
    padding: 1.2rem;
    border - radius: 16px;
    font - size: 1.1rem;
    font - weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify - content: space - between;
    align - items: center;
}
        .day - btn:hover {
    background: var(--white);
    border - color: var(--purple - mid);
    transform: translateY(-2px);
    box - shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
}

        /* ── WHEEL ── */
        .wheel - box {
    position: relative;
    width: min(85vw, 420px);
    height: min(85vw, 420px);
    margin: 0 auto 2.5rem;
    animation: popIn 0.8s cubic - bezier(0.175, 0.885, 0.32, 1.275);
}
        .wheel - disc {
    width: 100 %; height: 100 %;
    border - radius: 50 %;
    background: conic - gradient(var(--purple - mid) 0deg 120deg, var(--purple - main) 120deg 240deg, var(--purple - deep) 240deg 360deg);
    border: 8px solid var(--white);
    box - shadow: 0 25px 50px rgba(139, 92, 246, 0.2);
    transition: transform 2.6s cubic - bezier(0.15, 0, 0.15, 1);
    position: relative;
}
/* Fix for desktop border thickness */
@media(min - width: 768px) { .wheel - disc { border - width: 12px; } }

        .wheel - pointer {
    position: absolute; top: -20px; left: 50 %;
    transform: translateX(-50 %);
    z - index: 10;
    color: var(--purple - deep);
    filter: drop - shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

        .wheel - icon - container {
    position: absolute;
    left: 50 %; top: 50 %;
    color: var(--white);
    pointer - events: none;
    filter: drop - shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    /* Adjusted transform to push icons outward horizontally first, then rotate the entire container to place it correctly */
    transform - origin: center center;
}

        .spin - status {
    font - weight: 600;
    color: var(--purple - main);
    margin - bottom: 1.5rem;
    font - size: 1.1rem;
    text - align: center;
    padding: 0 1rem;
}

        /* ── RESULT CARD ── */
    .result - card {
    background: rgba(255, 255, 255, 0.85);
    backdrop - filter: blur(15px);
    border: 1px solid var(--glass - border);
    border - radius: 32px;
    padding: clamp(2rem, 5vw, 3.5rem);
    width: 100 %;
    max - width: 550px;
    text - align: center;
    box - shadow: 0 30px 60px rgba(139, 92, 246, 0.12);
    animation: popIn 0.6s cubic - bezier(0.175, 0.885, 0.32, 1.275);
}

    .result - icon {
    color: var(--purple - main);
    margin - bottom: 1.5rem;
    display: inline - block;
    filter: drop - shadow(0 4px 12px rgba(139, 92, 246, 0.3));
}
        .result - title { font - family: 'Playfair Display', serif; font - size: min(8vw, 2.5rem); margin - bottom: 0.5rem; color: var(--purple - deep); }
        .result - subtitle { color: var(--purple - main); font - weight: 600; margin - bottom: 1.5rem; font - size: 1rem; }
        .result - desc { color: #6b7280; font - size: 1.05rem; line - height: 1.6; margin - bottom: 2rem; }

        .suggestions - grid {
    display: flex; flex - wrap: wrap; justify - content: center; gap: 0.6rem; margin - bottom: 2rem;
}
        .chip {
    padding: 0.75rem 1.2rem;
    border - radius: 100px;
    background: var(--purple - pale);
    border: 1.5px solid transparent;
    color: var(--purple - deep);
    font - weight: 600;
    font - size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align - items: center;
    gap: 0.4rem;
}
        .chip.active { background: var(--purple - main); color: white; border - color: var(--purple - main); }
        .chip:hover { transform: translateY(-2px); border - color: var(--purple - mid); }

        .btn - outline {
    background: transparent;
    border: 2px solid var(--purple - mid);
    color: var(--purple - main);
    padding: 14px 36px;
    border - radius: 100px;
    font - weight: 700;
    font - size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    display: inline - flex;
    align - items: center;
    gap: 0.5rem;
}
        .btn - outline:hover { background: var(--purple - pale); transform: scale(1.05); }

        .footer {
    margin - top: 3rem;
    opacity: 0.6;
    font - size: 0.9rem;
    font - weight: 600;
    text - align: center;
}
`}</style>

            {/* Floating particles */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
                {PARTICLES.map((p) => (
                    <div key={p.id} style={{
                        position: "absolute", bottom: "-10%", left: p.left,
                        color: "var(--purple-mid)",
                        fontSize: p.size, opacity: 0,
                        animation: `floatUp ${ p.dur } ${ p.delay } linear infinite`
                    }}>
                        {p.icon}
                    </div>
                ))}
            </div>

            {/* ── LOCK SCREEN ── */}
            {!unlocked && (
                <div className={`lock - container ${ success ? "fading" : "" } `}>
                    <div className={`lock - card ${ shake ? "shaking" : "" } `}>
                        <div style={{ color: "var(--purple-main)", marginBottom: "1rem", display: "inline-block" }}>
                            {success ? <Unlock size={64} strokeWidth={1.5} /> : <Lock size={64} strokeWidth={1.5} />}
                        </div>
                        <h1 className="lock-title">{success ? "Welcome, My Dum" : "DUM & T"}</h1>
                        <p className="lock-subtitle">Secret code for a special night <MoonStar size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /></p>
                        <input
                            ref={inputRef}
                            className="code-input"
                            type="password"
                            placeholder="••••••"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                            disabled={success}
                        />
                        <button className="btn-primary" onClick={handleUnlock} disabled={success}>
                            {success ? "Entering..." : "Open My Surprise"}
                            {!success && <Sparkles size={18} />}
                        </button>
                        <p style={{ marginTop: 15, color: "#f87171", fontSize: "0.9rem", fontWeight: 600, minHeight: "20px" }}>{wrongMsg}</p>
                    </div>
                </div>
            )}

            {/* ── MAIN APP ── */}
            {unlocked && (
                <div className="app-container">
                    <header className="header" style={{ animation: "popIn 0.8s ease" }}>
                        <p>A LITTLE SURPRISE FOR YOU</p>
                        <h1>Virtual Date Night</h1>
                    </header>

                    {stage === "select-day" && (
                        <div className="day-card">
                            <CalendarDays size={48} color="var(--purple-main)" style={{ marginBottom: '1rem' }} />
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--purple-deep)" }}>When are we hanging out?</h2>
                            <p style={{ color: "var(--purple-mid)", marginTop: "0.5rem" }}>Pick a day for our special evening.</p>

                            <div className="day-grid">
                                {DAYS.map(day => (
                                    <button key={day} className="day-btn" onClick={() => handleDaySelect(day)}>
                                        <span>{day} Night</span>
                                        <ArrowRight size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {(stage === "wheel" || stage === "spinning") && (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                            <div className="wheel-box">
                                <MapPin className="wheel-pointer" size={48} strokeWidth={2} fill="white" />
                                <div className="wheel-disc" style={{ transform: `rotate(${ spinDeg }deg)` }}>
                                    {activities.map((a, i) => {
                                        // Spread the icons into the center of the slices
                                        // Segment 1 (0-120) Center = 60deg
                                        // To spread them, we rotate them, translate outward, and rotate back so they stay upright
                                        const angle = i * 120 + 60;
                                        return (
                                            <div key={a.id} className="wheel-icon-container" style={{
                                                // 1. Rotate to the slice's center angle
                                                // 2. Translate outward along that angle (e.g. translateY(-100px) pushes it 'up/out' depending on the rotation)
                                                // 3. Counter-rotate so the icon stays straight up
                                                transform: `rotate(${ angle }deg) translateY(-85px) rotate(-${ angle }deg) translate(-50 %, -50 %)`,
                                                transformOrigin: '0 0'
                                            }}>
                                                {a.icon}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <p className="spin-status">{spinning ? "Finding the perfect vibe..." : `Let's decide our ${selectedDay} plans!`}</p>
{
    !spinning && (
        <button className="btn-primary" style={{ width: "auto", padding: "18px 48px" }} onClick={spin}>
            <RefreshCw size={20} /> Spin the Wheel
        </button>
    )
}
                        </div >
                    )}

{
    stage === "result" && (
        <div className="result-card">
            <span className="result-icon">{picked.icon}</span>
            <h2 className="result-title">{picked.title}</h2>
            <p className="result-subtitle">For {selectedDay} Night</p>
            <p className="result-desc">{picked.description}</p>
            <div className="suggestions-grid">
                {picked.suggestions.map(s => (
                    <button
                        key={s}
                        className={`chip ${checked.includes(s) ? "active" : ""}`}
                        onClick={() => toggleChip(s)}
                    >
                        {checked.includes(s) && <Check size={16} strokeWidth={3} />}
                        {s}
                    </button>
                ))}
            </div>
            <button className="btn-outline" onClick={reset}>
                <RefreshCw size={18} /> Start Over
            </button>
        </div>
    )
}

<footer className="footer">
    Made with <MessageCircleHeart size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> by T for DUM
</footer>
                </div >
            )}
        </div >
    );
}
```
