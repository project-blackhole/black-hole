const crimeData = (location, dates) => {
  // takes in a location object with an object with {lat, long}. Takes in an array of dates.
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

function retrieveCrimeDataFromDate(location, date) {
  // takes in a location object with an object with {lat, long}.
  // Calls Crime Data Explorer API for crime data. Returns this data.

  fetch(
    `https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=${date}&enddate=${date}&lat=${location.lat}&long=${location.long}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "jgentes-Crime-Data-v1.p.rapidapi.com",
        "x-rapidapi-key": "b8fe8cc8bbmsh003ae401208d014p11b8bejsn071a9257dcc9"
      }
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  return "";
}

export default { crimeData };
