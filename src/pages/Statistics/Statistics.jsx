// import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Statistics = () => {
  const totalDonation = useLoaderData().length;
  console.log(totalDonation);
  const donatedItems =
    JSON.parse(localStorage.getItem("donateItems"))?.length || 0;
  //   console.log(donatedItems);
  const data = [
    { name: "Your Donation", value: donatedItems },
    { name: "Total Donation", value: totalDonation },
  ];
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>{" "}
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
