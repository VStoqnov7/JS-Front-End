function rotation(arr, number) {
  for (let i = 0; i < number; i++) {
    arr.push(arr.shift());
  }

  console.log(arr.join(" "));
}

rotation([51, 47, 32, 61, 21], 1);
