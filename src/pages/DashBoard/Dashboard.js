import React, { useEffect, useState } from "react";
import { ContainerCards, WrapperPanel, Panel } from "./styles";
import Wrapper from "../../components/Wrapper/Wrapper";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import Menu from "../../components/Menu/Menu";

const Dashboard = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const [units, setUnits] = useState([]);
  const [unitsActive, setUnitsActive] = useState("");
  const [unitsDisabled, setUnitsDisabled] = useState("");
  const [average, setAverage] = useState(0);
  const [dataGrafics, setDataGrafics] = useState({});
  const [years, setYears] = useState([]);
  const [readyChartData, setreadyChartData] = useState(null);

  // removes all letters, we use it to turn all models into a summable number
  function removeLetters(text) {
    return text.replace(/[^0-9\.]+/g, "");
  }
  // get the data to fill in the cards
  useEffect(() => {
    async function getData() {
      const datas = await (
        await fetch("http://localhost:3333/unidades/")
      ).json();
      setUnitsActive(() => {
        return datas.filter((unit) => {
          return unit.ativo === true;
        });
      });
      setUnits(datas);
      setUnitsDisabled(() => {
        return datas.filter((unit) => {
          return unit.ativo === false;
        });
      });

      // setAverage(
      //   new Intl.NumberFormat({ maximumSignificantDigits: 2 }).format(
      //     datas
      //       .map((unit) => +removeLetters(unit.modelo))
      //       .reduce((acc, value) => acc + value) / datas.length
      //   ) + "Kw"
      // );
    }
    getData();
  }, []);

  // manipulate data to create the chart
  useEffect(() => {
    let year = [];
    // will group all records by years
    function groupBy(objetoArray, propriedade) {
      return objetoArray.reduce(function (acc, obj) {
        obj.ano = obj.data.split("/")[1];
        obj.mes = obj.data.split("/")[0];
        year = year.includes(obj.data.split("/")[1])
          ? year
          : [...year, obj.data.split("/")[1]];

        // it will be a property
        let key = obj[propriedade];
        // if the property does not exist, let's create it and assign an array to it
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
        // let's turn the accumulator into an object
      }, {});
    }

    // will get the objects that contain the dates and will filter them
    async function getGenerations() {
      const objsMeasurement = await (
        await fetch("http://localhost:3333/geracoes")
      ).json();

      let totalEnergy = 0;
      // groups the data
      let measurementRecord = groupBy(objsMeasurement, "ano");
      for (let ano of year) {
        measurementRecord[ano] = groupBy(measurementRecord[ano], "mes");
        months.forEach((month) => {
          if (measurementRecord[ano][month]) {
            let tot = 0;
            for (let mes of measurementRecord[ano][month]) {
              tot += +mes.kw;
            }
            measurementRecord[ano][month] = tot;
            totalEnergy += tot;
          } else {
            measurementRecord[ano][month] = 0;
          }
        });
      }
      setYears(year);
      setDataGrafics(measurementRecord);
      setAverage(totalEnergy);
    }
    getGenerations();
  }, []);
  // assemble the chart
  useEffect(() => {
    if (Object.getOwnPropertyNames(dataGrafics).length >= 1) {
      let datasets = [];
      const data = { labels: months };
      let contador = 1;

      for (let year of years) {
        let objMeasurement = {
          label: year,
          data: [
            dataGrafics[year]["Jan"],
            dataGrafics[year]["Feb"],
            dataGrafics[year]["Mar"],
            dataGrafics[year]["Apr"],
            dataGrafics[year]["May"],
            dataGrafics[year]["Jun"],
            dataGrafics[year]["Jul"],
            dataGrafics[year]["Aug"],
            dataGrafics[year]["Sep"],
            dataGrafics[year]["Oct"],
            dataGrafics[year]["Nov"],
            dataGrafics[year]["Dec"],
          ],
          borderColor: `rgb(${Math.ceil(
            Math.random() * (255 - 0) + 0
          )},${Math.ceil(Math.random() * (255 - 0) + 0)}, 132)`,
          backgroundColor: `rgba(${
            Math.random() * (255 - 0) + 0
          }, 99, 132, 0.5)`,
          fill: false,
          hidden: contador == 1 ? false : true,
        };
        contador += 1;
        datasets.push(objMeasurement);
      }
      data["datasets"] = datasets;
      setreadyChartData(data);
    }
  }, [dataGrafics]);
  return (
    <>
      <Menu></Menu>
      <Wrapper>
        <Title title="Dashboard" />
        <ContainerCards>
          <Card label="Total Unidades" unidades={units.length}></Card>
          <Card label="Unidades Ativas" unidades={unitsActive.length}></Card>
          <Card
            label="Unidades Inativas"
            unidades={unitsDisabled.length}
          ></Card>
          <Card
            label="Media de energia"
            unidades={units.length > 0 ? average / units.length + " Kw" : 0}
            large={true}
          ></Card>
        </ContainerCards>
        <WrapperPanel>
          {readyChartData && <Line data={readyChartData} options={options} />}
        </WrapperPanel>
      </Wrapper>
    </>
  );
};

export default Dashboard;
