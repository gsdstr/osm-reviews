<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
    }
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import('leaflet/dist/leaflet-src.esm')

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 })
    this.mapIsReady = true
  },
}
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div style="height:600px; width:800px">
      <LMap ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        />
      </LMap>
    </div>
  </div>
</template>
