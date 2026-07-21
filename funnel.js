/* Goodword — interactive onboarding funnel bundle (v3, "living network" visual pass Jul 21).
 * Loads into ONE Webflow HTML Embed via the tiny-loader pattern:
 *   <div id="gw-funnel"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/lara374/goodword-network-landing@<SHA>/funnel.js"></script>
 * Self-contained, Shadow-DOM isolated. System fonts. Cream LP brand theme.
 *
 * v3 = elevated look/feel (structure + copy unchanged from v2, still founder-draft):
 *  - Ambient animated network-graph canvas behind content (nodes + edges drift; accents pulse;
 *    the network "wakes up" as you progress). This IS the product: your network, alive.
 *  - Spring-eased screen transitions; options stagger in; tactile hover + select-then-advance.
 *  - Bigger, more dramatic type; soft depth (glow, elevated glass cards, grain).
 *  - Respects prefers-reduced-motion; canvas pauses when tab hidden; DPR-aware & perf-capped.
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;
  var REDUCE = false;
  try { REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  // ---- Content (unchanged from v2; copy still founder-draft) ----
  var GOALS = {
    customer: { label: "My next customer", eyebrow: "Turn your network into pipeline", head: "The buyer you need is probably one intro away.", body: "Ask Goodword in plain language and it surfaces who in your network can open the door, and the warm path to reach them.", media: "product shot: search → warm path to a buyer" },
    raise: { label: "My next raise", eyebrow: "Fundraise from who you already know", head: "Your next lead investor is hiding in your network.", body: "Goodword maps your connections to the investors you should be talking to, and the people who can make the intro.", media: "product shot: investor search + intro paths" },
    hire: { label: "My next hire", eyebrow: "Hire from your network first", head: "Skip the cold InMails. Ask your network.", body: "Say who you're looking for in plain language, and Goodword pulls the candidates and referrers you already know.", media: "product shot: 'engineers in SF' → shortlist" },
    role: { label: "My own next role", eyebrow: "Land your next role through people, not portals", head: "The best roles come through a warm intro.", body: "Goodword finds who in your network sits closest to the companies and people you want to reach.", media: "product shot: target company → who you know there" },
    exploring: { label: "Just looking around", eyebrow: "The short version", head: "Everyone you know, finally in one place and actually useful.", body: "Goodword pulls your whole network together and lets you ask it anything in plain language: who to meet, who to hire, who can help.", media: "product shot: Data Hub + Copilot" }
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
  .bar{width:100%;max-width:620px;padding:20px 24px 0;}\
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
  .screen{width:100%;max-width:620px;flex:1;display:flex;flex-direction:column;padding:30px 24px 44px;}\
  .eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--eyebrow);font-weight:700;margin:10px 0 16px;display:flex;align-items:center;gap:9px;}\
  .eyebrow:before{content:'';width:22px;height:1px;background:var(--eyebrow);opacity:.6;}\
  h1{font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:clamp(32px,8.5vw,52px);line-height:1.05;margin:0 0 16px;letter-spacing:-.015em;text-wrap:balance;}\
  h1 em{font-style:italic;color:var(--clay);}\
  .body{font-size:17px;color:var(--muted);margin:0 0 26px;max-width:33em;}\
  .body strong{color:var(--ink);font-weight:600;}\
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
  background:linear-gradient(135deg,#FFFDF8,#F2E6D4);min-height:220px;display:flex;align-items:center;justify-content:center;margin:8px 0 24px;padding:18px;box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 18px 40px -30px rgba(40,48,31,.5);}\
  .media:before{content:'';position:absolute;inset:0;background:radial-gradient(60% 60% at 30% 20%,rgba(168,85,52,.10),transparent 70%);}\
  .media span{position:relative;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;max-width:24em;}\
  ul.feat{list-style:none;padding:0;margin:8px 0 20px;display:flex;flex-direction:column;gap:14px;}\
  ul.feat li{display:flex;gap:12px;font-size:16.5px;align-items:flex-start;}\
  ul.feat .tick{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(86,122,68,.14);color:var(--eyebrow);\
  display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;margin-top:1px;}\
  .draft{border:1px dashed var(--clay);border-radius:14px;background:rgba(168,85,52,.055);padding:13px 15px;margin:6px 0 22px;\
  font-size:13.5px;color:var(--clay-deep);font-style:italic;}\
  .draft b{font-style:normal;font-weight:700;letter-spacing:.07em;text-transform:uppercase;font-size:10.5px;display:block;margin-bottom:4px;}\
  /* motion */\
  .reveal{opacity:0;transform:translateY(14px);}\
  .screen.in .reveal{animation:rise .55s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:var(--d,0ms);}\
  .screen.out{opacity:0;transform:translateY(-10px) scale(.995);transition:opacity .2s ease,transform .2s ease;}\
  @keyframes rise{to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;animation:none!important;}\
  .cta:before{display:none;}.dots i.cur:before{animation:none;}.screen.out{transition:none;}}\
  ";

  // ---- Mount ----
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
  var stage = root.querySelector(".stage");
  var screenEl = root.querySelector(".screen");
  var backBtn = root.querySelector(".back");
  var dotsEl = root.querySelector(".dots");
  var stepEl = root.querySelector(".stepn");
  dotsEl.innerHTML = ORDER.map(function () { return "<i></i>"; }).join("");
  var dots = dotsEl.querySelectorAll("i");

  var state = { goal: null, role: null, history: [] };
  var current = "goal";
  var progress = 0; // 0..1, feeds the canvas intensity

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function g() { return GOALS[state.goal || "exploring"]; }
  function r() { return ROLES[state.role || "founder"]; }
  function signupHref() {
    var p; try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "exploring"); if (state.role) p.set("role", state.role);
    if (!p.get("utm_source")) p.set("utm_source", "funnel"); p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }
  // wrap each top-level child in reveal + stagger
  function reveal(html) {
    return html; // markup already carries .reveal via builders
  }

  var SCREENS = {
    goal: function () {
      var opts = GOAL_ORDER.map(function (k, i) {
        return '<button class="opt reveal' + (k === "exploring" ? " quiet" : "") + '" style="--d:' + (140 + i * 55) + 'ms" data-goal="' + k + '">' + esc(GOALS[k].label) + "</button>";
      }).join("");
      return '<p class="eyebrow reveal" style="--d:0ms">Let’s make this yours</p>' +
        '<h1 class="reveal" style="--d:55ms">What could your <em>next connection</em> unlock?</h1>' +
        '<div class="opts">' + opts + "</div>";
    },
    value: function () {
      var o = g();
      return '<p class="eyebrow reveal" style="--d:0ms">' + esc(o.eyebrow) + "</p>" +
        '<h1 class="reveal" style="--d:60ms">' + esc(o.head) + "</h1>" +
        '<p class="body reveal" style="--d:130ms">' + esc(o.body) + "</p>" +
        '<div class="media reveal" style="--d:200ms"><span>' + esc(o.media) + "</span></div>" +
        '<button class="cta reveal" style="--d:280ms" data-next>Show me how</button>';
    },
    role: function () {
      var opts = ROLE_ORDER.map(function (k, i) {
        return '<button class="opt reveal" style="--d:' + (150 + i * 50) + 'ms" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>";
      }).join("");
      return '<p class="eyebrow reveal" style="--d:0ms">One quick thing</p>' +
        '<h1 class="reveal" style="--d:55ms">What best describes you?</h1>' +
        '<p class="body reveal" style="--d:110ms">So we can show you how people like you get the most out of Goodword.</p>' +
        '<div class="opts">' + opts + "</div>";
    },
    sell: function () {
      var ro = r();
      var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
      return '<p class="eyebrow reveal" style="--d:0ms">Why Goodword</p>' +
        '<h1 class="reveal" style="--d:55ms">Your network, <em>put to work</em></h1>' +
        '<p class="body reveal" style="--d:120ms">Goodword turns the people you already know into your next deal, hire, or intro.</p>' +
        '<div class="media reveal" style="--d:190ms"><span>product preview — ' + esc(ro.label.toLowerCase()) + " view</span></div>" +
        '<ul class="feat reveal" style="--d:260ms">' + feats + "</ul>" +
        '<div class="draft reveal" style="--d:320ms"><b>Founder proof — to write</b>A short line from the team on how a ' + esc(ro.label.toLowerCase()) + " wins with Goodword.</div>" +
        '<a class="cta reveal" style="--d:380ms" data-signup href="' + esc(signupHref()) + '">Get started for free</a>';
    }
  };

  function paintChrome() {
    var idx = ORDER.indexOf(current);
    progress = (idx) / (ORDER.length - 1);
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = i < idx ? "done" : (i === idx ? "cur" : "");
    }
    stepEl.textContent = "Step " + (idx + 1) + " of " + ORDER.length;
    backBtn.disabled = state.history.length === 0;
    if (typeof window.gwFunnelStep === "function") { try { window.gwFunnelStep(current, { goal: state.goal, role: state.role }); } catch (e) {} }
  }
  function paintScreen() {
    screenEl.classList.remove("out");
    screenEl.innerHTML = SCREENS[current]();
    // restart entrance animation
    screenEl.classList.remove("in"); void screenEl.offsetWidth; screenEl.classList.add("in");
    paintChrome();
  }
  function transitionTo(next) {
    if (REDUCE) { current = next; paintScreen(); try { window.scrollTo(0, 0); } catch (e) {} return; }
    screenEl.classList.add("out");
    setTimeout(function () { current = next; try { window.scrollTo(0, 0); } catch (e) {} paintScreen(); }, 200);
  }
  function go(next) { state.history.push(current); transitionTo(next); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) return;
    if (btn.hasAttribute("data-goal") || btn.hasAttribute("data-role")) {
      btn.classList.add("chosen");
      var isGoal = btn.hasAttribute("data-goal");
      var val = btn.getAttribute(isGoal ? "data-goal" : "data-role");
      var delay = REDUCE ? 0 : 150;
      setTimeout(function () { if (isGoal) { state.goal = val; go("value"); } else { state.role = val; go("sell"); } }, delay);
      return;
    }
    if (btn.hasAttribute("data-next")) { var i = ORDER.indexOf(current); if (i < ORDER.length - 1) go(ORDER[i + 1]); return; }
  });
  backBtn.addEventListener("click", function () {
    if (!state.history.length) return;
    current = state.history.pop(); try { window.scrollTo(0, 0); } catch (e) {} paintScreen();
  });

  // ---------------- Living-network canvas ----------------
  (function net() {
    var ctx = canvas.getContext ? canvas.getContext("2d") : null;
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, nodes = [], raf = 0, running = true, t = 0;
    var GREEN = "17,45,10", CLAY = "168,85,52";

    function resize() {
      W = root.clientWidth || 400; H = root.clientHeight || 800;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.round(Math.min(58, Math.max(26, (W * H) / 22000)));
      nodes = [];
      for (var i = 0; i < target; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18,
          r: 1.2 + Math.random() * 1.8, accent: Math.random() < .22, ph: Math.random() * 6.28
        });
      }
    }
    function frame() {
      if (!running) return;
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      var maxD = 140, maxD2 = maxD * maxD;
      // edges
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = W + 20; if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20; if (a.y > H + 20) a.y = -20;
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < maxD2) {
            var al = (1 - d2 / maxD2) * (0.05 + 0.09 * progress);
            ctx.strokeStyle = "rgba(" + GREEN + "," + al.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      // nodes
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        if (n.accent) {
          var pulse = 0.5 + 0.5 * Math.sin(t * 1.6 + n.ph);
          var glow = (0.18 + 0.5 * progress) * (0.4 + 0.6 * pulse);
          var gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 16);
          gr.addColorStop(0, "rgba(" + CLAY + "," + (glow * 0.5).toFixed(3) + ")");
          gr.addColorStop(1, "rgba(" + CLAY + ",0)");
          ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(n.x, n.y, 16, 0, 6.2832); ctx.fill();
          ctx.fillStyle = "rgba(" + CLAY + "," + (0.55 + 0.35 * pulse).toFixed(3) + ")";
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 0.6, 0, 6.2832); ctx.fill();
        } else {
          ctx.fillStyle = "rgba(" + GREEN + ",0.28)";
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
        }
      }
      raf = requestAnimationFrame(frame);
    }
    resize();
    if (REDUCE) { frame(); running = false; } // one static frame
    else { raf = requestAnimationFrame(frame); }
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else if (!REDUCE) { running = true; raf = requestAnimationFrame(frame); }
    });
  })();

  paintScreen();
})();
