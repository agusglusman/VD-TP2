
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  let counts = d3.rollup(
    data,
    v => (v.length)/2, // Contar la cantidad de astronautas en cada grupo
    d => d.ocupacion // Agrupar por ocupación
  );

  let chart = Plot.plot({
    width: 750,
    height: 600,
    marks: [
      Plot.barY(counts, {
  
        x: d => d[0], // Usar la ocupación como eje x
        y: d => d[1], // Usar la cantidad como eje y
        fill: d => d[0], // Usar la ocupación como color
      }),
    ],
    grid: true,
    line: false, // Deshabilitar las líneas de la cuadrícula
    nice: true,
    color: true,
  });

  d3.select("#chart").append(() => chart);
});