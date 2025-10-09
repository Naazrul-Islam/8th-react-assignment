import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppReviewChart = ({ app }) => {
  if (!app) return null;

  const chartData = [...app.ratings].reverse().map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className="w-full px-2 sm:px-6 lg:px-8 py-4 lg:max-w-[1440px] mx-auto border-y-2">
        <h1 className="text-2xl font-bold mb-4">Ratings</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 20, right: 30, bottom: 5 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#FFA500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppReviewChart;

