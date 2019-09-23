const month = "9";
const day = "21";
const year = "2019";

const api = `https://api.usno.navy.mil/moon/phase?date=${month}/${day}/${year}&nump=4`


const userAction = async () => {
    const response = await fetch(api);
    const myJson = await response.json();
    console.log(myJson)
}

us

