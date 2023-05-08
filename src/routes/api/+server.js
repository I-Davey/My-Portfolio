import { json } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const json_data = await request.json();
  
    if (json_data.type == "gw_map") {
      try {
        const response = await handle_map(json_data);
        return json(response);
      } catch (error) {
        console.error("Error handling the map:", error);
        return json({ error: "Error handling the map" }, { status: 500 });
      }
    }
  
    return json({ error: "Invalid request" }, { status: 400 });
  }
  


/** @param {json} json_data */
async function handle_map(json_data) {
    const id = json_data.id;
    //if not if
    if (id == null) {
      const response = await axios.get("http://127.0.0.1:5174/gw_map.csv", {
        //it returns a base64 string
        responseType: "blob",
      });
      return response.data;
    } else {
      const response = await axios.get(`http://localhost:5174/api/gw_map/${id}.mp4`);
      return response.data;
    }
  }
  