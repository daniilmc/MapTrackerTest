import { MapView } from "@aws-amplify/ui-react-geo";
import { NavigationControl } from "react-map-gl";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import Markers from "./components/Markers";
import LineOverlay from "./components/LineOverlay";
import useTracker from "./hooks/useTracker";
import { useEffect, useState } from "react";
import { ReactSVG } from 'react-svg';
function App() {
  const [endTime, setEndTime] = useState(new Date())

  const [trackerPositions] = useTracker({
    DeviceId: "thing30",
    TrackerName: "trackerAsset01", // This is the Tracker name, change it according to your own setup
    EndTimeExclusive: endTime,
    StartTimeInclusive: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 24 * 30
    ),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEndTime(new Date())
    }, 1000 * 3) // in milliseconds
    return () => clearInterval(intervalId)
  }, [])

  // setInterval(() => location.reload(), 10000)
 
  console.log(`RERENDER position ${JSON.stringify(trackerPositions)}`)
  if (trackerPositions.length > 0 && trackerPositions[0].Position) {
    console.log("initi")
    return (
      <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MultiInputDateTimeRangeField defaultValue={[dayjs('2022-04-17T15:30'), dayjs('2022-04-21T18:30')]}/>
      </LocalizationProvider> */}
      
      <MapView
          initialViewState={{
            longitude: trackerPositions[0].Position[0],
            latitude: trackerPositions[0].Position[1],
            zoom: 14,
          }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <NavigationControl showCompass={false} />
          <Markers trackerPositions={trackerPositions} />
          <LineOverlay trackerPositions={trackerPositions} />
        </MapView>
      </>
    );
  }

  // return (
  //   <>
  //   <LocalizationProvider dateAdapter={AdapterDayjs}>
  //   <MultiInputDateTimeRangeField defaultValue={[dayjs('2022-04-17T15:30'), dayjs('2022-04-21T18:30')]}/>
  //   </LocalizationProvider>
    
  //   <MapView
  //       initialViewState={{
  //         longitude: -123.1169,
  //         latitude: 49.2824,
  //         zoom: 16,
  //       }}
  //       style={{ width: "100vw", height: "100vh" }}
  //     >
  //       <NavigationControl showCompass={false} />
  //       <Markers trackerPositions={trackerPositions} />
  //       <LineOverlay trackerPositions={trackerPositions} />
  //     </MapView>
  //   </>
  // );
}

export default App;
