import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { IettAnnouncement, IettResponse }  from './types';

const app: Express = express();
const port: number = 3000;
const corsOptions: cors.CorsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

interface AnnouncementResponse{
  success: boolean;
  data?: any;
  message?: string;
}
app.get('/api/announcements', 
  async (req: Request, res: Response<AnnouncementResponse>): Promise<void> => {
    try {
      const hatKodu = req.query.hatKodu as string | undefined; 
      let soap: string;
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
      const textJSON = textResponse.match(/<GetDuyurular_jsonResult>([\s\S]*?)<\/GetDuyurular_jsonResult>/);

      if (textJSON && textJSON[1]) {
        const data = JSON.parse(textJSON[1]) as IettAnnouncement[];
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
