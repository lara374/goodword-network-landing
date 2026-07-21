/* Goodword — interactive onboarding funnel bundle.
 * Loads into ONE Webflow HTML Embed via the tiny-loader pattern:
 *   <div id="gw-funnel"></div>
 *   <script src="https://cdn.jsdelivr.net/gh/lara374/goodword-network-landing@<SHA>/funnel.js"></script>
 * Self-contained, Shadow-DOM isolated (LP styles can't leak in/out). System fonts only.
 * Single cream brand theme (LP tokens). Copy = reviewed v-latest; stats are warehouse-verified.
 */
(function () {
  var mount = document.getElementById("gw-funnel");
  if (!mount) return;

  // ---------------- Content ----------------
  var GOALS = {
    organize: {
      label: "Get my network organized",
      sub: "Pull it out of LinkedIn, email, calendar and more, into one place",
      statHead: "You're not starting from scratch.",
      statBig: "5.3M",
      statBody: "people are already organized across Goodword members' networks, pulled out of LinkedIn, email, calendars, and more sources, into one place.",
      subQ: "Where's your network scattered right now?",
      subHint: "Select all that apply. Goodword pulls them together.",
      multi: true,
      subOpts: [
        { key: "linkedin", label: "LinkedIn" },
        { key: "email", label: "Email (Gmail / Outlook)" },
        { key: "phone", label: "Phone contacts, WhatsApp & iMessage" },
        { key: "events", label: "Events & business cards" },
        { key: "notes", label: "Notes & spreadsheets" },
        { key: "memory", label: "My memory" }
      ],
      proofHead: "Sound familiar?",
      proofQuote: "I had a disparate group of tools managing my network, and I loved the idea of getting it all in one place.",
      proofAttr: "Founder, user interview"
    },
    find: {
      label: "Find the right person, fast",
      sub: "hires · investors · customers · experts",
      statHead: "The answer is already in your network.",
      statBig: "8,400+",
      statBody: "searches members have run across their own networks, in plain language, surfacing the clients, investors, and hires they'd forgotten they knew.",
      subQ: "Who do you need to find?",
      subOpts: [
        { key: "customers", label: "My next customer" },
        { key: "investors", label: "My next investor" },
        { key: "hires", label: "My next hire" },
        { key: "experts", label: "An advisor or expert" },
        { key: "role", label: "My own next role" }
      ],
      proofHead: "This is what plain-language search feels like:",
      proofQuote: "Goodword's search feels more human. LinkedIn's filters are so limited by comparison.",
      proofAttr: "Founder, user interview"
    },
    nurture: {
      label: "Stay top of mind with my people",
      sub: "follow-ups, nudges, the personal details",
      statHead: "Relationships go quiet by accident.",
      statBig: "1,800+",
      statBody: "follow-up nudges members have already acted on, because Goodword surfaces who's due for a hello before it's too late.",
      subQ: "What slips through the cracks?",
      subOpts: [
        { key: "followups", label: "Follow-ups I meant to send" },
        { key: "details", label: "The personal details (kids, moves, wins)" },
        { key: "quiet", label: "Whole relationships going quiet" }
      ],
      proofHead: "You're not the only one.",
      proofQuote: "I need something that gives me those pings and makes those connections. My memory is bad, I'd love to remember the names of their kids.",
      proofAttr: "Connector, onboarding research call"
    },
    intros: {
      label: "Make and get warm intros",
      sub: "be the connector people remember",
      statHead: "It's all about the warm intro.",
      statBig: "14,000+",
      statBody: "connection recommendations Goodword has surfaced, showing who should meet whom, drawn from members' own networks.",
      subQ: "Which side of the intro are you usually on?",
      subOpts: [
        { key: "making", label: "I make them; I'm the connector" },
        { key: "asking", label: "I need them: fundraising, sales, hiring" },
        { key: "both", label: "Both, constantly" }
      ],
      proofHead: "Straight from our research:",
      proofQuote: "The best introduction doesn't come from a cold text, but someone in between who can help you.",
      proofAttr: "Research participant, exploratory interview"
    },
    exploring: {
      label: "Just looking around",
      sub: "show me what this is",
      statHead: "Fair enough. Here's the short version.",
      statBig: "4,000+",
      statBody: "founders, investors, and connectors already run their network on Goodword, searchable in plain language, with an AI that knows your context.",
      subQ: "What sounds most useful?",
      subOpts: [
        { key: "oneplace", label: "Everyone in one place, with the details worth remembering" },
        { key: "search", label: "Smart search, in plain language" },
        { key: "nudges", label: "Nudges so I never drop a thread" },
        { key: "intros", label: "Warm intros, both directions" }
      ],
      proofHead: "The usual reaction:",
      proofQuote: "I'm obsessed with this, okay?",
      proofAttr: "New user, first onboarding session"
    }
  };

  var ROLES = {
    founder: {
      label: "Founder",
      testimonial: "This could 10x the trajectory of my business, if it helps me meet the right person: a lead investor, a partner, or a hire that supercharges the team.",
      attr: "Founder, user interview",
      features: ["Hiring & fundraising searches across your real network", "Warm paths to any investor or candidate", "Context before every meeting"]
    },
    investor: {
      label: "Investor",
      testimonial: "When a portfolio founder is hiring for a specific role, I can instantly pull the five people in my network who'd be great for it.",
      attr: "Investor, onboarding call",
      features: ["Portfolio & founder groups you can share selectively", "Source from people you already know", "Never lose a founder relationship to time"]
    },
    recruiter: {
      label: "Recruiter",
      testimonial: "When I'm hiring, I just say 'show me engineers in my network in San Francisco who work on mobile,' and it pulls the shortlist.",
      attr: "Recruiter, user interview",
      features: ["Candidate search in plain language", "Warm referral paths instead of cold InMails", "Every past candidate, one query away"]
    },
    sales: {
      label: "Sales or BD",
      testimonial: "Having those connections resurfaced was a game-changer. It instantly reminded me of valuable contacts and accelerated deals I'd have otherwise missed.",
      attr: "Sales / BD, user interview",
      features: ["Prospects hiding in your existing network", "Who-knows-whom paths to every account", "Follow-up nudges that keep deals warm"]
    },
    community: {
      label: "Community builder",
      testimonial: "I'm a super connector, my whole career has been built on bringing people together. Goodword is how I keep track of who should meet whom.",
      attr: "Community builder, user interview",
      features: ["Curated groups of people you can pull up in a second", "Intro suggestions both directions", "The personal details that make you memorable"]
    },
    operator: {
      label: "Operator",
      testimonial: "I used to keep my network in separate spreadsheet tabs, now having the same people in a smart group is incredibly helpful.",
      attr: "Operator, user interview",
      features: ["Every conversation captured: who you talked to and what you discussed", "Context before every meeting, automatically", "Follow-ups tracked so nothing slips"]
    }
  };

  var GOAL_ORDER = ["organize", "find", "nurture", "intros", "exploring"];
  var ROLE_ORDER = ["founder", "investor", "recruiter", "sales", "community", "operator"];
  var ORDER = ["goal", "stat", "subgoal", "proof", "role", "usp"];

  // ---------------- Styles (LP brand tokens, single cream theme, :host-scoped) ----------------
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
  .prog>i{display:block;height:100%;width:100%;background:var(--clay);border-radius:3px;transform-origin:left;transform:scaleX(.16);transition:transform .35s ease;}\
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
  .opt .os{display:block;font-size:13px;color:var(--muted);margin-top:3px;}\
  .opt.quiet{border-style:dashed;color:var(--muted);}\
  .opt.sel{border-color:var(--clay);background:var(--paper-warm);font-weight:600;}\
  .opt.sel:after{content:'\\2713';position:absolute;right:16px;top:50%;transform:translateY(-50%);color:var(--clay);font-weight:700;}\
  .cta{font:inherit;font-size:16px;font-weight:600;background:var(--clay);color:#FFF7EF;border:none;border-radius:40px;\
  padding:16px 24px;cursor:pointer;width:100%;margin-top:auto;text-align:center;text-decoration:none;display:block;transition:filter .15s;}\
  .cta:hover{filter:brightness(1.07);}\
  a.cta{line-height:1.2;}\
  .stat{font-family:Georgia,serif;font-size:clamp(52px,15vw,84px);line-height:1;color:var(--clay);margin:10px 0 8px;font-variant-numeric:tabular-nums;}\
  .quote{position:relative;font-family:Georgia,serif;font-style:italic;font-size:19px;line-height:1.4;color:var(--ink);padding:6px 0 6px 30px;margin:14px 0 20px;}\
  .quote:before{content:'\\201C';position:absolute;left:-2px;top:2px;font-size:52px;line-height:1;color:var(--clay);font-style:normal;}\
  .attr{font-family:'Helvetica Neue',Helvetica,sans-serif;font-style:normal;font-size:13px;color:var(--muted);margin-top:10px;}\
  .media{border:1px dashed var(--line);border-radius:16px;background:var(--paper-warm);min-height:150px;display:flex;align-items:center;justify-content:center;margin:8px 0 20px;padding:16px;}\
  .media span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;}\
  ul.feat{list-style:none;padding:0;margin:6px 0 16px;display:flex;flex-direction:column;gap:12px;}\
  ul.feat li{display:flex;gap:11px;font-size:16px;align-items:flex-start;}\
  ul.feat .tick{color:var(--eyebrow);font-weight:700;flex:none;}\
  .fadein{animation:fi .32s ease both;}\
  @keyframes fi{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}\
  @media (prefers-reduced-motion:reduce){.fadein{animation:none;}.prog>i{transition:none;}}\
  ";

  // ---------------- Mount ----------------
  var shadow = mount.attachShadow ? mount.attachShadow({ mode: "open" }) : mount;
  var wrap = document.createElement("div");
  wrap.className = "root";
  wrap.innerHTML =
    '<div class="bar"><div class="bar-row"><button class="back" aria-label="Back">←</button>' +
    '<div class="prog" aria-hidden="true"><i></i></div>' +
    '<span class="stepn"></span></div></div>' +
    '<div class="screen" aria-live="polite"></div>';
  if (shadow.appendChild) {
    var st = document.createElement("style");
    st.textContent = CSS;
    shadow.appendChild(st);
    shadow.appendChild(wrap);
  }
  var screenEl = wrap.querySelector(".screen");
  var backBtn = wrap.querySelector(".back");
  var progFill = wrap.querySelector(".prog > i");
  var stepEl = wrap.querySelector(".stepn");

  // ---------------- State ----------------
  var state = { goal: null, subgoal: null, role: null, subMulti: {}, history: [] };
  var current = "goal";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function g() { return GOALS[state.goal || "exploring"]; }
  function r() { return ROLES[state.role || "founder"]; }

  function signupHref() {
    var p;
    try { p = new URLSearchParams(location.search); } catch (e) { p = new URLSearchParams(); }
    p.set("goal", state.goal || "exploring");
    if (state.subgoal) p.set("subgoal", state.subgoal);
    if (state.role) p.set("role", state.role);
    if (!p.get("utm_source")) p.set("utm_source", "funnel");
    p.set("lp", "start");
    return "https://app.goodword.com/auth/signup?" + p.toString();
  }

  // ---------------- Screens ----------------
  var SCREENS = {
    goal: function () {
      var opts = GOAL_ORDER.map(function (k) {
        var o = GOALS[k];
        return '<button class="opt' + (k === "exploring" ? " quiet" : "") + '" data-goal="' + k + '">' +
          esc(o.label) + '<span class="os">' + esc(o.sub) + "</span></button>";
      }).join("");
      return '<p class="eyebrow">Let’s tailor Goodword to you</p>' +
        "<h1>What brings you to <em>Goodword</em>?</h1>" +
        '<div class="opts">' + opts + "</div>";
    },
    stat: function () {
      var o = g();
      return '<p class="eyebrow">Good choice</p><h1>' + esc(o.statHead) + "</h1>" +
        '<div class="stat">' + esc(o.statBig) + "</div>" +
        '<p class="body">' + esc(o.statBody) + "</p>" +
        '<button class="cta" data-next>Keep going</button>';
    },
    subgoal: function () {
      var o = g();
      var hint = o.subHint ? '<p class="body">' + esc(o.subHint) + "</p>" : "";
      if (o.multi) {
        var m = o.subOpts.map(function (s) {
          return '<button class="opt' + (state.subMulti[s.key] ? " sel" : "") + '" data-multi="' + s.key + '">' + esc(s.label) + "</button>";
        }).join("");
        return '<p class="eyebrow">Getting specific</p><h1>' + esc(o.subQ) + "</h1>" + hint +
          '<div class="opts">' + m + "</div><button class=\"cta\" data-next>Continue</button>";
      }
      var opts = o.subOpts.map(function (s) {
        return '<button class="opt" data-sub="' + s.key + '">' + esc(s.label) + "</button>";
      }).join("");
      return '<p class="eyebrow">Getting specific</p><h1>' + esc(o.subQ) + "</h1>" + hint +
        '<div class="opts">' + opts + "</div>";
    },
    proof: function () {
      var o = g();
      return '<p class="eyebrow">From our user research</p><h1>' + esc(o.proofHead) + "</h1>" +
        '<div class="quote">' + esc(o.proofQuote) + '<div class="attr">' + esc(o.proofAttr) + "</div></div>" +
        '<p class="body">Goodword was built with, and for, people chasing exactly this.</p>' +
        '<button class="cta" data-next>That’s me</button>';
    },
    role: function () {
      var opts = ROLE_ORDER.map(function (k) {
        return '<button class="opt" data-role="' + k + '">' + esc(ROLES[k].label) + "</button>";
      }).join("");
      return '<p class="eyebrow">One last question</p><h1>What best describes you?</h1>' +
        '<p class="body">So we can show you how people like you get the most out of Goodword.</p>' +
        '<div class="opts">' + opts + "</div>";
    },
    usp: function () {
      var ro = r();
      var feats = ro.features.map(function (f) { return '<li><span class="tick">✓</span><span>' + esc(f) + "</span></li>"; }).join("");
      return '<p class="eyebrow">Why Goodword</p>' +
        "<h1>Your network, <em>put to work</em></h1>" +
        '<p class="body">Goodword turns the people you already know into your next deal, hire, or intro.</p>' +
        '<div class="media"><span>product preview</span></div>' +
        '<ul class="feat">' + feats + "</ul>" +
        '<div class="quote">' + esc(ro.testimonial) + '<div class="attr">' + esc(ro.attr) + "</div></div>" +
        '<a class="cta" data-signup href="' + esc(signupHref()) + '">Get started</a>';
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
      try { window.gwFunnelStep(current, { goal: state.goal, subgoal: state.subgoal, role: state.role }); } catch (e) {}
    }
  }
  function go(next) { state.history.push(current); current = next; try { window.scrollTo(0, 0); } catch (e) {} render(); }

  screenEl.addEventListener("click", function (e) {
    var btn = e.target.closest ? e.target.closest("button, a") : null;
    if (!btn) return;
    if (btn.hasAttribute("data-signup")) return; // real link; let it navigate
    if (btn.hasAttribute("data-goal")) { state.goal = btn.getAttribute("data-goal"); state.subMulti = {}; state.subgoal = null; go("stat"); return; }
    if (btn.hasAttribute("data-multi")) {
      var k = btn.getAttribute("data-multi");
      if (state.subMulti[k]) delete state.subMulti[k]; else state.subMulti[k] = true;
      state.subgoal = Object.keys(state.subMulti).join(",") || null;
      render(); return;
    }
    if (btn.hasAttribute("data-sub")) { state.subgoal = btn.getAttribute("data-sub"); go("proof"); return; }
    if (btn.hasAttribute("data-role")) { state.role = btn.getAttribute("data-role"); go("usp"); return; }
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
