/* Goodword LP email-capture pop-up: injects the light-DOM styles + enhances the
   native Webflow "Email Form" (#gw-capture-wrap) into the floating pop-up.
   Kept OUT of the shadow-DOM bundle so webflow.js/Turnstile can see the form. */
(function () {
  var css = `
#gw-capture-wrap{position:fixed;right:24px;bottom:24px;z-index:60;width:340px;max-width:calc(100vw - 32px);background:#FBF7F0;border:1px solid #EAE0D2;border-radius:18px;box-shadow:0 20px 55px -20px rgba(60,40,30,.4);padding:18px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;opacity:0;transform:translateY(16px);pointer-events:none;transition:opacity .28s ease,transform .28s ease}
#gw-capture-wrap.gw-show{opacity:1;transform:none;pointer-events:auto}
#gw-capture-wrap label{display:none !important}
#gw-capture-wrap #name{display:none !important}
#gw-capture-wrap form{display:flex;flex-direction:column;gap:8px;margin:0}
#gw-capture-wrap input[type=email]{height:46px;border-radius:44px;border:1px solid #E0D5C5;background:#fff;color:#2A2320;padding:0 16px;font-size:15px;width:100%;margin:0;box-sizing:border-box}
#gw-capture-wrap input[type=email]::placeholder{color:#9A8C7D;opacity:1}
#gw-capture-wrap input[type=submit]{height:46px;border-radius:44px;border:0;background:#8A2B15;color:#fff;font-weight:600;font-size:15px;cursor:pointer;width:100%;-webkit-appearance:none;margin:0}
#gw-capture-wrap input[type=submit]:hover{background:#761f0e}
#gw-capture-wrap .gw-cap-title{font-weight:700;font-size:17px;color:#2A2320;margin:0 26px 2px 0}
#gw-capture-wrap .gw-cap-sub{font-size:13px;color:#7A6E62;margin:0 0 12px}
#gw-capture-wrap .gw-cap-x{position:absolute;top:12px;right:12px;border:0;background:transparent;color:#9A8C7D;font-size:20px;line-height:1;cursor:pointer;padding:2px 6px}
#gw-capture-wrap .w-form-done,#gw-capture-wrap .w-form-fail{font-size:13px;margin:8px 0 0;color:#7A6E62}
@media(max-width:600px){#gw-capture-wrap{right:0;left:0;bottom:0;width:auto;max-width:none;border-radius:14px 14px 0 0;padding:11px 14px calc(12px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 24px -10px rgba(60,40,30,.22)}#gw-capture-wrap .gw-cap-sub{display:none}#gw-capture-wrap .gw-cap-title{font-size:14px;margin:0 28px 8px 0}#gw-capture-wrap form{flex-direction:row;gap:8px}#gw-capture-wrap input[type=email]{height:44px;flex:1 1 auto;min-width:0;width:auto}#gw-capture-wrap input[type=submit]{height:44px;width:auto;flex:0 0 auto;white-space:nowrap;padding:0 18px}#gw-capture-wrap .gw-cap-x{top:8px;right:10px}}
`;
  var st = document.createElement('style');
  st.appendChild(document.createTextNode(css));
  document.head.appendChild(st);

  function init() {
    var wrap = document.getElementById('gw-capture-wrap');
    if (!wrap || wrap.getAttribute('data-gw')) return;
    var form = wrap.querySelector('form');
    if (!form) return;
    wrap.setAttribute('data-gw', '1');
    var sub = document.createElement('div'); sub.className = 'gw-cap-sub'; sub.textContent = 'Free 7-day trial. Set up in 3 minutes.';
    var title = document.createElement('div'); title.className = 'gw-cap-title'; title.textContent = 'Put your network to work';
    wrap.insertBefore(sub, wrap.firstChild); wrap.insertBefore(title, sub);
    var x = document.createElement('button'); x.type = 'button'; x.className = 'gw-cap-x'; x.setAttribute('aria-label', 'Dismiss'); x.innerHTML = '&times;'; wrap.appendChild(x);
    var ei = form.querySelector('input[type=email]'); if (ei) { ei.setAttribute('placeholder', 'Enter your email'); }
    var sb = form.querySelector('input[type=submit]');
    function setCta() { if (sb) sb.value = (window.matchMedia('(max-width:600px)').matches ? 'Get started' : 'Get started for free'); }
    setCta();
    try { window.matchMedia('(max-width:600px)').addEventListener('change', setCta); } catch (e) { window.addEventListener('resize', setCta); }
    var dismissed = false;
    function onScroll() { if (dismissed) return; wrap.classList.toggle('gw-show', window.scrollY > 500); }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    x.addEventListener('click', function () { dismissed = true; wrap.classList.remove('gw-show'); });
    var email = '';
    form.addEventListener('submit', function () { var i = form.querySelector('input[type=email]'); email = ((i && i.value) || '').trim(); });
    var done = wrap.querySelector('.w-form-done');
    var mo = new MutationObserver(function () {
      if (done && getComputedStyle(done).display !== 'none' && email) {
        mo.disconnect();
        window.location.href = 'https://app.goodword.com/auth/signup?email=' + encodeURIComponent(email);
      }
    });
    mo.observe(wrap, { attributes: true, childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 400); });
  else setTimeout(init, 400);
})();
