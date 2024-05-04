import React,{ useState,useEffect} from 'react'
import NavBar from "./components/NavBar";
import './App.css';
import {  BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { Menu,Container,Dimmer,Loader } from 'semantic-ui-react';
import People from './components/Tabs/People';
import Planets from './components/Tabs/Planets';
import Home from "./components/Home";
import { fetchDataFromAPI } from './service/apiservice';
import Films from './components/Tabs/Films';
import Vehicles from './components/Tabs/Vehicles';

function App() {
  /*const[people,setPeople] = useState([]);
  const[planets,setPlanets] = useState([]);
  const[loading,setLoading] = useState([]);
  
  const updateLoadingState = (newValue) => {
    setLoading(newValue);
  };

  useEffect(()=>{
    async function fetchPeople(){
      setLoading(true);
      const data = await fetchDataFromAPI("value");
      console.log('API response:', data);
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets(){
      setLoading(true);
      let res = await fetch('https://swapi.dev/api/planets/?format=json')
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    //setLoading(false);

  },[]);

  console.log("datawa ",people);*/
  
  return (
    <>
      <Router>
        <NavBar/>
          <Container> 
              <Routes  >
      
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="people" element={<People />} />
                  <Route path="planets" element={<Planets />} />
                  <Route path="films" element={<Films />} />
                  <Route path="vehicles" element={<Vehicles />} />
                </Route>

              </Routes >
          </Container>
      </Router>
    </>
  );
}

export default App;
