import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function VehiclesCard({ vehicle }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{vehicle.name}</Card.Header>
          <Card.Description>
            <div style={{ paddingTop: '20px' }}>
            <strong>Model</strong>
            <p>{vehicle.model}</p>
            </div>

            <div style={{ paddingTop: '20px' }}>
            <strong>manufacturer</strong>
            <p>{vehicle.manufacturer}</p>
            </div>

            <div style={{ paddingTop: '20px' }}>
            <strong>Cost</strong>
            <p>{vehicle.cost_in_credits}</p>
            </div>

          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
