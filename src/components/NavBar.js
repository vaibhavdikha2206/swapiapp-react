import React from "react";
import { Menu,Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
    <Menu inverted>
        <Container>
            <Link to='/'>
                <Menu.Item name = "Star wars API"/>
            </Link>
            <Link to='/people'>
                <Menu.Item name = "people"/>
            </Link>
            <Link to='/planets'>
                <Menu.Item name = "planets"/>
            </Link>
            <Link to='/films'>
                <Menu.Item name = "films"/>
            </Link>
            <Link to='/vehicles'>
                <Menu.Item name = "vehicles"/>
            </Link>
        </Container>
    </Menu>
    )
}