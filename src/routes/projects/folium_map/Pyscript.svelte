<script>
  /*
  Pyscript is currently in here because it is messy and ugly. i will put it in .py files eventually and import them directly
  */


</script>


<py-config>
  packages = [
      "folium",
      "pandas"
  ]
</py-config>

<py-script>
{`
from js import b64data, isloaded, document, window
import json
import base64
import io
import pandas as pd
import folium
import branca
import js

#https://stackoverflow.com/questions/74707544/add-a-clickevent-function-to-multiple-folium-markers-with-python
from jinja2 import Template
from folium.map import Marker



decoded = base64.b64decode(b64data).decode("utf-8")
df = pd.read_csv(io.StringIO(decoded))

df_temp = df.copy()
#replace all the nan with empty string

df_as_list = df_temp.to_dict(orient='records')
#pull first row out and use the value as the key
df_as_list = { f"( {row['lat']}, {row['long']} )" : row for row in df_as_list}

df['inbound'] = df['inbound'].astype(bool)
df['is_day_job'] = df['is_day_job'].astype(int).astype(bool)


#make location the midpoint using lat long
midpoint = (df['lat'].median(), df['long'].median())

m = folium.Map(location=[midpoint[0], midpoint[1]], zoom_start=12)



#in the html, run function onMarkerClick automatically

click_template = """
{% macro script(this, kwargs) %}
var {{ this.get_name() }} = L.marker(
  {{ this.location|tojson }},
  {{ this.options|tojson }}
).addTo({{ this._parent.get_name() }}).on('click', onClick);
{% endmacro %}
"""

Marker._template = Template(click_template)


click_js = f"""function onClick(e) {{self.parent.onMarkerClick(e,{df_as_list});}}"""
      
e = folium.Element(click_js)
html = m.get_root()
html.script.get_root().render()
html.script._children[e.get_name()] = e

# Add markers for each location in the CSV df
for index, row in df.iterrows():

    
    lat, lon = row['lat'], row['long']
    #handle on marker click
    x = folium.Marker([lat, lon], popup="test")
    x.add_to(m)



display(m)
isloaded = True
window.isloaded = True
`}
</py-script>