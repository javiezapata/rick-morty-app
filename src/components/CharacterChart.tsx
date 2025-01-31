import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function CharacterChart({ data }: { data: any[] }) {
  const speciesCount = data.reduce((acc: any, char: any) => {
    acc[char.species] = (acc[char.species] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(speciesCount).map((key) => ({
    name: key,
    value: speciesCount[key],
  }));

  const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#F44336"];

  return (
    <div className="flex justify-center mt-10">
      <PieChart width={400} height={300}>
        <Pie data={chartData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
