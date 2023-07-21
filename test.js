function findElementsByClassName(className) {
  const frame = document.getElementById("mainFrame");
  const frameContents = frame.contentDocument.body;

  const elements = frameContents.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.textContent;
    console.log("공백 포함 " + text.length);
    console.log("공백 미포함 " + text.replace(/\s/g, "").length);
  }
}

findElementsByClassName(
  "se-section se-section-text se-l-default se-is-focused"
);
