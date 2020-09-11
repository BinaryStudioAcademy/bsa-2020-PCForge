import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const IHardwareUsingData: IHardwareData[] = [
  { name: 'Asus ROG GAMING', value: 10 },
  { name: 'ASRock B365M Pro4', value: 5 },
  { name: 'Intel Core i7', value: 4 },
  { name: 'GeForce GTX 1080', value: 3 },
  { name: 'GeForce GTX 2080', value: 6 },
];

interface IHardwareData {
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
  payload: IHardwareData;
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
      <text x={cx} y={cy} dy={4} textAnchor="middle" fill={fill} width="50px">
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">{`Used ${value} times`}</text>
    </g>
  );
};

export default class UsingHardwareChart extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (IHardwareUsingData: IHardwareData[], index: number) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <PieChart width={600} height={300}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={IHardwareUsingData}
          cx={250}
          cy={130}
          innerRadius={80}
          outerRadius={100}
          fill="#f27a54"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
    );
  }
}
