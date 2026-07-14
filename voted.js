(function () {
  var MAP = {
    imessage: "iMessage", whatsapp: "WhatsApp", slack: "Slack", luma: "Luma",
    partiful: "Partiful", substack: "Substack", instagram: "Instagram",
    tiktok: "TikTok", airtable: "Airtable", hubspot: "HubSpot",
    salesforce: "Salesforce", notion: "Notion", "google-drive": "Google Drive"
  };
  var pick = new URLSearchParams(window.location.search).get("pick");
  var picked = (pick && MAP[pick])
    ? '<p style="font-size:17px;color:#2c321f;margin:0 0 16px;">You picked <span style="font-weight:700;color:#A85534;">' + MAP[pick] + '</span>.</p>'
    : '';

  document.documentElement.style.background = "#FEFAF5";
  document.body.style.margin = "0";
  document.body.style.background = "#FEFAF5";

  var root = document.getElementById("gwv-root") || document.body;
  root.innerHTML =
    '<div style="min-height:100vh;background:#FEFAF5;color:#112D0A;font-family:Helvetica,Arial,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;">' +
      '<div style="background:#112D0A;text-align:center;padding:22px 16px;">' +
        '<img alt="Goodword" src="https://d3k81ch9hvuctc.cloudfront.net/company/YvS9zN/images/0888a7a9-4b72-4a51-bd40-a2c46e283504.png" style="width:220px;max-width:66%;height:auto;display:inline-block;"/>' +
      '</div>' +
      '<div style="max-width:520px;margin:0 auto;padding:64px 24px 80px;box-sizing:border-box;text-align:center;">' +
        '<p style="font-size:11px;letter-spacing:.24em;text-transform:uppercase;font-weight:700;color:#567A44;margin:0 0 18px;">Vote received</p>' +
        '<h1 style="font-family:Georgia,serif;font-weight:400;font-size:clamp(30px,6.5vw,38px);line-height:1.15;letter-spacing:-.01em;margin:0 0 18px;">Got it &mdash; <em style="font-style:italic;color:#901D00;">noted</em>.</h1>' +
        picked +
        '<p style="font-size:17px;color:#2c321f;margin:0 0 16px;">Thanks for telling us what to build next. We read every vote, and it genuinely shapes what we connect next.</p>' +
        '<a href="https://app.goodword.com" style="display:inline-block;margin-top:24px;font-size:15px;font-weight:700;color:#A85534;text-decoration:none;">Back to Goodword &rarr;</a>' +
      '</div>' +
    '</div>';
})();
