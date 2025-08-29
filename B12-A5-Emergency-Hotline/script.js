let transactionData = [];
// get element by id
function getId(id) {
  document.getElementById(id);
}
// get element class name
function getClassName(className) {
  const value = document.getElementsByClassName(className);
  return value;
}
// get class  with querySelector
function getQuerySelectorClass(className) {
  const value = document.querySelector(className);
  return value;
}
// get class  with querySelector

function getQuerySelectorClassAll(className) {
  const value = document.querySelectorAll(className);
  return value;
}

getId("copy-count");

// 1. Select all elements with the class 'action-btn'
const buttons = document.querySelectorAll(".copyButton");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const container = this.closest(".card-section-left");

    const h2Tag = container.querySelector(".text-btn");
    const textToCopy = container.querySelector(".textToCopy");

    alert(` ${h2Tag.textContent}/nNumberCopped: ${textToCopy.textContent} `);

    navigator.clipboard.writeText(textToCopy.textContent.trim()).then(() => {
      console.log("Copied to clipboard:", h2Tag.textContent);
    });
  });
});

const btnActive = document.querySelectorAll(".btn-active");

// call button work
btnActive.forEach((button) => {
  button.addEventListener("click", function (event) {
    const container = this.closest(".card-section-left");

    const h2Tag = container.querySelector(".text-btn");
    const textToCopy = container.querySelector(".textToCopy");

    if(document.getElementById("coin-count-btn").value === 0){
     alert('your coin is 0')
    }
 
    alert(` Calling: ${h2Tag.textContent} ${textToCopy.textContent}... `);

    const Copy = h2Tag.textContent.trim();
    const label = textToCopy?.textContent.trim();
    // const Copy = h2Tag.textContent;
    // const label = textToCopy?.textContent;
    const data = {
      name: Copy,
      number: label,
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    function renderData() {
      const list = document.getElementById("transaction-button");
      const listItem = document.createElement("li");
      listItem.textContent = `${data.name}: ${data.number} (call at ${data.date})`;
      list.appendChild(listItem);

      localStorage.setItem("copiedData", JSON.stringify(transactionData));
    }

    // Re-render
    renderData();
  });
});
// coin btn main
document.addEventListener("DOMContentLoaded", function decrees() {
  const numberSpan = document.getElementById("coin-count-btn");
  const numberBtns = document.querySelectorAll(".btn-active");

  numberBtns.forEach((button) => {
    button.addEventListener("click", function () {
      let currentValue = parseInt(numberSpan.textContent);

      if (currentValue > 0) {
        numberSpan.textContent = currentValue - 20;
      }
    });
  });
});
//* love btn main
document.addEventListener("DOMContentLoaded", function decrees() {
  const numberSpan = document.getElementById("copy-count");
  // copy-count love-count-btn
  const numberBtns = document.querySelectorAll(".copyButton");

  numberBtns.forEach((button) => {
    button.addEventListener("click", function () {
      let currentValue = parseInt(numberSpan.textContent);

      if (currentValue >= 0) {
        numberSpan.textContent = currentValue +1;
      }
    });
  });
});
//* copy btn main
document.addEventListener("DOMContentLoaded", function decrees() {
  const numberSpan = document.getElementById("love-count-btn");
  const numberBtns = document.querySelectorAll(".size-6");

  numberBtns.forEach((button) => {
    button.addEventListener("click", function () {
      let currentValue = parseInt(numberSpan.textContent);

      if (currentValue >= 0) {
        numberSpan.textContent = currentValue +1;
      }
    });
  });
});
//
// console.log(transactionData);
// create document section
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";

    // history data
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
  <div class=" bg-white rounded-xl p-3  flex justify-between items-center mt-3">
<div class="flex items-center ">
<div class=" p-3 rounded-full bg-[#f4f5f7]">
  <img class="mx-auto" src="./assets/wallet1.png" alt="" />
</div>
<div class="ml-3">
<h1>${data.name}</h1>
<h1>${data.number}</h1>

<p>${data.date} AM</p>
</div>
</div>
<i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
  `;

      transactionContainer.appendChild(div);
    }
  });

// clear data
document.getElementById('clear').addEventListener('click',function(){
  document.getElementById("transaction-button").innerHTML = "";
  transactionData = [];
  
})
