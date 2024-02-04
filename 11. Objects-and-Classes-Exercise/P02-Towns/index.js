function towns(arr) {
  class Data {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = Number(latitude);
      this.longitude = Number(longitude);
    }
  }

  const processedData = [];

  for (const townInfo of arr) {
    const [name, latitude, longitude] = townInfo.split(" | ");
    const data = new Data(name, latitude, longitude);
    processedData.push(data);
  }

  processedData.forEach((data) => {
    console.log(
      `{ town: '${data.name}', latitude: '${data.latitude.toFixed(
        2
      )}', longitude: '${data.longitude.toFixed(2)}' }`
    );
  });
}
