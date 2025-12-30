document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";

  
  const logo = document.querySelector(".logo");
  if (logo) {
    window.addEventListener("scroll", () => {
      logo.classList.toggle("scroll-active", window.scrollY > 50);
    });
  }

  const searchInput = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");
  const searchBtn = document.getElementById("blanksubmit");

  const pages = [
    { keywords:["home"], link:"index.html" },
    { keywords:["brand"], link:"companies.html" },
    { keywords:["contact"], link:"contacts.html" },
    { keywords:["consoles"], link:"console.html" },
    { keywords:["compare"], link:"compare.html" },
    { keywords:["about"], link:"abouts.html" },
    { keywords:["games"], link:"games.html" },
    { keywords:["sega,Tm"], link:"segatm.html" },
    { keywords:["playstation"], link:"playstation.html" },
    { keywords:["nintendo"], link:"nintendo.html" },
    { keywords:["microsoft"], link:"microsoft.html" },
    { keywords:["sony"], link:"sony.html" },
    { keywords:["xbox"], link:"xbox.html" },
    { keywords:["switch"], link:"switch.html" },
    { keywords:["ubisoft"], link:"ubisoft.html" },
    { keywords:["electronic arts"], link:"electronicarts.html" },
    { keywords:["rockstar"], link:"rockstar.html" },
    { keywords:["activision"], link:"activision.html" },
    { keywords:["bethesda"], link:"bethesda.html" },
    { keywords:["krafton"], link:"kraftoninc.html" },
    { keywords:["sega"], link:"sega.html" }
  ];

  function showSuggestions() {
    if (!searchInput || !suggestions) return;
    const val = searchInput.value.toLowerCase().trim();
    suggestions.innerHTML = "";
    if (!val) return;
    pages.forEach(p => {
      p.keywords.forEach(k => {
        if (k.toLowerCase().startsWith(val)) {
          const li = document.createElement("li");
          li.textContent = k;
          li.onclick = () => location.href = p.link;
          suggestions.appendChild(li);
        }
      });
    });
  }

  function findPage() {
    if (!searchInput) return false;

    const q = searchInput.value.toLowerCase().trim();

    if (!q) {
      return false;
    }

    for (const p of pages) {
      for (const k of p.keywords) {
        if (k.toLowerCase().startsWith(q)) {
          location.href = p.link;
          return false;
        }
      }
    }

    location.href = "notfound.html";
    return false;
  }

  if (searchInput && suggestions) {
    searchInput.addEventListener("input", showSuggestions);
    searchInput.addEventListener("keypress", e => { 
      if(e.key === "Enter") findPage();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", e => {
      e.preventDefault();
      findPage();
    });
  }
});
