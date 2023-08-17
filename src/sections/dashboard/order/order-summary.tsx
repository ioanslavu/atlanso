import type { ChangeEvent, FC } from 'react';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import type { Order } from 'src/types/order';
import { PropertyList } from 'src/components/property-list';
import { PropertyListItem } from 'src/components/property-list-item';

const statusOptions: string[] = ['Canceled', 'Complete', 'Rejected'];

interface OrderSummaryProps {
  order: Order;
}

export const OrderSummary: FC<OrderSummaryProps> = (props) => {
  const { order, ...other } = props;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [status, setStatus] = useState<string>(statusOptions[0]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setStatus(event.target.value);
    },
    []
  );

  const align = mdUp ? 'horizontal' : 'vertical';
  const createdAt = format(order.createdAt, 'dd/MM/yyyy HH:mm');

  return (
    <Card {...other}>
      <CardHeader title="Basic info" />
      <Divider />
      <PropertyList>
        <PropertyListItem
          align={align}
          label="Model"
        >
          <Typography variant="subtitle2">
          Logan EXPRESSION 
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
           TCe 
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            90 CVT
          </Typography>
        </PropertyListItem>
        <Divider />
        <PropertyListItem
          align={align}
          label="VIN"
          value={order.id}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Engine"
          value={"TCe 90"}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Date"
          value={createdAt}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Transmission"
          value={"Automatic CVT"}
        />
        <Divider />
        <PropertyListItem
          align={align}
          label="Horse Power"
          value={`90`}
        />
        <Divider />
      </PropertyList>
    </Card>
  );
};

OrderSummary.propTypes = {
  // @ts-ignore
  order: PropTypes.object.isRequired
};
