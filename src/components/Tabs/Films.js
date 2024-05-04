import React from "react";
import { Card, Grid } from "semantic-ui-react";
import PlanetsCard from "../CardComponents/PlanetsCard";
import { fetchDataFromAPIFromText } from "../../service/apiservice";
import { useState, useEffect } from "react";
import { Menu, Container, Dimmer, Loader } from "semantic-ui-react";
import FilmsCard from "../CardComponents/FilmsCard";

export default function Films() {
  const [filmsFetched, setFilmsFetched] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchFilms(){
      setLoading(true);
      console.log("fetch people called");
      let res = await fetch('https://swapi.dev/api/films/?format=json')
      let data = await res.json();
      setFilmsFetched(data.results);
      setLoading(false);
    }

    /*async function fetchPeople() {
      setLoading(true);
      const data = await fetchDataFromAPIFromText("planets");
      setPlanetsFetched(data.results);
      setLoading(false);
    }*/

    fetchFilms();
  }, []);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      ) : (
        <>
          <h1>Films</h1>
          <Grid columns={3}>
            {filmsFetched.map((films, i) => {
              return (
                <Grid.Column key={i}>
                  <FilmsCard films={films} />
                </Grid.Column>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}
