function bitcoin(input) {
  let gold = 67.51;
  let bitcoin = 11949.16;

  let day = 0;
  let boughtBitcoins = 0;
  let firstDay = 0;
  let sumMoney = 0;

  for (const days of input) {
    day++;
    sumMoney += days * gold;
    if (day % 3 === 0) {
      sumMoney -= days * gold * 0.3;
    }
    while (sumMoney >= bitcoin) {
      boughtBitcoins++;
      sumMoney -= bitcoin;
      if (firstDay === 0) {
        firstDay = day;
      }
    }
  }

  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if (firstDay !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }

  console.log(`Left money: ${sumMoney.toFixed(2)} lv.`);
}

bitcoin([3124.15, 504.212, 2511.124]);
