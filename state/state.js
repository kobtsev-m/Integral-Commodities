import { createContext, useState, useEffect } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export const PlacesContext = createContext({});

function GlobalState(props) {
  const [ports, setPorts] = useState([]);
  const [arePortsUpdated, setArePortsUpdated] = useState(false);

  useEffect(() => {
    if (!ports.length || arePortsUpdated) {
      return;
    }
    const setPortsLatLng = ports.map(async (port) => {
      const geocodes = await geocodeByAddress(port.place);
      const { lat, lng } = await getLatLng(geocodes[0]);
      return { ...port, lat, lng };
    });
    Promise.all(setPortsLatLng).then((newPorts) => {
      setArePortsUpdated(true);
      setPorts(newPorts);
    });
  }, [ports]);

  return (
    <PlacesContext.Provider value={{ ports, setPorts, arePortsUpdated }}>
      {props.children}
    </PlacesContext.Provider>
  );
}

export default GlobalState;
