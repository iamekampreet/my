const HttpError = require("../models/http-error");
const axios = require("axios");

const API_KEY = "HMI7Y7D1cIUswTxGTP2v986MsjCRt3mv";

async function getCoordsForAddress(address) {
  //   return {
  //     lat: 40.7484405,
  //     lng: -73.9856644,
  //   };
  const response = await axios.get(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${encodeURIComponent(
      address
    )}`
  );

  const data = response.data;

  if (data.info.statuscode !== 0) {
    throw new HttpError(data.info.messages, data.info.statuscode);
  }

  const coordinates = data.results[0].locations[0].latLng;
  return coordinates;
}

module.exports = getCoordsForAddress;
