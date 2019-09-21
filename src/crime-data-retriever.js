const ENDPOINT = "https://api.usa.gov/crime/fbi/sapi/api/explorer";
const APIKEY = "t2dI6umiBl8mNlfa1Ut2VPHzKyujCotXYvUNTIVP";

const crimeData = (location, dates) => {
  // takes in a location object with a string, a state. Takes in an array of dates.
  const datesData = dates.forEach(date => {
    return new Promise(function(resolve, reject) {
      const dateData = retrieveCrimeDataFromDate(location, date);
      resolve(dateData);
    });
  });

  // Produces an array of results for each date.
  Promise.all(datesData)
    .then(data => {
      return data;
    })
    .error(err => {
      console.log("error in crime-data-retriever");
    });
  let data = retrieveCrimeDataFromDate();
  return data;
};

function retrieveCrimeDataFromDate(location, crimeType) {
  // takes in a location object with a string, a state.
  // Calls Crime Data Explorer API for crime data. Returns this data.

  fetch(`${ENDPOINT}/${location}/${crimeType}?api_key=${APIKEY}`)
    .then(res => {
      res.json();
    })
    .then(res => {
      res.data;
    })
    .error(err => {
      console.log("error in crime-data-retriever");
    });
  return "";
}

export default { crimeData };
