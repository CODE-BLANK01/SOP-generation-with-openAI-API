const axios = require("axios");

const sopgeneration = async (formData) => {
  const options = {
    method: "POST",
    url: "https://chatgpt-api8.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "fddfa5b1f2mshacbfaf5246809b9p178275jsn16c24a1f935e",
      "X-RapidAPI-Host": "chatgpt-api8.p.rapidapi.com",
    },
    data: [
      {
        content: `you are a student going to study in canada, write an sop based on the json data collected from the form which is given as ${JSON.stringify(
          formData
        )}`,
        role: "user",
      },
    ],
  };

  try {
    const response = await axios.request(options);
    const sop = response.data.text;
    return sop;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sopgeneration };
