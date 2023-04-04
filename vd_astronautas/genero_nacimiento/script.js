d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  let chart = Plot.plot({
    
    marks: [

      Plot.areaY(data.filter(d => d.genero == "masculino"),
      Plot.groupX({
        y: "count",
      },
      {
        x: "anio_nacimiento",
        curve: "natural",
        fill: "genero",
      })
    ),
    Plot.areaY(data.filter(d => d.genero == "femenino"),
    Plot.groupX({
      y: "count",
    },
    {
      
      x: "anio_nacimiento",
      curve: "natural",
      fill: "genero",
    })

  ),
    ],
    
    x:{
      label: "Nacimiento",
      domain: [1953,1976]
      
      
    },

    y:{
      label: "Cantidad",
      zero: true,
      nice: true,
      grid: true,
      
    },
    
    marginLeft: 70,
    line: true,
    color: {
      legend: true,
    },
  });

  d3.select("#chart").append(() => chart);
});