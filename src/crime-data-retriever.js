const ENDPOINT = "https://api.usa.gov/crime/fbi/sapi/api/";
const APIKEY = "t2dI6umiBl8mNlfa1Ut2VPHzKyujCotXYvUNTIVP"; // hash this.

const crimeData = (location, dates) => {
  // takes in a location object with a latitude and longitude. Takes in an array of dates.

  //const crimePromises = Promise.all();
  let data = retrieveCrimeDataFromDate();
  return data;
};

function retrieveCrimeDataFromDate(location) {
  // takes in a location object with a latitude and longitude.
  // Calls Crime Data Explorer API for crime data. Returns this data.

  //fetch(`${endpointUrl}/${location}`)
  return "";
}

export default { crimeData };
