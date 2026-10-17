"""OneSimpleSite intro film – instrumental soundtrack.

Everything is synthesised with numpy: one key (A minor), one space (shared reverb), timed to the
film's story beats. The 20 s render folds its reverb/tail back onto the start so it loops cleanly.
"""
import wave
import numpy as np

SR = 48000
DUR = 20.0
N = int(SR * DUR)
TAIL = int(SR * 3.5)
rng = np.random.default_rng(7)

music_l = np.zeros(N + TAIL); music_r = np.zeros(N + TAIL)
fx_l = np.zeros(N + TAIL); fx_r = np.zeros(N + TAIL)


def tt(n): return np.arange(n) / SR


def add(bufL, bufR, sig, start, pan=0.0):
    i = int(start * SR)
    n = min(len(sig), N + TAIL - i)
    if n <= 0: return
    gl = np.cos((pan + 1) * np.pi / 4); gr = np.sin((pan + 1) * np.pi / 4)
    bufL[i:i + n] += sig[:n] * gl
    bufR[i:i + n] += sig[:n] * gr


def lowpass(x, fc):
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.empty_like(x); s = 0.0
    for i in range(len(x)):
        s = (1 - a) * x[i] + a * s
        y[i] = s
    return y


def sweep_lowpass(x, f0, f1):
    n = len(x); y = np.empty_like(x); s = 0.0
    fcs = np.geomspace(f0, f1, n)
    for i in range(n):
        a = np.exp(-2 * np.pi * fcs[i] / SR)
        s = (1 - a) * x[i] + a * s
        y[i] = s
    return y


def pluck(freq, dur=2.2, amp=0.3, bright=1.0):
    n = int(SR * dur); t = tt(n)
    sig = np.zeros(n)
    for h in range(1, 9):
        f = freq * h * (1 + 0.0004 * h * h)           # slight stretch -> felt-piano character
        if f > 9000: break
        tau = 1.6 / (h ** 0.75) * (0.8 + 0.2 * bright)
        sig += (1.0 / h ** 1.25) * np.sin(2 * np.pi * f * t + h) * np.exp(-t / tau)
    att = np.minimum(1, t / 0.004)
    thump = np.exp(-t / 0.02) * rng.standard_normal(n) * 0.04      # soft hammer
    sig = (sig + lowpass(thump, 1800)) * att
    return sig * amp / np.max(np.abs(sig) + 1e-9) * 1.0


def pad_note(freq, dur, amp=0.1):
    n = int(SR * dur); t = tt(n)
    sig = np.zeros(n)
    for det in (-0.07, 0.0, 0.08):
        f0 = freq * 2 ** (det / 12)
        lfo = 1 + 0.003 * np.sin(2 * np.pi * (0.13 + 0.05 * det * 10) * t + det * 9)
        for h in range(1, 14):
            f = f0 * h
            if f > 3200: break
            w = 1.0 / h / (1 + (f / 900) ** 2)
            sig += w * np.sin(2 * np.pi * f * t * lfo + h * 1.3 + det * 7)
    fade = np.minimum(1, t / 1.4) * np.minimum(1, (dur - t) / 1.4)
    return sig * fade * amp


def thump(freq=52, dur=1.2, amp=0.5):
    n = int(SR * dur); t = tt(n)
    f = freq + 70 * np.exp(-t / 0.05)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t / 0.38) * amp * np.minimum(1, t / 0.003)


def tick(amp=0.05, f=2400):
    n = int(SR * 0.05); t = tt(n)
    z = rng.standard_normal(n) * np.exp(-t / 0.006)
    z = lowpass(z, f)
    return z * amp


def swell(start, dur, f0, f1, amp=0.12, up=True, pan=0.0):
    n = int(SR * dur); t = tt(n)
    z = rng.standard_normal(n)
    z = sweep_lowpass(z, f0, f1)
    z = z - lowpass(z, 180)                       # keep the low end clear for the pad
    env = (t / dur) ** 2.2 if up else (1 - t / dur) ** 1.6
    env = env * np.minimum(1, (dur - t) / 0.05)
    z = z / (np.max(np.abs(z)) + 1e-9)
    add(fx_l, fx_r, z * env * amp, start, pan)


def bell(freq, dur=2.6, amp=0.12):
    n = int(SR * dur); t = tt(n)
    sig = (np.sin(2 * np.pi * freq * t) * np.exp(-t / 1.3)
           + 0.35 * np.sin(2 * np.pi * freq * 2.005 * t) * np.exp(-t / 0.7)
           + 0.18 * np.sin(2 * np.pi * freq * 3.01 * t) * np.exp(-t / 0.35))
    return sig * np.minimum(1, t / 0.006) * amp


NOTE = dict(A2=110.0, E3=164.81, G3=196.0, A3=220.0, B3=246.94, C4=261.63, D3=146.83, F3=174.61, E4=329.63,
            D4=293.66, F4=349.23, G4=392.0, A4=440.0, B4=493.88, C5=523.25, D5=587.33, E5=659.25, F5=698.46,
            G5=783.99, A5=880.0, B5=987.77, C6=1046.5, D6=1174.66, E6=1318.5, F2=87.31, D2=73.42, E2=82.41)

# ---------- pad / harmony: Am | F | Dm | Em → Am (loops) ----------
chords = [
    (0.0, 5.2, ["A2", "A3", "C4", "E4"]),
    (5.0, 5.2, ["F2", "F3", "A3", "C4"]),
    (10.0, 5.2, ["D2", "D3", "A3", "F4"]),
    (15.0, 2.7, ["E2", "E3", "G3", "B3"]),
    (17.5, 3.4, ["A2", "A3", "C4", "E4", "A4"]),   # 17.5–20.9: tail wraps onto the opening Am
]
for st, du, notes in chords:
    for k, nm in enumerate(notes):
        a = 0.045 if nm.endswith("2") else 0.055
        add(music_l, music_r, pad_note(NOTE[nm], du, a), st, pan=-0.35 + 0.23 * k)
# wrap-friendly: the opening Am has no fade-in clash because the tail of the last chord overlaps it

# ---------- slow heartbeat on chord changes ----------
for st, amp in [(0.0, .15), (5.0, .3), (10.0, .2), (15.0, .18), (17.5, .4)]:
    add(music_l, music_r, thump(52 if st != 10.0 else 49, 1.4, amp), st)

# ---------- melody (felt-piano style), timed to the story ----------
melody = [
    # S1 "You've got an idea."
    (0.60, "E4", .20), (1.22, "A4", .20), (1.85, "C5", .22), (2.47, "E5", .24), (3.10, "D5", .16),
    # S2 "Let's bring it online." – resolve when the real site arrives
    (4.35, "A4", .17), (4.97, "C5", .18), (5.60, "F5", .26), (6.22, "C5", .17), (6.85, "A4", .16), (7.47, "C5", .15),
    # S3 "A website that feels like you."
    (8.12, "C5", .17), (8.75, "F5", .18), (9.37, "A4", .15), (10.0, "D5", .20), (10.62, "F5", .17), (11.25, "A5", .15),
    (11.87, "F5", .15), (12.50, "D5", .14),
    # S4 "Built around your business."
    (13.12, "A4", .16), (13.75, "D5", .17),
    # S5 logo + "Let's build yours."
    (17.55, "E5", .22), (18.15, "A5", .17), (18.85, "C5", .14),
]
for st, nm, amp in melody:
    add(music_l, music_r, pluck(NOTE[nm], 2.8, amp), st, pan=0.12 * np.sin(st))

# ---------- UI clicks: tonal blips in key (A – B – E) on the three gear changes ----------
for st, nm in [(14.30, "A5"), (15.20, "B5"), (16.10, "E6")]:
    add(fx_l, fx_r, pluck(NOTE[nm], 1.0, .13, bright=1.2), st, pan=0.1)
    add(fx_l, fx_r, tick(.07, 3200), st - 0.004)

# ---------- word ticks (very soft) ----------
words = [0.55, 0.75, 0.95, 1.15, 4.50, 4.66, 4.82, 4.98, 13.20, 13.36, 13.52, 13.68, 17.85, 18.03, 18.21]
words += [8.10 + 0.14 * i for i in range(6)]
for w in words:
    add(fx_l, fx_r, tick(.045, 2100), w + 0.03, pan=0.05)

# ---------- spark at t=0, cinematic swells ----------
add(fx_l, fx_r, bell(NOTE["A5"], 2.2, .06), 0.02)
swell(3.15, 1.85, 500, 7000, .13, up=True)                        # shapes converge
add(fx_l, fx_r, bell(NOTE["A5"], 2.6, .045), 5.72)                # site resolves
swell(9.75, 1.5, 700, 4200, .075, up=True, pan=-.2)               # desktop → phone
swell(16.6, 0.9, 400, 6500, .16, up=True)                         # lime iris opens
add(fx_l, fx_r, bell(NOTE["E5"], 3.0, .07), 17.5)
add(fx_l, fx_r, bell(NOTE["A5"], 3.0, .05), 18.1)
swell(19.2, 0.78, 5200, 600, .09, up=False)                       # iris closes to the dot
# closing "pop": a tiny falling sine into the dot, ending exactly where the opening begins
n = int(SR * 0.7); t = tt(n)
f = 880 * np.exp(-t / 0.55) + 110
sig = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * np.minimum(1, t / 0.7)) * 0.05
add(fx_l, fx_r, sig, 19.3)

# ---------- shared space: stereo reverb applied to both buses ----------
def make_ir(seconds=2.6, seed=1):
    r = np.random.default_rng(seed)
    n = int(SR * seconds); t = tt(n)
    ir = r.standard_normal(n) * np.exp(-t / 0.75)
    ir = lowpass(ir, 3800)
    ir[:int(SR * .012)] = 0
    return ir / np.sqrt(np.sum(ir ** 2))


def convolve(x, ir):
    n = len(x) + len(ir)
    nfft = 1 << (n - 1).bit_length()
    y = np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(ir, nfft), nfft)[:len(x)]
    return y


irL, irR = make_ir(2.6, 1), make_ir(2.6, 2)
def space(L, R, wet):
    return L + wet * convolve(L, irL), R + wet * convolve(R, irR)

mL, mR = space(music_l, music_r, 0.38)
fL, fR = space(fx_l, fx_r, 0.5)
L = mL + fL * 0.9
R = mR + fR * 0.9

# fold the tail back onto the start so the loop is seamless
def fold(x):
    out = x[:N].copy()
    out[:TAIL] += x[N:N + TAIL]
    return out
L, R = fold(L), fold(R)

# gentle mix glue: high-pass rumble, soft saturation, normalise
def hp(x, fc=28):
    return x - lowpass(x, fc)
L, R = hp(L), hp(R)
# level arc: hushed opening, lift when the site resolves, peak on the logo, settle back for the loop
tg = np.arange(N) / SR
arc = np.interp(tg, [0, 3.0, 5.0, 8.0, 13.0, 16.5, 17.6, 19.0, 19.9, 20.0],
                    [0.68, 0.8, 1.0, 0.9, 0.95, 1.0, 1.12, 0.95, 0.7, 0.68])
L, R = L * arc, R * arc
L, R = np.tanh(L * 1.25), np.tanh(R * 1.25)
peak = max(np.max(np.abs(L)), np.max(np.abs(R)))
L, R = L / peak * 0.89, R / peak * 0.89

rms = np.sqrt(np.mean((L ** 2 + R ** 2) / 2))
print("peak dBFS %.1f  rms dBFS %.1f" % (20 * np.log10(0.89), 20 * np.log10(rms)))

pcm = (np.stack([L, R], 1) * 32767).astype("<i2")
with wave.open("soundtrack.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print("wrote soundtrack.wav", len(L) / SR, "s")
