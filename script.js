function buttonclick() {
  let inputBox = document.querySelector("#todo");
  let input = inputBox.value.trim();
  if (input === "") {
    alert("โปรดใส่ข้อความก่อน");
    return;
  }

  let newElement = document.createElement("p");
  newElement.textContent = input;  
  document.getElementById("results").appendChild(newElement);

  Deletetxtbtn(newElement);
  inputBox.value = "";
  inputBox.focus();
}

function Deletetxtbtn(element) {
  let delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.className = "delete-btn"
  delBtn.onclick = function () {   
    element.remove();
  };
  element.appendChild(delBtn);
}