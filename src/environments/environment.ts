// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
       apiKey: "AIzaSyDjyvgyqkFI7CupDdU5arXtqiME2zdMSTo",
       authDomain: "firestore-abae4.firebaseapp.com",
       databaseURL: "https://firestore-abae4.firebaseio.com",
       projectId: "firestore-abae4",
       storageBucket: "firestore-abae4.appspot.com",
       messagingSenderId: "969868001262"
  }
};
