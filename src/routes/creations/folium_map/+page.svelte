<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />

<script>
  import { onMount } from "svelte";
  import axios from "axios";

  let isReady = false;
  let responseData;

  async function fetchData(apiEndpoint, requestData) {
    try {
      // Send a POST request to the specified API endpoint with the provided requestData
      const response = await axios.post(apiEndpoint, requestData);
      console.log(response);
      const responseData = response.data;
      console.log(responseData);

      return responseData;
    } catch (error) {
      console.error("There was an error with the request:", error);
      return null;
    }
  }

  async function initializePyScript() {
    // @ts-ignore
    await import("https://pyscript.net/latest/pyscript.js");
  }

  onMount(async () => {
    responseData = await fetchData("/api", { type: "gw_map" });

    if (responseData) {
      responseData = JSON.stringify(responseData);
      window.responseData = responseData;
      window.fetchData = fetchData;
    }

    await initializePyScript();
    isReady = true;
  });
</script>

<py-config>
    packages = [
        "folium",
        "pandas"
    ]
</py-config>

<div class="area">
<py-script>
from js import responseData, fetchData
import json
import base64
import io
import pandas as pd
import folium
decoded = base64.b64decode(responseData)
df = pd.read_csv(io.BytesIO(decoded))
df['inbound'] = df['inbound'].astype(bool)
df['is_day_job'] = df['is_day_job'].astype(int).astype(bool)

first_location = df.loc[0, "phsyical_coordinate"]
first_lat, first_lon = map(float, first_location.strip("()").split(", "))
m = folium.Map(location=[first_lat, first_lon], zoom_start=12)

# Add markers for each location in the CSV df
for index, row in df.iterrows():
    coordinate_str = row["phsyical_coordinate"]
    lat, lon = map(float, coordinate_str.strip("()").split(", "))
    folium.Marker([lat, lon], popup=row["loc_name"]).add_to(m)

display(m)
</py-script>

</div>

<style>

    /*move creation-link to the far left*/
    .creation-link {
        align-self: left;
        color: aquamarine;
        text-decoration: underline;
        padding-left: 2rem;
    }
    
    .title {
        text-align: center;
    }
    
    .area {
        position: fixed;
        top: 4.73rem;
        left: 0%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: nowrap;
        min-width: 100%;
    }
    
    </style>