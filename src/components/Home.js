import React from "react";
import MyTextField from "./MyTextField";
import { useState } from "react";
import { fetchDataFromAPIFromText } from "../service/apiservice";
import { Grid } from "semantic-ui-react";
import { Dimmer, Loader } from "semantic-ui-react";
import RenderTypedComponent from "./RenderComponent";
import { RenderTypedComponentTitle } from "./RenderComponent";
import './styles.css'; // Import your CSS file

export default function Home() {
  // State to hold the value of the text field
  const [typeFieldValue, setTypeFieldValue] = useState("");
  const [nameFieldValue, setNameFieldValue] = useState("");
  const [fetchedType, setFetchedTypeValue] = useState("");
  const [dataFetchedForType, setDataFetchedForTypeValue] = useState({});
  const [loading, setLoading] = useState(false);
  const [nameDisabled, setNameDisabled] = useState(true);
  const [nameButtonDisabled, setNameButtonDisabled] = useState(true);

  // Function to clear the text field
  const clearTypeTextField = () => {
    handleTypeFieldChange("");
    setTypeFieldValue("");
  };

  // Function to clear the text field
  const clearNameTextField = () => {
    handleNameFieldChange("");
    setNameFieldValue("");
  };

  // Function to update data recieved so list can be populated
  const handleDataChange = (value) => {
    setDataFetchedForTypeValue(value);
  };

  // Function to update the text field value
  const handleTypeFieldChange = (value) => {
    setTypeFieldValue(value);
    if (value === "") setNameDisabled(true);
    else setNameDisabled(false);
  };

  const handleNameFieldChange = (value) => {
    setNameFieldValue(value);
    if (value === "") setNameButtonDisabled(true);
    else setNameButtonDisabled(false);
  };

  const handleButtonClickForType = async () => {
    setLoading(true);
    try {
      const res = await fetchDataFromAPIFromText(typeFieldValue);
      handleDataChange(res);
      setFetchedTypeValue(typeFieldValue);
    } catch (error) {
      alert("Invalid Entry " + typeFieldValue);
      handleDataChange({});
      //throw error;
    }
    setLoading(false);
    clearTypeTextField();
    // You can perform any other action here as needed
  };

  const handleButtonClickForName = async () => {
    setLoading(true);
    try {
      const endPoint =  `${typeFieldValue}/search?name=${nameFieldValue}`
      const res = await fetchDataFromAPIFromText(endPoint);
      handleDataChange(res);
      setFetchedTypeValue(typeFieldValue);
    } catch (error) {
      alert("Name Button clicked " + nameFieldValue);
      handleDataChange({});
      //throw error;
    }
    setLoading(false);
    clearNameTextField();
    // You can perform any other action here as needed
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      ) : 
        <div>
          <div className="container" style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: "20px" }}>Hey Swapi ! . This Website uses the SWAPI service . We can search using the buttons given below .
          Based on Type you can get the type of items , for example : "people" or "planets"
          </h1>
          </div>
          <div className="container" style={{marginTop:"20px", display: "flex", alignItems: "center" }}>
            
            <h1 style={{ marginTop:"20px" ,marginRight: "20px" }}>Enter Type </h1>

            {/* MyTextField component */}
            {/* Render MyTextField component and pass the function to update the value */}
            <MyTextField
              value={typeFieldValue}
              onTextChange={handleTypeFieldChange}
            />

            <button
              style={{ marginLeft: "40px" }}
              onClick={handleButtonClickForType}
            >
              Search Type
            </button>
          </div>

          <div className="container" style={{ display: "flex", alignItems: "center" }}>
            {/* My App Header */}
            <h1 style={{ marginRight: "20px" }}>Enter Name </h1>

            {/* MyTextField component */}
            {/* Render MyTextField component and pass the function to update the value */}
            <MyTextField
              value={nameFieldValue}
              onTextChange={handleNameFieldChange}
              disabled={nameDisabled}
            />

            <button
              style={{ marginLeft: "40px" }}
              onClick={handleButtonClickForName}
              disabled={nameButtonDisabled}
            >
              Search Name
            </button>
          </div>

          
          {!isEmpty(dataFetchedForType) && (
            <>
              <RenderTypedComponentTitle type={fetchedType} />
              <Grid columns={3}>
                {dataFetchedForType.results.map((data, i) => {
                  return (
                    <Grid.Column key={i}>
                      {
                        <RenderTypedComponent type={fetchedType} data={data} />
                        //<PeopleCard data={people}></PeopleCard>
                      }
                    </Grid.Column>
                  );
                })}
              </Grid>
            </>
          )}
        </div>
      }
    </>
  );
}
