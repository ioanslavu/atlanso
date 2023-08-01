import type { FC } from 'react';
import PropTypes from 'prop-types';
import AlertCircleIcon from '@untitled-ui/icons-react/build/esm/AlertCircle';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

interface LogisticsDeviatedVehiclesProps {
  amount: number;
}

export const LogisticsDeviatedVehicles: FC<LogisticsDeviatedVehiclesProps> = (props) => {
  const { amount } = props;

  return (
    <Card>
      <Stack
        spacing={1}
        sx={{ p: 3 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: 'warning.alpha12',
              color: 'warning.main'
            }}
          >
            <SvgIcon>
              <AlertCircleIcon />
            </SvgIcon>
          </Avatar>
          <Typography variant="h5">
            {amount}
          </Typography>
        </Stack>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          Vehicles with warnings and errors
        </Typography>
      </Stack>
    </Card>
  );
};

LogisticsDeviatedVehicles.propTypes = {
  amount: PropTypes.number.isRequired
};
