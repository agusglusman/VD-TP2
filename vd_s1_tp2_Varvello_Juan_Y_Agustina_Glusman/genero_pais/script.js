d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'genero',
        y: 120,
        fill: 'genero',
        title: 'nacionalidad',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    
    width: 1500,
    height: 700,
  
    facet: {
      data: data,
      x: 'nacionalidad',
    },
    x: { ticks: 3 },
  })

  d3.select("#chart").append(() => chart);
});