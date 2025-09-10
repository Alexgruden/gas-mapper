import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from "leaflet";

// Fix Leaflet's default icon issue with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


export default function Map() {
    return (
        <div id='map' className='h-[80vh] w-full'>
            <MapContainer center={[43.13911576952899, -70.93601515328979]} zoom={15} scrollWheelZoom={true} style={{ height: "100%", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.13911576952899, -70.93601515328979]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};