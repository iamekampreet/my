const axios = require("axios");
const HttpError = require("./http-error");

const getCoordsForAddress = async (address) => {
  const API_KEY = "HMI7Y7D1cIUswTxGTP2v986MsjCRt3mv";

  const response = await axios.get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${encodeURIComponent(
      address
    )}`
  );

  if (!response || response.data.info.statuscode !== 0) {
    return new Error(
      "An error occured while trying to get coordinates for your provided address. Please try again later, or if problem persists please try entering another address"
    );
  }

  return response.data.results[0].locations[0].latLng;
};

module.exports = getCoordsForAddress;
