//Chart Options
let options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },

  series: [
    {
      name: "Unit Sales",
      data: [
        12500300,
        9971883,
        5720546,
        5296224,
        1567442,
        1563025,
        1469845,
        1394928,
        1300092,
        1026908
      ]
    }
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },

  fill: {
    colors: ["#00acee"]
  },

  dataLabels: {
    enabled: false
  },
  title: {
    text: "Unit Sales by US City",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

//init chart

const chart = new ApexCharts(document.querySelector("#chart"), options);

//render chart
chart.render();

//Event

console.log(options.plotOptions.bar.horizontal);
document.getElementById("change").addEventListener("click", () => {
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: !options.plotOptions.bar.horizontal
      }
    }
  })(
    (options.plotOptions.bar.horizontal = !options.plotOptions.bar.horizontal)
  );
});
