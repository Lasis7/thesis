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

## Credits

**Images used on this project are sourced from Unsplash and Pexels and used under their respective licenses. Each image is referenced by its name in this project, followed with links to the uploader and the original image. The video is used under CC BY license**
**For more information**: 
- [Unsplash license](unsplash.com/license)
- [Pexels license](https://www.pexels.com/license/)
- [CC BY](https://creativecommons.org/licenses/by/4.0/)


**"POTW3.jpg"**: Image by [Greg Rakozy](https://unsplash.com/@grakozy), uploaded to [Unsplash](https://unsplash.com/photos/silhouette-photography-of-person-oMpAz-DN-9I)

**"beachgallery.jpg"**: Image by [Asad Photo Maldives](https://www.pexels.com/@asadphoto/), uploaded to [Pexels](https://www.pexels.com/photo/beach-1449767/)

**"Clear Water Standstill"**: Image by [Pietro De Grandi](https://unsplash.com/@peter_mc_greats), uploaded to [Unsplash](https://unsplash.com/photos/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk)

**"Rocky Canyon Pass"**: Image by [Jake Blucker](https://unsplash.com/@jakeblucker), uploaded to [Unsplash](https://unsplash.com/photos/black-concrete-road-surrounded-by-brown-rocks-tMzCrBkM99Y)

**"Golden Sunset Beach"**: Image by [Sean Oulashin](https://unsplash.com/@oulashin), uploaded to [Unsplash](https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8)

**Autumn Mist**: Image by [Luca Bravo](https://unsplash.com/@lucabravo), uploaded to [Unsplash](https://unsplash.com/photos/brown-house-near-body-of-water-zAjdgNXsMeg)

**"Eye-catching Sunrise"**: Image by [Bailey Zindel](https://unsplash.com/@baileyzindel), uploaded to [Unsplash](https://unsplash.com/photos/river-in-yosemite-valley-at-low-light-NRQV-hBF10M)

**"Savannah Hiking Trip"**: Image by [niko photos](https://unsplash.com/@niko_photos), uploaded to [Unsplash](https://unsplash.com/photos/green-leaf-tree-under-blue-sky-tGTVxeOr_Rs)



The video material has been kindly provided by HikingFex.com.
🔗 https://www.hikingfex.com/en/videos
Link to the used video: [Mountain Life | No Copyright Video | Royalty free mountain | Drone footage | mountain shots](https://youtu.be/ZK_kdlCo4yY?si=vb8jpkSDw_gzTPw9)


**Libraries used in the application fall under MIT and ISC licenses, which permit use, copy, modify and/or distribution.**
**For more information**:
[MIT License](https://opensource.org/license/mit)
[ISC License](https://opensource.org/license/isc)


**Last updated 25.11.2026**