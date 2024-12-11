import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './dataset';

const chartSetting = {
  yAxis: [
    {
      label: 'No. Of Entries',
    },
  ],
  width: 1500,
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
  { "dataKey": "Grateful", "label": "Grateful", valueFormatter},
  { "dataKey": "Stressful", "label": "Stressful", valueFormatter},
  { "dataKey": "Happy", "label": "Happy", valueFormatter},
  { "dataKey": "Sad", "label": "Sad", valueFormatter},
  { "dataKey": "Anxious", "label": "Anxious", valueFormatter},
  { "dataKey": "Excited", "label": "Excited", valueFormatter},
  { "dataKey": "Motivated", "label": "Motivated", valueFormatter},
  { "dataKey": "Lonely", "label": "Lonely", valueFormatter},
  { "dataKey": "Empowered", "label": "Empowered", valueFormatter},
  { "dataKey": "Overwhelmed", "label": "Overwhelmed", valueFormatter},
  { "dataKey": "Tired", "label": "Tired", valueFormatter},
  { "dataKey": "Confused", "label": "Confused", valueFormatter}
]
}
      {...chartSetting}
      className='ml-2 pl-2 border-none w-1/2'
    />
  );
}
