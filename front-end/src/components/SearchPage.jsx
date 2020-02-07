import React, {useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';
import SearchForm from './search_form/SearchForm';
import DriverCard from './profile_page/rider_page_components/DriverCard';

const initalDriverState = [
    {name: 'Dylan',
     price: '15.00',
    },
    {name: 'Brandon',
    price: '30.00',
   },
    {name: 'Danny',
    price: '72.00',
    },
    {name: 'Tom',
    price: 56.00,
    },
    {name: 'Daniel',
    price: 91.00,
    },
    {name: 'Desiree',
    price: 57.00,
    },
    {name: 'Nathan',
    price: 100.00,
    },
    {name: 'Batman',
    price: 1000.00,
    },
];
const SearchPage = () => {
    console.log('I re-rendered!!!!');
    const [drivers, setDrivers] = useState(initalDriverState)
    const handlePriceFilter = (event) => {

        const changedNumber = Number(event.target.value);
        // Every time a user selects an option, reach out to the api for all the users, then filter them on the client.
        // Or find a way to rollback state in the application
        switch(event.target.value) {
            case '25':
                return setDrivers(drivers.filter( driver => driver.price >= changedNumber ));
            case '50':
                return setDrivers(drivers.filter( driver => driver.price >= changedNumber ));
            case '75':
                return setDrivers(drivers.filter( driver => driver.price >= changedNumber ));
            case '100':
                return setDrivers(drivers.filter( driver => driver.price >= changedNumber ));
            default:
                return drivers;
        }
    }

    const handleClear = () => {
        setDrivers(initalDriverState);
    }
    // useEffect( () => {
    //     axios.get('https://rideforlifebackend.herokuapp.com//api/drivers', 
    //     {
    //         headers: {
    //           "content-type": "application/json", // Tell the server we are sending this over as JSON
    //           authorization: localStorage.getItem('auth-token'), // Send the token in the header from the client.
    //         }
    //       })
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));
    // }, []);
    return(
        <StyledMain>
        <StyledTitle>Search for Drivers</StyledTitle>
            <SearchForm handlePriceFilter={handlePriceFilter} handleClear={handleClear}/>
            {drivers.map( drivers => {
                console.log(drivers);
                return( 
                    <DriverCard  driver={drivers} />
                );
            })}
        </StyledMain>
    );
}

export default SearchPage;

const StyledMain = S.main`
    width: 80%;
    margin: 0 auto;
`;
const StyledTitle = S.h2`
    width: 100%;
    font-size: 30px;
    color: #000;
`;