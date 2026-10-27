(function () {
  "use strict";
  const KONTAKT_EMAIL = "kontakt@elfithalheim.de"; // TODO anpassen

  const STATUS_TEXT = { verfuegbar: "verfügbar", verkauft: "verkauft", reserviert: "reserviert" };

  function format(w) {
    const max = Math.max(w.breite, w.hoehe);
    return max <= 50 ? "klein" : max <= 100 ? "mittel" : "gross";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // ---------- Galerie aufbauen ----------
  const gallery = document.getElementById("gallery");
  let visible = [];

  WERKE.forEach((w, i) => {
    const fig = document.createElement("figure");
    fig.className = "work";
    fig.dataset.index = i;
    fig.dataset.format = format(w);
    fig.dataset.status = w.status;
    fig.tabIndex = 0;
    fig.innerHTML = `
      <div class="work-img"><img src="assets/img/werke/${escapeHtml(w.datei)}" alt="${escapeHtml(w.titel)}, ${w.jahr}" loading="lazy"></div>
      <figcaption>
        <span class="work-title">${escapeHtml(w.titel)}</span>
        <span class="work-meta">${w.jahr} · ${w.breite} × ${w.hoehe} cm</span>
        <span class="badge badge-${w.status}">${STATUS_TEXT[w.status] || ""}</span>
      </figcaption>`;
    fig.addEventListener("click", () => openLightbox(i));
    fig.addEventListener("keydown", e => { if (e.key === "Enter") openLightbox(i); });
    gallery.appendChild(fig);
  });

  // ---------- Filter ----------
  const figures = [...gallery.querySelectorAll(".work")];
  function applyFilter(f) {
    figures.forEach(fig => {
      const show = f === "alle" || fig.dataset.format === f || (f === "verfuegbar" && fig.dataset.status === "verfuegbar");
      fig.hidden = !show;
    });
    visible = figures.filter(f => !f.hidden).map(f => +f.dataset.index);
  }
  document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
  applyFilter("alle");

  // ---------- Lightbox ----------
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-caption");
  let current = 0;

  function openLightbox(i) {
    current = i;
    const w = WERKE[i];
    lbImg.src = "assets/img/werke/" + w.datei;
    lbImg.alt = w.titel;
    const subject = encodeURIComponent(`Anfrage zum Werk „${w.titel}“ (${w.jahr})`);
    const preis = w.status === "verfuegbar" ? (w.preis ? w.preis : "Preis auf Anfrage") : "";
    lbCap.innerHTML = `
      <strong>${escapeHtml(w.titel)}</strong>, ${w.jahr}<br>
      ${escapeHtml(w.technik)} · ${w.breite} × ${w.hoehe} cm<br>
      <span class="badge badge-${w.status}">${STATUS_TEXT[w.status] || ""}</span> ${escapeHtml(preis)}
      ${w.status !== "verkauft" ? `<br><a class="btn btn-small" href="mailto:${KONTAKT_EMAIL}?subject=${subject}">Anfrage senden</a>` : ""}`;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    lb.querySelector(".lb-close").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
    const fig = gallery.querySelector(`[data-index="${current}"]`);
    if (fig) fig.focus();
  }
  function step(d) {
    const pos = visible.indexOf(current);
    openLightbox(visible[(pos + d + visible.length) % visible.length]);
  }
  lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lb-prev").addEventListener("click", () => step(-1));
  lb.querySelector(".lb-next").addEventListener("click", () => step(1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // ---------- Navigation mobil ----------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
