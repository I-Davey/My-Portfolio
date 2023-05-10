<link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />

<script>
  import { onMount } from "svelte";
  import axios from "axios";
    import { beforeNavigate } from "$app/navigation";

  let isReady = false;
  let responseData;

  async function fetchData(apiEndpoint, requestData) {
    try {
      // Send a POST request to the specified API endpoint with the provided requestData
      const response = await axios.post(apiEndpoint, requestData);
      const responseData = response.data;

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
  /**
   * Keeps track of the previously clicked marker.
   */
  let previousMarker;

  /**
   * Handles the click event on a marker.
   *
   * @param {Event} event - The click event.
   */
  function onMarkerClick(event) {
    console.log("Marker clicked:", event);
    console.log("previous:", previousMarker)
    if (previousMarker) { scaleMarker(previousMarker, 2/3); }
    const marker = event.sourceTarget;
    scaleMarker(marker, 1.5);
    previousMarker = marker;
  }

  /**
   * Scales a marker according to the given scale factor.
   *
   * @param {Object} marker - The marker to be scaled.
   * @param {number} scaleFactor - The scale factor.
   */
  function scaleMarker(marker, scaleFactor) {
    const icon = marker._icon;
    // Extract and parse the current styles.
    const currentStyles = getStyles(icon);
    // Scale the styles.
    const scaledStyles = scaleStyles(currentStyles, scaleFactor);
    // Update the styles.
    setStyles(icon, scaledStyles);
  }

  /**
   * Extracts and parses the current styles of the icon.
   *
   * @param {HTMLElement} icon - The icon element.
   * @returns {Object} The current styles of the icon.
   */
  function getStyles(icon) {
    const width = parseInt(icon.style.width.slice(0, -2));
    const height = parseInt(icon.style.height.slice(0, -2));
    const marginLeft = parseInt(icon.style.marginLeft.slice(0, -2));
    const marginTop = parseInt(icon.style.marginTop.slice(0, -2));

    return { width, height, marginLeft, marginTop };
  }

  /**
   * Scales the styles according to the given scale factor.
   *
   * @param {Object} styles - The styles to be scaled.
   * @param {number} scaleFactor - The scale factor.
   * @returns {Object} The scaled styles.
   */
  function scaleStyles(styles, scaleFactor) {
    return Object.fromEntries(
      Object.entries(styles).map(([key, value]) => [key, Math.round(value * scaleFactor)])
    );
  }

  /**
   * Updates the styles of the icon with the given styles.
   *
   * @param {HTMLElement} icon - The icon element.
   * @param {Object} styles - The styles to be applied.
   */
  function setStyles(icon, styles) {
    icon.style.width = styles.width + "px";
    icon.style.height = styles.height + "px";
    icon.style.marginLeft = styles.marginLeft + "px";
    icon.style.marginTop = styles.marginTop + "px";
  }


  onMount(async () => {
    responseData = await fetchData("/api", { type: "gw_map" });

    if (responseData) {
      responseData = JSON.stringify(responseData);
      window.fetchData = fetchData;
      window.responseData = responseData;
      window.onMarkerClick = onMarkerClick;
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
import branca
#https://stackoverflow.com/questions/74707544/add-a-clickevent-function-to-multiple-folium-markers-with-python
from jinja2 import Template
from folium.map import Marker



decoded = base64.b64decode(responseData)
df = pd.read_csv(io.BytesIO(decoded))
df['inbound'] = df['inbound'].astype(bool)
df['is_day_job'] = df['is_day_job'].astype(int).astype(bool)

first_location = df.loc[0, "phsyical_coordinate"]
first_lat, first_lon = map(float, first_location.strip("()").split(", "))
m = folium.Map(location=[first_lat, first_lon], zoom_start=12)


#in the html, run function onMarkerClick automatically

click_template = """
{'{'}% macro script(this, kwargs) %{'}'}
var {'{{'} this.get_name() {'}}'} = L.marker(
  {'{{'} this.location|tojson {'}}'},
  {'{{'} this.options|tojson {'}}'}
).addTo({'{{'} this._parent.get_name() {'}}'}).on('click', onClick);
{'{'}% endmacro %{'}'}
"""

Marker._template = Template(click_template)
click_js = """function onClick(e) {'{'}
  //print parent 
  self.parent.onMarkerClick(e);
  {'}'}"""
      
e = folium.Element(click_js)
html = m.get_root()
html.script.get_root().render()
html.script._children[e.get_name()] = e

# Add markers for each location in the CSV df
for index, row in df.iterrows():

    
    popup = folium.Popup(html, max_width=2650)
    coordinate_str = row["phsyical_coordinate"]
    lat, lon = map(float, coordinate_str.strip("()").split(", "))
    #handle on marker click
    x = folium.Marker([lat, lon])
    x.add_to(m)

display(m)
</py-script>

<div>
  this is where image will beforeNavigate
</div>
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
    .leaflet-popup{
        visibility: hidden;
    }
    
</style>