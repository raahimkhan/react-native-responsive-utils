import { useState, useEffect } from 'react';
import {
  setBaseScreenSize,
  listenOrientationChange,
  removeOrientationListener,
} from '@raahimkhan23/react-native-responsive-utils';
import { Portrait } from './Portrait';
import { Landscape } from './Landscape';

export default function App() {
  useEffect(() => {
    setBaseScreenSize(402, 874);
    listenOrientationChange(setOrientation);
    return () => {
      removeOrientationListener();
    };
  }, []);

  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait'
  );

  return orientation === 'portrait' ? <Portrait /> : <Landscape />;
}
