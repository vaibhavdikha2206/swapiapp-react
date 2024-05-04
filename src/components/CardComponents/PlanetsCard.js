import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function PlanetsCard({ planets }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{planets.name}</Card.Header>
          <Card.Description>
            <strong>Climate</strong>
            <p>{planets.climate}</p>
            <strong>Diameter</strong>
            <p>{planets.diameter}</p>
            <strong>Population</strong>
            <p>{planets.population}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
