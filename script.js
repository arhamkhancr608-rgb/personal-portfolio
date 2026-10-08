// Welcome message
console.log("Welcome to Arham Khan's portfolio! 🚀");

// Highlight the current year automatically
const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
footer.innerHTML = `<p>© ${year} Arham Khan. Built with ❤️ and code.</p>`;
}
