/* Goodword — interactive onboarding funnel bundle (v4, "the journey" Jul 22).
 * Loads into ONE Webflow HTML Embed via the tiny-loader pattern:
 *   <div id="gw-funnel"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/lara374/goodword-network-landing@<SHA>/funnel.js"></script>
 * Self-contained, Shadow-DOM isolated. System fonts. Cream LP brand theme. Living-network canvas bg.
 *
 * v4 = cinematic journey (Lara's vision):
 *  - Opener: "Imagine" grows+fades → question fades in (no options) → slot-flip races the outcomes,
 *    decelerates, settles → real options stagger in.
 *  - Goal -> Value: a 3-beat auto-playing story (hook → consolidate integrations → search & act) → "Show me how".
 *  - Eyebrows removed everywhere. Role screen: question + options only (no sub-line).
 *  - Step 4 (sell): eyebrow removed; otherwise kept as-is to redesign after the journey is approved.
 *  Skippable (tap to advance); respects prefers-reduced-motion.
 * TODO: real product screenshots for value/sell visuals; real integration logos; founder copy + proof.
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;
  var REDUCE = false;
  try { REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  var GOALS = {
    customer: { label: "My next customer", hook: "Your next customer is already in your network.", media: "product shot: search → warm path to a buyer" },
    raise: { label: "My next raise", hook: "Your next investor is already in your network.", media: "product shot: investor search + intro paths" },
    hire: { label: "My next hire", hook: "Your next hire is already in your network.", media: "product shot: 'engineers in SF' → shortlist" },
    role: { label: "My own next role", hook: "Your next role is one warm intro away.", media: "product shot: target company → who you know there" },
    exploring: { label: "Just looking around", hook: "The person you need is probably already in your network.", media: "product shot: Data Hub + Copilot" }
  };
  var ROLES = {
    founder: { label: "Founder", features: ["Hiring & fundraising searches across your real network", "Warm paths to any investor or candidate", "Context before every meeting"] },
    investor: { label: "Investor", features: ["Portfolio & founder groups you can share", "Source from people you already know", "Never lose a founder relationship to time"] },
    recruiter: { label: "Recruiter", features: ["Candidate search in plain language", "Warm referral paths, not cold InMails", "Every past candidate, one query away"] },
    sales: { label: "Sales or BD", features: ["Prospects hiding in your existing network", "Who-knows-whom paths to every account", "Follow-up nudges that keep deals warm"] },
    community: { label: "Community builder", features: ["Curated groups you can pull up in a second", "Intro suggestions both directions", "The details that make you memorable"] },
    operator: { label: "Operator", features: ["Every conversation captured automatically", "Context before every meeting", "Follow-ups tracked so nothing slips"] }
  };
  var GOAL_ORDER = ["customer", "raise", "hire", "role", "exploring"];
  var ROLE_ORDER = ["founder", "investor", "recruiter", "sales", "community", "operator"];
  var ORDER = ["goal", "value", "role", "sell"];
  var REEL = ["my next customer", "my next investor", "my next hire", "my next advisor", "an expert who gets it"];
  var SOURCES = ["LinkedIn", "Gmail", "Calendar", "WhatsApp", "Events"];

  var CSS = "\
  :host{--paper:#FEFAF5;--paper-2:#F7ECDD;--card:rgba(255,255,255,.72);--ink:#28301F;--muted:#5b6152;\
  --clay:#A85534;--clay-deep:#8A2B15;--green:#112D0A;--eyebrow:#567A44;--line:#E4D8C6;\
  all:initial;display:block;}\
  *{box-sizing:border-box;}\
  .root{position:relative;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--ink);\
  min-height:100vh;min-height:100dvh;overflow:hidden;-webkit-font-smoothing:antialiased;line-height:1.5;\
  background:radial-gradient(120% 80% at 50% -10%,#FFFDF8 0%,var(--paper) 46%,var(--paper-2) 100%);}\
  canvas.net{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0;}\
  .grain{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.5;mix-blend-mode:multiply;\
  background-image:radial-gradient(rgba(40,48,31,.05) 1px,transparent 1px);background-size:3px 3px;}\
  .stage{position:relative;z-index:2;min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;align-items:center;}\
  .bar{width:100%;max-width:620px;padding:20px 24px 0;opacity:0;transition:opacity .5s ease;}\
  .bar.on{opacity:1;}\
  .bar-row{display:flex;align-items:center;gap:14px;min-height:26px;}\
  .back{background:none;border:none;color:var(--muted);cursor:pointer;font-size:20px;line-height:1;padding:2px 6px 2px 0;font-family:inherit;border-radius:8px;transition:color .2s,transform .2s;}\
  .back:hover{color:var(--clay);transform:translateX(-2px);}\
  .back:disabled{opacity:0;pointer-events:none;}\
  .dots{display:flex;gap:7px;flex:1;}\
  .dots i{height:6px;flex:1;max-width:64px;background:var(--line);border-radius:4px;overflow:hidden;position:relative;}\
  .dots i:before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--clay),var(--clay-deep));transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.5,.1,.1,1);}\
  .dots i.done:before{transform:scaleX(1);}\
  .dots i.cur:before{transform:scaleX(1);animation:sheen 1.8s ease-in-out infinite;}\
  @keyframes sheen{0%,100%{opacity:.85;}50%{opacity:1;}}\
  .stepn{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap;}\
  .screen{width:100%;max-width:620px;flex:1;display:flex;flex-direction:column;padding:26px 24px 44px;}\
  h1{font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:clamp(30px,7.6vw,46px);line-height:1.08;margin:0 0 16px;letter-spacing:-.015em;text-wrap:balance;}\
  h1 em{font-style:italic;color:var(--clay);}\
  .body{font-size:17px;color:var(--muted);margin:0 0 26px;max-width:33em;}\
  .opts{display:flex;flex-direction:column;gap:12px;margin-top:2px;}\
  .opt{position:relative;overflow:hidden;text-align:left;font:inherit;font-size:17px;font-weight:500;color:var(--ink);\
  background:var(--card);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid var(--line);\
  border-radius:16px;padding:18px 52px 18px 20px;cursor:pointer;\
  transition:transform .18s cubic-bezier(.2,.8,.2,1),border-color .18s,box-shadow .18s,background .18s;}\
  .opt:after{content:'→';position:absolute;right:20px;top:50%;transform:translateY(-50%) translateX(-4px);color:var(--clay);opacity:0;transition:opacity .18s,transform .18s;font-size:18px;}\
  .opt:hover,.opt:focus-visible{transform:translateY(-2px);border-color:var(--clay);background:rgba(255,255,255,.92);outline:none;box-shadow:0 10px 26px -14px rgba(138,43,21,.5);}\
  .opt:hover:after,.opt:focus-visible:after{opacity:1;transform:translateY(-50%) translateX(0);}\
  .opt:active{transform:translateY(0) scale(.99);}\
  .opt.chosen{border-color:var(--clay);background:linear-gradient(180deg,rgba(255,255,255,.95),rgba(247,236,221,.95));box-shadow:0 12px 30px -14px rgba(138,43,21,.55);}\
  .opt.quiet{border-style:dashed;color:var(--muted);font-weight:400;}\
  .cta{position:relative;overflow:hidden;font:inherit;font-size:17px;font-weight:600;color:#FFF7EF;border:none;border-radius:40px;\
  padding:18px 26px;cursor:pointer;width:100%;margin-top:auto;text-align:center;text-decoration:none;display:block;\
  background:linear-gradient(180deg,#B45E3B,var(--clay-deep));box-shadow:0 14px 34px -14px rgba(138,43,21,.75);\
  transition:transform .16s cubic-bezier(.2,.8,.2,1),box-shadow .16s;}\
  .cta:hover{transform:translateY(-2px);box-shadow:0 20px 40px -16px rgba(138,43,21,.8);}\
  .cta:active{transform:translateY(0) scale(.99);}\
  .cta:before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;transform:skewX(-20deg);\
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);animation:shine 3.6s ease-in-out infinite;}\
  @keyframes shine{0%{left:-60%;}55%,100%{left:130%;}}\
  .media{position:relative;border:1px solid var(--line);border-radius:20px;overflow:hidden;\
  background:linear-gradient(135deg,#FFFDF8,#F2E6D4);min-height:200px;display:flex;align-items:center;justify-content:center;margin:8px 0 24px;padding:18px;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 18px 40px -30px rgba(40,48,31,.5);}\
  .media:before{content:'';position:absolute;inset:0;background:radial-gradient(60% 60% at 30% 20%,rgba(168,85,52,.10),transparent 70%);}\
  .media span{position:relative;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;max-width:24em;}\
  ul.feat{list-style:none;padding:0;margin:8px 0 20px;display:flex;flex-direction:column;gap:14px;}\
  ul.feat li{display:flex;gap:12px;font-size:16.5px;align-items:flex-start;}\
  ul.feat .tick{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(86,122,68,.14);color:var(--eyebrow);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-top:1px;}\
  .draft{border:1px dashed var(--clay);border-radius:14px;background:rgba(168,85,52,.055);padding:13px 15px;margin:6px 0 22px;font-size:13.5px;color:var(--clay-deep);font-style:italic;}\
  .draft b{font-style:normal;font-weight:700;letter-spacing:.07em;text-transform:uppercase;font-size:10.5px;display:block;margin-bottom:4px;}\
  /* fade primitive */\
  .fade{opacity:0;transform:translateY(12px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.8,.2,1);}\
  .fade.show{opacity:1;transform:none;}\
  .fade.gone{opacity:0;transform:translateY(-10px);}\
  /* opener */\
  .opener{flex:1;display:flex;flex-direction:column;justify-content:center;min-height:70vh;}\
  .imagine{font-family:Georgia,serif;font-style:italic;font-size:clamp(30px,9vw,52px);color:var(--muted);\
  opacity:0;transform:scale(.94);transition:opacity .8s ease,transform 1.4s cubic-bezier(.2,.8,.2,1);text-align:left;}\
  .imagine.show{opacity:.9;transform:scale(1.04);}\
  .imagine.gone{opacity:0;transform:scale(1.12);transition:opacity .6s ease,transform .8s ease;}\
  .reelwrap{font-family:Georgia,serif;font-size:clamp(26px,7vw,40px);line-height:1.1;margin-top:6px;min-height:1.3em;}\
  .reel{font-style:italic;color:var(--clay);display:inline-block;transition:opacity .12s ease,transform .12s ease;}\
  .reel.flip{opacity:.25;transform:translateY(-6px);}\
  .skiphint{position:absolute;bottom:20px;left:0;right:0;text-align:center;font-size:12px;letter-spacing:.08em;color:var(--muted);opacity:0;transition:opacity .5s;}\
  .skiphint.on{opacity:.6;}\
  /* value beats */\
  .beats{display:flex;flex-direction:column;gap:22px;flex:1;}\
  .beat{}\
  .beat h1{margin:0;}\
  .beat .beat-h{font-family:Georgia,serif;font-size:clamp(21px,5.4vw,27px);line-height:1.2;color:var(--ink);margin:0 0 14px;}\
  .chips{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:8px;}\
  .chip{font-size:14px;font-weight:600;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:999px;padding:9px 15px;\
  opacity:0;transform:translateY(8px) scale(.96);transition:opacity .45s ease,transform .45s cubic-bezier(.2,.8,.2,1);}\
  .chip.show{opacity:1;transform:none;}\
  .hub{margin-top:12px;font-family:Georgia,serif;font-size:18px;color:var(--clay-deep);display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(6px);transition:opacity .5s ease .1s,transform .5s ease .1s;}\
  .hub.show{opacity:1;transform:none;}\
  .hub .arr{color:var(--clay);}\
  .smock{border:1px solid var(--line);border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 16px 36px -28px rgba(40,48,31,.5);}\
  .smock .sq{display:flex;align-items:center;gap:9px;padding:14px 16px;border-bottom:1px solid var(--line);font-size:15px;color:var(--ink);}\
  .smock .sq .mag{color:var(--muted);}\
  .smock .sq .cursor{width:1.5px;height:17px;background:var(--clay);animation:blink 1s step-end infinite;}\
  @keyframes blink{50%{opacity:0;}}\
  .smock .res{display:flex;align-items:center;gap:12px;padding:13px 16px;}\
  .smock .av{flex:none;width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#D6A98A,#B45E3B);}\
  .smock .rn{flex:1;font-size:14.5px;}\
  .smock .rn small{display:block;color:var(--muted);font-size:12.5px;}\
  .smock .act{font-size:13px;font-weight:600;color:#FFF7EF;background:var(--clay);border-radius:999px;padding:7px 14px;}\
  .reveal{opacity:0;transform:translateY(14px);}\
  .screen.in .reveal{animation:rise .55s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d,0ms);}\
  .screen.out{opacity:0;transform:translateY(-10px) scale(.995);transition:opacity .2s ease,transform .2s ease;}\
  @keyframes rise{to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.reveal,.fade,.chip,.hub{opacity:1!important;transform:none!important;animation:none!important;transition:none!important;}\
  .cta:before,.smock .sq .cursor{animation:none;}.screen.out{transition:none;}}\
  ";

  var shadow = mount.attachShadow ? mount.attachShadow({ mode: "open" }) : mount;
  var st = document.createElement("style"); st.textContent = CSS; shadow.appendChild(st);
  var root = document.createElement("div"); root.className = "root";
  root.innerHTML =
    '<canvas class="net" aria-hidden="true"></canvas><div class="grain" aria-hidden="true"></div>' +
    '<div class="stage"><div class="bar"><div class="bar-row"><button class="back" aria-label="Back">←</button>' +
    '<div class="dots" aria-hidden="true"></div><span class="stepn"></span></div></div>' +
    '<div class="screen" aria-live="polite"></div></div>';
  shadow.appendChild(root);

  var canvas = root.querySelector("canvas.net");
  var barEl = root.querySelector(".bar");
  var screenEl = root.querySelector(".screen");
  var backBtn = root.querySelector(".back");
  var dotsEl = root.querySelector(".dots");
  var stepEl = root.querySelector(".stepn");
  dotsEl.innerHTML = ORDER.map(function () { return "<i></i>"; }).join("");
  var dots = dotsEl.querySelectorAll("i");

  var state = { goal: null, role: null, history: [] };
  var current = "goal";
  var progress = 0;
  var timers = [];
  function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function raf2(fn) { requestAnimationFrame(function () { requestAnimationFrame(fn); }); }

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function g() { return GOALS[state.goal || "exploring"]; }
  function r() { return ROLES[state.role || "founder"]; }
  function signupHref() {
    var p; try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "exploring"); if (state.role) p.set("role", state.role);
    if (!p.get("utm_source")) p.set("utm_source", "funnel"); p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }

  function paintChrome() {
    var idx = ORDER.indexOf(current);
    progress = idx / (ORDER.length - 1);
    for (var i = 0; i < dots.length; i++) dots[i].className = i < idx ? "done" : (i === idx ? "cur" : "");
    stepEl.textContent = "Step " + (idx + 1) + " of " + ORDER.length;
    backBtn.disabled = state.history.length === 0;
    if (typeof window.gwFunnelStep === "function") { try { window.gwFunnelStep(current, { goal: state.goal, role: state.role }); } catch (e) {} }
  }

  // ---------- GOAL: cinematic opener ----------
  function goalOptionsHTML() {
    return GOAL_ORDER.map(function (k, i) {
      return '<button class="opt fade' + (k === "exploring" ? " quiet" : "") + '" data-opt="' + i + '" data-goal="' + k + '">' + esc(GOALS[k].label) + "</button>";
    }).join("");
  }
  function renderGoal() {
    barEl.classList.remove("on");
    screenEl.innerHTML =
      '<div class="opener">' +
      '<div class="imagine">Imagine…</div>' +
      '<h1 class="q fade" style="margin-top:14px">What would the right connection <em>unlock</em> for you right now?</h1>' +
      '<div class="reelwrap q2 fade"><span class="reel">my next customer</span></div>' +
      '<div class="opts" style="margin-top:22px"></div>' +
      '</div>' +
      '<div class="skiphint">tap to skip</div>';
    var imagine = screenEl.querySelector(".imagine");
    var q = screenEl.querySelector(".q");
    var reelWrap = screenEl.querySelector(".reelwrap");
    var reel = screenEl.querySelector(".reel");
    var opts = screenEl.querySelector(".opts");
    var hint = screenEl.querySelector(".skiphint");
    var done = false;

    function revealOptions() {
      if (done) return; done = true;
      barEl.classList.add("on");
      reelWrap.classList.add("gone");
      later(function () {
        opts.innerHTML = goalOptionsHTML();
        var os = opts.querySelectorAll(".opt");
        for (var i = 0; i < os.length; i++) (function (el, i) { later(function () { el.classList.add("show"); }, i * 70); })(os[i], i);
        hint.classList.remove("on");
      }, 260);
    }
    function skip() {
      if (done) return;
      clearTimers();
      imagine.style.display = "none";
      q.classList.add("show"); reelWrap.classList.remove("show");
      revealOptions();
    }
    root.addEventListener("click", skipOnce, true);
    function skipOnce(e) {
      if (done) { root.removeEventListener("click", skipOnce, true); return; }
      // only skip when tapping empty space / hint, not the (not-yet-shown) options
      skip(); root.removeEventListener("click", skipOnce, true);
    }

    if (REDUCE) { imagine.style.display = "none"; q.classList.add("show"); revealOptions(); return; }

    raf2(function () { imagine.classList.add("show"); });
    later(function () { hint.classList.add("on"); }, 900);
    later(function () { imagine.classList.add("gone"); }, 1500);
    later(function () { imagine.style.display = "none"; q.classList.add("show"); }, 2150);
    later(function () { reelWrap.classList.add("show"); spinReel(reel, revealOptions); }, 2950);
  }
  function spinReel(el, doneCb) {
    var i = 0, ticks = 0, total = 15; // ~3 cycles, decelerating
    function step() {
      var delay = 55 + Math.round(Math.pow(ticks / total, 2.4) * 320); // ease-out deceleration
      el.classList.add("flip");
      later(function () {
        i = (i + 1) % REEL.length;
        el.textContent = REEL[i];
        el.classList.remove("flip");
        ticks++;
        if (ticks <= total) later(step, delay);
        else later(doneCb, 520);
      }, 70);
    }
    step();
  }

  // ---------- VALUE: 3-beat story ----------
  function renderValue() {
    barEl.classList.add("on");
    var o = g();
    var chips = SOURCES.map(function (s, i) { return '<span class="chip" data-ci="' + i + '">' + esc(s) + "</span>"; }).join("");
    screenEl.innerHTML =
      '<div class="beats">' +
      '<div class="beat b1"><h1 class="fade">' + esc(o.hook) + "</h1></div>" +
      '<div class="beat b2 fade"><p class="beat-h">First, Goodword pulls your whole network into <em style="color:var(--clay);font-style:italic">one place</em>.</p>' +
      '<div class="chips">' + chips + '</div><div class="hub"><span class="arr">↓</span> Everyone you know, in one place</div></div>' +
      '<div class="beat b3 fade"><p class="beat-h">Then just ask, in plain language, and act on who you find.</p>' +
      '<div class="smock"><div class="sq"><span class="mag">⌕</span> who could introduce me to a buyer at Acme?<span class="cursor"></span></div>' +
      '<div class="res"><span class="av"></span><span class="rn">Dana Rivera<small>2nd · knows your VP Sales · warm path</small></span><span class="act">Ask for intro</span></div></div></div>' +
      "</div>" +
      '<button class="cta fade" data-next style="margin-top:26px">Show me how</button>';
    var b1 = screenEl.querySelector(".b1 h1");
    var b2 = screenEl.querySelector(".b2");
    var b3 = screenEl.querySelector(".b3");
    var cta = screenEl.querySelector(".cta");
    var hub = screenEl.querySelector(".hub");
    var chipEls = screenEl.querySelectorAll(".chip");
    var doneV = false;
    function finishAll() {
      if (doneV) return; doneV = true; clearTimers();
      b1.classList.add("show"); b2.classList.add("show"); b3.classList.add("show"); cta.classList.add("show");
      for (var i = 0; i < chipEls.length; i++) chipEls[i].classList.add("show");
      hub.classList.add("show");
    }
    root.addEventListener("click", vskip, true);
    function vskip(e) { if (e.target.closest && e.target.closest(".cta,.back")) return; if (!doneV) finishAll(); root.removeEventListener("click", vskip, true); }

    if (REDUCE) { finishAll(); return; }
    raf2(function () { b1.classList.add("show"); });
    later(function () { b2.classList.add("show"); for (var i = 0; i < chipEls.length; i++) (function (el, i) { later(function () { el.classList.add("show"); }, i * 130); })(chipEls[i], i); }, 1300);
    later(function () { hub.classList.add("show"); }, 1300 + SOURCES.length * 130 + 250);
    later(function () { b3.classList.add("show"); }, 2900);
    later(function () { cta.classList.add("show"); }, 3700);
  }

  // ---------- ROLE ----------
  function renderRole() {
    barEl.classList.add("on");
    var opts = ROLE_ORDER.map(function (k, i) {
      return '<button class="opt reveal" style="--d:' + (120 + i * 50) + 'ms" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>";
    }).join("");
    screenEl.innerHTML = '<h1 class="reveal" style="--d:0ms">What best describes you?</h1>' + '<div class="opts">' + opts + "</div>";
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  // ---------- SELL (eyebrow removed; otherwise kept; to redesign) ----------
  function renderSell() {
    barEl.classList.add("on");
    var ro = r();
    var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
    screenEl.innerHTML =
      '<h1 class="reveal" style="--d:0ms">Your network, <em>put to work</em></h1>' +
      '<p class="body reveal" style="--d:80ms">Goodword turns the people you already know into your next deal, hire, or intro.</p>' +
      '<div class="media reveal" style="--d:150ms"><span>product preview — ' + esc(ro.label.toLowerCase()) + " view</span></div>" +
      '<ul class="feat reveal" style="--d:220ms">' + feats + "</ul>" +
      '<div class="draft reveal" style="--d:280ms"><b>Founder proof — to write</b>A short line from the team on how a ' + esc(ro.label.toLowerCase()) + " wins with Goodword.</div>" +
      '<a class="cta reveal" style="--d:340ms" data-signup href="' + esc(signupHref()) + '">Get started for free</a>';
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
  }

  var RENDER = { goal: renderGoal, value: renderValue, role: renderRole, sell: renderSell };
  function paint() { clearTimers(); screenEl.classList.remove("out"); RENDER[current](); paintChrome(); }
  function transitionTo(next) {
    clearTimers();
    if (REDUCE) { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); return; }
    screenEl.classList.add("out");
    setTimeout(function () { current = next; try { window.scrollTo(0, 0); } catch (e) {} paint(); }, 200);
  }
  function go(next) { state.history.push(current); transitionTo(next); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) return;
    if (btn.hasAttribute("data-goal")) { if (!btn.classList.contains("show")) return; btn.classList.add("chosen"); var v = btn.getAttribute("data-goal"); later(function () { state.goal = v; go("value"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-role")) { btn.classList.add("chosen"); var v2 = btn.getAttribute("data-role"); later(function () { state.role = v2; go("sell"); }, REDUCE ? 0 : 160); return; }
    if (btn.hasAttribute("data-next")) { var i = ORDER.indexOf(current); if (i < ORDER.length - 1) go(ORDER[i + 1]); return; }
  });
  backBtn.addEventListener("click", function () {
    if (!state.history.length) return;
    current = state.history.pop(); try { window.scrollTo(0, 0); } catch (e) {} paint();
  });

  // ---------- Living-network canvas ----------
  (function net() {
    var ctx = canvas.getContext ? canvas.getContext("2d") : null; if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0, nodes = [], raf = 0, running = true, t = 0;
    var GREEN = "17,45,10", CLAY = "168,85,52";
    function resize() {
      W = root.clientWidth || 400; H = root.clientHeight || 800;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.round(Math.min(58, Math.max(26, (W * H) / 22000))); nodes = [];
      for (var i = 0; i < target; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: 1.2 + Math.random() * 1.8, accent: Math.random() < .22, ph: Math.random() * 6.28 });
    }
    function frame() {
      if (!running) return; t += 0.016; ctx.clearRect(0, 0, W, H);
      var maxD = 140, maxD2 = maxD * maxD;
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20; if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < maxD2) { var al = (1 - d2 / maxD2) * (0.05 + 0.09 * progress); ctx.strokeStyle = "rgba(" + GREEN + "," + al.toFixed(3) + ")"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        if (n.accent) {
          var pulse = 0.5 + 0.5 * Math.sin(t * 1.6 + n.ph), glow = (0.18 + 0.5 * progress) * (0.4 + 0.6 * pulse);
          var gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 16); gr.addColorStop(0, "rgba(" + CLAY + "," + (glow * 0.5).toFixed(3) + ")"); gr.addColorStop(1, "rgba(" + CLAY + ",0)");
          ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(n.x, n.y, 16, 0, 6.2832); ctx.fill();
          ctx.fillStyle = "rgba(" + CLAY + "," + (0.55 + 0.35 * pulse).toFixed(3) + ")"; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 0.6, 0, 6.2832); ctx.fill();
        } else { ctx.fillStyle = "rgba(" + GREEN + ",0.28)"; ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill(); }
      }
      raf = requestAnimationFrame(frame);
    }
    resize(); if (REDUCE) { frame(); running = false; } else raf = requestAnimationFrame(frame);
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 200); });
    document.addEventListener("visibilitychange", function () { if (document.hidden) { running = false; cancelAnimationFrame(raf); } else if (!REDUCE) { running = true; raf = requestAnimationFrame(frame); } });
  })();

  paint();
})();
