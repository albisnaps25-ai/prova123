let targetUrl = ""; // Store which link to open

// Function to show link confirmation popup
function showLinkPopup(url, title, message) {
  targetUrl = url;
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMessage").textContent = message;
  document.getElementById("linkPopup").style.display = "flex";
}

// Function to show stats popup
function showStatsPopup(type) {
  const statsData = {
    photos: {
      title: "📷 Foto Statistikat",
      stats: [
        { number: "546", label: "Foto Gjithsej" },
        { number: "23", label: "Të Reja Këtë Javë" },
        { number: "145", label: "Më të Pëlqyerat" },
        { number: "8.2k", label: "Shikime Totale" }
      ]
    },
    videos: {
      title: "🎥 Video Statistikat",
      stats: [
        { number: "362", label: "Video Gjithsej" },
        { number: "12", label: "Të Reja Këtë Javë" },
        { number: "87", label: "Më të Pëlqyerat" },
        { number: "15.6k", label: "Shikime Totale" }
      ]
    }
  };
  
  const data = statsData[type];
  document.getElementById("statsTitle").textContent = data.title;
  
  const statsGrid = document.getElementById("statsGrid");
  statsGrid.innerHTML = "";
  
  data.stats.forEach(stat => {
    const statItem = document.createElement("div");
    statItem.className = "stat-item";
    statItem.innerHTML = `
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    `;
    statsGrid.appendChild(statItem);
  });
  
  document.getElementById("statsPopup").style.display = "flex";
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Close link popup
  document.getElementById("cancelBtn").onclick = () => {
    document.getElementById("linkPopup").style.display = "none";
    targetUrl = "";
  };
  
  // Confirm and go to link
  document.getElementById("confirmBtn").onclick = () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank');
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  // Close stats popup
  document.getElementById("closeStatsBtn").onclick = () => {
    document.getElementById("statsPopup").style.display = "none";
  };
  
  // Close popups when clicking overlay
  document.getElementById("linkPopup").onclick = (e) => {
    if (e.target.id === "linkPopup") {
      document.getElementById("linkPopup").style.display = "none";
      targetUrl = "";
    }
  };
  
  document.getElementById("statsPopup").onclick = (e) => {
    if (e.target.id === "statsPopup") {
      document.getElementById("statsPopup").style.display = "none";
    }
  };
  
  // Assign actions to buttons
  document.getElementById("explicitBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/explicit", 
      "🔞 Përmbajtje Eksplicite",
      "Ky link përmban përmbajtje eksplicite për të rritur. A jeni të sigurt që doni të vazhdoni?"
    );
  };
  
  document.getElementById("livestreamBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/livestream", 
      "👁️ Livestream +18",
      "Ky link ju drejton në një livestream për të rritur. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("unlockBtn").onclick = () => {
    showLinkPopup(
      "https://example.com/unlock", 
      "🔓 Shkyç të Gjitha",
      "Ky link do t'ju drejojë në faqen e pagesës për të shkyçur të gjitha fotot. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("bannerAd").onclick = () => {
    showLinkPopup(
      "https://example.com/banner", 
      "📢 Reklamë Banner",
      "Ky link ju drejton në një faqe partneri. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("bannerAdImage").onclick = () => {
    showLinkPopup(
      "https://example.com/banner-image", 
      "📢 Reklamë",
      "Ky link ju drejton në një ofertë speciale. A doni të vazhdoni?"
    );
  };
  
  // Photos
  document.getElementById("photo1").onclick = () => {
    showLinkPopup(
      "https://example.com/photo1", 
      "📷 Foto 1",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("photo2").onclick = () => {
    showLinkPopup(
      "https://example.com/photo2", 
      "📷 Foto 2",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  document.getElementById("photo3").onclick = () => {
    showLinkPopup(
      "https://example.com/photo3", 
      "📷 Foto 3",
      "Ky link ju drejton në versionin e plotë të kësaj fotoje. A doni të vazhdoni?"
    );
  };
  
  // Stats clicks
  document.getElementById("photoStats").onclick = () => {
    showStatsPopup("photos");
  };
  
  document.getElementById("videoStats").onclick = () => {
    showStatsPopup("videos");
  };
});