/* JL Cars: units posted on the JL CARS Facebook page in November 2026.
   No prices on purpose (they change fast). Update this list when stock changes. */
(() => {
  const UNITS = [
    { s: "vios-xle-2024",      brand: "Toyota",     model: "Vios XLE CVT",     year: 2024, trans: "Automatic", km: "16,xxx", fuel: "Gas",    type: "car", reserved: true },
    { s: "stargazer-2024",     brand: "Hyundai",    model: "Stargazer GL",     year: 2024, trans: "Automatic", km: "24,xxx", fuel: "Gas",    type: "family", reserved: true },
    { s: "livina-2025",        brand: "Nissan",     model: "Livina VE",        year: 2025, trans: "Automatic", km: "22,xxx", fuel: "Gas",    type: "family" },
    { s: "mirage-g4-glx-2025", brand: "Mitsubishi", model: "Mirage G4 GLX",    year: 2025, trans: "Automatic", km: "18,xxx", fuel: "Gas",    type: "car" },
    { s: "wigo-g-2025",        brand: "Toyota",     model: "Wigo G",           year: 2025, trans: "Automatic", km: "20,xxx", fuel: "Gas",    type: "car" },
    { s: "rush-grs-2025",      brand: "Toyota",     model: "Rush GR-Sport",    year: 2025, trans: "Automatic", km: "21,xxx", fuel: "Gas",    type: "family" },
    { s: "xpander-glx-2026",   brand: "Mitsubishi", model: "Xpander GLX",      year: 2026, trans: "Automatic", km: "20,xxx", fuel: "Gas",    type: "family" },
    { s: "xpander-gls-2025",   brand: "Mitsubishi", model: "Xpander GLS",      year: 2025, trans: "Automatic", km: "29,xxx", fuel: "Gas",    type: "family" },
    { s: "xpander-cross-2025", brand: "Mitsubishi", model: "Xpander Cross",    year: 2025, trans: "Automatic", km: "26,xxx", fuel: "Gas",    type: "family" },
    { s: "xpander-glx-mt-2025",brand: "Mitsubishi", model: "Xpander GLX",      year: 2025, trans: "Manual",    km: "25,xxx", fuel: "",       type: "family" },
    { s: "xforce-gls-2025",    brand: "Mitsubishi", model: "Xforce GLS",       year: 2025, trans: "Automatic", km: "13,xxx", fuel: "Gas",    type: "family" },
    { s: "triton-gls-2024",    brand: "Mitsubishi", model: "Triton GLS 4x2",   year: 2024, trans: "Automatic", km: "18,xxx", fuel: "Diesel", type: "work" },
    { s: "city-s-2024",        brand: "Honda",      model: "City S Sensing",   year: 2024, trans: "CVT automatic", km: "21,xxx", fuel: "Gas", type: "car" },
    { s: "dzire-gl-2025",      brand: "Suzuki",     model: "Dzire GL",         year: 2025, trans: "Automatic", km: "30,xxx", fuel: "Gas",    type: "car" },
    { s: "mirage-gls-2025",    brand: "Mitsubishi", model: "Mirage GLS CVT",   year: 2025, trans: "Automatic", km: "29,xxx", fuel: "Gas",    type: "car" },
    { s: "tamaraw-fx-2026",    brand: "Toyota",     model: "Tamaraw FX",       year: 2026, trans: "Manual",    km: "16,xxx", fuel: "Diesel", type: "work" },
    { s: "l300-2025",          brand: "Mitsubishi", model: "L300",             year: 2025, trans: "Manual",    km: "11,xxx", fuel: "Diesel", type: "work", sold: "Buenavista" },
    { s: "innova-e-2018",      brand: "Toyota",     model: "Innova E 2.8",     year: 2018, trans: "Manual",    km: "63,xxx", fuel: "Diesel", type: "family" },
    { s: "apv-glx-2025",       brand: "Suzuki",     model: "APV GLX",          year: 2025, trans: "Manual",    km: "14,xxx", fuel: "Gas",    type: "family" },
    { s: "montero-glx-2025",   brand: "Mitsubishi", model: "Montero GLX 4x2",  year: 2025, trans: "Manual",    km: "",       fuel: "Gas",    type: "family" },
    { s: "vios-e-2018",        brand: "Toyota",     model: "Vios E",           year: 2018, trans: "Automatic", km: "55,xxx", fuel: "Gas",    type: "car" }
  ];
  // sold units go to the end of the wall, as proof of recent releases
  UNITS.sort((a, b) => (!!a.sold) - (!!b.sold));
  const status = u => (u.sold ? "sold" : u.reserved ? "reserved" : "");

  const wall = document.getElementById("wall");
  if (!wall) return;
  const base = wall.dataset.base || "";
  const FB = "https://m.me/61564756125784";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const name = u => `${u.year} ${u.brand} ${u.model}`;
  const shortT = t => (t.startsWith("Manual") ? "MT" : "AT");

  wall.innerHTML = UNITS.map((u, i) => `
    <li class="car${u.sold ? " car-sold" : ""}" data-type="${u.type}">
      <button type="button" data-i="${i}" aria-label="${esc(name(u))}, ${u.trans.toLowerCase()}${status(u) ? ", " + status(u) : ""}. View details">
        <span class="car-photo"><img src="${base}assets/units/${u.s}-360.webp" srcset="${base}assets/units/${u.s}-360.webp 360w, ${base}assets/units/${u.s}-640.webp 640w" sizes="(max-width:600px) 46vw, (max-width:1000px) 31vw, 270px" width="360" height="270" alt="" loading="lazy" decoding="async">${u.sold ? '<b class="tag-res tag-sold">Sold</b>' : u.reserved ? '<b class="tag-res">Reserved</b>' : ""}</span>
        <span class="car-bar" aria-hidden="true"></span>
        <span class="car-brand">${esc(u.brand)} · ${u.year}</span>
        <span class="car-model">${esc(u.model)}</span>
        <span class="car-meta">${shortT(u.trans)}${u.km ? " · " + u.km + " km" : ""}${u.fuel ? " · " + u.fuel : ""}</span>
      </button>
    </li>`).join("") + `
    <li class="car car-more" data-type="all">
      <a href="https://www.facebook.com/profile.php?id=61564756125784" target="_blank" rel="noopener">
        <strong>More on our page →</strong>
        <span>New units are posted on Facebook first.</span>
      </a>
    </li>`;

  // count
  const count = document.getElementById("wallCount");
  const avail = UNITS.filter(u => !u.reserved && !u.sold).length;
  if (count) count.textContent = `${UNITS.length} units posted · ${avail} still open`;

  // filters
  const chips = document.querySelectorAll("[data-filter]");
  chips.forEach(c => c.addEventListener("click", () => {
    const f = c.dataset.filter;
    chips.forEach(x => x.setAttribute("aria-pressed", x === c));
    wall.querySelectorAll(".car").forEach(li => { li.hidden = !(f === "all" || li.dataset.type === f || li.dataset.type === "all"); });
    document.dispatchEvent(new CustomEvent("wall:filter"));
  }));

  // unit dialog
  const dlg = document.getElementById("unitDialog");
  if (!dlg) return;
  const $ = s => dlg.querySelector(s);
  let current = null;
  wall.addEventListener("click", e => {
    const b = e.target.closest("button[data-i]"); if (!b) return;
    const u = UNITS[+b.dataset.i]; current = u;
    $("#uImg").src = `${base}assets/units/${u.s}-640.webp`;
    $("#uImg").alt = name(u);
    $("#uTitle").textContent = name(u);
    $("#uRes").hidden = !status(u);
    $("#uRes").textContent = u.sold ? `Sold, released to our buyer from ${u.sold}. Message us for similar units.` : "Reserved. Message us for similar units.";
    $("#uSpecs").innerHTML = [u.trans + " transmission", u.km && u.km + " km on the odometer", u.fuel && u.fuel + " engine", "Posted on our Facebook page, November 2026"]
      .filter(Boolean).map(s => `<li>${esc(s)}</li>`).join("");
    $("#uToast").textContent = "";
    window.jlOpenModal ? window.jlOpenModal(dlg) : dlg.showModal();
  });
  $("#uAsk").addEventListener("click", async () => {
    if (!current) return;
    const text = `Hi JL Cars! Available pa ba ang ${name(current)} (${current.trans})? Pila ang downpayment ug monthly?`;
    try { await navigator.clipboard.writeText(text); $("#uToast").textContent = "Message copied. Paste it in Messenger."; } catch { /* clipboard blocked: still open the chooser */ }
    setTimeout(() => {
      dlg.close();
      const a = document.createElement("a"); a.href = FB; a.target = "_blank"; a.rel = "noopener";
      document.body.appendChild(a); a.click(); a.remove();
    }, 700);
  });
})();
