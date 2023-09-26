import { Slider as MaterialSlider, Typography } from '@mui/material';

import { SliderProps } from './types';

function Slider({ value, setValue, title, max = 20 }: SliderProps) {
  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <MaterialSlider
        aria-labelledby="input-slider"
        name="limit"
        marks={[
          { value: 1, label: '1' },
          { value: max, label: `${max}` },
        ]}
        value={value}
        min={1}
        max={max}
        aria-label="Slider"
        valueLabelDisplay="on"
        onChange={handleChange}
      />
    </>
  );
}

export default Slider;
