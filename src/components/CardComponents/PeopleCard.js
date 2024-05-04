import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function PeopleCard({ data }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Description>
            <div style={{ paddingTop: "20px" }}>
              <strong>Gender</strong>
              <p>{data.gender}</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <strong>Height</strong>
              <p>{data.height}</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <strong>Mass</strong>
              <p>{data.mass}</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <strong>Hair Colour</strong>
              <p>{data.hairColor}</p>
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
