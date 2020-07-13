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
        id: '5f0c36249ac2df140c386e17' 
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
        id: '5f0c36249ac2df140c386e17' 
      } 
    }
  )
  .add(
    'Dark',
    () => (
      <div style={style}>
        <Button type="dark" title="Dark Button"></Button>
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c36249ac2df140c386e17' 
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
        id: '5f0c36249ac2df140c386e17' 
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
        id: '5f0c36249ac2df140c386e17' 
      } 
    }
  )


  