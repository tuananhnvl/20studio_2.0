import * as THREE from 'three';
const imgUnPlash = [
  './img-gallery/1.jpg',
  './img-gallery/2.jpg',
  './img-gallery/3.jpg',
  './img-gallery/4.jpg',
  './img-gallery/5.jpg',
  './img-gallery/6.jpg',
  './img-gallery/7.jpg',
  './img-gallery/8.jpg',
  './img-gallery/9.jpg',
  './img-gallery/10.jpg'

]
export const textureLoader = new THREE.TextureLoader();

export const textures = imgUnPlash.map((url,index) =>
  textureLoader.load(url)
);
