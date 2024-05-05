import React from "react";
import { Card, Grid } from "semantic-ui-react";
import PlanetsCard from "../CardComponents/PlanetsCard";
import { fetchDataFromAPIFromText } from "../../service/apiservice";
import { useState, useEffect } from "react";
import { Menu, Container, Dimmer, Loader } from "semantic-ui-react";

export default function Planets() {
  const [planetsFetched, setPlanetsFetched] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    /*async function fetchPeople(){
      setLoading(true);
      console.log("fetch people called");
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json();
      setPeopleFetched(data.results);
      setLoading(false);
    }*/

    async function fetchPlanets() {
      setLoading(true);
      const data = await fetchDataFromAPIFromText("planets");
      setPlanetsFetched(data.results);
      setLoading(false);
    }

    fetchPlanets();
  }, []);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Planets</h1>
          <Grid columns={3}>
            {planetsFetched.map((planets, i) => {
              return (
                <Grid.Column key={i}>
                  <PlanetsCard planets={planets} />
                </Grid.Column>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}
