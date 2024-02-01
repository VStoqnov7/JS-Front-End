function printDNAStrand(length) {
  const sequence = "ATCGTTAGGG";
  let currentIndex = 0;

  for (let i = 0; i < length; i++) {
    let currentSymbol = sequence[currentIndex];

    if (i % 4 === 0) {
      console.log(
        `**${currentSymbol}${sequence[(currentIndex + 1) % sequence.length]}**`
      );
    } else if (i % 4 === 1 || i % 4 === 3) {
      console.log(
        `*${currentSymbol}--${sequence[(currentIndex + 1) % sequence.length]}*`
      );
    } else {
      console.log(
        `${currentSymbol}----${sequence[(currentIndex + 1) % sequence.length]}`
      );
    }

    currentIndex = (currentIndex + 2) % sequence.length;
  }
}

printDNAStrand(10);
