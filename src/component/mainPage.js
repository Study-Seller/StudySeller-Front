
import { Image, Menu, Input, Segment,
                         Grid,
                         Header,
                         Icon,
                         List, Button, Dropdown
                        } from 'semantic-ui-react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './my_design.css';



const App = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment style={{padding: 0}}>
      <Menu style={{ backgroundColor: 'transparent' ,paddingTop : '3px'}} stackable inverted size='massive' fixed='top'  >
        <Menu.Item as={Link} to='/' style={{fontSize: '20px', color: 'grey'}}
 >
         StudySeller
        </Menu.Item>
        <Dropdown item text='Cateories'  
        style={{  fontSize: '20px', color: 'grey'}}
       
        active={activeItem === 'mostComments'}
          onClick={handleItemClick}>
          <Dropdown.Menu>
            <Dropdown.Header>Elementary School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
            <Dropdown.Header>Middle School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
            <Dropdown.Header>High School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
        style={{  fontSize: '20px', color: 'grey'}}
          as={Link}
          to='/'
          name='mostComments'
          active={activeItem === 'mostComments'}
          onClick={handleItemClick}
        />
        <Menu.Item
        style={{  fontSize: '20px', color: 'grey'}}
          as={Link}
          to='/'
          name='mostPopular'
          active={activeItem === 'mostPopular'}
          onClick={handleItemClick}
        />
         <Menu.Menu position='right'>
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' size ='large' className='my-input' transparent/>
            </Menu.Item>
            <Menu.Item
            style={{fontSize: '20px', color: 'grey'}}
            name='signup'
            active={activeItem === 'signip'}
            onClick={handleItemClick}
            href='/login'>
            Sign In
          </Menu.Item>
          <Menu.Item href='/signup'>
            <Button className="my-button">Sign Up!</Button>
          </Menu.Item>
         </Menu.Menu>
      </Menu>
      <Image src='./mainPage.jpg' fluid href='/' style={{paddingRight: -10}}/>
    </Segment>
  );
};

export default App;
