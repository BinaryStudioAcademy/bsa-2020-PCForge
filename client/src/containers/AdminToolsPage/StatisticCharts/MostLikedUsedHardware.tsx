import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MotherBoardsData = [
  { x: 5, y: 4.55 },
  { x: 4, y: 4.7 },
  { x: 10, y: 4.5 },
  { x: 4, y: 5 },
  { x: 15, y: 4.9 },
  { x: 15, y: 3.7 },
];
const PowerSupliesData = [
  { x: 20, y: 3 },
  { x: 23, y: 3.4 },
  { x: 14, y: 4.4 },
  { x: 5, y: 5 },
  { x: 10, y: 4.6 },
];

export default class MostLikedUsedHardware extends PureComponent {
  render() {
    return (
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="using in setups" unit="" />
        <YAxis type="number" dataKey="y" name="average rating" unit="" />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Motherboards" data={MotherBoardsData} fill="#eb3d55" line shape="cross" />
        <Scatter name="Power Suplies" data={PowerSupliesData} fill="#f27a54" line shape="diamond" />
      </ScatterChart>
    );
  }
}
