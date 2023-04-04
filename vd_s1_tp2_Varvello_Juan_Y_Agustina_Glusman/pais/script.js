d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  let counts = d3.rollup(
    data,
    v => v.length, // Contar la cantidad de astronautas en cada grupo
    d => d.nacionalidad // Agrupar por nacionalidad
  );
  let chart = Plot.plot({
    marks: [
      Plot.barY(counts, {
  
        x: d => d[0], // Usar la ocupación como eje x
        y: d => d[1], // Usar la cantidad como eje y
        fill: d => d[0], // Usar la nacionalidad como color
      }),
      Plot.text(counts, {
        x: d => d[0],
        y: d => d[1] + 2, // Adjust the y-position of the text
        text: d => d[1], // Use the quantity as the text label
        fill: d => d[0],
        align: "center",
      }),
    ],

    grid: true,
    line: false, // Deshabilitar las líneas de la cuadrícula
    nice: true,
    color: true,
    width: 1000,
    height: 800,
    xLabel: "Pais",
    yLabel: "Cantidad",
  });

  d3.select("#chart").append(() => chart);
});
