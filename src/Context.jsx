import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const FlightsContext = createContext({})

const FlightsContextProvider = ({ children }) => {
    const [selectedFlights, setSelectedFlights] = useState({ selectedFlightFrom: null, selectedFlightBack: null });
    const [passengerCount, setPassengerCount] = useState(1);

    const addSelectedFlightFrom = (flight) => {
        setSelectedFlights((prev) => ({ ...prev, selectedFlightFrom: flight}));
    };

    const deleteSelectedFlightFrom = () => {
        setSelectedFlights((prev) => ({ ...prev, selectedFlightFrom: null}));
    };

    const addSelectedFlightBack = (flight) => {
        setSelectedFlights((prev) => ({ ...prev, selectedFlightBack: flight}));
    };

    const deleteSelectedFlightBack = () => {
        setSelectedFlights((prev) => ({ ...prev, selectedFlightBack: null}));
    };

    const clearSelectedFlights = () => {
        setSelectedFlights({ selectedFlightFrom: null, selectedFlightBack: null });
    };

    return (
        <FlightsContext.Provider 
            value={{
                passengerCount,
                setPassengerCount,
                selectedFlights,
                addSelectedFlightFrom,
                deleteSelectedFlightFrom,
                clearSelectedFlights,
                addSelectedFlightBack,
                deleteSelectedFlightBack
            }}
        >
            {children}
        </FlightsContext.Provider>
    )
};

FlightsContextProvider.propTypes = { children: PropTypes.node }
export { FlightsContext, FlightsContextProvider }
