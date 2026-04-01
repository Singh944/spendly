// main.js — students will add JavaScript here as features are built
// ---------------- VIDEO MODAL ----------------

const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeModal");
const iframe = document.getElementById("videoFrame");

const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

if (openBtn) {
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("active");
        iframe.src = VIDEO_URL;
    });
}

function closeModal() {
    modal.classList.remove("active");
    iframe.src = ""; // ✅ stops video
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}