const ctx = document.querySelector(".js-chart").getContext("2d");
const GLOBAL_MEAN_TEMPERATURE = 14;

fetchData()
  .then(parseData)
  .then((data) => getLabelsAndData(data))
  .then(({ years, temps, nHem, sHem }) => {
    console.log({ years, temps, nHem, sHem });
    drawChart(years, temps, nHem, sHem);
  });

function fetchData() {
  return fetch("./ZonAnn.Ts+dSST.csv").then((response) => response.text());
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data;
}

function getLabelsAndData(data) {
  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.temps.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
      acc.nHem.push(Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE);
      acc.sHem.push(Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE);

      return acc;
    },
    { years: [], temps: [], nHem: [], sHem: [] }
  );
}

function drawChart(labels, data1, data2, data3) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Средняя глобальная температура",
          data: data1,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Средняя температура северного полушария",
          data: data2,
          borderColor: "rgba(99, 130, 255, 1)",
          borderWidth: 1,
          fill: false,
        },
        {
          label: "Средняя температура южного полушария",
          data: data3,
          borderColor: "rgba(255, 239, 99, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              callback(value) {
                return value + "°";
              },
            },
          },
        ],
      },
    },
  });
}
