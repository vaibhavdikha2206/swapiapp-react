import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function FilmsCard({ films }) {
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{films.title}</Card.Header>
          <Card.Description>
            <div style={{ paddingTop: '20px' }}>
            <strong>Opening Crawl</strong>
            <p>{films.openingCrawl}</p>
            </div>

          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
