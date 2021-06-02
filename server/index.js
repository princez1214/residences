const app = require("express")();
const Http = require("http");
const cors = require("cors");

// Create the Http server
const server = Http.createServer(app);

app.use(cors());

app.get("/api/residences", (req, res) => {
  // https://www.maracielo.com/app/uploads/2019/12/MCDS_Web_Residences_hero-compressor.jpg
  // carousel
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_2_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_6_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_1_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_3_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_4_InteriorRendering.jpg 
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_5_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_7_InteriorRendering.jpg
  // https://www.maracielo.com/app/uploads/2020/01/MCDS_Web_Residences_8_InteriorRendering.jpg

  // https://www.maracielo.com/app/uploads/2019/03/MCDS_Web_Residences_couple_sunset.jpg

  // https://www.maracielo.com/app/uploads/2019/03/MCDS_Web_Residences_wind.svg
  // https://www.maracielo.com/app/uploads/2019/12/MCDS_Web_Residences_balcony-compressor.jpg
  // https://www.maracielo.com/app/uploads/2020/02/MCDS_Residence_Siteplan_d3-compressor.jpg

  // https://www.maracielo.com/app/themes/replay-cabo/dist/images/cabo/MCDS_TeaserWeb_formBG.jpg

  // MAR A CIELO

//   BAJA CULTURE IN CONTEMPORARY DESIGN
// EXPRESSING THE AUTHENTICITY OF CABO DEL SOL
// Mar a Cielo is Cabo Del Sol’s newest real estate offering. The architecture, interiors, and landscapes of Mar a Cielo interpret Cabo Del Sol through a modern lens. From the outside in, every residence reflects the warm, luxurious climate and natural beauty of the sun-drenched Baja peninsula. Unlike many Los Cabos properties, Mar a Cielo is not branded. There are no restrictions on owner usage or prescribed property management; homeowners are free to use and rent their homes however they wish.

// COME HOME TO UNFORGETTABLE MOMENTS
// INTIMATE REAL ESTATE, FULLY-FURNISHED FOR MODERN LIVING
// Mar a Cielo is a special release of 36 modern homes. The two- and three-bedroom residences feature open floorplans and oversized windows framing views of the ever-changing sea. Generous outdoor spaces invite relaxation, and family gatherings that become lasting memories. Days unfold in harmony with nature. Thoughtful design brings the colors, textures, and traditions of Baja into each and every home.

// SEAMLESS TRANSITIONS FROM OUTSIDE TO INSIDE
// The Baja lifestyle makes few distinctions between the outdoors and indoors. Mar a Cielo embraces this attitude, with spaces designed to maximize ocean views, warm sea breezes, and lush plant life. Each residence extends seamlessly into open-air patios, terraces, and balconies that encourage a slower pace – and time to absorb the beauty that enfolds Cabo Del Sol. Throughout the property, nature takes priority. Flourishing gardens, courtyards, lanais, and decks blur the lines between the built and natural environment.

// THE RESIDENCES
// BORN FROM LAND AND CULTURE
// Mar a Cielo’s real estate offerings  embody the warmth and luxury of Los Cabos itself. They represent the very best of this land: its stunning natural beauty, diverse landscape, rich culture, and relaxed, generous way of life. The design interprets a storied past with a modern sensibility – and gives homeowners access to every amenity they could desire. The property also occupies a coveted location behind Hole #5 of Cabo Del Sol Ocean Course and the forthcoming Beach Club.

// REGISTER NOW FOR DETAILED PRICING
// 36 MODERN OCEAN VIEW RESIDENCES.
// 2 BEDROOMS FROM $1.375M AND 3 BEDROOMS FROM $1.725M.

  res.send({
    image: 'coll'
  });
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
