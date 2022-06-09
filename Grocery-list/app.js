const submitButton = document.querySelector("#btn");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  //   getting the values submitted
  const quantity = submitButton.parentElement.quantity.value;
  const productName = submitButton.parentElement.product.value;
  console.log(quantity, productName);

  //create element
  const li = document.createElement("li");
  if (parseInt(quantity) === 1 || parseInt(quantity) === -1) {
    li.append(`${quantity} ${productName}`);
  } else {
    li.append(`${quantity} ${productName}s`);
  }

  //   appending element to the list
  const list = document.querySelector("ul");
  console.dir(list);
  list.appendChild(li);
});
