function createTag() {
  const frameContents = document.getElementById("mainFrame").contentDocument;

  const target = frameContents.getElementsByClassName("se-canvas-bottom")[0];

  if (
    frameContents.getElementsByClassName("bottom-box").length === 0 &&
    target != null
  ) {
    const createBox = document.createElement("div");

    //추후 삭제해야할 부분
    createBox.style.width = "100px";
    createBox.style.height = "50px";
    createBox.style.backgroundColor = "red";
    createBox.style.opacity = 0.4;
    createBox.style.display = "flex";
    createBox.style.flexDirection = "column";
    createBox.style.justifyContent = "center";
    createBox.style.alignItems = "center";
    createBox.style.margin = "0 auto";

    createBox.setAttribute("class", "bottom-box");
    createBox.innerHTML = "🙆‍♀️공백 포함🙆‍♂️ : <br><br> 🙅‍♂️공백 미포함🙅‍♀️ :";

    target.appendChild(createBox);
  }
}

createTag();
