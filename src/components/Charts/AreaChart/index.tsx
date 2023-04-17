import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AreaChart() {
  const options = {
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  };
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];
  return <Chart series={series} options={options} type="area" />;
}
