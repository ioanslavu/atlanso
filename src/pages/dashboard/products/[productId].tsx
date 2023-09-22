import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { format } from 'date-fns';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import CalendarIcon from '@untitled-ui/icons-react/build/esm/Calendar';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import Edit02Icon from '@untitled-ui/icons-react/build/esm/Edit02';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

import { ordersApi } from 'src/api/orders';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { useMounted } from 'src/hooks/use-mounted';
import { usePageView } from 'src/hooks/use-page-view';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { paths } from 'src/paths';
import { OrderItems } from 'src/sections/dashboard/order/order-items';
import { OrderLogs } from 'src/sections/dashboard/order/order-logs';
import { OrderSummary } from 'src/sections/dashboard/order/order-summary';
import type { Order } from 'src/types/order';
import { EcommerceSalesRevenue } from 'src/sections/dashboard/ecommerce/ecommerce-sales-revenue';
import { useRouter } from 'next/router';
import { carData } from 'src/api/orders/dataCar';

const useOrder = (): Order | null => {
  const isMounted = useMounted();
  const [order, setOrder] = useState<Order | null>(null);

  const handleOrderGet = useCallback(async () => {
    try {
      const response = await ordersApi.getOrder();

      if (isMounted()) {
        setOrder(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(
    () => {
      handleOrderGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return order;
};

const Page: NextPage = () => {
  const order = useOrder();

  usePageView();

  if (!order) {
    return null;
  }

  const createdAt = format(order.createdAt, 'dd/MM/yyyy HH:mm');
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId)
  if (!productId) {
    return null;
  }
  else {
    order.id = productId.toString();
  }
 
   const car = carData.find((car) => car.id === productId);

  return (
    <>
      <Seo title="Dashboard: Order Details" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <div>
              <Link
                color="text.primary"
                component={RouterLink}
                href={paths.dashboard.products.index}
                sx={{
                  alignItems: 'center',
                  display: 'inline-flex'
                }}
                underline="hover"
              >
                <SvgIcon sx={{ mr: 1 }}>
                  <ArrowLeftIcon />
                </SvgIcon>
                <Typography variant="subtitle2">
                  Cars
                </Typography>
              </Link>
            </div>
            <div>
              <Stack
                alignItems="flex-start"
                direction="row"
                justifyContent="space-between"
                spacing={3}
              >
                <Stack spacing={1}>
                  <Typography variant="h4">
                    {car?.title}
                  </Typography>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <Typography
                      color="text.secondary"
                      variant="body2"
                    >
                      Placed on
                    </Typography>
                    <SvgIcon color="action">
                      <CalendarIcon />
                    </SvgIcon>
                    <Typography variant="body2">
                      {createdAt}
                    </Typography>
                  </Stack>
                </Stack>
                <div>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      color="inherit"
                      endIcon={(
                        <SvgIcon>
                          <Edit02Icon />
                        </SvgIcon>
                      )}
                    >
                      Edit
                    </Button>
                    <Button
                      endIcon={(
                        <SvgIcon>
                          <ChevronDownIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                    >
                      Action
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </div>
            <Box
              sx={{
                backgroundImage: `url(${car?.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: 1,
                height: 400,
                mt: 3
              }}
            />
            <OrderSummary order={order} />
            <OrderItems items={order.items || []} />
            <EcommerceSalesRevenue
              chartSeries={[
                {
                  name: 'KM',
                  data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000]
                },
              ]}
            />
            <OrderLogs logs={order.logs || []} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
