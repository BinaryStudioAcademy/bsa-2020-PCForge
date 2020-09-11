/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface IUserActivity {
  date: string;
  'New Users': number;
  Comments: number;
  'Created Requests': number;
  'Created Setups': number;
}

/* For getting dates for array for visualize data:
const daysOfWatching = 7; // Days you want to subtract
const today = new Date();
const last = new Date(today.getTime() - (daysOfWatching * 24 * 60 * 60 * 1000));
const startDate = new Date(last.getFullYear(), last.getMonth(), last.getDate(), );

//const startDate = new Date('2020-08-31 14:25:00.563+03');
//startDate.toLocaleDateString();
const tomorrow = new Date(startDate);
tomorrow.setDate(tomorrow.getDate() + 1);
const tommorowString = tomorrow.toLocaleDateString();*/

const UserActivityData: IUserActivity[] = [
  {
    date: '06.09.2020',
    'New Users': 10,
    Comments: 20,
    'Created Requests': 5,
    'Created Setups': 3,
  },
  {
    date: '07.09.2020',
    'New Users': 4,
    Comments: 18,
    'Created Requests': 2,
    'Created Setups': 4,
  },
  {
    date: '08.09.2020',
    'New Users': 21,
    Comments: 100,
    'Created Requests': 3,
    'Created Setups': 3,
  },
  {
    date: '09.09.2020',
    'New Users': 15,
    Comments: 90,
    'Created Requests': 4,
    'Created Setups': 10,
  },
  {
    date: '10.09.2020',
    'New Users': 18,
    Comments: 80,
    'Created Requests': 5,
    'Created Setups': 2,
  },
  {
    date: '11.09.2020',
    'New Users': 9,
    Comments: 38,
    'Created Requests': 3,
    'Created Setups': 30,
  },
  {
    date: '12.09.2020',
    'New Users': 34,
    Comments: 43,
    'Created Requests': 2,
    'Created Setups': 13,
  },
];

export default class UserActivity extends PureComponent {
  render() {
    return (
      <LineChart
        width={800}
        height={400}
        data={UserActivityData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" height={70} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="New Users" stroke="#3257d1" />
        <Line type="monotone" dataKey="Comments" stroke="#f27a54" />
        <Line type="monotone" dataKey="Created Requests" stroke="#eb3d55" />
        <Line type="monotone" dataKey="Created Setups" stroke="#61ff00" />
      </LineChart>
    );
  }
}
