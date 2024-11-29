import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, note, campaignId } = req.body;

    const apiUrl = "https://app.sell.do/api/leads/create";
    const apiKey = process.env.NEXT_SELLDO_API_KEY;

    try {
      const response = await axios.post(
        apiUrl,
        null, // Sell.do API accepts data as query parameters
        {
          params: {
            "sell_do[form][lead][name]": name,
            "sell_do[form][lead][email]": email,
            "sell_do[form][lead][phone]": phoneNumber,
            api_key: apiKey,
            "sell_do[form][note][content]": note,
            "sell_do[campaign][srd]": campaignId,
          },
        }
      );
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error("Sell.do API Error:", error.response?.data || error.message);
      res.status(500).json({ success: false, message: "Error submitting lead" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}