function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputText = document.querySelector("#inputs > textarea").value;
    const inputArray = inputText.slice(2, -2).split(/",\s*"/g);

    const [bestRestaurantOutput, bestWorkersOutput] =
      findBestRestaurant(inputArray);

    document.querySelector("#bestRestaurant > p").textContent =
      bestRestaurantOutput;
    document.querySelector("#workers > p").textContent = bestWorkersOutput;
  }

  function findBestRestaurant(input) {
    const restaurantData = new Map();

    for (const restaurantInfo of input) {
      const [restaurantName, ...workers] = restaurantInfo.split(" - ");
      const workerSalaries = workers[0].split(", ").map((worker) => {
        const [name, salary] = worker.split(" ");
        return { name, salary: parseFloat(salary) };
      });

      if (!restaurantData.has(restaurantName)) {
        restaurantData.set(restaurantName, []);
      }

      restaurantData.get(restaurantName).push(...workerSalaries);
    }

    let bestRestaurantName = "";
    let bestAvgSalary = 0;
    let bestTotalSalary = 0;

    for (const [restaurantName, workers] of restaurantData) {
      let totalSalary = workers.reduce((sum, worker) => sum + worker.salary, 0);
      let avgSalary = totalSalary / workers.length;
      let maxSalary = 0;

      workers.forEach((worker) => {
        if (worker.salary > maxSalary) {
          maxSalary = worker.salary;
        }
      });

      if (avgSalary > bestAvgSalary || bestRestaurantName === "") {
        bestRestaurantName = restaurantName;
        bestAvgSalary = avgSalary;
        bestTotalSalary = maxSalary;
      }
    }

    const bestWorkers = restaurantData.get(bestRestaurantName);
    bestWorkers.sort((a, b) => b.salary - a.salary);

    const bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(
      2
    )} Best Salary: ${bestTotalSalary.toFixed(2)}`;
    const bestWorkersOutput = bestWorkers
      .map(
        (worker) =>
          `Name: ${worker.name} With Salary: ${worker.salary.toFixed(0)}`
      )
      .join(" ");

    return [bestRestaurantOutput.trim(), bestWorkersOutput.trim()];
  }
}
