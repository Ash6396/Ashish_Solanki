import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const skills = [
  { name: 'React', value: 90 },
  { name: 'Node.js', value: 85 },
  { name: 'TypeScript', value: 80 },
  { name: 'MongoDB', value: 85 },
  { name: 'Express', value: 85 },
  { name: 'Next.js', value: 80 },
  { name: 'C++', value: 85 },
  { name: 'DSA', value: 80 },
  { name: 'SQL', value: 75 },
  { name: 'AWS', value: 70 },
];

export default function SkillsGraph() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skills} layout="vertical">
          <XAxis type="number" domain={[0, 100]} stroke="#ffffff" />
          <YAxis dataKey="name" type="category" stroke="#ffffff" />
          <Tooltip 
            contentStyle={{ 
              background: '#18181b',
              border: '1px solid #10b981',
              borderRadius: '0.5rem',
              color: '#ffffff'
            }}
          />
          <Bar 
            dataKey="value" 
            fill="#10b981"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}