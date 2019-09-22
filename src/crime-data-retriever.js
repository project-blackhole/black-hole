const crimeData = (location, dates) => {
  // takes in a object (location) with keys lat and long.
  // Takes in an array of dates. Each string date is provided in the format 6/18/2014 (month/day/year).
  // Returns an array of objects, each object containing crime data (description, date, lat, long) for one crime.
  const datesData = dates.forEach(date => {
    return new Promise(function(resolve, reject) {
      const dateData = retrieveCrimeDataFromDate(location, date);
      resolve(dateData);
    });
  });

  return Promise.all(datesData)
    .then(data => {
      return data.flat();
    })
    .error(err => {
      console.log("error in crime-data-retriever");
    });
};

function retrieveCrimeDataFromDate(location, date) {
  // takes in an object (location) with keys lat and long.
  // string date is provided in the format 6/18/2014 (month/day/year).
  // Calls Crime Data API for crime data on one date. Returns an array of objects, with
  // each object being data for one crime (description, date, lat, long).

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
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return "";
}

export default { crimeData };
