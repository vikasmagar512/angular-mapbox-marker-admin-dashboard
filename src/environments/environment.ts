// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://192.168.10.8:8080/',
  apiUrl: 'http://localhost:8080/backend',
  mapbox: {
    accessToken: 'pk.eyJ1IjoidmlrYXNtYWdhciIsImEiOiJjamczbGl1bXUxdDB3MndvNmV3NGZtN2ltIn0.iYOKmUXqreHAmf1v5HiYeQ'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
