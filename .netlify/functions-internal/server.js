var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_node = require("@remix-run/node"), import_isbot = __toESM(require("isbot")), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      [callbackName]() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          status: didError ? 500 : responseStatusCode,
          headers: responseHeaders
        })), pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/nav.jsx
var import_react2 = __toESM(require("react"));
function Nav() {
  return /* @__PURE__ */ import_react2.default.createElement("nav", {
    class: "rounded border-gray-200 bg-white px-5 py-5 dark:bg-gray-900 sm:px-4"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    class: "container mx-auto flex flex-wrap items-center justify-between"
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/",
    class: "flex items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "/0.jpeg",
    class: "mr-3 h-6 sm:h-9",
    alt: "Bamu Logo"
  })), /* @__PURE__ */ import_react2.default.createElement("button", {
    "data-collapse-toggle": "navbar-default",
    type: "button",
    class: "ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    "aria-controls": "navbar-default",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    class: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    class: "h-6 w-6",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    class: "hidden w-full md:block md:w-auto",
    id: "navbar-default"
  }, /* @__PURE__ */ import_react2.default.createElement("ul", {
    class: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
  }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/",
    class: "block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700",
    "aria-current": "page"
  }, "Anasayfa")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/satis-noktalari",
    class: "block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  }, "Sat\u0131\u015F Noktalar\u0131")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/urunlerimiz",
    class: "block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  }, "\xDCr\xFCnlerimiz")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "/iletisim",
    class: "block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  }, "\u0130leti\u015Fim")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "https://bamushop.com/",
    class: "block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
  }, "Online Al\u0131\u015Fveri\u015F"))))));
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7PZVIGOO.css";

// app/session.server.js
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.js
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.js
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/models/user.server.js
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(password, userWithPassword.password.hash))
    return null;
  let _a = userWithPassword, { password: _password } = _a;
  return __objRest(_a, ["password"]);
}

// app/session.server.js
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/root.jsx
var import_react_router_dom = require("react-router-dom"), links = () => [{ rel: "stylesheet", href: tailwind_default }], meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
async function loader({ request }) {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
}
function App() {
  let location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, location.pathname.includes("admin") ? null : /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}

// app/routes/satis-noktalari.jsx
var satis_noktalari_exports = {};
__export(satis_noktalari_exports, {
  default: () => SatisNoktalari,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/models/point.server.js
async function getPoints() {
  return prisma.point.findMany();
}
async function createPoint(point) {
  return prisma.point.create({ data: point });
}
async function getPoint({ id }) {
  return prisma.point.findUnique({ where: { id } });
}
async function updatePoint(point) {
  return prisma.point.update({ where: { id: point.id }, data: point });
}
async function deletePoint(id) {
  return prisma.point.delete({ where: { id } });
}
async function getActiveCities() {
  return prisma.point.findMany({
    orderBy: {
      city: "asc"
    },
    select: {
      city: !0
    }
  });
}

// app/cities.json
var cities_default = [
  {
    id: 1,
    name: "Adana",
    latitude: "37.0000",
    longitude: "35.3213",
    population: 2183167,
    region: "Akdeniz"
  },
  {
    id: 2,
    name: "Ad\u0131yaman",
    latitude: "37.7648",
    longitude: "38.2786",
    population: 602774,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 3,
    name: "Afyonkarahisar",
    latitude: "38.7507",
    longitude: "30.5567",
    population: 709015,
    region: "Ege"
  },
  {
    id: 4,
    name: "A\u011Fr\u0131",
    latitude: "39.7191",
    longitude: "43.0503",
    population: 547210,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 5,
    name: "Amasya",
    latitude: "40.6499",
    longitude: "35.8353",
    population: 322167,
    region: "Karadeniz"
  },
  {
    id: 6,
    name: "Ankara",
    latitude: "39.9208",
    longitude: "32.8541",
    population: 5270575,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 7,
    name: "Antalya",
    latitude: "36.8841",
    longitude: "30.7056",
    population: 2288456,
    region: "Akdeniz"
  },
  {
    id: 8,
    name: "Artvin",
    latitude: "41.1828",
    longitude: "41.8183",
    population: 168370,
    region: "Karadeniz"
  },
  {
    id: 9,
    name: "Ayd\u0131n",
    latitude: "37.8560",
    longitude: "27.8416",
    population: 1053506,
    region: "Ege"
  },
  {
    id: 10,
    name: "Bal\u0131kesir",
    latitude: "39.6484",
    longitude: "27.8826",
    population: 1186688,
    region: "Ege"
  },
  {
    id: 11,
    name: "Bilecik",
    latitude: "40.0567",
    longitude: "30.0665",
    population: 212361,
    region: "Marmara"
  },
  {
    id: 12,
    name: "Bing\xF6l",
    latitude: "39.0626",
    longitude: "40.7696",
    population: 267184,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 13,
    name: "Bitlis",
    latitude: "38.3938",
    longitude: "42.1232",
    population: 267184,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 14,
    name: "Bolu",
    latitude: "40.5760",
    longitude: "31.5788",
    population: 291095,
    region: "Karadeniz"
  },
  {
    id: 15,
    name: "Burdur",
    latitude: "37.4613",
    longitude: "30.0665",
    population: 258339,
    region: "Akdeniz"
  },
  {
    id: 16,
    name: "Bursa",
    latitude: "40.2669",
    longitude: "29.0634",
    population: 2842547,
    region: "Marmara"
  },
  {
    id: 17,
    name: "\xC7anakkale",
    latitude: "40.1553",
    longitude: "26.4142",
    population: 513341,
    region: "Marmara"
  },
  {
    id: 18,
    name: "\xC7ank\u0131r\u0131",
    latitude: "40.6013",
    longitude: "33.6134",
    population: 180945,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 19,
    name: "\xC7orum",
    latitude: "40.5506",
    longitude: "34.9556",
    population: 525180,
    region: "Karadeniz"
  },
  {
    id: 20,
    name: "Denizli",
    latitude: "37.7765",
    longitude: "29.0864",
    population: 993442,
    region: "Ege"
  },
  {
    id: 21,
    name: "Diyarbak\u0131r",
    latitude: "37.9144",
    longitude: "40.2306",
    population: 1654196,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 22,
    name: "Edirne",
    latitude: "41.6818",
    longitude: "26.5623",
    population: 402537,
    region: "Marmara"
  },
  {
    id: 23,
    name: "El\xE2z\u0131\u011F",
    latitude: "38.6810",
    longitude: "39.2264",
    population: 574304,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 24,
    name: "Erzincan",
    latitude: "39.7500",
    longitude: "39.5000",
    population: 222918,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 25,
    name: "Erzurum",
    latitude: "39.9000",
    longitude: "41.2700",
    population: 762321,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 26,
    name: "Eski\u015Fehir",
    latitude: "39.7767",
    longitude: "30.5206",
    population: 826716,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 27,
    name: "Gaziantep",
    latitude: "37.0662",
    longitude: "37.3833",
    population: 1931836,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 28,
    name: "Giresun",
    latitude: "40.9128",
    longitude: "38.3895",
    population: 426686,
    region: "Karadeniz"
  },
  {
    id: 29,
    name: "G\xFCm\xFC\u015Fhane",
    latitude: "40.4386",
    longitude: "39.5086",
    population: 151449,
    region: "Karadeniz"
  },
  {
    id: 30,
    name: "Hakk\xE2ri",
    latitude: "37.5833",
    longitude: "43.7333",
    population: 278775,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 31,
    name: "Hatay",
    latitude: "36.4018",
    longitude: "36.3498",
    population: 1533507,
    region: "Akdeniz"
  },
  {
    id: 32,
    name: "Isparta",
    latitude: "37.7648",
    longitude: "30.5566",
    population: 421766,
    region: "Akdeniz"
  },
  {
    id: 33,
    name: "Mersin",
    latitude: "36.8000",
    longitude: "34.6333",
    population: 1745221,
    region: "Akdeniz"
  },
  {
    id: 34,
    name: "\u0130stanbul",
    latitude: "41.0053",
    longitude: "28.9770",
    population: 14657434,
    region: "Marmara"
  },
  {
    id: 35,
    name: "\u0130zmir",
    latitude: "38.4189",
    longitude: "27.1287",
    population: 4168415,
    region: "Ege"
  },
  {
    id: 36,
    name: "Kars",
    latitude: "40.6167",
    longitude: "43.1000",
    population: 292660,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 37,
    name: "Kastamonu",
    latitude: "41.3887",
    longitude: "33.7827",
    population: 372633,
    region: "Karadeniz"
  },
  {
    id: 38,
    name: "Kayseri",
    latitude: "38.7312",
    longitude: "35.4787",
    population: 1341056,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 39,
    name: "K\u0131rklareli",
    latitude: "41.7333",
    longitude: "27.2167",
    population: 346973,
    region: "Marmara"
  },
  {
    id: 40,
    name: "K\u0131r\u015Fehir",
    latitude: "39.1425",
    longitude: "34.1709",
    population: 225562,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 41,
    name: "Kocaeli",
    latitude: "40.8533",
    longitude: "29.8815",
    population: 1780055,
    region: "Marmara"
  },
  {
    id: 42,
    name: "Konya",
    latitude: "37.8667",
    longitude: "32.4833",
    population: 2130544,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 43,
    name: "K\xFCtahya",
    latitude: "39.4167",
    longitude: "29.9833",
    population: 571463,
    region: "Ege"
  },
  {
    id: 44,
    name: "Malatya",
    latitude: "38.3552",
    longitude: "38.3095",
    population: 772904,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 45,
    name: "Manisa",
    latitude: "38.6191",
    longitude: "27.4289",
    population: 1380366,
    region: "Ege"
  },
  {
    id: 46,
    name: "Kahramanmara\u015F",
    latitude: "37.5858",
    longitude: "36.9371",
    population: 1096610,
    region: "Akdeniz"
  },
  {
    id: 47,
    name: "Mardin",
    latitude: "37.3212",
    longitude: "40.7245",
    population: 796591,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 48,
    name: "Mu\u011Fla",
    latitude: "37.2153",
    longitude: "28.3636",
    population: 908877,
    region: "Ege"
  },
  {
    id: 49,
    name: "Mu\u015F",
    latitude: "38.9462",
    longitude: "41.7539",
    population: 408728,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 50,
    name: "Nev\u015Fehir",
    latitude: "38.6939",
    longitude: "34.6857",
    population: 286767,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 51,
    name: "Ni\u011Fde",
    latitude: "37.9667",
    longitude: "34.6833",
    population: 346114,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 52,
    name: "Ordu",
    latitude: "40.9839",
    longitude: "37.8764",
    population: 728949,
    region: "Karadeniz"
  },
  {
    id: 53,
    name: "Rize",
    latitude: "41.0201",
    longitude: "40.5234",
    population: 328979,
    region: "Karadeniz"
  },
  {
    id: 54,
    name: "Sakarya",
    latitude: "40.6940",
    longitude: "30.4358",
    population: 953181,
    region: "Marmara"
  },
  {
    id: 55,
    name: "Samsun",
    latitude: "41.2928",
    longitude: "36.3313",
    population: 1279884,
    region: "Karadeniz"
  },
  {
    id: 56,
    name: "Siirt",
    latitude: "37.9333",
    longitude: "41.9500",
    population: 320351,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 57,
    name: "Sinop",
    latitude: "42.0231",
    longitude: "35.1531",
    population: 204133,
    region: "Karadeniz"
  },
  {
    id: 58,
    name: "Sivas",
    latitude: "39.7477",
    longitude: "37.0179",
    population: 618617,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 59,
    name: "Tekirda\u011F",
    latitude: "40.9833",
    longitude: "27.5167",
    population: 937910,
    region: "Marmara"
  },
  {
    id: 60,
    name: "Tokat",
    latitude: "40.3167",
    longitude: "36.5500",
    population: 593990,
    region: "Karadeniz"
  },
  {
    id: 61,
    name: "Trabzon",
    latitude: "41.0015",
    longitude: "39.7178",
    population: 768417,
    region: "Karadeniz"
  },
  {
    id: 62,
    name: "Tunceli",
    latitude: "39.3074",
    longitude: "39.4388",
    population: 86076,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 63,
    name: "\u015Eanl\u0131urfa",
    latitude: "37.1591",
    longitude: "38.7969",
    population: 1892320,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 64,
    name: "U\u015Fak",
    latitude: "38.6823",
    longitude: "29.4082",
    population: 353048,
    region: "Ege"
  },
  {
    id: 65,
    name: "Van",
    latitude: "38.4891",
    longitude: "43.4089",
    population: 1096397,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 66,
    name: "Yozgat",
    latitude: "39.8181",
    longitude: "34.8147",
    population: 419440,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 67,
    name: "Zonguldak",
    latitude: "41.4564",
    longitude: "31.7987",
    population: 595907,
    region: "Karadeniz"
  },
  {
    id: 68,
    name: "Aksaray",
    latitude: "38.3687",
    longitude: "34.0370",
    population: 386514,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 69,
    name: "Bayburt",
    latitude: "40.2552",
    longitude: "40.2249",
    population: 78550,
    region: "Karadeniz"
  },
  {
    id: 70,
    name: "Karaman",
    latitude: "37.1759",
    longitude: "33.2287",
    population: 242196,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 71,
    name: "K\u0131r\u0131kkale",
    latitude: "39.8468",
    longitude: "33.5153",
    population: 270271,
    region: "\u0130\xE7 Anadolu"
  },
  {
    id: 72,
    name: "Batman",
    latitude: "37.8812",
    longitude: "41.1351",
    population: 566633,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 73,
    name: "\u015E\u0131rnak",
    latitude: "37.4187",
    longitude: "42.4918",
    population: 490184,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 74,
    name: "Bart\u0131n",
    latitude: "41.5811",
    longitude: "32.4610",
    population: 190708,
    region: "Karadeniz"
  },
  {
    id: 75,
    name: "Ardahan",
    latitude: "41.1105",
    longitude: "42.7022",
    population: 99265,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 76,
    name: "I\u011Fd\u0131r",
    latitude: "39.8880",
    longitude: "44.0048",
    population: 192435,
    region: "Do\u011Fu Anadolu"
  },
  {
    id: 77,
    name: "Yalova",
    latitude: "40.6500",
    longitude: "29.2667",
    population: 233009,
    region: "Marmara"
  },
  {
    id: 78,
    name: "Karab\xFCk",
    latitude: "41.2061",
    longitude: "32.6204",
    population: 236978,
    region: "Karadeniz"
  },
  {
    id: 79,
    name: "Kilis",
    latitude: "36.7184",
    longitude: "37.1212",
    population: 130655,
    region: "G\xFCneydo\u011Fu Anadolu"
  },
  {
    id: 80,
    name: "Osmaniye",
    latitude: "37.2130",
    longitude: "36.1763",
    population: 512873,
    region: "Akdeniz"
  },
  {
    id: 81,
    name: "D\xFCzce",
    latitude: "40.8438",
    longitude: "31.1565",
    population: 360388,
    region: "Karadeniz"
  }
];

// app/routes/satis-noktalari.jsx
var import_react5 = require("react"), loader2 = async () => {
  let points = await getPoints(), activeCitiesArray = await getActiveCities();
  return (0, import_node4.json)({ points, activeCitiesArray });
};
function SatisNoktalari() {
  let { points, activeCitiesArray } = (0, import_react4.useLoaderData)(), activeCities = ((a) => [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s)))(activeCitiesArray), [city, setCity] = (0, import_react5.useState)(activeCities[0].city);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex max-w-sm items-center p-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-medium text-black "
  }, "Sat\u0131\u015F Noktalar\u0131")), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl items-center p-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-10"
  }, "Bamu \u0130sot Kremas\u0131 sat\u0131\u015F noktalar\u0131m\u0131za a\u015Fa\u011F\u0131dan ula\u015Fabilirsiniz."), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "countries",
    className: "mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
  }, "\u015Eehir se\xE7iniz"), /* @__PURE__ */ React.createElement("select", {
    id: "city",
    name: "city",
    value: city,
    className: "mb-5 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    onChange: (e) => {
      setCity(e.target.value);
    }
  }, activeCities == null ? void 0 : activeCities.map((cit) => /* @__PURE__ */ React.createElement("option", {
    key: cit == null ? void 0 : cit.city,
    value: cit == null ? void 0 : cit.city
  }, cit.city, " "))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, points == null ? void 0 : points.filter((point) => (point == null ? void 0 : point.city) === city).map((point) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, point == null ? void 0 : point.name), /* @__PURE__ */ React.createElement("p", {
    className: "font-normal text-gray-700 dark:text-gray-400"
  }, point == null ? void 0 : point.adress), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold text-gray-700 dark:text-gray-400"
  }, point == null ? void 0 : point.city), /* @__PURE__ */ React.createElement("p", {
    className: "text-black-100 font-mono dark:text-gray-400"
  }, "\u{1F4DE} ", point == null ? void 0 : point.tel))))));
}

// app/routes/healthcheck.jsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader3
});
async function loader3({ request }) {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
}

// app/routes/posts/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/models/post.server.js
async function getPosts() {
  return prisma.post.findMany();
}
async function getPost(slug) {
  return prisma.post.findUnique({ where: { slug } });
}
async function createPost(post) {
  return prisma.post.create({ data: post });
}
async function updatePost(post) {
  return prisma.post.update({ where: { slug: post.slug }, data: post });
}
async function deletePost(slug) {
  return prisma.post.delete({ where: { slug } });
}

// app/routes/posts/$slug.jsx
var import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_marked = require("marked"), loader4 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "params.slug is required");
  let post = await getPost(params.slug);
  (0, import_tiny_invariant2.default)(post, `Post not found: ${params.slug}`);
  let html = (0, import_marked.marked)(post.markdown);
  return (0, import_node5.json)({ post, html });
};
function PostSlug() {
  let { post, html } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto max-w-4xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "my-6 border-b-2 text-center text-3xl"
  }, "Some Post"), /* @__PURE__ */ React.createElement("h2", null, post.title, " "), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: html }
  }), /* @__PURE__ */ React.createElement(import_react6.Link, {
    to: "/posts",
    className: "bg-blue-500 text-white py-1 px-2 rounded "
  }, "Back to posts"));
}

// app/routes/posts/admin.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => PostAdmin,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var loader5 = async () => (0, import_node6.json)({ posts: await getPosts() });
function PostAdmin() {
  let { posts } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-4xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "my-6 mb-2 border-b-2 text-center text-3xl"
  }, "Blog Admin"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-6"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "col-span-4 md:col-span-1"
  }, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: post.slug,
    className: "text-blue-600 underline"
  }, post.title)))), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/posts"
  }, "All posts")), /* @__PURE__ */ React.createElement("main", {
    className: "col-span-4 md:col-span-3"
  }, /* @__PURE__ */ React.createElement(import_react7.Outlet, null))));
}

// app/routes/posts/admin/$slug.jsx
var slug_exports2 = {};
__export(slug_exports2, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => PostSlug2,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_marked2 = require("marked"), import_react11 = require("react");

// app/utils.js
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react8.useMatches)(), route = (0, import_react9.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}
var inputClassName = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

// app/routes/posts/admin/$slug.jsx
var loader6 = async ({ params }) => {
  (0, import_tiny_invariant3.default)(params.slug, "params.slug is required");
  let post = await getPost(params.slug);
  if (!post)
    throw new Response("Not found", { status: 404 });
  let html = (0, import_marked2.marked)(post.markdown);
  return (0, import_node7.json)({ post, html });
}, action = async ({ request, params }) => {
  let formData = await request.formData();
  if (formData.get("intent") === "delete")
    return await deletePost(params.slug), (0, import_node7.redirect)("/posts/admin");
  let slug = params.slug, title = formData.get("title"), markdown = formData.get("markdown");
  return await updatePost({ title, markdown, slug }), (0, import_node7.redirect)("/posts/admin");
};
function PostSlug2() {
  var _a, _b;
  let { post } = (0, import_react10.useLoaderData)(), errors = (0, import_react10.useActionData)(), transition = (0, import_react11.useTransition)(), isUpdating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "update", isDeleting = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "delete";
  return /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto max-w-4xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "my-6 border-b-2 text-center text-3xl"
  }, "Some Post"), /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "/posts",
    className: "rounded bg-blue-500 py-1 px-2 text-white "
  }, "Back to posts"), /* @__PURE__ */ React.createElement(import_react10.Form, {
    method: "put"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", " ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.title, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    key: post.slug,
    defaultValue: post.title,
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.markdown, " ") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 15,
    name: "markdown",
    key: post.slug,
    className: `${inputClassName} font-mono`,
    defaultValue: post == null ? void 0 : post.markdown
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "update",
    className: "m-5 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isUpdating
  }, isUpdating ? "Updating..." : "Update Post"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "delete",
    className: "m-5 rounded bg-red-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isDeleting
  }, isDeleting ? "Deleting..." : "Delete Post")), console.log(post)));
}
function CatchBoundary() {
  if ((0, import_react10.useCatch)().status === 404)
    return /* @__PURE__ */ React.createElement("div", null, "Oh oh! Post not found");
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("div", {
    classname: "text-red-500"
  }, "Oh something went wrong!", /* @__PURE__ */ React.createElement("pre", null, error.message, " "));
}

// app/routes/posts/admin/index.jsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
var import_react12 = require("@remix-run/react");
function AdminIndex() {
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_react12.Link, {
    to: "new",
    className: "text-blue-600 underline"
  }, "Create a New Post"));
}

// app/routes/posts/admin/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPost
});
var import_react13 = require("@remix-run/react"), import_node8 = require("@remix-run/node");
var action2 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), slug = formData.get("slug"), markdown = formData.get("markdown"), errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node8.json)(errors) : (await createPost({ title, slug, markdown }), (0, import_node8.redirect)("/posts/admin"));
};
function NewPost() {
  let errors = (0, import_react13.useActionData)(), transition = (0, import_react13.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ React.createElement(import_react13.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", " ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.title, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug:", " ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.title, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug",
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.markdown, " ") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 15,
    name: "markdown",
    className: `${inputClassName} font-mono`
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isCreating
  }, isCreating ? "Creating..." : "Create Post")));
}

// app/routes/posts/index.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var loader7 = async () => (0, import_node9.json)({
  posts: await getPosts()
});
function Posts() {
  let { posts } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_react14.Link, {
    to: "admin",
    className: "text-red-600 underline"
  }, "Admin"), /* @__PURE__ */ React.createElement("h1", null, "Posts Page"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, /* @__PURE__ */ React.createElement(import_react14.Link, {
    to: post.slug,
    className: "text-blue-600 underline"
  }, post.title)))));
}

// app/routes/urunlerimiz.jsx
var urunlerimiz_exports = {};
__export(urunlerimiz_exports, {
  default: () => Urunlerimiz,
  loader: () => loader8
});
var import_react15 = require("@remix-run/react"), import_node10 = require("@remix-run/node");

// app/models/product.server.js
async function getProducts() {
  return prisma.product.findMany();
}
async function getProduct({ id }) {
  return prisma.product.findUnique({ where: { id } });
}
async function createProduct({ name, imageSlug }) {
  return prisma.product.create({ data: { name, imageSlug } });
}
async function updateProduct({ id, name, imageSlug }) {
  return prisma.product.update({ where: { id }, data: { name, imageSlug } });
}
async function deleteProduct({ id }) {
  return prisma.product.delete({ where: { id } });
}

// app/routes/urunlerimiz.jsx
var loader8 = async ({}) => {
  let products = await getProducts();
  return (0, import_node10.json)({ products });
};
function Urunlerimiz() {
  let { products } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex max-w-sm items-center p-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-medium text-black "
  }, "\xDCr\xFCnlerimiz")), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl items-center p-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, products.map((product) => /* @__PURE__ */ React.createElement("div", {
    class: "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "rounded-t-lg",
    src: "/" + (product == null ? void 0 : product.imageSlug),
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    class: "p-5"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, product == null ? void 0 : product.name))))))));
}

// app/routes/iletisim.jsx
var iletisim_exports = {};
__export(iletisim_exports, {
  default: () => Iletisim
});
var import_react16 = __toESM(require("react"));
function Iletisim() {
  return /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "mx-auto max-w-2xl items-center p-6"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "m-10 mb-6 lg:mb-0"
  }, /* @__PURE__ */ import_react16.default.createElement("span", {
    class: "block mb-4 text-base text-primary font-semibold"
  }, "\u0130leti\u015Fim               "), /* @__PURE__ */ import_react16.default.createElement("h2", {
    class: `
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  `
  }, "B\u0130Z\u0130MLE \u0130LET\u0130\u015E\u0130ME GE\xC7\u0130N               "), /* @__PURE__ */ import_react16.default.createElement("p", {
    class: "text-base text-body-color leading-relaxed mb-9"
  }, "Bizimle ileti\u015Fime ge\xE7mek i\xE7in a\u015Fa\u011F\u0131daki ileti\u015Fim formu, mail adresi ve telefon numaras\u0131n\u0131 kullanabilirsiniz."), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "flex mb-8 max-w-[370px] w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    class: `
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     `
  }, /* @__PURE__ */ import_react16.default.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    class: "fill-current"
  }, /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"
  }))), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("h4", {
    class: "font-bold text-dark text-xl mb-1"
  }, "Adres"), /* @__PURE__ */ import_react16.default.createElement("p", {
    class: "text-base text-body-color"
  }, "\xD6zsan Sanayi sitesi 11. Blok No:5 Ye\u015Filyurt/ MALATYA"))), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "flex mb-8 max-w-[370px] w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    class: `
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     `
  }, /* @__PURE__ */ import_react16.default.createElement("svg", {
    width: "24",
    height: "26",
    viewBox: "0 0 24 26",
    class: "fill-current"
  }, /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"
  }), /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"
  }), /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"
  }))), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("h4", {
    class: "font-bold text-dark text-xl mb-1"
  }, "Tel"), /* @__PURE__ */ import_react16.default.createElement("p", {
    class: "text-base text-body-color"
  }, "0850 305 4401"), /* @__PURE__ */ import_react16.default.createElement("p", {
    class: "text-base text-body-color"
  }, "Fabrika: 0422 238 0474 "))), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "flex mb-8 max-w-[370px] w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    class: `
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     `
  }, /* @__PURE__ */ import_react16.default.createElement("svg", {
    width: "28",
    height: "19",
    viewBox: "0 0 28 19",
    class: "fill-current"
  }, /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
  }))), /* @__PURE__ */ import_react16.default.createElement("div", {
    class: "w-full"
  }, /* @__PURE__ */ import_react16.default.createElement("h4", {
    class: "font-bold text-dark text-xl mb-1"
  }, "Email"), /* @__PURE__ */ import_react16.default.createElement("p", {
    class: "text-base text-body-color"
  }, "info@bamu.com.tr"))))));
}

// app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node");
async function action3({ request }) {
  return logout(request);
}
async function loader9() {
  return (0, import_node11.redirect)("/");
}

// app/routes/admin.jsx
var admin_exports3 = {};
__export(admin_exports3, {
  default: () => Admin,
  loader: () => loader10
});
var import_react17 = require("@remix-run/react"), import_node12 = require("@remix-run/node");
var loader10 = async () => (0, import_node12.json)({
  points: await getPoints(),
  products: await getProducts()
});
function Admin() {
  let user = useUser(), { points, products } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full min-h-screen flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between bg-slate-800 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "."
  }, "Sat\u0131\u015F Noktalar\u0131")), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement(import_react17.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
  }, "Logout"))), /* @__PURE__ */ React.createElement("main", {
    className: "flex h-full bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-80 border-r bg-gray-50"
  }, /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "new",
    className: "block p-4 text-xl text-blue-500"
  }, "+ Yeni Sat\u0131\u015F Noktas\u0131"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_react17.Link, {
    to: "new-product",
    className: "block p-4 text-xl text-blue-500"
  }, "+ Yeni \xDCr\xFCn"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h4", null, "Sat\u0131\u015F Noktalar\u0131"), /* @__PURE__ */ React.createElement("hr", null), points.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No points yet") : /* @__PURE__ */ React.createElement("ol", null, points.map((point) => /* @__PURE__ */ React.createElement("li", {
    key: point.id
  }, /* @__PURE__ */ React.createElement(import_react17.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: {
      pathname: `${point.id}`
    }
  }, "\u{1F4DD} ", point.name)))), /* @__PURE__ */ React.createElement("h4", null, "\xDCr\xFCnler"), /* @__PURE__ */ React.createElement("hr", null), products.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No products yet") : /* @__PURE__ */ React.createElement("ol", null, products.map((product) => /* @__PURE__ */ React.createElement("li", {
    key: product.id
  }, /* @__PURE__ */ React.createElement(import_react17.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: {
      pathname: `products/${product.id}`
    }
  }, "\u{1F4DD} ", product.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-6"
  }, /* @__PURE__ */ React.createElement(import_react17.Outlet, null))));
}

// app/routes/admin/products/$productId.jsx
var productId_exports = {};
__export(productId_exports, {
  action: () => action4,
  default: () => ProductId,
  loader: () => loader11
});
var import_react18 = require("@remix-run/react"), import_node13 = require("@remix-run/node"), import_react19 = __toESM(require("react"));
var loader11 = async ({ request, params }) => {
  let product = await getProduct({ id: parseInt(params.productId) });
  return (0, import_node13.json)({ product });
}, action4 = async ({ request, params }) => {
  let formData = await request.formData(), name = formData.get("name"), imageSlug = formData.get("imageSlug"), id = parseInt(params.productId);
  return formData.get("intent") === "update" && await updateProduct({ id, name, imageSlug }), formData.get("intent") === "delete" && await deleteProduct({ id, name, imageSlug }), (0, import_node13.redirect)("/admin");
};
function ProductId() {
  var _a, _b;
  let { product } = (0, import_react18.useLoaderData)(), transition = (0, import_react18.useTransition)(), isUpdating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "update", isDeleting = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "delete";
  return /* @__PURE__ */ import_react19.default.createElement("div", null, " ", "Product Details", /* @__PURE__ */ import_react19.default.createElement(import_react18.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "xs:w-full mb-6 grid w-1/2 gap-6 sm:w-full md:w-full md:grid-cols-2 lg:w-1/2 "
  }, /* @__PURE__ */ import_react19.default.createElement("label", null, "Product Name:", " ", /* @__PURE__ */ import_react19.default.createElement("input", {
    type: "text",
    key: product == null ? void 0 : product.id,
    name: "name",
    defaultValue: product == null ? void 0 : product.name,
    className: inputClassName
  })), /* @__PURE__ */ import_react19.default.createElement("label", null, "imageSlug:", " ", /* @__PURE__ */ import_react19.default.createElement("input", {
    type: "text",
    key: product == null ? void 0 : product.id,
    name: "imageSlug",
    defaultValue: product == null ? void 0 : product.imageSlug,
    className: inputClassName
  }))), /* @__PURE__ */ import_react19.default.createElement("button", {
    type: "submit",
    name: "intent",
    value: "update",
    className: "m-5 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isUpdating
  }, isUpdating ? "Updating..." : "Update Post"), /* @__PURE__ */ import_react19.default.createElement("button", {
    type: "submit",
    name: "intent",
    value: "delete",
    className: "m-5 rounded bg-red-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isDeleting
  }, isDeleting ? "Deleting..." : "Delete Post")));
}

// app/routes/admin/new-product.jsx
var new_product_exports = {};
__export(new_product_exports, {
  action: () => action5,
  default: () => Newproduct
});
var import_react20 = require("@remix-run/react"), import_react21 = __toESM(require("react"));
var import_node14 = require("@remix-run/node");
var action5 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), imageSlug = formData.get("imageSlug");
  return await createProduct({ name, imageSlug }), (0, import_node14.redirect)("/admin");
};
function Newproduct() {
  let transition = (0, import_react20.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ import_react21.default.createElement("div", null, "new-product", /* @__PURE__ */ import_react21.default.createElement(import_react20.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement("label", null, "Product Name: "), /* @__PURE__ */ import_react21.default.createElement("input", {
    type: "text",
    name: "name",
    className: inputClassName
  })), /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement("label", null, "ImageSlug: "), /* @__PURE__ */ import_react21.default.createElement("input", {
    type: "text",
    name: "imageSlug",
    className: inputClassName
  })), /* @__PURE__ */ import_react21.default.createElement("p", {
    className: "xs:w-full w-1/2 text-right sm:w-full md:w-full lg:w-1/2"
  }, /* @__PURE__ */ import_react21.default.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isCreating
  }, isCreating ? "Creating..." : "Create Post"))));
}

// app/routes/admin/$pointId.jsx
var pointId_exports = {};
__export(pointId_exports, {
  action: () => action6,
  default: () => PointsDetailPage,
  loader: () => loader12
});
var import_node15 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var loader12 = async ({ request, params }) => {
  let point = await getPoint({ id: parseInt(params.pointId) });
  return (0, import_node15.json)({ point });
}, action6 = async ({ request, params }) => {
  let formData = await request.formData(), id = parseInt(params.pointId);
  if (formData.get("intent") === "delete")
    return await deletePoint(parseInt(params.pointId)), (0, import_node15.redirect)("/admin");
  let name = formData.get("name"), adress = formData.get("adress"), tel = formData.get("tel");
  return await updatePoint({ id, name, adress, tel }), (0, import_node15.redirect)("/admin");
};
function PointsDetailPage() {
  var _a, _b;
  let { point } = (0, import_react22.useLoaderData)(), errors = (0, import_react22.useActionData)(), transition = (0, import_react22.useTransition)(), isUpdating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "update", isDeleting = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "delete";
  return /* @__PURE__ */ React.createElement("div", null, "Points Details", /* @__PURE__ */ React.createElement(import_react22.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xs:w-full mb-6 grid w-1/2 gap-6 sm:w-full md:w-full md:grid-cols-2 lg:w-1/2 "
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Point Name:", " ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.name, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    key: point.id,
    name: "name",
    defaultValue: point.name,
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Point Adress:", " ", (errors == null ? void 0 : errors.adress) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.adress, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    key: point.id,
    name: "adress",
    defaultValue: point.adress,
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Point city:", " ", (errors == null ? void 0 : errors.city) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.city, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "city",
    key: point.id,
    defaultValue: point == null ? void 0 : point.city,
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Point Tel:", " ", (errors == null ? void 0 : errors.tel) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.tel, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    pattern: "[0-9]*",
    name: "tel",
    key: point.id,
    defaultValue: point == null ? void 0 : point.tel,
    className: inputClassName
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "xs:w-full w-1/2 text-right sm:w-full md:w-full lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "update",
    className: "m-5 rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isUpdating
  }, isUpdating ? "Updating..." : "Update Post"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "delete",
    className: "rounded bg-red-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isUpdating
  }, isDeleting ? "Deleting..." : "Delete Post"))));
}

// app/routes/admin/index.jsx
var admin_exports4 = {};
__export(admin_exports4, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, "index");
}

// app/routes/admin/new.jsx
var new_exports2 = {};
__export(new_exports2, {
  action: () => action7,
  default: () => New
});
var import_react23 = require("@remix-run/react"), import_node16 = require("@remix-run/node");
var action7 = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), adress = formData.get("adress"), city = formData.get("city");
  console.log(city, "city");
  let tel = formData.get("tel"), errors = {
    name: name ? null : "name is required",
    adress: adress ? null : "adress is required",
    city: city ? null : "city is required",
    tel: tel ? null : "tel is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node16.json)(errors) : (await createPoint({ name, adress, city, tel }), (0, import_node16.redirect)("/admin"));
};
function New() {
  let errors = (0, import_react23.useActionData)(), transition = (0, import_react23.useTransition)(), isCreating = Boolean(transition.submission);
  return /* @__PURE__ */ React.createElement("div", null, "New point", /* @__PURE__ */ React.createElement(import_react23.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-6 grid gap-6 w-1/2 md:grid-cols-2 lg:w-1/2 md:w-full sm:w-full xs:w-full "
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Point Name:", " ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.name, " ") : null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    className: inputClassName
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Point Adress:", " ", (errors == null ? void 0 : errors.adress) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.adress, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "adress",
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Point city:", " ", (errors == null ? void 0 : errors.city) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.city, " ") : null, /* @__PURE__ */ React.createElement("select", {
    name: "city",
    id: "small",
    className: inputClassName
  }, cities_default.map((city) => /* @__PURE__ */ React.createElement("option", {
    key: city == null ? void 0 : city.name,
    value: city == null ? void 0 : city.name
  }, city == null ? void 0 : city.name))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Point Tel:", " ", (errors == null ? void 0 : errors.tel) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.tel, " ") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    pattern: "[0-9]*",
    name: "tel",
    className: inputClassName
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "text-right w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
    disabled: isCreating
  }, isCreating ? "Creating..." : "Create Post"))));
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
var import_react24 = require("@remix-run/react");
function Index2() {
  let user = useOptionalUser(), news = [
    {
      title: "19-24 Ekim 2021\u2019de \u0130stanbul Yenikap\u0131\u2019day\u0131z",
      content: "19-24 Ekim tarihleri aras\u0131nda \u0130stanbul Yenikap\u0131 etkinlik alan\u0131nda d\xFCzenlenen Malatya G\xFCnleri\u2019ndeyiz. T\xFCm m\xFC\u015Fterilerimizi stand\u0131m\u0131za bekliyoruz.      ",
      img: "/fair1.jpeg"
    },
    {
      title: "\u0130stanbul Malatya G\xFCnleri\u2019ndeyiz",
      content: "9-13 Ekim Tarihleri aras\u0131nda Yenikap\u0131\u2019da d\xFCzenlenecek olan Malatya Tan\u0131t\u0131m G\xFCnleri\u2019ndeyiz      ",
      img: "/fair2.jpeg"
    },
    {
      title: "6-15 Eyl\xFCl 2019 Tarihleri Aras\u0131nda \u0130zmir Enternasyonel Fuar\u0131\u2019nday\u0131z.    ",
      content: "Bamu olarak 6-15 Eyl\xFCl Tarihleri Aras\u0131nda \u0130zmir Enternasyonel Fuar\u0131\u2019nday\u0131z.    ",
      img: "/fair3.png"
    }
  ];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("main", {
    className: "relative bg-white sm:flex sm:items-center sm:justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:pb-16 sm:pt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-full w-full object-cover",
    src: "/header3.jpeg",
    alt: "Sonic Youth On Stage"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative m-40 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "text-center"
  }, "Baz\u0131 M\xFC\u015Fterilerimiz"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 flex flex-wrap justify-center gap-8"
  }, [
    {
      src: "/esenlik.png",
      alt: "Esenlik"
    },
    {
      src: "/carsimarket.png",
      alt: "\xC7ar\u015F\u0131"
    },
    {
      src: "/mgross.png",
      alt: "Mgross"
    },
    {
      src: "/guvenli.png",
      alt: "G\xFCvenli Market"
    },
    {
      src: "/hilton.jpeg",
      alt: "Hilton"
    },
    {
      src: "/sedir.jpeg",
      alt: "Sedir"
    },
    {
      src: "/akranlar.webp",
      alt: "Akranlar"
    }
  ].map((img) => /* @__PURE__ */ React.createElement("a", {
    key: img.href,
    href: img.href,
    className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: img.alt,
    src: img.src
  }))))))), /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 py-20 px-10 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    class: "w-full rounded-lg",
    src: "/M3-1024x1024.jpeg"
  })), /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto p-5"
  }, /* @__PURE__ */ React.createElement("h5", {
    class: " mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, "Mutfa\u011F\u0131n\u0131z\u0131n vazge\xE7ilmezi: T\xFCm yemeklerde kullanabilece\u011Finiz \u0130sot Kremas\u0131"), /* @__PURE__ */ React.createElement("p", {
    class: "mb-3 font-normal text-gray-700 dark:text-gray-400"
  }, "Sulu yemeklerde, bal\u0131k-tavuk \u0131zgaralarda, \xE7i\u011Fk\xF6ftelerde, makarnalarda vb. t\xFCm yemeklerinizde \u0130sot Kremas\u0131'n\u0131 rahatl\u0131kla kullanabilirsiniz. Sal\xE7a kullanman\u0131za gerek kalmaz, muhte\u015Fem kar\u0131\u015F\u0131m\u0131n verdi\u011Fi lezzeti siz de tad\u0131n!")), " ", /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto p-5"
  }, /* @__PURE__ */ React.createElement("h5", {
    class: " mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, "Nas\u0131l kullanabilirsiniz?"), /* @__PURE__ */ React.createElement("p", {
    class: "mb-3 font-normal text-gray-700 dark:text-gray-400"
  }, "Kahvalt\u0131larda ekme\u011Fe s\xFCrerek, patates k\u0131zartmas\u0131n\u0131n yan\u0131na sos olarak, omlet yaparken sal\xE7a ve baharat yerine t\xFCketebilirsiniz. Tavuk, Bal\u0131k ve Ci\u011Fer \u0131zgaralar\u0131 soslamada kullanabilirsiniz. Sal\xE7a ve baharat kulland\u0131\u011F\u0131n\u0131z t\xFCm yemeklerinizde kullanabilirsiniz.(F\u0131r\u0131n yemekleri, Fasulye-nohut gibi sulu yemekler, k\u0131s\u0131r, makarna, bulgur pilav\u0131, mant\u0131 sosu vb. t\xFCm yemeklerde) \xC7i\u011Fk\xF6fte yaparken kulland\u0131\u011F\u0131n\u0131zda ba\u015Fka hi\xE7bir baharata veya sal\xE7aya gerek kalmaz. Ayr\u0131ca yan\u0131nda meze olarak da kullanabilirsiniz.", " ")), " ", /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    class: "w-full rounded-lg",
    src: "/M4-1024x1024.jpeg"
  }))), /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  }, news.map((haber, index) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    key: index,
    class: "container max-w-md rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:m-10"
  }, /* @__PURE__ */ React.createElement("img", {
    class: "max-h-80 rounded-t-lg",
    src: haber.img,
    alt: haber.title
  }), /* @__PURE__ */ React.createElement("div", {
    class: "p-5"
  }, /* @__PURE__ */ React.createElement("h5", {
    class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  }, haber.title, " "), /* @__PURE__ */ React.createElement("p", {
    class: "mb-3 font-normal text-gray-700 dark:text-gray-400"
  }, haber.content)))))), /* @__PURE__ */ React.createElement("div", {
    class: "dark:bg-gray-900"
  }, /* @__PURE__ */ React.createElement("section", {
    class: "container mx-auto w-full py-36"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "text-center text-2xl font-black leading-snug text-gray-800 dark:text-white md:text-2xl lg:w-3/4"
  }, /* @__PURE__ */ React.createElement("h2", null, "Bir i\u015Fletmeniz mi var? \u0130\u015Fyerinizde \u0130sot Kremas\u0131 satmak veya mutfa\u011F\u0131n\u0131zda kullanmak istiyorsan\u0131z hemen Whatsapp'tan irtibata ge\xE7in veya aray\u0131n.")), /* @__PURE__ */ React.createElement("div", {
    class: "mt-16 flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://api.whatsapp.com/send?phone=908503054401"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    class: "mr-2 mb-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  }, "Whatsapp")), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    class: "mr-2 mb-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  }, "08503054401"))))), /* @__PURE__ */ React.createElement("footer", {
    class: "bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10"
  }, /* @__PURE__ */ React.createElement("div", {
    class: "mx-auto max-w-screen-xl text-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    class: "flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
  }, "Bamu \u0130sot Kremas\u0131"), /* @__PURE__ */ React.createElement("ul", {
    class: "mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/satis-noktalari",
    class: "mr-4 hover:underline md:mr-6 "
  }, "Sat\u0131\u015F Noktalar\u0131")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/urunlerimiz",
    class: "mr-4 hover:underline md:mr-6"
  }, "\xDCr\xFCnlerimiz")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/iletisim",
    class: "mr-4 hover:underline md:mr-6 "
  }, "\u0130leti\u015Fim")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://bamushop.com/",
    class: "mr-4 hover:underline md:mr-6"
  }, "Online Al\u0131\u015Fveri\u015F"))), /* @__PURE__ */ React.createElement("span", {
    class: "text-sm text-gray-500 dark:text-gray-400 sm:text-center"
  }, "\xA9 2021-2022", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    class: "hover:underline"
  }, "Bamu"), ". T\xFCm haklar\u0131 sakl\u0131d\u0131r."))));
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => LoginPage,
  loader: () => loader13,
  meta: () => meta2
});
var import_node17 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), React6 = __toESM(require("react"));
async function loader13({ request }) {
  return await getUserId(request) ? (0, import_node17.redirect)("/") : (0, import_node17.json)({});
}
async function action8({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/notes"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node17.json)({ errors: { email: "Email is invalid", password: null } }, { status: 400 });
  if (typeof password != "string" || password.length === 0)
    return (0, import_node17.json)({ errors: { email: null, password: "Password is required" } }, { status: 400 });
  if (password.length < 8)
    return (0, import_node17.json)({ errors: { email: null, password: "Password is too short" } }, { status: 400 });
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node17.json)({ errors: { email: "Invalid email or password", password: null } }, { status: 400 });
}
var meta2 = () => ({
  title: "Login"
});
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react25.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react25.useActionData)(), emailRef = React6.useRef(null), passwordRef = React6.useRef(null);
  return React6.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) ? (_b2 = emailRef.current) == null || _b2.focus() : ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ React6.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React6.createElement(import_react25.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React6.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React6.createElement("input", {
    ref: emailRef,
    id: "email",
    required: !0,
    autoFocus: !0,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? !0 : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React6.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React6.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React6.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "current-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? !0 : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React6.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React6.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React6.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Log in"), /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React6.createElement("input", {
    id: "remember",
    name: "remember",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  }), /* @__PURE__ */ React6.createElement("label", {
    htmlFor: "remember",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /* @__PURE__ */ React6.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Don't have an account?", " ", /* @__PURE__ */ React6.createElement(import_react25.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/join",
      search: searchParams.toString()
    }
  }, "Sign up"))))));
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader14
});
var import_node18 = require("@remix-run/node"), import_react26 = require("@remix-run/react");

// app/models/note.server.js
function getNote({ id, userId }) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({ body, title, userId }) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({ id, userId }) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.jsx
async function loader14({ request }) {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node18.json)({ noteListItems });
}
function NotesPage() {
  let data = (0, import_react26.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full min-h-screen flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between bg-slate-800 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "."
  }, "Notes")), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement(import_react26.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
  }, "Logout"))), /* @__PURE__ */ React.createElement("main", {
    className: "flex h-full bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-80 border-r bg-gray-50"
  }, /* @__PURE__ */ React.createElement(import_react26.Link, {
    to: "new",
    className: "block p-4 text-xl text-blue-500"
  }, "+ New Note"), /* @__PURE__ */ React.createElement("hr", null), data.noteListItems.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No notes yet") : /* @__PURE__ */ React.createElement("ol", null, data.noteListItems.map((note) => /* @__PURE__ */ React.createElement("li", {
    key: note.id
  }, /* @__PURE__ */ React.createElement(import_react26.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: note.id
  }, "\u{1F4DD} ", note.title))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-6"
  }, /* @__PURE__ */ React.createElement(import_react26.Outlet, null))));
}

// app/routes/notes/$noteId.jsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action9,
  default: () => NoteDetailsPage,
  loader: () => loader15
});
var import_node19 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_tiny_invariant4 = __toESM(require("tiny-invariant"));
async function loader15({ request, params }) {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant4.default)(params.noteId, "noteId not found");
  let note = await getNote({ userId, id: params.noteId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node19.json)({ note });
}
async function action9({ request, params }) {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant4.default)(params.noteId, "noteId not found"), await deleteNote({ userId, id: params.noteId }), (0, import_node19.redirect)("/notes");
}
function NoteDetailsPage() {
  let data = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, data.note.title), /* @__PURE__ */ React.createElement("p", {
    className: "py-6"
  }, data.note.body), /* @__PURE__ */ React.createElement("hr", {
    className: "my-4"
  }), /* @__PURE__ */ React.createElement(import_react27.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Delete")));
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ React.createElement("div", null, "An unexpected error occurred: ", error.message);
}
function CatchBoundary2() {
  let caught = (0, import_react27.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ React.createElement("div", null, "Note not found");
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// app/routes/notes/index.jsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
var import_react28 = require("@remix-run/react");
function NoteIndexPage() {
  return /* @__PURE__ */ React.createElement("p", null, "No note selected. Select a note on the left, or", " ", /* @__PURE__ */ React.createElement(import_react28.Link, {
    to: "new",
    className: "text-blue-500 underline"
  }, "create a new note."));
}

// app/routes/notes/new.jsx
var new_exports3 = {};
__export(new_exports3, {
  action: () => action10,
  default: () => NewNotePage
});
var import_node20 = require("@remix-run/node"), import_react29 = require("@remix-run/react"), React7 = __toESM(require("react"));
async function action10({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node20.json)({ errors: { title: "Title is required", body: null } }, { status: 400 });
  if (typeof body != "string" || body.length === 0)
    return (0, import_node20.json)({ errors: { title: null, body: "Body is required" } }, { status: 400 });
  let note = await createNote({ title, body, userId });
  return (0, import_node20.redirect)(`/notes/${note.id}`);
}
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react29.useActionData)(), titleRef = React7.useRef(null), bodyRef = React7.useRef(null);
  return React7.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) ? (_b2 = titleRef.current) == null || _b2.focus() : ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ React7.createElement(import_react29.Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React7.createElement("span", null, "Title: "), /* @__PURE__ */ React7.createElement("input", {
    ref: titleRef,
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? !0 : void 0,
    "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
  })), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ React7.createElement("div", {
    className: "pt-1 text-red-700",
    id: "title-error"
  }, actionData.errors.title)), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React7.createElement("span", null, "Body: "), /* @__PURE__ */ React7.createElement("textarea", {
    ref: bodyRef,
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? !0 : void 0,
    "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
  })), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ React7.createElement("div", {
    className: "pt-1 text-red-700",
    id: "body-error"
  }, actionData.errors.body)), /* @__PURE__ */ React7.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React7.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}

// app/routes/join.jsx
var join_exports = {};
__export(join_exports, {
  action: () => action11,
  default: () => Join,
  loader: () => loader16,
  meta: () => meta3
});
var import_node21 = require("@remix-run/node"), import_react30 = require("@remix-run/react"), React8 = __toESM(require("react"));
async function loader16({ request }) {
  return await getUserId(request) ? (0, import_node21.redirect)("/") : (0, import_node21.json)({});
}
async function action11({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node21.json)({ errors: { email: "Email is invalid", password: null } }, { status: 400 });
  if (typeof password != "string" || password.length === 0)
    return (0, import_node21.json)({ errors: { email: null, password: "Password is required" } }, { status: 400 });
  if (password.length < 8)
    return (0, import_node21.json)({ errors: { email: null, password: "Password is too short" } }, { status: 400 });
  if (await getUserByEmail(email))
    return (0, import_node21.json)({
      errors: {
        email: "A user already exists with this email",
        password: null
      }
    }, { status: 400 });
  let user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}
var meta3 = () => ({
  title: "Sign Up"
});
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react30.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react30.useActionData)(), emailRef = React8.useRef(null), passwordRef = React8.useRef(null);
  return React8.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) ? (_b2 = emailRef.current) == null || _b2.focus() : ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ React8.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React8.createElement(import_react30.Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React8.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React8.createElement("input", {
    ref: emailRef,
    id: "email",
    required: !0,
    autoFocus: !0,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? !0 : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React8.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React8.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React8.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? !0 : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React8.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React8.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React8.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Create Account"), /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Already have an account?", " ", /* @__PURE__ */ React8.createElement(import_react30.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/login",
      search: searchParams.toString()
    }
  }, "Log in"))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b9693285", entry: { module: "/build/entry.client-N4NDTYHF.js", imports: ["/build/_shared/chunk-DOGMSUO4.js", "/build/_shared/chunk-M4XHNU2Q.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R2UQC6ZG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-DD22EJT2.js", imports: ["/build/_shared/chunk-2KNOV7HM.js", "/build/_shared/chunk-EUZNRB6R.js", "/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/$pointId": { id: "routes/admin/$pointId", parentId: "routes/admin", path: ":pointId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/$pointId-VTISNTOL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-UDNGQ5Y5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/new": { id: "routes/admin/new", parentId: "routes/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/new-RAK6U2IS.js", imports: ["/build/_shared/chunk-4NH7UC5G.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/new-product": { id: "routes/admin/new-product", parentId: "routes/admin", path: "new-product", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/new-product-ENS5CNNV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/products/$productId": { id: "routes/admin/products/$productId", parentId: "routes/admin", path: "products/:productId", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/products/$productId-46ZRNYFG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-Z2BSKLEY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/iletisim": { id: "routes/iletisim", parentId: "root", path: "iletisim", index: void 0, caseSensitive: void 0, module: "/build/routes/iletisim-NW5ULJCQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EKQ7UUIJ.js", imports: ["/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-VPF5AAR3.js", imports: ["/build/_shared/chunk-WAFMEQME.js", "/build/_shared/chunk-QRGKP3W3.js", "/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-ABILZFJB.js", imports: ["/build/_shared/chunk-WAFMEQME.js", "/build/_shared/chunk-QRGKP3W3.js", "/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-4QZP3AYA.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-LACJDGN2.js", imports: ["/build/_shared/chunk-OQYTGSYT.js", "/build/_shared/chunk-QRGKP3W3.js", "/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/$noteId": { id: "routes/notes/$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/$noteId-LZIYUJRJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes/index": { id: "routes/notes/index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes/index-S2HZM6VO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/new": { id: "routes/notes/new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/new-LANBYVPJ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$slug": { id: "routes/posts/$slug", parentId: "root", path: "posts/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$slug-DBDYLPD5.js", imports: ["/build/_shared/chunk-IBBWVID6.js", "/build/_shared/chunk-RNV55LFY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin": { id: "routes/posts/admin", parentId: "root", path: "posts/admin", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin-CM4KJ36Z.js", imports: ["/build/_shared/chunk-RNV55LFY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/$slug": { id: "routes/posts/admin/$slug", parentId: "routes/posts/admin", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin/$slug-JT3OARF4.js", imports: ["/build/_shared/chunk-ATHCWIFU.js", "/build/_shared/chunk-6QO2NZ6H.js", "/build/_shared/chunk-IBBWVID6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/posts/admin/index": { id: "routes/posts/admin/index", parentId: "routes/posts/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/admin/index-YBYKWC4E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/admin/new": { id: "routes/posts/admin/new", parentId: "routes/posts/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/admin/new-OHD4F772.js", imports: ["/build/_shared/chunk-ATHCWIFU.js", "/build/_shared/chunk-6QO2NZ6H.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-XYJUV4QV.js", imports: ["/build/_shared/chunk-RNV55LFY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/satis-noktalari": { id: "routes/satis-noktalari", parentId: "root", path: "satis-noktalari", index: void 0, caseSensitive: void 0, module: "/build/routes/satis-noktalari-KGIL6C6G.js", imports: ["/build/_shared/chunk-4NH7UC5G.js", "/build/_shared/chunk-EUZNRB6R.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/urunlerimiz": { id: "routes/urunlerimiz", parentId: "root", path: "urunlerimiz", index: void 0, caseSensitive: void 0, module: "/build/routes/urunlerimiz-4JY644C3.js", imports: ["/build/_shared/chunk-2KNOV7HM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B9693285.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/satis-noktalari": {
    id: "routes/satis-noktalari",
    parentId: "root",
    path: "satis-noktalari",
    index: void 0,
    caseSensitive: void 0,
    module: satis_noktalari_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "root",
    path: "posts/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/admin": {
    id: "routes/posts/admin",
    parentId: "root",
    path: "posts/admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/posts/admin/$slug": {
    id: "routes/posts/admin/$slug",
    parentId: "routes/posts/admin",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/posts/admin/index": {
    id: "routes/posts/admin/index",
    parentId: "routes/posts/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/posts/admin/new": {
    id: "routes/posts/admin/new",
    parentId: "routes/posts/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/urunlerimiz": {
    id: "routes/urunlerimiz",
    parentId: "root",
    path: "urunlerimiz",
    index: void 0,
    caseSensitive: void 0,
    module: urunlerimiz_exports
  },
  "routes/iletisim": {
    id: "routes/iletisim",
    parentId: "root",
    path: "iletisim",
    index: void 0,
    caseSensitive: void 0,
    module: iletisim_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports3
  },
  "routes/admin/products/$productId": {
    id: "routes/admin/products/$productId",
    parentId: "routes/admin",
    path: "products/:productId",
    index: void 0,
    caseSensitive: void 0,
    module: productId_exports
  },
  "routes/admin/new-product": {
    id: "routes/admin/new-product",
    parentId: "routes/admin",
    path: "new-product",
    index: void 0,
    caseSensitive: void 0,
    module: new_product_exports
  },
  "routes/admin/$pointId": {
    id: "routes/admin/$pointId",
    parentId: "routes/admin",
    path: ":pointId",
    index: void 0,
    caseSensitive: void 0,
    module: pointId_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports4
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports3
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
