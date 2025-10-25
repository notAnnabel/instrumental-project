# Instruments app
This is an instruments app, displaying a piano and an otamatone. It has been create with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/)

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## folder structure
- **Tabs** contains layout (tabs), otomatone + piano (styling) 
- **Assets** contains images
- **Components** contains piano keys and otamatone parts
- **Helpers** -> Piano notes
- **Hooks** contains useOrientation

## syntax
lowercase for constants, camelcase for functions
lowercase for tab name files, PascalCase for each word for components


## Otamatone slider note 
The Otamatone slider needs to be selected before being dragged. On the web version, it needs
to be dragged horizontally rather than vertically. This issue doesn't exist on the android verison.

