javascript: (() => {
  const fontLinkTemplate =
    '<link data-bookmark="yes" data-fontname="{fontName}" href="https://fonts.googleapis.com/css2?family={fontNameNoSpace}:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900" rel="stylesheet">';

  const fontElems = document.querySelectorAll("link[data-bookmark='yes']");
  const existingFonts = [];
  let previouslyAdded = false;

  for (let i = 0; i < fontElems.length; i++) existingFonts.push(fontElems[i].dataset.fontname);

  const promptText = `Previously added:\n\n${existingFonts.join("\n")}\n\nFont Name:`;

  const fontName = prompt(promptText);

  for (let j = 0; j < fontElems.length; j++) {
    if (existingFonts[j].toLowerCase() === fontName.toLowerCase()) {
      previouslyAdded = true;
      break;
    }
  }

  if (!previouslyAdded) {
    document.head.innerHTML += fontLinkTemplate
      .replace(/{fontNameNoSpace}/gi, fontName.replace(/ /g, "+"))
      .replace(/{fontName}/gi, fontName);
  }

  document.body.style.setProperty("font-family", fontName, "important");
})();
