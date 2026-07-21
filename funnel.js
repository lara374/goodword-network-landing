/* Goodword — interactive onboarding funnel bundle (v2, post-Leon-review Jul 21).
 * Loads into ONE Webflow HTML Embed via the tiny-loader pattern:
 *   <div id="gw-funnel"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/lara374/goodword-network-landing@<SHA>/funnel.js"></script>
 * Self-contained, Shadow-DOM isolated. System fonts. Single cream LP brand theme.
 *
 * v2 CHANGES per Leon walkthrough:
 *  - 4 steps max (goal -> value -> role -> sell), not 6.
 *  - Opening reframed to "What could your next connection unlock?" with CONCRETE OUTCOME goals.
 *  - Middle merged into ONE personalized "here's how" value screen (founder copy + real imagery).
 *  - Research-verbatim testimonials REMOVED. Sell/proof copy = FOUNDER-WRITTEN (marked [DRAFT] slots).
 *  - Every screen sells; real product imagery does the heavy lifting (placeholder frames until real shots land).
 *
 * TODO before prod: founders rewrite the [DRAFT] sell lines + proof; drop in real product screenshots;
 * verify any stat is real (no invented numbers).
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;

  // ---- Goals = concrete OUTCOMES (the "unlock"). Copy = founder draft, to refine. ----
  var GOALS = {
    customer: {
      label: "My next customer",
      eyebrow: "Turn your network into pipeline",
      head: "The buyer you need is probably one intro away.",
      body: "Ask Goodword in plain language and it surfaces who in your network can open the door, and the warm path to reach them.",
      media: "product shot: search → warm path to a buyer"
    },
    raise: {
      label: "My next raise",
      eyebrow: "Fundraise from who you already know",
      head: "Your next lead investor is hiding in your network.",
      body: "Goodword maps your connections to the investors you should be talking to, and the people who can make the intro.",
      media: "product shot: investor search + intro paths"
    },
    hire: {
      label: "My next hire",
      eyebrow: "Hire from your network first",
      head: "Skip the cold InMails. Ask your network.",
      body: "Say who you're looking for in plain language, and Goodword pulls the candidates and referrers you already know.",
      media: "product shot: 'engineers in SF' → shortlist"
    },
    role: {
      label: "My own next role",
      eyebrow: "Land your next role through people, not portals",
      head: "The best roles come through a warm intro.",
      body: "Goodword finds who in your network sits closest to the companies and people you want to reach.",
      media: "product shot: target company → who you know there"
    },
    exploring: {
      label: "Just looking around",
      eyebrow: "The short version",
      head: "Everyone you know, finally in one place and actually useful.",
      body: "Goodword pulls your whole network together and lets you ask it anything in plain language: who to meet, who to hire, who can help.",
      media: "product shot: Data Hub + Copilot"
    }
  };

  // ---- Roles tailor the closing screen. features = factual product capabilities (OK to keep).
  //      proof = FOUNDER-WRITTEN slot (research quotes removed per Leon). ----
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
  :host{--paper:#FEFAF5;--paper-warm:#F9F0E7;--card:#FFFFFF;--ink:#28301F;--muted:#5b6152;\
  --clay:#A85534;--clay-deep:#8A2B15;--green:#112D0A;--eyebrow:#567A44;--line:#E9DFCF;\
  all:initial;display:block;}\
  *{box-sizing:border-box;}\
  .root{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:var(--ink);background:var(--paper);\
  min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;align-items:center;\
  -webkit-font-smoothing:antialiased;line-height:1.5;}\
  .bar{width:100%;max-width:600px;padding:18px 22px 0;}\
  .bar-row{display:flex;align-items:center;gap:12px;min-height:24px;}\
  .back{background:none;border:none;color:var(--muted);cursor:pointer;font-size:20px;line-height:1;padding:2px 6px 2px 0;font-family:inherit;}\
  .back:disabled{opacity:0;pointer-events:none;}\
  .prog{flex:1;height:4px;background:var(--line);border-radius:3px;overflow:hidden;}\
  .prog>i{display:block;height:100%;width:100%;background:var(--clay);border-radius:3px;transform-origin:left;transform:scaleX(.25);transition:transform .35s ease;}\
  .stepn{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-variant-numeric:tabular-nums;}\
  .screen{width:100%;max-width:600px;flex:1;display:flex;flex-direction:column;padding:26px 22px 40px;}\
  .eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--eyebrow);font-weight:700;margin:8px 0 14px;}\
  h1{font-family:Georgia,'Times New Roman',serif;font-weight:500;font-size:clamp(28px,7vw,40px);line-height:1.12;margin:0 0 12px;letter-spacing:-.01em;text-wrap:balance;}\
  h1 em{font-style:italic;color:var(--clay);}\
  .body{font-size:16px;color:var(--muted);margin:0 0 22px;max-width:34em;}\
  .body strong{color:var(--ink);font-weight:600;}\
  .opts{display:flex;flex-direction:column;gap:11px;margin-top:2px;}\
  .opt{position:relative;text-align:left;font:inherit;font-size:16px;color:var(--ink);background:var(--card);\
  border:1px solid var(--line);border-radius:14px;padding:16px 18px;cursor:pointer;transition:border-color .15s,background .15s,box-shadow .15s;}\
  .opt:hover,.opt:focus-visible{border-color:var(--clay);background:var(--paper-warm);outline:none;box-shadow:0 2px 10px -6px rgba(138,43,21,.4);}\
  .opt.quiet{border-style:dashed;color:var(--muted);}\
  .cta{font:inherit;font-size:16px;font-weight:600;background:var(--clay);color:#FFF7EF;border:none;border-radius:40px;\
  padding:16px 24px;cursor:pointer;width:100%;margin-top:auto;text-align:center;text-decoration:none;display:block;transition:filter .15s;}\
  .cta:hover{filter:brightness(1.07);}\
  .media{border:1px dashed var(--line);border-radius:16px;background:var(--paper-warm);min-height:210px;display:flex;align-items:center;justify-content:center;margin:6px 0 20px;padding:16px;}\
  .media span{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:center;max-width:24em;}\
  ul.feat{list-style:none;padding:0;margin:6px 0 18px;display:flex;flex-direction:column;gap:12px;}\
  ul.feat li{display:flex;gap:11px;font-size:16px;align-items:flex-start;}\
  ul.feat .tick{color:var(--eyebrow);font-weight:700;flex:none;}\
  .draft{border:1px dashed var(--clay);border-radius:12px;background:rgba(168,85,52,.05);padding:12px 14px;margin:6px 0 20px;\
  font-size:13.5px;color:var(--clay-deep);font-style:italic;}\
  .draft b{font-style:normal;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:10.5px;display:block;margin-bottom:3px;}\
  .fadein{animation:fi .32s ease both;}\
  @keyframes fi{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.fadein{animation:none;}.prog>i{transition:none;}}\
  ";

  var shadow = mount.attachShadow ? mount.attachShadow({ mode: "open" }) : mount;
  var wrap = document.createElement("div");
  wrap.className = "root";
  wrap.innerHTML =
    '<div class="bar"><div class="bar-row"><button class="back" aria-label="Back">←</button>' +
    '<div class="prog" aria-hidden="true"><i></i></div><span class="stepn"></span></div></div>' +
    '<div class="screen" aria-live="polite"></div>';
  var st = document.createElement("style");
  st.textContent = CSS;
  shadow.appendChild(st);
  shadow.appendChild(wrap);

  var screenEl = wrap.querySelector(".screen");
  var backBtn = wrap.querySelector(".back");
  var progFill = wrap.querySelector(".prog > i");
  var stepEl = wrap.querySelector(".stepn");

  var state = { goal: null, role: null, history: [] };
  var current = "goal";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function g() { return GOALS[state.goal || "exploring"]; }
  function r() { return ROLES[state.role || "founder"]; }

  function signupHref() {
    var p;
    try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "exploring");
    if (state.role) p.set("role", state.role);
    if (!p.get("utm_source")) p.set("utm_source", "funnel");
    p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }

  var SCREENS = {
    goal: function () {
      var opts = GOAL_ORDER.map(function (k) {
        return '<button class="opt' + (k === "exploring" ? " quiet" : "") + '" data-goal="' + k + '">' + esc(GOALS[k].label) + "</button>";
      }).join("");
      return '<p class="eyebrow">Let’s make this yours</p>' +
        "<h1>What could your <em>next connection</em> unlock?</h1>" +
        '<div class="opts">' + opts + "</div>";
    },
    value: function () {
      var o = g();
      return '<p class="eyebrow">' + esc(o.eyebrow) + "</p><h1>" + esc(o.head) + "</h1>" +
        '<p class="body">' + esc(o.body) + "</p>" +
        '<div class="media"><span>' + esc(o.media) + "</span></div>" +
        '<button class="cta" data-next>Show me how</button>';
    },
    role: function () {
      var opts = ROLE_ORDER.map(function (k) {
        return '<button class="opt" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>";
      }).join("");
      return '<p class="eyebrow">One quick thing</p><h1>What best describes you?</h1>' +
        '<p class="body">So we can show you how people like you get the most out of Goodword.</p>' +
        '<div class="opts">' + opts + "</div>";
    },
    sell: function () {
      var ro = r();
      var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
      return '<p class="eyebrow">Why Goodword</p>' +
        "<h1>Your network, <em>put to work</em></h1>" +
        '<p class="body">Goodword turns the people you already know into your next deal, hire, or intro.</p>' +
        '<div class="media"><span>product preview — ' + esc(ro.label.toLowerCase()) + " view</span></div>" +
        '<ul class="feat">' + feats + "</ul>" +
        '<div class="draft"><b>Founder proof — to write</b>A short line from the team on how a ' + esc(ro.label.toLowerCase()) + " wins with Goodword. (Replaces the old research quotes.)</div>" +
        '<a class="cta" data-signup href="' + esc(signupHref()) + '">Get started for free</a>';
    }
  };

  function render() {
    var idx = ORDER.indexOf(current);
    screenEl.innerHTML = SCREENS[current]();
    screenEl.classList.remove("fadein"); void screenEl.offsetWidth; screenEl.classList.add("fadein");
    progFill.style.transform = "scaleX(" + ((idx + 1) / ORDER.length) + ")";
    stepEl.textContent = "Step " + (idx + 1) + " of " + ORDER.length;
    backBtn.disabled = state.history.length === 0;
    if (typeof window.gwFunnelStep === "function") {
      try { window.gwFunnelStep(current, { goal: state.goal, role: state.role }); } catch (e) {}
    }
  }
  function go(next) { state.history.push(current); current = next; try { window.scrollTo(0, 0); } catch (e) {} render(); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) return;
    if (btn.hasAttribute("data-goal")) { state.goal = btn.getAttribute("data-goal"); go("value"); return; }
    if (btn.hasAttribute("data-role")) { state.role = btn.getAttribute("data-role"); go("sell"); return; }
    if (btn.hasAttribute("data-next")) { var i = ORDER.indexOf(current); if (i < ORDER.length - 1) go(ORDER[i + 1]); return; }
  });
  backBtn.addEventListener("click", function () {
    if (!state.history.length) return;
    current = state.history.pop();
    try { window.scrollTo(0, 0); } catch (e) {}
    render();
  });

  render();
})();
