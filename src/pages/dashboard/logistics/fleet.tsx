import { useCallback, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';

import { Seo } from 'src/components/seo';
import { Layout as DashboardLayout } from 'src/layouts/dashboard';
import { LogisticsFleetDrawer } from 'src/sections/dashboard/logistics/logistics-fleet-drawer';
import { LogisticsFleetList } from 'src/sections/dashboard/logistics/logistics-fleet-list';
import { LogisticsFleetMap } from 'src/sections/dashboard/logistics/logistics-fleet-map';
import { LogisticsFleetToolbar } from 'src/sections/dashboard/logistics/logistics-fleet-toolbar';
import type { Vehicle } from 'src/types/logistics';

const useVehicles = (): Vehicle[] => {
  return [
    {
      // serie de sasiu
      id: 'UU1L5220462400209',
      location: 'Bucharest, RO',
      latitude:  44.4350637,
      longitude: 26.09480633,
      temp: '8°C',
      startedAt: 'May 05, 7:53 AM',
      departedAt: 'Jun 02, 8:02 AM',
      arrivedAt: 'Jun 03, 8:18 AM'
    },
    {
      id: 'UU1L5220441200191',
      location: 'Bucharest, RO',
      latitude:  44.4396637,
      longitude: 26.096206,
      temp: '6°C',
      startedAt: 'May 05, 7:53 AM',
      departedAt: 'Jun 06, 8:02 AM',
      arrivedAt: 'Jun 07, 8:18 AM'
    },
    {
      id: 'UU1L4239847892374',
      location: 'Bucharest, RO',
      latitude:  44.4239537,
      longitude: 26.096316,
      temp: '8°C',
      startedAt: 'May 05, 7:53 AM',
      departedAt: 'Jun 04, 8:02 AM',
      arrivedAt: 'Jun 05, 8:18 AM'
    }
  ];
};

const Page: NextPage = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const vehicles = useVehicles();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [currentVehicleId, setCurrentVehicleId] = useState<string | undefined>(vehicles[0]?.id);

  const handleVehicleSelect = useCallback(
    (vehicleId: string): void => {
      setCurrentVehicleId(vehicleId);
    },
    []
  );

  const handleVehicleDeselect = useCallback(
    (): void => {
      setCurrentVehicleId(undefined);
    },
    []
  );

  const handleDrawerOpen = useCallback(
    (): void => {
      setOpenDrawer(true);
    },
    []
  );

  const handleDrawerClose = useCallback(
    (): void => {
      setOpenDrawer(false);
    },
    []
  );

  return (
    <>
      <Seo title="Dashboard: Logistics Fleet" />
      <Divider />
      <Box
        component="main"
        ref={rootRef}
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {mdUp && (
          <Box
            sx={{
              borderRightColor: 'divider',
              borderRightStyle: 'solid',
              borderRightWidth: 1,
              flex: '0 0 400px'
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h5">
                Cars
              </Typography>
            </Box>
            <LogisticsFleetList
              currentVehicleId={currentVehicleId}
              onVehicleDeselect={handleVehicleDeselect}
              onVehicleSelect={handleVehicleSelect}
              vehicles={vehicles}
            />
          </Box>
        )}
        <Box
          sx={{
            flex: '1 1 auto',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {!mdUp && <LogisticsFleetToolbar onDrawerOpen={handleDrawerOpen} />}
          <LogisticsFleetMap
            currentVehicleId={currentVehicleId}
            onVehicleSelect={handleVehicleSelect}
            vehicles={vehicles}
          />
        </Box>
      </Box>
      {!mdUp && (
        <LogisticsFleetDrawer
          container={rootRef.current}
          onClose={handleDrawerClose}
          open={openDrawer}
        >
          <LogisticsFleetList
            currentVehicleId={currentVehicleId}
            onVehicleDeselect={handleVehicleDeselect}
            onVehicleSelect={handleVehicleSelect}
            vehicles={vehicles}
          />
        </LogisticsFleetDrawer>
      )}
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
