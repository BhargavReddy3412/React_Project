 import { createContext, useState } from "react";
 
export const UserProfileInfoRTFBContext = createContext();
 
export const UserProfileInfoRTFBProvider = ({ children }) => {
  const [userProfileRTFB, setUserProfileRTFB] = useState(null);

  return (
    <UserProfileInfoRTFBContext.Provider value={{ userProfileRTFB, setUserProfileRTFB }}>
      {children}
    </UserProfileInfoRTFBContext.Provider>
  );
};


 