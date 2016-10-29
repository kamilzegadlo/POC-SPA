import { Flight } from '../shared/flight.d';
import { FlightSearchParams } from '../shared/FlightSearch/flightSearchParams.d';

export const testFlights: Flight[] =
    [
        { id: 1, departureDate: '2016-01-01 15:34:20', arrivalDate: '2016-01-01 20:34:20', price: "10" },
        { id: 2, departureDate: '2016-01-02 16:34:20', arrivalDate: '2016-01-01 21:34:20', price: "11" },
        { id: 3, departureDate: '2016-01-03 17:34:20', arrivalDate: '2016-01-01 22:34:20', price: "12" },
        { id: 4, departureDate: '2016-01-04 18:34:20', arrivalDate: '2016-01-01 23:34:20', price: "13" },
        { id: 5, departureDate: '2016-01-05 19:34:20', arrivalDate: '2016-01-01 23:34:20', price: "14" }
    ];
