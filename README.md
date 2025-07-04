# @raahimkhan23/react-native-responsive-utils

[![npm](https://img.shields.io/npm/v/@raahimkhan23/react-native-responsive-utils)](https://www.npmjs.com/package/@raahimkhan23/react-native-responsive-utils)
![downloads](https://img.shields.io/npm/dm/@raahimkhan23/react-native-responsive-utils)

A lightweight utility package for making React Native apps responsive across different screen sizes. It allows you to scale widths, heights, fonts, and images based on a configurable base screen size, enabling consistent layouts on different devices. The package includes both percentage based helpers as well as pixel based scaling functions for flexible UI design. It also supports listening to orientation changes and updating screen dimensions in real time. The utilities are designed to be minimal, easy to integrate, and highly effective for maintaining visual balance across screen types.

## Contents

- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Exports](#exports)
- [Tips](#tips)
- [Contributing](#contributing)
- [License](#license)

## Screenshots

**iOS portrait view**

![iOS-portrait](https://github.com/user-attachments/assets/7680878d-9b47-4fc1-bd05-ebb890cca707)

**iOS landscape view**

![iOS-landscape](https://github.com/user-attachments/assets/37b4fcb5-db03-4471-a10c-3728051bd938)

**Android portrait view**

![Android-portrait](https://github.com/user-attachments/assets/7f7195c4-1d53-4f23-b71f-2799328d3c12)

**Android landscape view**

![Android-landscape](https://github.com/user-attachments/assets/679f3a42-620d-4016-941d-7e31b5150cef)

## Installation

```sh
npm install @raahimkhan23/react-native-responsive-utils
```

## Usage

Import the required utilities directly from the package:

```ts
import {
  scaleWidth,
  scaleHeight,
  scaleImageWidth,
  scaleImageHeight,
  scaleFont,
  wp,
  hp,
  listenOrientationChange,
  removeOrientationListener,
  setBaseScreenSize,
  isIphoneModel,
  CURRENT_SCREEN_WIDTH,
  CURRENT_SCREEN_HEIGHT,
  BASE_SCREEN_WIDTH,
  BASE_SCREEN_HEIGHT,
} from '@raahimkhan23/react-native-responsive-utils';
```

For a complete working demo, refer to the [example app](https://github.com/raahimkhan/react-native-responsive-utils/tree/main/example).

## Exports

The following variables and utility functions are available for use, helping with responsive layout, scaling, and orientation handling.

| Name                     | Type     | Description                                                                 |
|--------------------------|----------|-----------------------------------------------------------------------------|
| `BASE_SCREEN_WIDTH`        | Variable | Base width used for scaling (defaults to iPhone 16 Pro width)                  |
| `BASE_SCREEN_HEIGHT`       | Variable | Base height used for scaling (defaults to iPhone 16 Pro height)                |
| `CURRENT_SCREEN_WIDTH`     | Variable | Current device screen width. It is updated on orientation change if the listenOrientationChange function has been called                  |
| `CURRENT_SCREEN_HEIGHT`    | Variable | Current device screen height. It is updated on orientation change if the listenOrientationChange function has been called                |
| `setBaseScreenSize`        | Function | Updates the base screen width and height                  |
| `listenOrientationChange`  | Function | Subscribes to orientation changes and updates screen dimensions            |
| `removeOrientationListener`| Function | Removes the orientation change listener if it exists                       |
| `scaleWidth`               | Function | Scales a given width relative to current and base screen width             |
| `scaleHeight`              | Function | Scales a given height relative to current and base screen height           |
| `scaleImageWidth`          | Function | Scales image width and rounds to nearest pixel                             |
| `scaleImageHeight`         | Function | Scales image height while maintaining aspect ratio, rounded to nearest px  |
| `scaleFont`                | Function | Scales font size based on screen dimensions, with optional clamping        |
| `isIphoneModel`            | Function | Checks if current device matches the dimensions of a known iPhone model    |
| `wp`                       | Function | Converts width percentage to device independent pixels (dp)                |
| `hp`                       | Function | Converts height percentage to device independent pixels (dp)               |

## Tips

- Remember to set the base device width and height using the `setBaseScreenSize` function. If not set, the default base device is treated as iPhone 16 Pro (402 × 874).
- Use `scaleWidth` and `scaleHeight` for scaling elements like containers, cards, and other layout blocks. However, scaling needs vary based on design choices, company guidelines, or Figma specifications. You may also choose to use `wp` and `hp` for fixed percentage based dimensions where appropriate.
- Utilise `wp` and `hp` for applying consistent paddings and margins that adapt across screen sizes.
- Use `scaleFont` for text sizes that need to stay readable across devices. Clamp values if needed to avoid too small or large fonts. However, this also depends on your design choices, company typography guidelines, or Figma specs, i.e., not every text element needs to be scaled. Alternatively, you can use `wp` to make font size a fixed percentage of the screen width, which also adjusts dynamically across devices. Decide based on need and context.
- Avoid unnecessary scaling for simple spacings or minor paddings; using fixed values or percentages is often sufficient.
- For displaying images responsively, use `scaleImageWidth` and `scaleImageHeight` together to maintain the original aspect ratio.
- Test your layout in both portrait and landscape modes (if landscape mode is supported by your app), especially on devices with extreme aspect ratios.
- I, the author of this library, have been using these functions in all of my React Native apps and consistently achieve over 90% responsiveness. Any remaining edge case devices, like very small phones or large tablets, are handled manually if needed.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
