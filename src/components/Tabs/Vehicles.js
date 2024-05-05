import React from "react";
import { Card, Grid } from "semantic-ui-react";
import PlanetsCard from "../CardComponents/PlanetsCard";
import { fetchDataFromAPIFromText } from "../../service/apiservice";
import { useState, useEffect } from "react";
import { Menu, Container, Dimmer, Loader } from "semantic-ui-react";
import VehiclesCard from "../CardComponents/VehiclesCard";

export default function Vehicles() {
  const [vehiclesFetched, setVehiclesFetched] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    
    async function fetchVehicles() {
      setLoading(true);
      const data = await fetchDataFromAPIFromText("vehicles");
      setVehiclesFetched(data.results);
      setLoading(false);
    }

    fetchVehicles();
  }, []);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Vehicles</h1>
          <Grid columns={3}>
            {vehiclesFetched.map((vehicle, i) => {
              return (
                <Grid.Column key={i}>
                  <VehiclesCard vehicle={vehicle} />
                </Grid.Column>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}
