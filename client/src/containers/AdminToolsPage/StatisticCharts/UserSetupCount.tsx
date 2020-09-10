import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const UserSetupData = [
  { name: 'User 1', value: 4 },
  { name: 'User 2', value: 10 },
  { name: 'User 3', value: 5 },
  { name: 'others', value: 9 },
];

export default class UserSetupCount extends PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={UserSetupData} fill="#eb3d55" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
