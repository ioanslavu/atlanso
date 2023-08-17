import type { NextPage } from 'next';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { addDays, subDays, subHours, subMinutes } from 'date-fns';

import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { LogisticsDeviatedVehicles } from 'src/sections/dashboard/logistics/logistics-deviated-vehicles';
import { LogisticsErrorVehicles } from 'src/sections/dashboard/logistics/logistics-error-vehicles';
import { LogisticsLateVehicles } from 'src/sections/dashboard/logistics/logistics-late-vehicles';
import { LogisticsRouteVehicles } from 'src/sections/dashboard/logistics/logistics-route-vehicles';
import { LogisticsVehiclesCondition } from 'src/sections/dashboard/logistics/logistics-vehicles-condition';
import { LogisticsVehiclesList } from 'src/sections/dashboard/logistics/logistics-vehicles-list';
import { LogisticsVehiclesOverview } from 'src/sections/dashboard/logistics/logistics-vehicles-overview';
import { OverviewEvents } from 'src/sections/dashboard/overview/overview-events';
import { OverviewInbox } from 'src/sections/dashboard/overview/overview-inbox';
const now = new Date();

const Page: NextPage = () => {
  const settings = useSettings();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Logistics Dashboard" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={settings.stretch ? false : 'xl'}>
          <Grid
            container
            spacing={{
              xs: 3,
              lg: 4
            }}
          >
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
              >
                <div>
                  <Typography variant="h4">
                    Atlanso Dashboard
                  </Typography>
                </div>
                <div>
                  <Stack
                    direction="row"
                    spacing={4}
                  >
                    <Button
                      startIcon={(
                        <SvgIcon>
                          <PlusIcon />
                        </SvgIcon>
                      )}
                      variant="contained"
                    >
                      Add Vehicle
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsRouteVehicles amount={38} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsErrorVehicles amount={2} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsDeviatedVehicles amount={1} />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <LogisticsLateVehicles amount={2} />
            </Grid>
            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesOverview
                chartSeries={[38, 50, 12]}
                labels={['Technical Good', 'Out of service', 'In service']}
              />
            </Grid>
            <Grid
              xs={12}
              lg={6}
            >
              <LogisticsVehiclesCondition
                bad={12}
                excellent={181}
                good={24}
              />
            </Grid>
            <Grid xs={12}>
              <LogisticsVehiclesList
                vehicles={[
                  {
                    id: 'VOL-653CD1',
                    endingRoute: 'Mioveni, RO',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'success',
                    temperature: 8,
                    temperatureLabel: 'Very Good'
                  },
                  {
                    id: 'VOL-653CD2',
                    endingRoute: 'Mioveni, RO',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'warning',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                    warning: 'Temperature not optimal'
                  },
                  {
                    id: 'VOL-653CD3',
                    endingRoute: 'Timisoara, RO',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'error',
                    temperature: 8,
                    temperatureLabel: 'Very Good',
                    warning: 'ECU not responding'
                  },
                  {
                    id: 'VOL-653CD4',
                    endingRoute: 'Timisoara, RO',
                    startingRoute: 'Cleveland, Ohio, USA',
                    status: 'success',
                    temperature: 8,
                    temperatureLabel: 'Very Good'
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <OverviewEvents
                events={[
                  {
                    id: '3bfa0bc6cbc99bf747c94d51',
                    createdAt: addDays(now, 1),
                    description: '17:00 to 18:00',
                    title: 'Meeting with Partners'
                  },
                  {
                    id: 'dd6c8ce8655ac222b01f24f9',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  },
                  {
                    id: 'f274902e2bf226865b3cf947',
                    createdAt: addDays(now, 4),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  },
                  {
                    id: 'd2a66e24110f52acb0cd0b9f',
                    createdAt: addDays(now, 7),
                    description: '17:00 to 18:00',
                    title: 'Weekly Meeting'
                  }
                ]}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <OverviewInbox
                messages={[
                  {
                    id: 'b91cbe81ee3efefba6b915a7',
                    content: 'Recall to service',
                    createdAt: subMinutes(now, 2),
                    senderAvatar: '/assets/products/product-1.png',
                    senderName: 'Logan EXPRESSION TCe 90 CVT',
                    // senderOnline: true
                  },
                  {
                    id: 'de0eb1ac517aae1aa57c0b7e',
                    content: 'Car collected from service',
                    createdAt: subMinutes(now, 56),
                    senderAvatar: '/assets/products/product-2.png',
                    senderName: 'Logan PRESTIGE ECO-G 100',
                    // senderOnline: false
                  },
                  {
                    id: '38e2b0942c90d0ad724e6f40',
                    content: 'Repair completed',
                    createdAt: subHours(subMinutes(now, 23), 3),
                    senderAvatar: '/assets/products/product-3.png',
                    senderName: 'Duster JOURNEY Blue dCi 115 4x4',
                    // senderOnline: true
                  },
                  {
                    id: '467505f3356f25a69f4c4890',
                    content: 'New error detected in the ECU',
                    createdAt: subHours(subMinutes(now, 6), 8),
                    senderAvatar: '/assets/products/product-4.png',
                    senderName: 'Spring Electric 45',
                    // senderOnline: true
                  },
                ]}
              />
            </Grid>
          </Grid>
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
