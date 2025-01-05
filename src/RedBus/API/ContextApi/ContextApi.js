import React, { createContext, useState } from "react";

export const TravelContext = createContext();


export  const TravelProvider = ({ children }) => {
  const [selectedTravel, setSelectedTravel] = useState({
    BusName:"Travel",
    BusType:"Normal",
    Price:"0",
    FromAddress:"From",
    TimeFrom:"Time",
    JourneyTime:"Not Cofirmed",
    ToAddress:"To",
    TimeDestnation:"",
    BookedDate:"",
  }
  );

  return (
    <TravelContext.Provider value={{ selectedTravel, setSelectedTravel }}>
      {children}
    </TravelContext.Provider>
  );
};
