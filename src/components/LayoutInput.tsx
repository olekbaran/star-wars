import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface LayoutInputProps {
  value: string;
  onChangeFunc: (arg: string) => void;
}

export const LayoutInput: React.FunctionComponent<LayoutInputProps> = ({
  value,
  onChangeFunc,
}) => (
  <FormControl
    sx={{
      marginTop: '4rem',
      width: '8rem',
      display: { xs: 'none', md: 'flex' },
    }}
  >
    <InputLabel id="layout-input-label">Layout</InputLabel>
    <Select
      labelId="layout-input-label"
      id="layout-input"
      label="Layout"
      sx={{
        color: 'primary.main',
        textAlign: 'left',
      }}
      value={value}
      onChange={(e) => onChangeFunc(e.target.value)}
    >
      <MenuItem
        value="row"
        sx={{
          color: 'secondary.main',
        }}
      >
        Row
      </MenuItem>
      <MenuItem
        value="column"
        sx={{
          color: 'secondary.main',
        }}
      >
        Column
      </MenuItem>
      <MenuItem
        value="table"
        sx={{
          color: 'secondary.main',
        }}
      >
        Table
      </MenuItem>
    </Select>
  </FormControl>
);
