import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import axios from "axios";
import ContentLoader, { Facebook } from "react-content-loader";

// Components
import Header from "./components/header";
import Details from "./components/details";
import TemperatureCard from "./components/temeperatureGraph";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  let [lat, setLat] = useState(33.441792);
  let [lon, setLon] = useState(-94.037689);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude);
          setLon(pos.coords.longitude);
        },
        () => {
          console.log("Geolocation Not Supported");
        }
      );
    }

    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=31eb8a846f539ccb4176a5f600ac54be`
      ).then((resp) => {
        console.log(resp.data);
        setData(resp.data);
        setLoading(false);
      });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div className="container">
      {loading ? (
        <div className="content_loader">
          <div class="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <Header
            currentLocation={data ? data.timezone : "Enter Valid TimeZone"}
          />
          <Details currentData={data ? data.current : ""} />
          <TemperatureCard data={data ? data : ""}></TemperatureCard>
        </>
      )}
    </div>
  );
}

export default App;
