import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
const style = { padding: 10}


storiesOf('Card', module)
  .add(
    'Free',
    () => (
      <div style={style}>
          <Card 
            headings="Free"
            cost="$0"
            costFor="/mo"
            features={
                [
                "10 users included",
                "2 GB of storage",
                "Email support",
                "Help center access"
                ]
            }
            buttonText="Sign up for free"
            buttonType="outline"
            />
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c3742d51e491a2ed469d5' 
      } 
    }
  )
  


  .add(
    'Profession',
    () => (
      <div style={style}>
          <Card 
          headings="Pro"
          cost="$15"
          costFor="/mo"
          features={
            [
                "20 users included",
                "10 GB of storage",
                "Priority email support",
                "Help center access"
            ]
          }
          buttonText="Get Started"
          buttonType="primary"
        />
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c3742d51e491a2ed469d5' 
      } 
    }
  )


  .add(
    'Enterprise',
    () => (
      <div style={style}>
          <Card 
          headings="Enterprise"
          cost="$29"
          costFor="/mo"
          features={
            [
              "30 users included",
              "15 GB of storage",
              "Phone and email support",
              "Help center access"
            ]
          }
          buttonText="Contact Sales"
          buttonType="primary"
        />
      </div>
    ),
    {
      'in-dsm': {
        id: '5f0c3742d51e491a2ed469d5' 
      } 
    }
  )
