function calculateSumOfVacation(numberOfPeople, type, dayOfWeek){

    sum = 0.00;

    if (type === "Students") {
        if (dayOfWeek === "Friday") {
            sum += 8.45 * numberOfPeople;
        }else if (dayOfWeek === "Saturday") {
            sum += 9.80 * numberOfPeople;
        }else if (dayOfWeek === "Sunday") {
            sum += 10.46 * numberOfPeople;
        }

        if (numberOfPeople >= 30) {
            sum -= sum * 0.15;
        }
    }else if (type === "Business") {

        if (numberOfPeople >= 100) {
            numberOfPeople -= 10;
        }

        if (dayOfWeek === "Friday") {
            sum += 10.90 * numberOfPeople;
        }else if (dayOfWeek === "Saturday") {
            sum += 15.60 * numberOfPeople;
        }else if (dayOfWeek === "Sunday") {
            sum += 16.00 * numberOfPeople;
        }
        
    }else if (type === "Regular") {
        if (dayOfWeek === "Friday") {
            sum += 15.00 * numberOfPeople;
        }else if (dayOfWeek === "Saturday") {
            sum += 20.00 * numberOfPeople;
        }else if (dayOfWeek === "Sunday") {
            sum += 22.50 * numberOfPeople;
        }

        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            sum -= sum * 0.05;
        }
        
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}
