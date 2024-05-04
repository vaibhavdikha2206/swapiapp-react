import React from "react";
import { Card, Grid } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Menu, Container, Dimmer, Loader } from "semantic-ui-react";
import { fetchDataFromAPI } from "../../service/apiservice";
import PeopleCard from "../CardComponents/PeopleCard";

export default function People() {
  const [peopleFetched, setPeopleFetched] = useState([]);
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

    async function fetchPeople() {
      setLoading(true);
      const data = await fetchDataFromAPI("value");
      setPeopleFetched(data.results);
      setLoading(false);
    }

    fetchPeople();
  }, []);

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>
      ) : (
        <>
          <h1>People</h1>
          <Grid columns={3}>
            {peopleFetched.map((people, i) => {
              return (
                <Grid.Column key={i}>
                  <PeopleCard data={people}></PeopleCard>
                </Grid.Column>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
}
