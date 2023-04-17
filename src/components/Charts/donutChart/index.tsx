import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DonutChart() {
  const options = {
    labels: ['Recebido', 'Previsto', 'Em aberto'],
  };
  const series = [44, 55, 13];
  return <Chart series={series} options={options} type="donut" />;
}
