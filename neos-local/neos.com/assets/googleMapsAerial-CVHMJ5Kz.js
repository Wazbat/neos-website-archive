import {
    R as g,
    S as w,
    W as h,
    a as f,
    M as s
} from "./three.module-CQU0seT4.js"; /* empty css               */
import { D as R } from "./DRACOLoader-BRrjJKJj.js";
import { O as P } from "./OrbitControls-CAmelIij.js";
import { W as D } from "./I3DMLoader--guqwtSo.js";
import { C } from "./CesiumIonAuthPlugin-DL6JcDIR.js";
import { T } from "./TileCompressionPlugin-D2vhaUyU.js";
import { G as I } from "./GLTFExtensionsPlugin-DKG5_O3O.js";
import { R as L } from "./ReorientationPlugin-BUllGpqj.js";
import { t as M } from "./Ellipsoid-BKsGN9dG.js";
import { T as N } from "./TilesRenderer-Dt06WWnf.js";
import { T as x } from "./TilesFadePlugin-D_u_P2Qt.js";

let t, i, m, n, e;
let patios = [];
const E = new g;
E.firstHitOnly = !0;

loadPatios();
c();

async function loadPatios() {
  try {
    const response = await fetch('patios.json');
    patios = await response.json();

    // Only start after patios is ready
    A();
  } catch (err) {
    console.error('Failed to load patios JSON:', err);
  }
}

function pickPatioFromQueryOrRandom() {
  // Get location name from URL query string (?Prague_Castle)
  const query = window.location.search.substring(1);
  if (query) {
    const queryName = decodeURIComponent(query).replace(/_/g, " ");
    const p = patios.find(v => v.name.toLowerCase() === queryName.toLowerCase());
    if (p) return p;
    console.warn(`No patio found for "${queryName}", falling back to random`);
  }
  const randomIndex = Math.floor(Math.random() * patios.length);
  return patios[randomIndex];
}

function y() {
  const patio = pickPatioFromQueryOrRandom();
  console.log('Loading patio:', patio.name);

  if (patio.teaser) {
    document.title = `${patio.teaser} | Neos Patio`;
  } else {
    document.title = 'Neos Patio';
  }

  const bgLow = document.getElementById('bg-low');
  const bgHigh = document.getElementById('bg-high');

  // Load low-res background first (prevents blank screen)
  const lowResImg = new Image();
  lowResImg.src = `./assets/${patio.name}-low.jpg`;
  lowResImg.onload = () => {
    bgLow.style.backgroundImage = `url("${lowResImg.src}")`;

    // Load high-res background and fade it in
    const highResImg = new Image();
    highResImg.src = `./assets/${patio.name}.jpg`;
    highResImg.onload = () => {
      bgHigh.style.backgroundImage = `url("${highResImg.src}")`;
      bgHigh.style.opacity = 1; // CSS transition handles fade
    };

    // Dispose previous tiles if any
    if (e) {
      m.remove(e.group);
      e.dispose();
      e = null;
    }

    // Init new tiles
    e = new N();
    e.registerPlugin(new C({
      apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjUzMGY4NC0yNDAxLTQ2MjctODg1ZC0wZmJhZTdkYjc2YjMiLCJpZCI6MzI3MjA0LCJpYXQiOjE3NTU4NzIyNDl9.lpLN2Xy_6aN9jlO6_a2cASjCeVEl80h9z2RMNd-Meu4",
      assetId: "2275207",
      autoRefreshToken: true
    }));
    e.registerPlugin(new T());
    e.registerPlugin(new x());
    e.registerPlugin(new I({
      dracoLoader: new R().setDecoderPath("https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/")
    }));

    // Reorient to the selected location
    const latRad = patio.lat * s.DEG2RAD;
    const lonRad = patio.lon * s.DEG2RAD;
    const offsetHeight = patio.height || 50;

    e.registerPlugin(new L({
      lat: latRad,
      lon: lonRad,
      height: offsetHeight
    }));

    // Attach to scene and wire with camera
    m.add(e.group);
    e.setResolutionFromRenderer(t, n);
    e.setCamera(t);

    const desiredAzimuth = (typeof patio.azimuth === 'number') ? patio.azimuth : 0;

    // Ensure controls are in a known state
    i.update();

    if (typeof i.getAzimuthalAngle === 'function' && typeof i.rotateLeft === 'function') {
      const currentAzimuth = i.getAzimuthalAngle();
      // Shortest path normalization to [-PI, PI]
      let delta = desiredAzimuth - currentAzimuth;
      if (delta > Math.PI) delta -= Math.PI * 2;
      if (delta < -Math.PI) delta += Math.PI * 2;

      i.rotateLeft(delta);
      i.update();
    } else {

      i.azimuthAngle = desiredAzimuth;
      i.update();
    }

    console.log(
      `Camera target for ${patio.name}: height=${offsetHeight}, azimuth=${desiredAzimuth}`
    );
  };
}

function A() {
  m = new w;

  const container = document.querySelector(".glass-container");
  const canvas = document.getElementById("map");

  n = new h({
    canvas: canvas,
    antialias: true
  });
  n.setClearColor(1383455);

  t = new f(
    60,
    container.clientWidth / container.clientHeight,
    100,
    16e5
  );

  t.position.set(1e3, 1e3, 1e3).multiplyScalar(.5);

  i = new P(t, n.domElement);
  i.minDistance = 250;
  i.maxDistance = 800000;
  i.minPolarAngle = 0;
  i.maxPolarAngle = 3 * Math.PI / 8;
  i.enableDamping = true;
  i.autoRotate = true;
  i.autoRotateSpeed = 0.5;
  i.enablePan = false;

  y();
  d();
  window.addEventListener("resize", d, false);
  window.addEventListener("hashchange", u);
  u();
}

function d() {
  const container = document.querySelector(".glass-container");
  t.aspect = container.clientWidth / container.clientHeight;
  n.setSize(container.clientWidth, container.clientHeight);
  t.updateProjectionMatrix();
  n.setPixelRatio(window.devicePixelRatio);
}

function u() {
  const o = window.location.hash.replace(/^#/, "").split(/,/g).map(a => parseFloat(a));
  if (o.length !== 2 || o.findIndex(a => Number.isNaN(a)) !== -1) return;
  const [p, r] = o;
  e.setLatLonToYUp(p * s.DEG2RAD, r * s.DEG2RAD);
}

function c() {
  requestAnimationFrame(c);
  if (e) {
    i.update();
    e.setResolutionFromRenderer(t, n);
    e.setCamera(t);
    t.updateMatrixWorld();
    e.update();
    W();
  }
}

function W() {
  if (n.render(m, t), e) {
    const o = e.group.matrixWorld.clone().invert();
    const p = t.position.clone().applyMatrix4(o);
    const r = {};
    D.getPositionToCartographic(p, r);
    const a = e.getAttributions()[0]?.value || "";
    document.getElementById("credits").innerText =
      "NASA AMMOS\n" + M(r.lat, r.lon) + `\n` + a;
  }
}
