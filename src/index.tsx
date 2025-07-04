/**
 * imports relevant libraries
 */
import { Dimensions, PixelRatio } from 'react-native';

/**
 * imports relevant types
 */
import type { EmitterSubscription } from 'react-native';

/**
 * base screen width and height (iPhone 16 Pro Portrait mode)
 */
let BASE_SCREEN_WIDTH = 402;
let BASE_SCREEN_HEIGHT = 874;

/**
 * retrieves and stores the device's initial screen dimensions (width and height)
 */
const { width: initialScreenWidth, height: initialScreenHeight } =
  Dimensions.get('window');
let CURRENT_SCREEN_WIDTH = initialScreenWidth;
let CURRENT_SCREEN_HEIGHT = initialScreenHeight;

/**
 * updates the base screen width and height used for scaling
 * @param width - the new base screen width
 * @param height - the new base screen height
 */
const setBaseScreenSize = (width: number, height: number): void => {
  BASE_SCREEN_WIDTH = width;
  BASE_SCREEN_HEIGHT = height;
};

/**
 * holds the subscription reference for the orientation change listener
 */
let orientationListenerSubscription: EmitterSubscription;

/**
 * listens for orientation changes and updates the orientation state accordingly
 * @param setOrientation - React setState function to update orientation ('portrait' or 'landscape')
 * @returns void
 */
const listenOrientationChange = (
  setOrientation: (value: 'portrait' | 'landscape') => void
) => {
  orientationListenerSubscription = Dimensions.addEventListener(
    'change',
    (newDimensions) => {
      CURRENT_SCREEN_WIDTH = newDimensions.window.width;
      CURRENT_SCREEN_HEIGHT = newDimensions.window.height;
      setOrientation(
        CURRENT_SCREEN_WIDTH < CURRENT_SCREEN_HEIGHT ? 'portrait' : 'landscape'
      );
    }
  );
};

/**
 * removes the orientation change listener if it exists
 * @returns void
 */
const removeOrientationListener = (): void => {
  if (orientationListenerSubscription) {
    orientationListenerSubscription.remove();
  }
};

/**
 * scales a given width based on the current screen width and base screen width
 * @param width - the original width to scale
 * @returns the scaled width
 */
const scaleWidth = (width: number): number => {
  return (width * CURRENT_SCREEN_WIDTH) / BASE_SCREEN_WIDTH;
};

/**
 * scales a given height based on the current screen height and base screen height
 * @param height - the original height to scale
 * @returns the scaled height
 */
const scaleHeight = (height: number): number => {
  return (height * CURRENT_SCREEN_HEIGHT) / BASE_SCREEN_HEIGHT;
};

/**
 * scales a given image width based on the current screen width and base screen width, rounded to the nearest pixel
 * @param width - the original image width to scale
 * @returns the scaled image width
 */
const scaleImageWidth = (width: number): number => {
  const scaledWidth = (width * CURRENT_SCREEN_WIDTH) / BASE_SCREEN_WIDTH;
  return PixelRatio.roundToNearestPixel(scaledWidth);
};

/**
 * scales a given image height based on the scaled image width and original aspect ratio, rounded to the nearest pixel
 * @param width - the original image width (to determine the aspect ratio)
 * @param height - the original image height to scale
 * @returns the scaled image height
 */
const scaleImageHeight = (width: number, height: number): number => {
  // scale width first
  const scaledWidth = scaleImageWidth(width);
  // calculate aspect ratio
  const aspectRatio = width / height;
  // adjust height based on the aspect ratio
  return PixelRatio.roundToNearestPixel(scaledWidth / aspectRatio);
};

/**
 * scales a given font size based on the smaller screen dimension with optional clamping, rounded to the nearest pixel
 * @param fontSize - the original font size
 * @param minFontScale - minimum value to clamp the scaled font size (default: 0)
 * @param maxFontScale - maximum value to clamp the scaled font size (default: 0)
 * @returns the scaled and clamped font size
 */
const scaleFont = (
  fontSize: number,
  minFontScale: number = 0,
  maxFontScale: number = 0
): number => {
  // calculate the scale factor using the smaller dimension ratio of current and base screens
  const scaleDimension =
    Math.min(CURRENT_SCREEN_WIDTH, CURRENT_SCREEN_HEIGHT) /
    Math.min(BASE_SCREEN_WIDTH, BASE_SCREEN_HEIGHT);
  // scale the font size
  const scaledSize = fontSize * scaleDimension;
  // clamp the scaled font size
  const scaledSizeWithClamp = Math.max(
    fontSize - minFontScale,
    Math.min(fontSize + maxFontScale, scaledSize)
  );
  // return the scaled font size to the nearest pixel
  return PixelRatio.roundToNearestPixel(scaledSizeWithClamp);
};

/**
 * defines supported iPhone models for dimension comparison
 */
type IphoneModel =
  | 'iPhoneSE'
  | 'iPhone13Mini'
  | 'iPhone16Pro'
  | 'iPhone16ProMax';

/**
 * stores the longest side (height in portrait, width in landscape) for each iPhone model defined above
 */
const modelLongestSide: Record<IphoneModel, number> = {
  iPhoneSE: 667,
  iPhone13Mini: 812,
  iPhone16Pro: 874,
  iPhone16ProMax: 956,
};

/**
 * checks if the current device's longest side matches the given iPhone model longest side
 * @param model - the iPhone model name
 * @returns true if current screen's longest side matches the given iPhone model's longest side, otherwise false
 */
const isIphoneModel = (model: IphoneModel): boolean => {
  return (
    (CURRENT_SCREEN_WIDTH < CURRENT_SCREEN_HEIGHT
      ? CURRENT_SCREEN_HEIGHT
      : CURRENT_SCREEN_WIDTH) === modelLongestSide[model]
  );
};

/**
 * converts the given width percentage to device independent pixels (dp)
 * @param widthPercent - percentage of the screen's width (0 – 100)
 * @returns the corresponding dp based on the current device's screen width
 */
const wp = (widthPercent: number): number => {
  return PixelRatio.roundToNearestPixel(
    (CURRENT_SCREEN_WIDTH * widthPercent) / 100
  );
};

/**
 * converts the given height percentage to device independent pixels (dp)
 * @param heightPercent - percentage of the screen's height (0 – 100)
 * @returns the corresponding dp based on the current device's screen height
 */
const hp = (heightPercent: number): number => {
  return PixelRatio.roundToNearestPixel(
    (CURRENT_SCREEN_HEIGHT * heightPercent) / 100
  );
};

/**
 * exports constants and utility functions
 */
export {
  BASE_SCREEN_WIDTH,
  BASE_SCREEN_HEIGHT,
  CURRENT_SCREEN_WIDTH,
  CURRENT_SCREEN_HEIGHT,
  setBaseScreenSize,
  listenOrientationChange,
  removeOrientationListener,
  scaleWidth,
  scaleHeight,
  scaleImageWidth,
  scaleImageHeight,
  scaleFont,
  isIphoneModel,
  wp,
  hp,
};
