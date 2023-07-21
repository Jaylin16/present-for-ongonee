function createTag() {
  const frame = document.getElementById("mainFrame");
  const frameContents = frame.contentDocument.body;

  let new_DivTag = document.createElement("div");
  console.log("frame: " + frame);
  console.log("new_DivTag: " + new_DivTag);

  new_DivTag.setAttribute("class", "bottom-box");
  new_DivTag.innerHTML = "추가된 태그";

  console.log("new_DivTag: " + new_DivTag);
  frameContents.appendChild(new_DivTag);
}

createTag();
