import React from 'react';
import { storiesOf } from '@storybook/react';
import Button  from './Button.js';

const style = { padding: 10}

storiesOf('Button', module)
  .add(
    'Primary',
    () => (
      <div style={style}>
        <Button type="primary" title="Primary Button"></Button>
      </div>
    ),
    {
      'in-dsm': {
        id: '5ee900e20a72860a8a7b9cf2' 
      } 
    }
  )
  .add(
    'Secondary',
    () => (
      <div style={style}>
        <Button type="secondary" title="Secondary Button"></Button>
      </div>
    ),
    {
      'in-dsm': {
        id: '5ee900e20a72860a8a7b9cf2' 
      } 
    }
  )

  .add(
    'Outline',
    () => (
      <div style={style}>
        <Button type="outline" title="Outline Button"></Button>
      </div>
    ),
    {
      'in-dsm': {
        id: '5ee900e20a72860a8a7b9cf2' 
      } 
    }
  )
  .add(
    'Disabled',
    () => (
      <div style={style}>
        <Button type="disabled" title="Disabled Button"></Button>
      </div>
    ),
    {
      'in-dsm': {
        id: '5ee900e20a72860a8a7b9cf2' 
      } 
    }
  )


  