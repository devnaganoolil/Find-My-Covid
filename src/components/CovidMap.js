import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, Rectangle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Home.css';

const CovidMap = () => {
  const [covidData, setCovidData] = useState([]);
  const [isSetSidebarOpen, setIsSetSidebarOpen] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://covid-19-tracking.p.rapidapi.com/v1', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '156cf06ba4msh2c2cdb55142a549p162ba6jsncff6594c9c0b',
            'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch COVID-19 data');
        }

        const data = await response.json();
        console.log('CovidMap data:', data); // Log the data
        setCovidData(data);
      } catch (error) {
        console.error('Error fetching COVID-19 data:', error.message);
      }
    };

    fetchData();
  }, []);


  const getColor = (totalCases) => {
    if (totalCases > 100000000) return 'red';
    if (totalCases > 10000000) return 'orange';
    if (totalCases > 1000000) return 'yellow';
    return 'green';
  };

  return (
    <div className={`map-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <MapContainer center={[0, 0]} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {covidData.map((country) => (
          <Circle
            key={country.Country_text}
            center={[parseFloat(country['Country_text']), parseFloat(country['Country_text'])]}
            radius={Math.sqrt(parseInt(country.TotalCases_text.replace(/,/g, ''))) * 100}
            pathOptions={{ fillColor: getColor(parseInt(country.TotalCases_text.replace(/,/g, ''))), color: 'white' }}
          >
            <Popup>
              <strong>{country.Country_text}</strong>
              <br />
              Total Cases: {country.TotalCases_text}
              <br />
              Total Deaths: {country.TotalDeaths_text}
              <br />
              Total Recovered: {country.TotalRecovered_text}
            </Popup>
          </Circle>
        ))}

        <Rectangle
          bounds={[
            [51.49, -0.08],
            [51.5, -0.06],
          ]}
        />
      </MapContainer>
    </div>
  );
};

export default CovidMap;
