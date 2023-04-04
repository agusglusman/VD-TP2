d3.csv("astronautas.csv", d3.autoType).then((data) => {
  
  let chart = Plot.plot({
    
    marks: [

      Plot.barY(data.filter(d => d.genero == "masculino"),
      Plot.groupX({
        y: "count",
      },
      {
        x: "anio_nacimiento",
        fill: "genero",
      })
    ),
    Plot.barY(data.filter(d => d.genero == "femenino"),
    Plot.groupX({
      y: "count",
    },
    {
      
      x: "anio_nacimiento",
      fill: "genero",
    })

  ),
    ],
    
    x:{
      label: "Nacimiento",
    
    },

    y:{
      label: "Cantidad",
      zero: true,
      nice: true,
      grid: true,
      
    },
    width:1000,
    marginLeft: 70,
    line: true,
    color: {
      legend: true,
    },
  });

  d3.select("#chart").append(() => chart);
});
