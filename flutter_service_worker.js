'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "700fe3a2f0965188c718113d0ccc8b2c",
"version.json": "3ff9ce3203340361d6e977f896c78610",
"splash/img/light-2x.png": "8ba3451e67dfaa9c455df8bc86964fc0",
"splash/img/dark-4x.png": "91958f0d7b15cdc1becd6a4d41586c55",
"splash/img/light-3x.png": "4378da1e0293cddc3cd1defcef96947a",
"splash/img/dark-3x.png": "4378da1e0293cddc3cd1defcef96947a",
"splash/img/light-4x.png": "91958f0d7b15cdc1becd6a4d41586c55",
"splash/img/dark-2x.png": "8ba3451e67dfaa9c455df8bc86964fc0",
"splash/img/dark-1x.png": "1656d69f26f644696307ea64247ea102",
"splash/img/light-1x.png": "1656d69f26f644696307ea64247ea102",
"index.html": "b215986b2762dd865ddfa672cba8a6b4",
"/": "b215986b2762dd865ddfa672cba8a6b4",
"firebase-messaging-sw.js": "96e3e903d74cbf190393a17c233b2bb4",
"main.dart.js": "a40f8b7de0594acfbd54f807d9bb8f7c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9aaf7ff25993bdb9ebd9b2d5a34e7448",
"assets/AssetManifest.json": "7902374a34512b635715e2f6adc03fc5",
"assets/NOTICES": "9477495780142296b98ed70b770a958d",
"assets/FontManifest.json": "3033cea87ec5d1dd36c555a6b7d589cd",
"assets/AssetManifest.bin.json": "62c948e415c5a0963f167cfa05a0c063",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4eafda67004d68b2204e1acc1895866b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d210b237c547374816d0075dfa41e3c3",
"assets/fonts/MaterialIcons-Regular.otf": "80fef224abac28dc6428dec43c07bfc8",
"assets/assets/svg/contact.svg": "fbee771cbd5648ba040e105ff45c33c3",
"assets/assets/svg/requestmoney.svg": "10658f2834b2b45c74957ad2a51e71f9",
"assets/assets/svg/luggage.svg": "ed1012228271a7a3a08b6d7bb16be4fc",
"assets/assets/svg/dimension.svg": "5c4a13f55b079ce8f91b6642c1e9b20c",
"assets/assets/svg/car_icon.svg": "dadb3038e1bba8f604942f2f8e2e3b88",
"assets/assets/svg/apay.svg": "4b3641c9507a29015f000b6e85152112",
"assets/assets/svg/arrow.svg": "75bc0f0fd05669160975af884a28051f",
"assets/assets/svg/visa.svg": "f015aaf58514b82ceac561aff945a05c",
"assets/assets/svg/drag.svg": "72230e31be73ff1b1b2756f98a797dc4",
"assets/assets/svg/fuel.svg": "0c276de9df445b356e7a7d3ddc399198",
"assets/assets/svg/road.svg": "0137e8c5194d3e9ee2c4a8e32678072b",
"assets/assets/svg/gpay.svg": "0b4d098b20d24d0623c085ae8a17a54a",
"assets/assets/svg/fire.svg": "f86ca373aee74d84926d4a06a0d14325",
"assets/assets/svg/euro.svg": "f31a5a7620d8658c23535eb95f94050f",
"assets/assets/svg/open_ai.svg": "4dcddcdf601ac5a3b7bf32e522681a8c",
"assets/assets/svg/space.svg": "4a6ec905c0e3dcb29f87b5447a48e16a",
"assets/assets/svg/seat.svg": "a12ef49f20c421f45cb1be975dee0d81",
"assets/assets/svg/confetti.svg": "c2f30dea7d1b32b82b3c1f7a42809acb",
"assets/assets/svg/pin.svg": "390225c1ab40373185abcaeb5e4dcd6a",
"assets/assets/svg/black_logo.svg.vec": "cc1ada0f21e66d6b39664c0b63043faf",
"assets/assets/svg/activity_filled.svg": "be72bac49e7e9287fb99b1c4cba07958",
"assets/assets/svg/small_confetti.svg": "757c39ad1580f35ecc196a10cd6b71c5",
"assets/assets/svg/card.svg": "3e8436af52ff523693c4c64c36e0f6a1",
"assets/assets/svg/pinpoint.svg": "f95ce870ba9fba3511972b8f521ddd6e",
"assets/assets/svg/box.svg": "222977a1b748a3531018bddd519560a2",
"assets/assets/svg/chat.svg": "c582a121115780ffbe7386bca157b3fc",
"assets/assets/svg/coupon.svg": "28a20e9115fe9c75fdc0d29737ae1d70",
"assets/assets/svg/mastercard.svg": "a85bf6e717865436e43898573e31bb70",
"assets/assets/svg/google.svg": "163b28a25c27bc649930678f65611efa",
"assets/assets/svg/star.svg": "03142ba01a3d80fe98ef8dcc9a19fc5e",
"assets/assets/svg/req_payment.svg": "32425c59e9dede758d73784b81ce2fef",
"assets/assets/svg/correct_successful.svg": "bf78521a6037ecdd56117be2365344d7",
"assets/assets/svg/airbag.svg": "748ac47e3525dfd52fccd44724c1f354",
"assets/assets/svg/car.svg": "73de19b2ca4978627e4c507ba221d7d6",
"assets/assets/svg/sort.svg": "3c0e1bf0cc87e330389230da744abbdb",
"assets/assets/svg/activity.svg": "a0b48ac14c755e45776e50d09c28d3be",
"assets/assets/svg/manual.svg": "0f71778224d3e050881877eb80bfee33",
"assets/assets/svg/promo.svg": "3492e14bebdf7567db1f25819259b255",
"assets/assets/svg/logo.svg": "716a5b50a17626d7370ab4bd9251a5ce",
"assets/assets/svg/black_logo.svg": "4cee364b83f614b7058571438318b1c3",
"assets/assets/svg/arrow_swirl.svg": "db800f95d66661025f3a709d88f63e31",
"assets/assets/svg/weight.svg": "a3b54ef87406111d746bf797ba3eb073",
"assets/assets/demo/ecar.png": "90eaa3f10dbdc16f818dda0a3812c8b6",
"assets/assets/demo/topcar.png": "26470b40b00e3065f41edbbcd4cab29c",
"assets/assets/demo/map.png": "825a6b4528dccb2f722fa19a635af6ee",
"assets/assets/demo/mustang.jpeg": "0790d0a1356bd14a8b5e2dbc57ff27b5",
"assets/assets/demo/car.png": "f8c21a184e4c8207d2670c896805d083",
"assets/assets/demo/rentcar.jpeg": "c54162c6749aa247abaa760e6545a80a",
"assets/assets/demo/homebg.jpg": "53ae3d404817bbc382b131d6de9e9714",
"assets/assets/demo/topcarup.png": "4510c3e3f723737702f665d289c4b23b",
"assets/assets/images/pinpoint.png": "e1f79bb78ff3c766096d150c5c9f7da9",
"assets/assets/images/rentals.png": "48211bf15ea402d9617baaa1d5af9fbc",
"assets/assets/images/support.png": "904d486813d063a03b3a00415556c513",
"assets/assets/images/wallet.png": "9e4f42fd11d4c94ed46aeaea5a55e89d",
"assets/assets/images/addWallet.png": "068fe8c04b2078af321cc01a8a6dfbde",
"assets/assets/images/pin.png": "cf025fcb0aaf0950d96e62e6b681b28e",
"assets/assets/images/connect_jump.png": "98d550929278d62ebdd910dda9237dcb",
"assets/assets/images/euro.png": "321fcd07d7dba33cf605dc66d473b4f1",
"assets/assets/images/package.png": "6e4826424621fcfc442a5ee1345a6759",
"assets/assets/images/auth/signup.png": "d03a9551821f642deec821c25725be27",
"assets/assets/images/auth/signin.png": "a39ed6489f60c8ac6ff43cf1cc36dfdc",
"assets/assets/images/schedule_ride.jpeg": "5bea8e1545d1b8bed4fa2c0dc6f55034",
"assets/assets/images/inter_city.jpeg": "5ce9500a492f04cacfbab573889ef150",
"assets/assets/images/intercity.jpeg": "eb1be4487251b2019939553bd9a8bb11",
"assets/assets/images/rental.jpeg": "c295fcbf0965fb7e6b4a83ef85575e6b",
"assets/assets/images/add_rider.jpeg": "9c53fa6cf279bedc3a433dad16dd643c",
"assets/assets/images/requestmoney.png": "38cd7ec9bbe3b7b394880597d3389b23",
"assets/assets/images/safety1.jpeg": "536324c82379a81d7482978588e82dad",
"assets/assets/images/intercity.png": "f5bccf283f300e19d77743a1c0c9962b",
"assets/assets/images/point.png": "92b4c6336dad15a8213cbeb4053e6cbe",
"assets/assets/images/for_someone.jpeg": "ae221a8080ee3af5acea189bd115cc25",
"assets/assets/images/splash.png": "01a7687434b35d1b6a983ca056c79efd",
"assets/assets/images/new_rider.png": "e288a15032d75a447d45d46e664f7314",
"assets/assets/images/safety3.png": "48c90a08f9c8c05eaa2ebf297eae57b9",
"assets/assets/images/safety2.png": "4ccc1d761d0f23fd089a6b19d93e5331",
"assets/assets/images/gift.png": "35060ac000d6ada0d620def1b5059c63",
"assets/assets/images/getStarted.png": "cb11f6a3e29aee809d6e34957b25414e",
"assets/assets/images/jumpstart.png": "39907d24d56b3829e68d8bca4da7ed8f",
"assets/assets/images/payment_request.png": "c147293d9888b3d2cfcecc49aa8639d4",
"assets/assets/images/pickup.jpeg": "885cbc630bb2e49ffeef5414693e2682",
"assets/assets/images/trending/cafe.png": "0d7f6b112d4df9ba2da05bf550291ef1",
"assets/assets/images/trending/beach.png": "07d46a4a631be8c2acf2abf24036fee7",
"assets/assets/images/trending/attraction.png": "aea9663f8445c1a67f2f318a6c93fc19",
"assets/assets/images/trending/market.png": "d028e0d30e02209f7a3c20f9bbf72fe6",
"assets/assets/images/language.png": "91eba2860128f30df96d5fdb748860f8",
"assets/assets/images/package_receiver.png": "1a67dd9e9aa2572a7fa98886509c7512",
"assets/assets/images/suggestions/parkingsos.jpeg": "456fcbcbbce0bbe31a6ba91f428804ef",
"assets/assets/images/suggestions/intercity.jpeg": "3b65938b4177d5ce2e5258f84d33d04f",
"assets/assets/images/suggestions/rentals.jpeg": "fcb6b414d2a1eb7d194ce2dae2022587",
"assets/assets/images/suggestions/packages.png": "d1d07d5123188987f4ca9bfeeb188db7",
"assets/assets/images/suggestions/schedule.png": "23d170445be8bbac48ebaa873f990673",
"assets/assets/images/suggestions/jump_start.jpeg": "431699e849cb7cd41082d38e9d0857f0",
"assets/assets/images/direction/three.png": "fe304dab4fe0f73284c1beba0afb5db6",
"assets/assets/images/direction/two.png": "3030269792251eba6aa0f74f5ecadc6b",
"assets/assets/images/direction/four.png": "6bca6f6c672bd1287ed62eac1efae828",
"assets/assets/images/direction/end.png": "858a96587ac51d848fbcfb7c45a22f3b",
"assets/assets/images/direction/one.png": "8a0b529aa74f17fe05acd3a83a0933b2",
"assets/assets/images/direction/start.png": "979d1b5f8232a497949e173390da1ba1",
"assets/assets/images/jump.jpeg": "7093fc349833615f3aafa4a198bdf89b",
"assets/assets/images/jump_start_detail.png": "3550561d4d25e8c02f72b7b19d70d96b",
"assets/assets/images/package.jpeg": "7ef56e03344175fad5e541e9f9da181e",
"assets/assets/images/sos/msos.png": "9cb676be5bf24305fb6e38a2b366d9a4",
"assets/assets/images/sos/parkingsos.png": "7b2cc89c90bf481a697eb1e228019906",
"assets/assets/images/sos/vdbsn.png": "bbced466656f587b5ced6b3f1281efec",
"assets/assets/images/sos/sos.jpg": "d2e28e8044f03897ecfe08fdfe57d7bf",
"assets/assets/images/transparent.png": "6a893068a0a60c8787d7b43835879a78",
"assets/assets/images/dropoff.jpeg": "cccc12b334d58ea1bb0da2fd816bbc67",
"assets/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf": "78609089d3dad36318ae0190321e6f3e",
"assets/assets/fonts/RedHatDisplay-VariableFont_wght.ttf": "3147836655ff1d321b20880ba1900a8f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
