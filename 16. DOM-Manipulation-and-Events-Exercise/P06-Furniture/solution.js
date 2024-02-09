function solve() {
  let lists = document.querySelector("#exercise > textarea:nth-child(2)");
  let buttonGenerate = document.querySelector(
    "#exercise > button:nth-child(3)"
  );

  let objects = [];

  let firstInput = document.querySelector("input[type=checkbox]");
  firstInput.disabled = false;

  buttonGenerate.addEventListener("click", createObjects);

  function createObjects() {
    const jsonText = lists.value;
    objects = JSON.parse(jsonText);

    const table = document.querySelector(
      "#exercise > div > div > div > div > table > tbody"
    );
    for (const object of objects) {
      let { img, name, price, decFactor } = object;

      let tr = document.createElement("tr");

      let imageTd = document.createElement("td");
      let imgElement = document.createElement("img");
      imgElement.src = img; // Set the img src attribute
      imageTd.appendChild(imgElement);
      tr.appendChild(imageTd);

      let nameTd = document.createElement("td");
      let namePharagraph = document.createElement("p");
      namePharagraph.textContent = name;
      nameTd.appendChild(namePharagraph);
      tr.appendChild(nameTd);

      let priceTd = document.createElement("td");
      let pricePharagraph = document.createElement("p");
      pricePharagraph.textContent = price;
      priceTd.appendChild(pricePharagraph);
      tr.appendChild(priceTd);

      let decFactorTd = document.createElement("td");
      let decFactorPharagraph = document.createElement("p");
      decFactorPharagraph.textContent = decFactor;
      decFactorTd.appendChild(decFactorPharagraph);
      tr.appendChild(decFactorTd);

      let checkBoxTd = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      checkBoxTd.appendChild(input);
      tr.appendChild(checkBoxTd);

      // Append the row (tr) to the table
      table.appendChild(tr);
    }

    let buttonBuy = document.querySelector("#exercise > button:nth-child(6)");

    buttonBuy.addEventListener("click", buyProducts);

    function buyProducts() {
      let allChecked = Array.from(
        document.querySelectorAll("input[type=checkbox]")
      );

      let names = [];
      let prices = [];
      let factors = [];

      for (const checkedCheckBoxex of allChecked) {
        if (checkedCheckBoxex.checked) {
          let name =
            checkedCheckBoxex.parentNode.parentNode.children[1].children[0]
              .textContent;
          let price = Number(
            checkedCheckBoxex.parentNode.parentNode.children[2].children[0]
              .textContent
          );
          let factor = Number(
            checkedCheckBoxex.parentNode.parentNode.children[3].children[0]
              .textContent
          );

          names.push(name);
          prices.push(price);
          factors.push(factor);

          console.log();
        }
      }

      let outputText = document.querySelector(
        "#exercise > textarea:nth-child(5)"
      );
      let totalPrice = prices.reduce(function (acc, curr) {
        return acc + curr;
      }, 0);

      let totalFactors = factors.reduce(function (acc, curr) {
        return acc + curr;
      }, 0);

      outputText.textContent = `Bought furniture: ${names.join(
        ", "
      )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
        totalFactors / factors.length
      }`;
    }
  }
}
