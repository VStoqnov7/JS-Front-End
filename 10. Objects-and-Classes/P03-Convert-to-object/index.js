function convertJSONToObject(jsonString) {
  const jsonObject = JSON.parse(jsonString);
  for (const key in jsonObject) {
    console.log(`${key}: ${jsonObject[key]}`);
  }
}
