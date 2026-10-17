import { chromium } from "playwright-core";
import fs from "node:fs";
const [,, mode, ...rest] = process.argv;
const exe = fs.existsSync("/opt/pw-browsers/chromium-1194/chrome-linux/chrome") ? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" : undefined;
const browser = await chromium.launch({ executablePath: exe, args: ["--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist","--enable-webgl","--hide-scrollbars","--force-device-scale-factor=1"] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on("console", m => { if (m.type()==="error") console.log("console:", m.text()); });
page.on("pageerror", e => console.log("pageerror:", e.message));
await page.goto("http://127.0.0.1:8765/film.html", { waitUntil: "load" });
const info = await page.evaluate(() => window.init());
fs.writeFileSync("init.json", JSON.stringify(info, null, 1));
async function frame(t, file, type = "png") {
  await page.evaluate(tt => window.seek(tt), t);
  await page.evaluate(() => window.settle());
  await page.screenshot({ path: file, type, ...(type==="jpeg"?{quality:95}:{}) });
}
if (mode === "stills") {
  fs.mkdirSync("stills", { recursive: true });
  for (const t of rest.map(Number)) { await frame(t, `stills/t${t.toFixed(2)}.png`); console.log("still", t); }
} else if (mode === "full") {
  const [from = 0, to = 600] = rest.map(Number);
  fs.mkdirSync("frames", { recursive: true });
  const t0 = Date.now();
  for (let i = from; i < to; i++) {
    const t = i / 30;
    // two seeks so state changes (mode clicks) settle before capture
    const ch = await page.evaluate(tt => window.seek(tt), t);
    if (ch.length) await page.waitForTimeout(250);
    await page.evaluate(() => window.settle());
    await page.screenshot({ path: `frames/f${String(i).padStart(4, "0")}.png`, type: "png" });
    if (i % 30 === 0) console.log("frame", i, ((Date.now() - t0) / 1000).toFixed(0) + "s");
  }
}
await browser.close();
