import React from 'react';

import { IlocalLayout, Iperson } from 'types';
import { PersonCard } from 'components/people';

import Stack from '@mui/material/Stack';

interface IrowColLayout {
  layout: IlocalLayout | null;
  data: Iperson[];
}

export const PeopleRowColLayout: React.FunctionComponent<IrowColLayout> = ({
  layout,
  data,
}) => (
  <Stack
    direction="row"
    flexWrap="wrap"
    gap={8}
    mt={8}
    sx={{
      ...(layout === 'row' && {
        flexDirection: 'row',
      }),
      ...(layout === 'column' && {
        flexDirection: 'column',
      }),
    }}
  >
    {data.map((person) => (
      <PersonCard key={person.name} person={person} layout={layout} />
    ))}
  </Stack>
);
