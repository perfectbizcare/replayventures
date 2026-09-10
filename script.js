const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
}

const trackingForm = document.getElementById("trackingForm");
const trackingNumber = document.getElementById("trackingNumber");
const trackMessage = document.getElementById("trackMessage");
if (trackingForm) {
  trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = trackingNumber.value.trim();
    trackMessage.textContent = value
      ? "Tracking interface is ready. Live status needs your courier/freight tracking API."
      : "Please enter a tracking number.";
  });
}

const modal = document.getElementById("quoteModal");
const closeBtn = document.getElementById("quoteClose");
const triggers = document.querySelectorAll(".quote-trigger");
const quoteForm = document.getElementById("quoteForm");

function openQuote(product = "") {
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const productInput = quoteForm?.querySelector('[name="product"]');
  if (product && productInput) productInput.value = product;
}
function closeQuote() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
triggers.forEach(btn => btn.addEventListener("click", () => openQuote(btn.dataset.product || "")));
closeBtn?.addEventListener("click", closeQuote);
modal?.querySelector(".modal-backdrop")?.addEventListener("click", closeQuote);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeQuote(); });

if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(quoteForm);
    const lines = [
      "Hello Replay Ventures, I want a logistics quote.",
      "",
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Product/Cargo: ${data.get("product") || ""}`,
      `Origin: ${data.get("origin") || ""}`,
      `Destination: ${data.get("destination") || ""}`,
      `Approx. Weight: ${data.get("weight") || ""}`,
      `Approx. Volume/Qty: ${data.get("volume") || ""}`,
      `Additional Details: ${data.get("message") || ""}`
    ];
    const url = "https://wa.me/917437867869?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
  });
}

const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  sections.forEach(section => observer.observe(section));
}
