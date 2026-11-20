# Frontend techniques for optimizing SPA-application loading speed (THESIS)

## About

This application was made for testing different frontend optimization techniques as part of a thesis project. The type for the application was picked as a blog SPA-application, as the structure of a such app is highly suitable for applying the researched techniques and measuring their effect on the application's loading time. Closer description and explanations for technical choices made while creating the app can be found here (chapter 5, note that the thesis is written in Finnish as per rules): [LINK COMING SOON]

## Techniques

As mentioned, the study only included frontend-based, cold start techniques. Other related techniques were excluded to ensure that the measurement platform is as stable as possible. More info about this can be read in the thesis. Each technique was implemented into their individual branches as follows:

- Base: base application acting as the measurement base, no mods
- Base-PhotoOpt: image formats changed to webp, local images through an image converter, Unsplash images via URL-parameter
- Codesplit: set routes to be lazily loaded using `React.lazy` API
- Lazy: added lazy loading for blogs via `loading`-property
- PWA: Service worker registeration, PWA configuration, such as caching and manifest, icons used by PWA

## Performing measurements

Below is a rough list of steps to be taken if new measurements are performed using this test application. PWA-application in particular has some limitations which should be noted. Check the thesis for more information

1. `npm run build`(built application acts more like an actual application and it also applies some default optimization to the application, which doesn't happen when `npm run dev` is used)
2. Open Google Chrome in Incognito mode, open dev tools and turn on **Disable cache**
3. Change **Network throttling** to **Fast 4G**
4. When measuring PWA-application, also change **CPU throttling** to **4x slowdown**
5. Repeat each measurement **5** times and calculate an average for each measurement category


**Last updated 20.11.2026**


