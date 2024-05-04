import React from 'react';
import PeopleCard from './CardComponents/PeopleCard';
import PlanetsCard from './CardComponents/PlanetsCard';
import FilmsCard from './CardComponents/FilmsCard';
import VehiclesCard from './CardComponents/VehiclesCard';

export function RenderTypedComponent({ type,data }) {
  // Function to render different components based on the type
  const renderComponent = () => {
    switch (type) {
      case 'planets':
        return <PlanetsCard planets={data}/>;
      case 'people':
        return <PeopleCard data={data}/>;
      case 'films':
        return <FilmsCard films={data}/>;
      case 'vehicles':
        return <VehiclesCard vehicle={data}/>;

      default:
        return <div>No component found for this type</div>;
    }
  };

  return (
    <div>
      {/* Render different components based on the type */}
      {renderComponent()}
    </div>
  );
}


export function RenderTypedComponentTitle({ type }) {
    // Function to render different components based on the type
    const renderComponent = () => {
      switch (type) {
        case 'planets':
          return <h1 style={{ marginBottom: "20px" }}>Planets</h1>;
        case 'people':
          return <h1 style={{ marginBottom: "20px" }}>People</h1>;
        case 'films':
          return <h1 style={{ marginBottom: "20px" }}>Films</h1>;
        case 'vehicles':
          return <h1 style={{ marginBottom: "20px" }}>Vehicles</h1>;
        default:
          return <div>No component found for this type</div>;
      }
    };
  
    return (
      <div>
        {/* Render different components based on the type */}
        {renderComponent()}
      </div>
    );
  }

  export default RenderTypedComponent;