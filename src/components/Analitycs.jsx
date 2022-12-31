import "./Analitycs.css";

import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

import { PieChart, Pie,} from 'recharts';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const Analitycs = ({ chart_i, chart_ii, chart_iii, chart_iv }) => {
  const data = [
    {
      name: "Page A",
      Followers: 4000,
      Earnings: 2400,
    },
    {
      name: "Page B",
      Followers: 3000,
      Earnings: 1398,
    },
    {
      name: "Page C",
      Followers: 2000,
      Earnings: 9800,
    },
    {
      name: "Page D",
      Followers: 2780,
      Earnings: 3908,
    },
  ];

  const data2 = [
    {
      name: 'Page A',
     Subscribers: 4000,
      Followers: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
     Subscribers: 3000,
      Followers: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
     Subscribers: 2000,
      Followers: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
     Subscribers: 2780,
      Followers: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
     Subscribers: 1890,
      Followers: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
     Subscribers: 2390,
      Followers: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
     Subscribers: 3490,
      Followers: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
  
  ];

  const data3 = [
    {
      subject: 'Earnings',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Followers',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Likes',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Comments',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Meetings',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];



  return (
    <div className="analitycs">
      {chart_i && (
        <>
          {" "}
          <div className="aHeader">
            <span>Subscribers</span>
            <span>Earnings</span>
          </div>
          <BarChart width={  250} height={210} data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />
            <Legend />
            <Bar dataKey="Followers" fill="#810551" />
            <Bar dataKey="Earnings" fill="#05454d" />
          </BarChart>
        </>
      )}

      {chart_ii &&(<>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data2}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
         
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Subscribers" stroke="#810551"/>
          <Line type="monotone" dataKey="Followers" stroke="#05454d"  />
        </LineChart>
      </ResponsiveContainer>
      
      </>)}


      {chart_iii && (<>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={ 400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#05454d" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={60} fill="#810551" label />
        </PieChart>
      </ResponsiveContainer>
      </>)}



      {chart_iv && (<>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="45%" data={data3}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#05454d" fill="#810551" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
      
      
      </>)}
    </div>
  );
};

export default Analitycs;
