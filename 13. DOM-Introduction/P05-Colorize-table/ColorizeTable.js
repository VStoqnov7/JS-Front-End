function colorize() {
  let elements = Array.from(
    document.querySelectorAll("table tr:nth-child(even)")
  );

  elements.forEach(function (e) {
    e.style.background = "Teal";
  });
}
