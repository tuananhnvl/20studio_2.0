const vertexShader = `
uniform float checkProcess;
uniform float uOffset;
uniform vec2 uZoomScale;
uniform float uProcess;
varying vec2 vUv;
uniform float uTime;
uniform vec2 iResolution;
uniform vec2 imageBounds;
uniform float uScroll;
uniform float uTarget;
//custom == when drag x y , scroll z , mix z to wave function , set uscroll to controls anime


  float M_PI = 3.1415926535897932384626433832795;
void main() {
    
    vUv = (uv - vec2(0.5))*0.9 + vec2(0.5);
    vec3 pos = position;
    pos.y += sin(M_PI*uv.x)*0.01;
    pos.z += sin(M_PI*uv.x)*0.02;
    pos.y += sin(uTime*0.3)*0.02;
    vUv.y -= sin(uTime*0.3)*0.02;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
  
}
`

const fragmentShader = `
varying float checkObj;
varying vec2 vUv;
uniform vec2 scale;
uniform vec2 imageBounds;
uniform vec3 color;
uniform vec2 iResolution;
uniform float zoom;
uniform float grayscale;
uniform float opacity;
uniform float uRandom;
uniform sampler2D uTexture;
uniform float uTime;
uniform float uScroll;


void main()
{

    gl_FragColor = texture2D(uTexture,vUv.xy);
}

`

const shaderGallery = {'vert': vertexShader, 'frag':fragmentShader}
export default shaderGallery