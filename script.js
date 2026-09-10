const toggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const trackingForm = document.getElementById("trackingForm");
const trackingNumber = document.getElementById("trackingNumber");
const trackMessage = document.getElementById("trackMessage");

if (trackingForm) {
  trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = trackingNumber.value.trim();
    if (!value) {
      trackMessage.textContent = "Please enter a tracking number.";
      return;
    }
    trackMessage.textContent =
      "Demo tracking is ready. Connect this form to your courier/ERP tracking API for live shipment status.";
  });
}

const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".main-nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach(section => observer.observe(section));
