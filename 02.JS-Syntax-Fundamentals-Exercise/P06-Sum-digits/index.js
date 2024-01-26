function digitSum(number) {
    let numberStr = number.toString();
    let sum = 0;

    for (let index = 0; index < numberStr.length; index++) {
        let digit = Number(numberStr[index]);
        sum += digit;

        // sum += parseInt(numberStr[i], 10);
    }

    console.log(sum);
}

