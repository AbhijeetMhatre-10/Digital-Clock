// Pad number (ex-> 9 to 09)
const pad = (n) => String(n).padStart(2, "0");

let format = 24;

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());

    if (format === 24) {
        document.getElementById("clock").textContent = `${pad(h)}:${m}:${s}`;
    } else {
        const ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
        document.getElementById("clock").textContent = `${pad(h)}:${m}:${s} ${ampm}`;
    }
}

document.getElementById("button12H").onclick = () => {
    format = 12;
    updateClock();
};
document.getElementById("button24H").onclick = () => {
    format = 24;
    updateClock();
};

updateClock();
setInterval(updateClock, 1000);

document.getElementById("theme").onclick = () => {
    document.body.classList.toggle("light-theme");
};