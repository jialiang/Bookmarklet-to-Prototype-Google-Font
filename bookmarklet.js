javascript: (() => {
  if (window.location.href.indexOf("fonts.google.com") > -1) {
    const grid = document.querySelector("gf-grid-list");

    const rightClickToCopy = function () {
      const links = grid.querySelectorAll("a");

      for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("draggable") === "false") return;

        links[i].setAttribute("draggable", "false");
        links[i].oncontextmenu = function (e) {
          e.preventDefault();

          const fontname = links[i].querySelector("h1").textContent;
          navigator.clipboard.writeText(fontname);
        };
      }
    };

    const observer = new MutationObserver(rightClickToCopy);

    observer.observe(grid, { childList: true, subtree: true });

    rightClickToCopy();

    alert("Right click on cards to copy font name.");
    return;
  }

  const fontLinkTemplate = `
    <link
      data-bookmark="yes"
      data-fontname="{fontname}"
      href="https://fonts.googleapis.com/css2?family={fontnameNoSpace}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
      rel="stylesheet"
    />`;

  const existingFontElems = document.querySelectorAll("link[data-bookmark='yes']");
  const existingFonts = [];

  let previouslyAdded = false;

  for (let i = 0; i < existingFontElems.length; i++) {
    existingFonts.push(existingFontElems[i].dataset.fontname);
  }

  let promptText = "Previously added:\n\n";

  existingFonts.forEach((font, index) => {
    promptText += `${index}. ${font}\n`;
  });

  promptText += "\nEnter name of font to add:";

  let newFontname = prompt(promptText);

  if (!newFontname) return;

  newFontname = newFontname.trim();

  if (!isNaN(newFontname)) {
    const index = parseInt(newFontname);

    if (index < existingFonts.length) newFontname = existingFonts[index];
  }

  for (let j = 0; j < existingFontElems.length; j++) {
    if (existingFonts[j].toLowerCase() === newFontname.toLowerCase()) {
      previouslyAdded = true;
      break;
    }
  }

  if (!previouslyAdded) {
    document.head.innerHTML += fontLinkTemplate
      .replace(/{fontnameNoSpace}/gi, newFontname.replace(/ /g, "+"))
      .replace(/{fontname}/gi, newFontname);
  }

  document.body.style.setProperty("font-family", newFontname, "important");
})();
