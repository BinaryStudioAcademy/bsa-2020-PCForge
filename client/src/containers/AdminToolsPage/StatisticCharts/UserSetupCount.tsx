import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const UserSetupData: IUserData[] = [
  { name: 'AdminCool', value: 10 },
  { name: 'Bill', value: 5 },
  { name: 'User100500', value: 4 },
  { name: 'User4', value: 3 },
  { name: 'Yuliia', value: 3 },
  { name: 'others', value: 9 },
];

interface IUserData {
  name: string;
  value: number;
}

interface IPropsChart {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: IUserData;
  percent: number;
  value: number;
}

const renderActiveShape = (props: IPropsChart) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#999"
      >{`Created setups: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class UserSetupCount extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (UserSetupData: IUserData[], index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={500} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={UserSetupData}
          cx={250}
          cy={130}
          innerRadius={60}
          outerRadius={80}
          fill="#eb3d55"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
