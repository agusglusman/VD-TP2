d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  let counts = d3.rollup(
    data,
    v => v.length, // Contar la cantidad de astronautas en cada grupo
    d => d.genero // Agrupar por ocupación
  );
  let chart = Plot.plot({
    marks: [
      Plot.barY(counts, {
  
        x: d => d[0], // Usar la ocupación como eje x
        y: d => d[1], // Usar la cantidad como eje y
        fill: d => d[0], // Usar la ocupación como color
      }),
    ],
    height: 500,
    grid: true,
    line: false, // Deshabilitar las líneas de la cuadrícula
    nice: true,
    color: true,
    xLabel: "Ocupacion",
    yLabel: "Cantidad",
  });

  d3.select("#chart").append(() => chart);
});