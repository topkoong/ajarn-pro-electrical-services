import {
  Children,
  FunctionComponent,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children?: ReactNode;
}

const Map: FunctionComponent<MapProps> = ({ center, zoom, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  }, [ref, map]);

  return (
    <>
      <div className='h-96' ref={ref} id='map' />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
