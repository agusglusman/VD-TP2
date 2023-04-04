d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
    let counts = d3.rollup(
      data,
      v => (v.length)/2, // Contar la cantidad de astronautas en cada grupo
      d => d.status // Agrupar por ocupación
    );
  
    let chart1 = Plot.plot({
      width: 800,
      height: 700,
      marks: [
        Plot.barY(counts, {
    
          x: d => d[0], // Usar la ocupación como eje x
          y: d => d[1], // Usar la cantidad como eje y
          fill: d => d[0], // Usar la ocupación como color
        }),

      ],
      grid: true,
      line: true, // Deshabilitar las líneas de la cuadrícula
      nice: true,
    });

    d3.select("#chart1").append(() => chart1);
    d3.select("#chart2").append(() => chart2);
    d3.select("#chart3").append(() => chart3);
  });