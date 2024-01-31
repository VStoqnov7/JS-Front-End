function printRequiredMaterial(base, step) {
  let totalMarble = 0;
  let totalStone = 0;
  let totalLapis = 0;

  let row = 0;
  let currentSize = base;
  while (currentSize > 2) {
    let marble = currentSize * 4 - 4;
    let stone = currentSize * currentSize - marble;

    totalStone += stone;

    row++;
    if (row % 5 === 0) {
      totalLapis += marble;
    } else {
      totalMarble += marble;
    }

    currentSize -= 2;
  }

  row++;
  let totalGold = currentSize === 1 ? 1 : 4;

  totalStone = Math.ceil(totalStone * step);
  totalMarble = Math.ceil(totalMarble * step);
  totalLapis = Math.ceil(totalLapis * step);
  totalGold = Math.ceil(totalGold * step);
  let piramidHeight = Math.floor(row * step);

  console.log(`Stone required: ${totalStone}`);
  console.log(`Marble required: ${totalMarble}`);
  console.log(`Lapis Lazuli required: ${totalLapis}`);
  console.log(`Gold required: ${totalGold}`);
  console.log(`Final pyramid height: ${piramidHeight}`);
}
