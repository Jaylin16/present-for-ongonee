// import React, { useState } from "react";

function FindElementsByClassName(className) {
  const frameContents =
    document.getElementById("mainFrame").contentDocument.body;
  const elements = frameContents.getElementsByClassName(className);

  // const [totalCount, setTotalTextCount] = useState(0);
  // const [textCount, setOnlyTextCount] = useState(0);

  // const handleChange = (e) => {
  //   let text = e.target.value;

  let totalTextCount = 0;
  let onlyTextCount = 0;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.textContent;

    totalTextCount += text.length;
    onlyTextCount += text.replace(/\s/g, "").length;

    console.log("공백 포함 " + totalTextCount);
    console.log("공백 미포함 " + onlyTextCount);
  }

  // setTotalTextCount(totalTextCount);
  // setOnlyTextCount(onlyTextCount);
  // };

  // return (
  //   <div className="bottom-box">
  //     <p className="content">🙆‍♀️공백 포함🙆‍♂️ : {totalCount}</p>
  //     <p className="content">🙅‍♂️공백 미포함🙅‍♀️ : {textCount}</p>

  //     <textarea className={className} onChange={handleChange}></textarea>
  //   </div>
  // );
}

FindElementsByClassName(
  "se-section se-section-text se-l-default se-is-focused"
);

// export default FindElementsByClassName;
