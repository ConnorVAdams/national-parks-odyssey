import NavButtons from './NavButtons'
import ParkIcon from './ParkIcon'
import ParkCard from './ParkCard'
import Game from './Game'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
      <div className='map' style={{ height: "100%", width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        <ParkIcon />
        <ParkCard />
        <Game />
      </div>
    </>
  )
}

export default Map
