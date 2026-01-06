// scripts/inspect_api.ts

async function inspect() {
    console.log("Fetching data...");
    const soap = `<?xml version="1.0" encoding="utf-8"?>
        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <GetDuyurular_json xmlns="http://tempuri.org/" />
          </soap:Body>
        </soap:Envelope>`;

    try {
        const response = await fetch('https://api.ibb.gov.tr/iett/UlasimDinamikVeri/Duyurular.asmx', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml; charset=utf-8',
                'SOAPAction': 'http://tempuri.org/GetDuyurular_json'
            },
            body: soap
        });

        const textResponse = await response.text();
        const textJSON = textResponse.match(/<GetDuyurular_jsonResult[^>]*>([\s\S]*?)<\/GetDuyurular_jsonResult>/);

        if (textJSON && textJSON[1]) {
            const rawData = JSON.parse(textJSON[1]);
            console.log("Data is array?", Array.isArray(rawData));
            if (Array.isArray(rawData) && rawData.length > 0) {
                console.log("First item keys:", Object.keys(rawData[0]));
                console.log("First item sample:", rawData[0]);
            } else {
                console.log("Data is not an array or empty:", rawData);
            }
        } else {
            console.log("Could not extract JSON from XML");
            console.log("XML excerpt:", textResponse.substring(0, 500));
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

inspect();
