import {
    R as g,
    S as w,
    W as h,
    a as f,
    M as s
} from "./three.module-CQU0seT4.js"; /* empty css               */
import {
    D as R
} from "./DRACOLoader-BRrjJKJj.js";
import {
    O as P
} from "./OrbitControls-CAmelIij.js";
import {
    W as D
} from "./I3DMLoader--guqwtSo.js";
import {
    C
} from "./CesiumIonAuthPlugin-DL6JcDIR.js";
import {
    T
} from "./TileCompressionPlugin-D2vhaUyU.js";
import {
    G as I
} from "./GLTFExtensionsPlugin-DKG5_O3O.js";
import {
    R as L
} from "./ReorientationPlugin-BUllGpqj.js";
import {
    t as M
} from "./Ellipsoid-BKsGN9dG.js";
import {
    T as N
} from "./TilesRenderer-Dt06WWnf.js";
import {
    T as x
} from "./TilesFadePlugin-D_u_P2Qt.js";
import "./readMagicBytes-ReGFEf36.js";
import "./GLTFLoader-Bzr6GmPM.js";
import "./GeometryClipper-DDKqlNfA.js";
import "./EPSGTilesPlugin-DJF9gzHX.js";
import "./ImageFormatPlugin-gd2xpo9t.js";
import "./TMSImageSource-BwMpBOyS.js";
import "./TiledImageSource-Dter0Emb.js";
import "./B3DMLoader-BZtrZCNg.js";
import "./PNTSLoader-gB5YPyhc.js";
import "./CMPTLoader-VEto4VOC.js";
import "./EllipsoidRegion-BEIhCuST.js";
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

function y() {
  const randomIndex = Math.floor(Math.random() * patios.length);
  const patio = patios[randomIndex];
  console.log('Loading patio:', patio.name);

  document.body.style.background = `url("./assets/${patio.name}.jpeg") no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";

    e && (m.remove(e.group), e.dispose(), e = null), e = new N, e.registerPlugin(new C({
        apiToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjUzMGY4NC0yNDAxLTQ2MjctODg1ZC0wZmJhZTdkYjc2YjMiLCJpZCI6MzI3MjA0LCJpYXQiOjE3NTU4NzIyNDl9.lpLN2Xy_6aN9jlO6_a2cASjCeVEl80h9z2RMNd-Meu4",
        assetId: "2275207",
        autoRefreshToken: !0
    })), e.registerPlugin(new T), e.registerPlugin(new x), e.registerPlugin(new I({
        dracoLoader: new R().setDecoderPath("https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/")
    })), e.registerPlugin(new L({
        lat: patio.lat * s.DEG2RAD,
        lon: patio.lon * s.DEG2RAD
    })), m.add(e.group), e.setResolutionFromRenderer(t, n), e.setCamera(t);
 i.azimuthAngle = 3;
i.update();
}

function A() {
    m = new w;

const container = document.querySelector(".glass-container");
const canvas = document.getElementById("map");

n = new h({
    canvas: canvas,
    antialias: !0
});
n.setClearColor(1383455);

t = new f(
    60,
    container.clientWidth / container.clientHeight,
    100,
    16e5
);

t.position.set(1e3, 1e3, 1e3).multiplyScalar(.5), i = new P(t, n.domElement), i.minDistance = 500, i.maxDistance = 1e4 * 2, i.minPolarAngle = 0, i.maxPolarAngle = 3 * Math.PI / 8, i.enableDamping = !0, i.autoRotate = !0, i.autoRotateSpeed = .5, i.enablePan = !1, y(), d(), window.addEventListener("resize", d, !1), window.addEventListener("hashchange", u), u()
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
    e.setLatLonToYUp(p * s.DEG2RAD, r * s.DEG2RAD)
}

function c() {
    requestAnimationFrame(c), e && (i.update(), e.setResolutionFromRenderer(t, n), e.setCamera(t), t.updateMatrixWorld(), e.update(), W())
}

function W() {
    var l;
    if (n.render(m, t), e) {
        const o = e.group.matrixWorld.clone().invert(),
            p = t.position.clone().applyMatrix4(o),
            r = {};
        D.getPositionToCartographic(p, r);
        const a = ((l = e.getAttributions()[0]) == null ? void 0 : l.value) || "";
        document.getElementById("credits").innerText = "NASA AMMOS\n" + M(r.lat, r.lon) + `\n` + a;
    }
}
//# sourceMappingURL=googleMapsAerial-CVHMJ5Kz.js.map