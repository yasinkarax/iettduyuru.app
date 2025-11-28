const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/announcements', async (req, res) => {
  try {
    const hatKodu = req.query.hatKodu; 
    let soap;
    if (hatKodu) {
      soap = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetDuyurular_json xmlns="http://tempuri.org/">
            <HatKodu>${hatKodu}</HatKodu>
          </GetDuyurular_json>
        </soap:Body>
      </soap:Envelope>`;
    } else {
      soap = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetDuyurular_json xmlns="http://tempuri.org/" />
        </soap:Body>
      </soap:Envelope>`;
    }

    const response = await fetch('https://api.ibb.gov.tr/iett/UlasimDinamikVeri/Duyurular.asmx',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction': 'http://tempuri.org/GetDuyurular_json'
        },
        body: soap
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const textResponse = await response.text();
    const textJSON = textResponse.match(/<GetDuyurular_jsonResult>(.*?)<\/GetDuyurular_jsonResult>/);

    if (textJSON && textJSON[1]) {
      const data = JSON.parse(textJSON[1]);
      console.log('Fetched announcements data:', data);
      res.json({
        success: true,
        data: data
      });
    }
    else {
      throw new Error("couldn't response")
    }
  }
  catch (error) {
    console.error('error fetching data', error);

    res.status(500).json({
      success: false,
      message: 'duyuru alınamadı'
    })
  }
});

app.listen(port, () => {
  console.log('duyurular çekiliyor')
})