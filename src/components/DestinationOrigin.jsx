import React, { useState } from 'react'
import NavbarComponent from './NavbarComponent'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import axios from 'axios';
function DestinationOrigin() {

    const apiKey = "q3mF3HTJGNFGqqJ4RT4p9rHR6b98FTn4";
    
    const [res,setRes]=useState(null)
    const apiUrl = 'http://localhost:3001/tollguru';

    const routeData = {
      from: {
        address: "Philadelphia , Pennsylvania,",
        lat: 39.95209,
        lng: -75.16219,
      },
      to: {
        address: "New York ,NY,",
        lat: 40.71455,
        lng: -74.00715,
      },
      waypoints: [
        {
          address: "Bridgewater Township , New Jersey",
        },
      ],
      serviceProvider: "here",
      vehicle: {
        type: "2AxlesTaxi",
        weight: {
          value: 20000,
          unit: "pound",
        },
        height: {
          value: 7.5,
          unit: "meter",
        },
        length: {
          value: 7.5,
          unit: "meter",
        },
        axles: 4,
        emissionClass: "euro_5",
      },
    };
    
    const [data,setData]=useState({
        from: {
          address: "",
          lat: 39.95209,
          lng: -75.16219,
        },
        to: {
          address: "",
          lat: 40.71455,
          lng: -74.00715,
        },
        waypoints: [
        ],
        serviceProvider: "here",
        vehicle: {
          type: "",
          weight: {
            value: 20000,
            unit: "pound",
          },
          height: {
            value: 7.5,
            unit: "meter",
          },
          length: {
            value: 7.5,
            unit: "meter",
          },
          axles: 4,
          emissionClass: "euro_5",
        },
      })
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    };
    
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(routeData),
    };
    
    const Dest=(e)=>{
e.preventDefault();
    // Make the POST request using Axios
    axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'q3mF3HTJGNFGqqJ4RT4p9rHR6b98FTn4',
        },
      })
        .then((response) => {
            setRes(response.data)
          console.log('TollGuru API Response:', response.data);
          // Process the response data as needed
        })
        .catch((error) => {
          console.error('Error making TollGuru API request:', error);
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
        });
    }


  // Function to update the value of from.address
  const updateFromAddress = (newAddress) => {
    // Use the setData function to update the state
    setData((prevData) => ({
      ...prevData,
      from: {
        ...prevData.from,
        address: newAddress,
      },
    }));
  };


   // Function to update the value of from.address
   const updateToAddress = (newAddress) => {
    // Use the setData function to update the state
    setData((prevData) => ({
      ...prevData,
      to: {
        ...prevData.to,
        address: newAddress,

      },
    }));
   
    console.log(data);
    
  };

  const addWaypoint = (newAddress) => {
    // Use the setData function to update the state
    setData((prevData) => ({
      ...prevData,
      waypoints: [
        ...prevData.waypoints,
        { address: newAddress },
      ],
    }));
  
    // Since setData is asynchronous, the logged data may not reflect the updated state immediately
    console.log(data);
  };

    // Function to update the value of from.address
    const updateVehicle = (fieldname,newAddress) => {
        // Use the setData function to update the state
        setData((prevData) => ({
          ...prevData,
          vehicle: {
            ...prevData.vehicle,
            [fieldname]: newAddress,
            weight: {
                value: 20000,
                unit: "pound",
              },
              height: {
                value: 7.5,
                unit: "meter",
              },
              length: {
                value: 7.5,
                unit: "meter",
              },
              axles: 4,
              emissionClass: "euro_5",
          },
        }));
        
        console.log(data);
      };
  return (
    <div >
      <NavbarComponent/>
<Container className='mt-5'>

<Form onSubmit={Dest}>
  <Row>
    <Col md={4}>
    <FormGroup>
    <Label for="from">
      From
    </Label>
    <Input
      id="from"
      name="from"
      type="select"
      onChange={(e) => updateFromAddress(e.target.value)}
    >
        <option>
     
      </option>
      <option>
      Philadelphia , Pennsylvania,
      </option>
     
    </Input>
  </FormGroup>
    </Col>
    <Col md={4}>
    <FormGroup>
    <Label for="to">
      To
    </Label>
    <Input
      id="to"
      name="to"
      type="select"
      onChange={(e) => updateToAddress(e.target.value)}
    ><option>
     
    </option>
      <option>
      New York ,NY,
      </option>
     
    </Input>
  </FormGroup>
    </Col>
    <Col md={4}>
    
    <FormGroup>
    <Label for="waypoint">
    waypoint
    </Label>
    <Input
      id="waypoint"
      name="waypoint"
      onChange={(e) =>addWaypoint(e.target.value)}
      type="select"
    ><option>
     
    </option>
      <option>
      Bridgewater Township , New Jersey
      </option>
     
    </Input>
  </FormGroup>
    </Col>
  </Row>

  <Row>
    <Col md={4}>
    <FormGroup>
    <Label for="vehicletype">
      Vehicle Type
    </Label>
    <Input
      id="vehicletype"
      name="vehicletype"
      onChange={(e) => updateVehicle("type",e.target.value)}
      type="select"
    >
        <option>
     
      </option>
      <option>
      2AxlesTaxi
      </option>
     
    </Input>
  </FormGroup>
    </Col>
 
  </Row>

 


  <Button>
   Fetch
  </Button>
</Form>

</Container>
<Container>
{JSON.stringify(res)}

</Container>
    </div>
  )
}

export default DestinationOrigin
