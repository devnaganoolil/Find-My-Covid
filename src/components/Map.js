import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import locationPinIcon from './icons/location-pin.png';
import L from 'leaflet';





const countryCoordinates = {
  "Afghanistan": {lat: 33.939112, lng: 67.709973},
  "Albania": {lat: 41.153317, lng: 20.168322},
  "Algeria": {lat: 28.033867, lng: 1.65964},
  "Andorra": {lat: 42.506272, lng: 1.521812},
  "Angola": {lat: -11.202665, lng: 17.873885},
  "Anguilla": {lat: 18.220553, lng: -63.068597},
  "Antigua and Barbuda": {lat: 17.060795, lng: -61.796454},
  "Argentina": {lat: -38.416104, lng: -63.616669},
  "Armenia": {lat: 40.069118, lng: 45.03821},
  "Aruba": {lat: 12.521137, lng: -69.968364},
  "Australia": {lat: -25.274425, lng: 133.775122},
  "Austria": {lat: 47.516218, lng: 14.550056},
  "Azerbaijan": {lat: 40.143127, lng: 47.576945},
  "Bahamas": {lat: 25.034266, lng: -77.396267},
  "Bahrain": {lat: 26.066726, lng: 50.557697},
  "Bangladesh": {lat: 23.684971, lng: 90.356317},
  "Barbados": {lat: 13.193885, lng: -59.543184},
  "Belarus": {lat: 53.70978, lng: 27.953382},
  "Belgium": {lat: 50.50388, lng: 4.469922},
  "Belize": {lat: 17.189875, lng: -88.497661},
  "Benin": {lat: 9.307715, lng: 2.315858},
  "Bermuda": {lat: 32.307773, lng: -64.7505},
  "Bhutan": {lat: 27.514182, lng: 90.433623},
  "Bolivia": {lat: -16.290157, lng: -63.588667},
  "Bosnia and Herzegovina": {lat: 43.915879, lng: 17.679092},
  "Botswana": {lat: -22.328464, lng: 24.684841},
  "Brazil": {lat: -14.234981, lng: -51.925284},
  "British Virgin Islands": {lat: 18.420668, lng: -64.639993},
  "Brunei": {lat: 4.535264, lng: 114.727666},
  "Bulgaria": {lat: 42.733909, lng: 25.48581},
  "Burkina Faso": {lat: 12.238308, lng: -1.561591},
  "Burundi": {lat: -3.37303, lng: 29.91891},
  "Cabo Verde": {lat: 16.538779, lng: -23.041825},
  "Cambodia": {lat: 12.565704, lng: 104.990941},
  "Cameroon": {lat: 7.369701, lng: 12.354695},
  "Canada": {lat: 56.13034, lng: -106.346785},
  "Caribbean Netherlands": {lat: 12.178383, lng: -68.238544},
  "Cayman Islands": {lat: 19.313287, lng: -81.254625},
  "Chad": {lat: 15.454186, lng: 18.732227},
  "Channel Islands": {lat: 49.458692, lng: -2.382466},
  "Chile": {lat: -35.675132, lng: -71.542991},
  "China": {lat: 35.86164, lng: 104.195419},
  "Colombia": {lat: 4.570849, lng: -74.29736},
  "Comoros": {lat: -11.645491, lng: 43.333275},
  "Congo": {lat: -4.038307, lng: 21.758644},
  "Cook Islands": {lat: -21.236715, lng: -159.777682},
  "Costa Rica": {lat: 9.748943, lng: -83.753418},
  "Croatia": {lat: 45.100017, lng: 15.199988},
  "Cuba": {lat: 21.521782, lng: -77.781187},
  "Curaçao": {lat: 12.169594, lng: -68.990011},
  "Cyprus": {lat: 35.126402, lng: 33.429869},
  "Czechia": {lat: 49.817519, lng: 15.472979},
  "DPRK": {lat: 40.339878, lng: 127.510073},
  "DRC": {lat: -4.038307, lng: 21.758644},
  "Denmark": {lat: 56.263912, lng: 9.50177},
  "Djibouti": {lat: 11.825123, lng: 42.590301},
  "Dominica": {lat: 15.414972, lng: -61.370976},
  "Dominican Republic": {lat: 18.735666, lng: -70.16263},
  "Ecuador": {lat: -1.831244, lng: -78.183414},
  "Egypt": {lat: 26.820563, lng: 30.802498},
  "El Salvador": {lat: 13.79416, lng: -88.896546},
  "Equatorial Guinea": {lat: 1.650814, lng: 10.267876},
  "Eritrea": {lat: 15.179368, lng: 39.78236},
  "Estonia": {lat: 58.595258, lng: 25.013621},
  "Eswatini": {lat: -26.522494, lng: 31.465889},
  "Ethiopia": {lat: 9.145017, lng: 40.489652},
  "Faeroe Islands": {lat: 61.892628, lng: -6.911804},
  "Fiji": {lat: -17.713393, lng: 178.065033},
  "Finland": {lat: 61.924117, lng: 25.748144},
  "France": {lat: 46.227653, lng: 2.213746},
  "French Guiana": {lat: 3.933905, lng: -53.125762},
  "French Polynesia": {lat: -17.679756, lng: -149.406817},
  "Gabon": {lat: -0.803715, lng: 11.609434},
  "Gambia": {lat: 13.443157, lng: -15.310158},
  "Georgia": {lat: 42.315381, lng: 43.3569},
  "Germany": {lat: 51.165704, lng: 10.451543},
  "Ghana": {lat: 7.946518, lng: -1.023169},
  "Gibraltar": {lat: 36.14073, lng: -5.353567},
  "Greece": {lat: 39.074195, lng: 21.824302},
  "Greenland": {lat: 71.706946, lng: -42.604295},
  "Grenada": {lat: 12.116527, lng: -61.679026},
  "Guadeloupe": {lat: 16.265027, lng: -61.551},
  "Guatemala": {lat: 15.783445, lng: -90.230739},
  "Guinea": {lat: 9.945598, lng: -9.69666},
  "Guinea Bissau": {lat: 11.803744, lng: -15.180387},
  "Guyana": {lat: 4.860424, lng: -58.930154},
  "Haiti": {lat: 18.971172, lng: -72.285191},
  "Honduras": {lat: 15.199982, lng: -86.241916},
  "Hong Kong": {lat: 22.319291, lng: 114.169364},
  "Hungary": {lat: 47.162521, lng: 19.503308},
  "Iceland": {lat: 64.963069, lng: -19.02084},
  "India": {lat: 20.593709, lng: 78.962859},
  "Indonesia": {lat: -0.789249, lng: 113.921315},
  "Iran": {lat: 32.427924, lng: 53.688065},
  "Iraq": {lat: 33.223197, lng: 43.679314},
  "Ireland": {lat: 53.779751, lng: -7.305515},
  "Isle of Man": {lat: 54.236134, lng: -4.548069},
  "Israel": {lat: 31.046041, lng: 34.851625},
  "Italy": {lat: 41.87195, lng: 12.567394},
  "Ivory Coast": {lat: 7.539962, lng: -5.547102},
  "Jamaica": {lat: 18.109605, lng: -77.297491},
  "Japan": {lat: 36.204797, lng: 138.252933},
  "Jordan": {lat: 30.585186, lng: 36.238415},
  "Kazakhstan": {lat: 48.019572, lng: 66.92368},
  "Kenya": {lat: -0.023541, lng: 37.906167},
  "Kiribati": {lat: 1.836913, lng: -157.376856},
  "Kuwait": {lat: 29.311638, lng: 47.481742},
  "Kyrgyzstan": {lat: 41.204407, lng: 74.766115},
  "Laos": {lat: 19.856297, lng: 102.495512},
  "Latvia": {lat: 56.879628, lng: 24.603175},
  "Lebanon": {lat: 33.854701, lng: 35.862264},
  "Lesotho": {lat: -29.609988, lng: 28.233618},
  "Liberia": {lat: 6.428082, lng: -9.429473},
  "Libya": {lat: 26.335119, lng: 17.228355},
  "Liechtenstein": {lat: 47.141022, lng: 9.520923},
  "Lithuania": {lat: 55.169428, lng: 23.881277},
  "Luxembourg": {lat: 49.815278, lng: 6.12959},
  "Macao": {lat: 22.19874, lng: 113.543871},
  "Madagascar": {lat: -18.766973, lng: 46.869084},
  "Malawi": {lat: -13.254282, lng: 34.301551},
  "Malaysia": {lat: 4.21046, lng: 101.975745},
  "Maldives": {lat: 3.202758, lng: 73.22066},
  "Mali": {lat: 17.570718, lng: -3.996169},
  "Malta": {lat: 35.937505, lng: 14.375438},
  "Marshall Islands": {lat: 7.131492, lng: 171.184478},
  "Martinique": {lat: 14.641505, lng: -61.02418},
  "Mauritania": {lat: 21.007916, lng: -10.940815},
  "Mauritius": {lat: -20.348393, lng: 57.552129},
  "Mayotte": {lat: -12.827527, lng: 45.166249},
  "Mexico": {lat: 23.63451, lng: -102.552759},
  "Micronesia": {lat: 7.425564, lng: 150.550792},
  "Moldova": {lat: 47.411624, lng: 28.369903},
  "Monaco": {lat: 43.738393, lng: 7.424611},
  "Mongolia": {lat: 46.862487, lng: 103.846654},
  "Montenegro": {lat: 42.708693, lng: 19.374371},
  "Morocco": {lat: 31.791716, lng: -7.09263},
  "Mozambique": {lat: -18.665689, lng: 35.529537},
  "Myanmar": {lat: 21.916241, lng: 95.955949},
  "Namibia": {lat: -22.957618, lng: 18.490412},
  "Nauru": {lat: -0.522792, lng: 166.931494},
  "Nepal": {lat: 28.394854, lng: 84.124023},
  "Netherlands": {lat: 52.13263, lng: 5.291258},
  "New Caledonia": {lat: -20.904279, lng: 165.618043},
  "New Zealand": {lat: -40.900556, lng: 174.885951},
  "Nicaragua": {lat: 12.865418, lng: -85.207234},
  "Niger": {lat: 17.607802, lng: 8.08166},
  "Nigeria": {lat: 9.082016, lng: 8.675264},
  "North Macedonia": {lat: 41.60866, lng: 21.745291},
  "Norway": {lat: 60.472042, lng: 8.468945},
  "Oman": {lat: 21.473524, lng: 55.975415},
  "Pakistan": {lat: 30.375327, lng: 69.345118},
  "Palau": {lat: 7.51498, lng: 134.582503},
  "Palestine": {lat: 31.952189, lng: 35.233132},
  "Panama": {lat: 8.537958, lng: -80.782101},
  "Papua New Guinea": {lat: -6.31497, lng: 143.95556},
  "Paraguay": {lat: -23.442476, lng: -58.443807},
  "Peru": {lat: -9.189984, lng: -75.015155},
  "Philippines": {lat: 12.879734, lng: 121.774026},
  "Poland": {lat: 51.919414, lng: 19.145153},
  "Portugal": {lat: 39.399845, lng: -8.224436},
  "Qatar": {lat: 25.354852, lng: 51.183898},
  "Romania": {lat: 45.943135, lng: 24.96677},
  "Russia": {lat: 61.52401, lng: 105.318762},
  "Rwanda": {lat: -1.940264, lng: 29.873912},
  "Réunion": {lat: -21.11516, lng: 55.53636},
  "S. Korea": {lat: 35.90773, lng: 127.766942},
  "Saint Kitts and Nevis": {lat: 17.3578, lng: -62.782981},
  "Saint Lucia": {lat: 13.909445, lng: -60.978904},
  "Saint Martin": {lat: 18.07081, lng: -63.050071},
  "Samoa": {lat: -13.759003, lng: -172.104603},
  "San Marino": {lat: 43.942363, lng: 12.457795},
  "Sao Tome and Principe": {lat: 0.186334, lng: 6.613055},
  "Saudi Arabia": {lat: 23.885941, lng: 45.079138},
  "Senegal": {lat: 14.497377, lng: -14.452338},
  "Serbia": {lat: 44.016494, lng: 21.005857},
  "Seychelles": {lat: -4.679566, lng: 55.49195},
  "Sierra Leone": {lat: 8.460565, lng: -11.77987},
  "Singapore": {lat: 1.35211, lng: 103.81983},
  "Sint Maarten": {lat: 18.042453, lng: -63.054844},
  "Slovakia": {lat: 48.669002, lng: 19.699006},
  "Slovenia": {lat: 46.151227, lng: 14.995479},
  "Solomon Islands": {lat: -9.645683, lng: 160.156214},
  "Somalia": {lat: 5.152156, lng: 46.199642},
  "South Africa": {lat: -30.559482, lng: 22.937491},
  "South Sudan": {lat: 6.877009, lng: 31.30697},
  "Spain": {lat: 40.463661, lng: -3.74921},
  "Sri Lanka": {lat: 7.873028, lng: 80.771776},
  "St. Barth": {lat: 17.899983, lng: -62.833336},
  "St. Vincent Grenadines": {lat: 12.984279, lng: -61.287203},
  "Sudan": {lat: 12.862833, lng: 30.217634},
  "Suriname": {lat: 3.919309, lng: -56.027808},
  "Sweden": {lat: 60.128146, lng: 18.643501},
  "Switzerland": {lat: 46.818192, lng: 8.227528},
  "Syria": {lat: 34.802059, lng: 38.996812},
  "Taiwan": {lat: 23.697824, lng: 120.960524},
  "Tajikistan": {lat: 38.861017, lng: 71.276085},
  "Tanzania": {lat: -6.369004, lng: 34.888816},
  "Thailand": {lat: 15.870055, lng: 100.992557},
  "Timor-Leste": {lat: -8.874221, lng: 125.727513},
  "Togo": {lat: 8.619516, lng: 0.824761},
  "Tonga": {lat: -21.179013, lng: -175.198247},
  "Trinidad and Tobago": {lat: 10.691799, lng: -61.222503},
  "Tunisia": {lat: 33.886943, lng: 9.537477},
  "Turkey": {lat: 38.96377, lng: 35.243312},
  "Turks and Caicos": {lat: 21.694034, lng: -71.797921},
  "UAE": {lat: 23.424052, lng: 53.847831},
  "UK": {lat: 55.378069, lng: -3.435958},
  "USA": {lat: 37.090261, lng: -95.71287},
  "Uganda": {lat: 1.373318, lng: 32.29025},
  "Ukraine": {lat: 48.379434, lng: 31.165565},
  "Uruguay": {lat: -32.522758, lng: -55.765857},
  "Uzbekistan": {lat: 41.377491, lng: 64.585278},
  "Vanuatu": {lat: -15.376702, lng: 166.959161},
  "Venezuela": {lat: 6.423723, lng: -66.589709},
  "Vietnam": {lat: 14.05833, lng: 108.277174},
  "Yemen": {lat: 15.55274, lng: 48.516363},
  "Zambia": {lat: -13.133921, lng: 27.849351},
  "Zimbabwe": {lat: -19.015414, lng: 29.154868},
};



// const Map = ({ center, zoom }) => {
//   const [covidData, setCovidData] = useState([]);
//   const [countryCoordinates, setCountryCoordinates] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch COVID-19 data
//         const response = await fetch('https://covid-19-tracking.p.rapidapi.com/v1', {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '156cf06ba4msh2c2cdb55142a549p162ba6jsncff6594c9c0b',
//             'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch COVID-19 data');
//         }

//         const data = await response.json();
//         setCovidData(data);
//       } catch (error) {
//         console.error('Error fetching COVID-19 data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

  // useEffect(() => {
  //   const fetchCoordinates = async () => {
  //     const newCountryCoordinates = { ...countryCoordinates };
  
  //     for (const country of covidData) {
  //       const countryName = country.Country_text;
  
  //       // Check if the country is already in the coordinates object
  //       if (!newCountryCoordinates[countryName]) {
  //         // Use the countryName in the geocoding API
  //         const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${encodeURIComponent(countryName)}`;
  //         const options = {
  //           method: 'GET',
  //           headers: {
  //             'X-RapidAPI-Key': '156cf06ba4msh2c2cdb55142a549p162ba6jsncff6594c9c0b',
  //             'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
  //           }
  //         };
  
  //         try {
  //           const response = await fetch(url, options);
  //           const result = await response.json();
  
  //           // Extract the coordinates from the result
  //           const coordinates = result.results[0]?.location;
  
  //           // Store the coordinates in the object
  //           newCountryCoordinates[countryName] = coordinates;
  
  //           console.log(`Geocoding result for ${countryName}:`, coordinates);
  //         } catch (error) {
  //           console.error(`Error geocoding for ${countryName}:`, error);
  //         }
  
  //         // Introduce a delay of 5 seconds
  //         await new Promise(resolve => setTimeout(resolve, 5000));
  //       } else {
  //         console.log(`Skipping ${countryName}, coordinates already present.`);
  //       }
  //     }
  
  //     // Update the state with the new coordinates
  //     setCountryCoordinates(newCountryCoordinates);
  //   };
  
  //   // Fetch coordinates when covidData changes
  //   if (covidData.length > 0) {
  //     fetchCoordinates();
  //   }
  // }, [covidData, countryCoordinates]);
  

  // console.log('Map component covidData:', covidData);
  // Object.entries(countryCoordinates).forEach(([country, coordinates]) => {
  //   console.log(`Country: ${country}, Coordinates: ${coordinates.lat}, ${coordinates.lng}`);
  // });

  const customIcon = new L.Icon({
    iconUrl: locationPinIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  
  const Map = () => {
    const center = { lat: 37.0902, lng: -95.7129 };
    const zoom = 4;
  
    return (
      <div className="map">
        <MapContainer
          center={center}
          zoom={zoom}
          minZoom={3}
          worldCopyJump={true}
          maxBoundsViscosity={1.0}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=JdbYq0IOmnjd0Jgw8cH7"
            tileSize={512}
            zoomOffset={-1}
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
  
          {/* Display markers based on coordinates */}
          {Object.entries(countryCoordinates).map(([countryName, coordinates]) => (
            <Marker key={countryName} position={coordinates} icon={customIcon}>
              <Popup>
                <strong>{countryName}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  };
  
  export default Map;
