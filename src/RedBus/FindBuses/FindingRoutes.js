import React, { useState, useEffect,createContext  } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import RoutesApi from "../API/Api";
import RouteCard from "../TravelCard/RouteCard";
import "./FindingRoutes.css"

export let TicketPrice=createContext()
export default function FindRoutes() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { FromAddress, ToAddress } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(RoutesApi);
        console.log(res.data)
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (route) =>
      route.From === FromAddress && route.destination === ToAddress
  );

  return (
    <>
    <TicketPrice.Provider value={"hello"}>  </TicketPrice.Provider>


    <div className="FindRoutesContainer" style={{marginTop:"43px"}}>
      <h2>Available Routes</h2>
      {filteredData.length > 0 ? (
        filteredData.map((route, index) => (
          <RouteCard
            key={index}
            BusName={route.travelName}
            JourneyTime={route.journeyTime}
            Price={route.price}
            BusNumber={route.BusNo}
            FromAddress={route.From}
            ToAddress={route.destination}
            BusType={route.busType}
             TimeFrom={route.timeFrom}
             TimeDestnation={route.timeDestination}
          />
        ))
      ) : (
        <p>No routes found for the selected criteria.</p>
      )}
    </div>
    </>
  );
}


 