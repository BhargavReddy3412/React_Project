// import React, { useState, useRef, useEffect, useContext } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { useNavigate } from "react-router-dom";
// import { message } from "antd";
// import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";
// import debounce from "lodash.debounce"; // Import lodash debounce
// import "./HomePage.css";

// export default function HomePage() {
//   const { userProfileRTFB, setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);
//   const navigate = useNavigate();

//   // Flag to track if the warning message has been shown
//   const warningShownRef = useRef(false);

//   // To track if the user has logged out
//   const [loggedOut, setLoggedOut] = useState(false);

//   useEffect(() => {
//     if (loggedOut) return; // Skip if the user is logged out

//     if (userProfileRTFB) {
//       localStorage.setItem("userProfileRTFB", JSON.stringify(userProfileRTFB));
//     } else {
//       const savedUserProfile = localStorage.getItem("userProfileRTFB");
//       if (savedUserProfile) {
//         setUserProfileRTFB(JSON.parse(savedUserProfile));
//       } else if (!warningShownRef.current) {
//         // Show the warning message only once
//         message.warning("Please login to access this page.");
//         warningShownRef.current = true;
//         navigate("/login");
//       }
//     }
//   }, [userProfileRTFB, navigate, setUserProfileRTFB, loggedOut]);

//   const [formData, setFormData] = useState({
//     FromAddress: "",
//     ToAddress: "",
//     SearchDate: "",
//   });

//   const [fromSuggestions, setFromSuggestions] = useState([]);
//   const [toSuggestions, setToSuggestions] = useState([]);

//   const fromAddressRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Debounced suggestions
//     if (name === "FromAddress") {
//       fetchAddressSuggestions(value, "From");
//     } else if (name === "ToAddress") {
//       fetchAddressSuggestions(value, "To");
//     }
//   };

//   const fetchAddressSuggestions = debounce(async (query, type) => {
//     if (!query) return;
//     try {
//       // Make API call to fetch address suggestions based on query
//       const response = await fetch(`https://fake-1-suof.onrender.com/Routes?q=${query}`);
//       const data = await response.json();

//       const filteredData = type === "From"
//         ? data.filter(route => route.From.toLowerCase().includes(query.toLowerCase()))
//         : data.filter(route => route.destination.toLowerCase().includes(query.toLowerCase()));

//       const uniqueData = Array.from(new Set(filteredData.map(item => item[type === "From" ? "From" : "destination"])))
//         .map(item => filteredData.find(route => route[type === "From" ? "From" : "destination"] === item));

//       if (type === "From") {
//         setFromSuggestions(uniqueData);
//         // Filter ToAddress suggestions based on the selected FromAddress
//         if (formData.FromAddress) {
//           const relatedToSuggestions = data.filter(route => route.From === formData.FromAddress);
//           setToSuggestions(relatedToSuggestions);
//         }
//       } else if (type === "To") {
//         setToSuggestions(uniqueData);
//       }
//     } catch (error) {
//       message.error("Failed to fetch address suggestions.");
//     }
//   }, 500); // 500ms debounce delay

//   const handleSelectSuggestion = (value, type) => {
//     if (type === "From") {
//       setFormData({ ...formData, FromAddress: value });
//       setFromSuggestions([]); // Clear suggestions after selection
//     } else if (type === "To") {
//       setFormData({ ...formData, ToAddress: value });
//       setToSuggestions([]); // Clear suggestions after selection
//     }
//   };

//   const handleFindBuses = () => {
//     if (!formData.FromAddress || !formData.ToAddress || !formData.SearchDate) {
//       message.error("Please fill in all the fields.");
//       return;
//     }

//     const today = new Date();
//     const selectedDate = new Date(formData.SearchDate);

//     if (selectedDate < today.setHours(0, 0, 0, 0)) {
//       message.error("The selected date must be today or a future date.");
//       return;
//     }

//     navigate("/Home/routes", { state: formData });
//   };

//   const handleGetTicketNow = () => {
//     fromAddressRef.current.focus();
//   };

//   const getTodayDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const day = String(today.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   return (
//     <>
//       <div className="HomePageContainer">
//         <div className="LeftSide">
//           <h1 className="TravelCaption">Get Your Ticket Online,</h1>
//           <h1 className="TravelCaption">Easy and Safely</h1>
//           <Button variant="success" onClick={handleGetTicketNow}>
//             Get Ticket Now
//           </Button>
//         </div>
//         <div className="RightSide">
//           <h2 className="TravelTicketCaption">Choose Your Ticket</h2>
//           <p style={{color:'red'}}>From:<b>Hyderabad</b>     && To:<b>Vijayawada</b> </p>
//           <Card className="mb-2 CardBox">
//             <Card.Body>
//               <div className="searchContainer">
//                 <input
//                   type="text"
//                   name="FromAddress"
//                   placeholder="From"
//                   required
//                   value={formData.FromAddress}
//                   onChange={handleInputChange}
//                   ref={fromAddressRef}
//                 />
//                 <div className="suggestionsBox">
//                   {fromSuggestions.length > 0 && (
//                     <div className="suggestionsContainer">
//                       {fromSuggestions.map((suggestion, index) => (
//                         <div
//                           key={index}
//                           className="suggestionItem"
//                           onClick={() => handleSelectSuggestion(suggestion.From, "From")}
//                         >
//                           <span>{suggestion.From}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <input
//                   type="text"
//                   name="ToAddress"
//                   placeholder="To"
//                   required
//                   value={formData.ToAddress}
//                   onChange={handleInputChange}
//                 />
//                 <div className="suggestionsBox">
//                   {toSuggestions.length > 0 && (
//                     <div className="suggestionsContainer">
//                       {toSuggestions.map((suggestion, index) => (
//                         <div
//                           key={index}
//                           className="suggestionItem"
//                           onClick={() => handleSelectSuggestion(suggestion.destination, "To")}
//                         >
//                           <span>{suggestion.destination}</span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <input
//                 id="SearchDate"
//                 type="date"
//                 name="SearchDate"
//                 required
//                 value={formData.SearchDate}
//                 onChange={handleInputChange}
//                 min={getTodayDate()}
//               />
//               <Button variant="success" id="FindBus-btn" onClick={handleFindBuses}>
//                 Find Tickets
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }


 




















import React, { useState, useRef, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { UserProfileInfoRTFBContext } from "../API/ContextApi/RealTimeDataBaseUserProfile";

import "./HomePage.css";

export default function HomePage() {
  const { userProfileRTFB, setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);
  const navigate = useNavigate();

  // Flag to track if the warning message has been shown
  const warningShownRef = useRef(false);

  // To track if the user has logged out
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    if (loggedOut) return; // Skip if the user is logged out

    if (userProfileRTFB) {
      localStorage.setItem("userProfileRTFB", JSON.stringify(userProfileRTFB));
    } else {
      const savedUserProfile = localStorage.getItem("userProfileRTFB");
      if (savedUserProfile) {
        setUserProfileRTFB(JSON.parse(savedUserProfile));
      } else if (!warningShownRef.current) {
        // Show the warning message only once
        message.warning("Please login to access this page.");
        warningShownRef.current = true;
        navigate("/login");
      }
    }
  }, [userProfileRTFB, navigate, setUserProfileRTFB, loggedOut]);

  const [formData, setFormData] = useState({
    FromAddress: "",
    ToAddress: "",
    SearchDate: "",
  });

 
  const fromAddressRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 
  };

 
 

  const handleFindBuses = () => {
    if (!formData.FromAddress || !formData.ToAddress || !formData.SearchDate) {
      message.error("Please fill in all the fields.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(formData.SearchDate);

    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      message.error("The selected date must be today or a future date.");
      return;
    }

    navigate("/Home/routes", { state: formData });
  };

  const handleGetTicketNow = () => {
    fromAddressRef.current.focus();
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className="HomePageContainer">
        <div className="LeftSide">
          <h1 className="TravelCaption">Get Your Ticket Online,</h1>
          <h1 className="TravelCaption">Easy and Safely</h1>
          <Button variant="success" onClick={handleGetTicketNow}>
            Get Ticket Now
          </Button>
        </div>
        <div className="RightSide">
          <h2 className="TravelTicketCaption">Choose Your Ticket</h2>
          <p style={{color:'red'}}>From:<b>Hyderabad</b>     && To:<b>Vijayawada</b> </p>
          <Card className="mb-2 CardBox">
            <Card.Body>
              <div className="searchContainer">
                <input
                  type="text"
                  name="FromAddress"
                  placeholder="From"
                  required
                  value={formData.FromAddress}
                  onChange={handleInputChange}
                  ref={fromAddressRef}
                />
 
                <input
                  type="text"
                  name="ToAddress"
                  placeholder="To"
                  required
                  value={formData.ToAddress}
                  onChange={handleInputChange}
                />
 
              </div>
              <input
                id="SearchDate"
                type="date"
                name="SearchDate"
                required
                value={formData.SearchDate}
                onChange={handleInputChange}
                min={getTodayDate()}
              />
              <Button variant="success" id="FindBus-btn" onClick={handleFindBuses}>
                Find Tickets
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}


 