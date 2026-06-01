// ============================================================================
// BREWSTER HISTORY — SHARED HELPERS
// ============================================================================
// Small, framework-free utilities used by the landing page and the standalone
// research narratives. Keep this file lean — only put things here that are
// genuinely shared.
// ============================================================================

// ── CONTACT REVEAL ─────────────────────────────────────────────────────────
// Email is assembled at click time so no static string ever appears in HTML,
// matching the obfuscation pattern from the Southeast Centre app.
//
// Note: not currently called by any page in this version (the simplified
// single-line footer doesn't include a contact button), but kept here so a
// future narrative or page can wire up a "Show Contact" button by including
// an element with id="bh-contact-btn" and an empty target with
// id="bh-contact-addr", then onclick="bhRevealContact()".
function bhRevealContact() {
  var u = 'southeastcentre.ny';
  var d = 'gmail';
  var t = 'com';
  var addr = u + '@' + d + '.' + t;
  var el = document.getElementById('bh-contact-addr');
  if (!el) return;
  var link = document.createElement('a');
  link.href = 'mai' + 'lto:' + addr + '?subject=Brewster%20History';
  link.textContent = addr;
  link.style.color = 'inherit';
  link.style.textDecoration = 'none';
  el.innerHTML = '';
  el.appendChild(link);
  var btn = document.getElementById('bh-contact-btn');
  if (btn) btn.style.display = 'none';
}

// ── PERIOD-STYLE DATE ─────────────────────────────────────────────────────
// "This site as of the 19th day of May, A.D. 2026" — one of the small details
// that signals this is a considered project, not a template.
function bhPeriodDate() {
  var months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var now = new Date();
  var d = now.getDate();
  var m = months[now.getMonth()];
  var y = now.getFullYear();
  var suffix = (d % 10 === 1 && d !== 11) ? 'st'
             : (d % 10 === 2 && d !== 12) ? 'nd'
             : (d % 10 === 3 && d !== 13) ? 'rd' : 'th';
  return 'This site as of the ' + d + suffix + ' day of ' + m + ', A.D. ' + y;
}

document.addEventListener('DOMContentLoaded', function() {
  var dateEl = document.getElementById('bh-period-date');
  if (dateEl) dateEl.textContent = bhPeriodDate();
});
