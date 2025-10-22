import { Orientation, addOrientationChangeListener, getOrientationAsync } from "expo-screen-orientation";
import { useEffect, useState } from "react";



export default function useOrientation(){

  // orientation is currently unknown
  const [orientation, setOrientation] = useState(Orientation.UNKNOWN)

  // call load orientation function
  useEffect(() => {
   loadOrientation() // must be in useEffect as should only be added when fully rendered layout
    addOrientationChangeListener(loadOrientation) // everytime orientation changes it'll reload!!!
  });

  const loadOrientation = async () => {
    const orientation = await getOrientationAsync();
    setOrientation(orientation);
  }
  return orientation
}