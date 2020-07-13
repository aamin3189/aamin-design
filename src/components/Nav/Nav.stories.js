import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from './Nav';
const style = { padding: 10}


storiesOf('Nav', module)
  .add(
    'Primary',
    () => (
      <div style={style}>
           <Nav logo="(b) design Studio" type="primary" links={["Home","Features","Pricing"]} />
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c3806d9f9f1dd2089b19e' 
      } 
    }
  )
  .add(
    'Dark',
    () => (
      <div style={style}>
         <Nav logo="(b) design Studio" type="dark" links={["Home","Features","Pricing", "About Us"]} />
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c3806d9f9f1dd2089b19e' 
      } 
    }
  )