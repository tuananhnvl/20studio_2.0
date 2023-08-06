"use client"
import { Suspense, useEffect, useRef, useMemo, useState } from 'react';
import './styles/home.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree ,useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import shaderGallery from './data/shaderGalleryItem'


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

function IMG({ texture, data }) {
  const ref = useRef(null)
  const uniforms = useMemo(
    () => ({
      uTarget: {
        value: 0.0
      },
      uProcess: {
        value: 0.0
      },
      uOffset: {
        value: 0.0
      },
      uTexture: {
        value: texture,
      },
      uScroll: {
        value: 0.0
      },
      uTime: {
        value: 0.0
      },
      imageBounds: {
        value: new THREE.Vector2(400, 600)
      },
      uRandom: {
        value: Math.random() * 20 + 3
      },
      scale: {
        value: new THREE.Vector2(1.0, 1.0)
      },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
      },

    }),
    [texture]
  );


  useFrame(({ clock }) => {
    if (ref) {
      ref.current.position.y = localStorage.getItem('posY') * 2.2 + data * 1.2
      ref.current.material.uniforms.uTime.value = clock.elapsedTime
      ref.current.material.uniforms.uOffset.value = localStorage.getItem('offsetscrollY')
      ref.current.material.uniforms.uScroll.value = localStorage.getItem('posY')
    }

  })
  return (
    <group position={[0, data, 0]}>
      <mesh ref={ref}>
        <planeGeometry args={[texture.source.data.naturalWidth / 500, texture.source.data.naturalHeight / 500, 10, 10]} />

        <shaderMaterial
          fragmentShader={shaderGallery['frag']}
          vertexShader={shaderGallery['vert']}
          uniforms={uniforms}
          wireframe={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}
function IMGLIST() {
  const { camera } = useThree()
  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const grref = useRef()
  let offsetscrollY
  useEffect(() => {
    camera.rotation.set(THREE.MathUtils.degToRad(4.2), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(2));
    camera.position.z = 1.42
    grref.current.position.x = 0.72
    camera.pov = 95



  }, [grref, camera])



 const textures = imgUnPlash.map((url, index) =>
        useLoader(TextureLoader, url)
  );
  

 
  useFrame(() => {

    let vec2Clone = new THREE.Vector2(0, grref.current.position.y)
    offsetscrollY = vec2Clone
      .clone()
      .sub(new THREE.Vector2(0, localStorage.getItem('posY')))
      .multiplyScalar(-0.24)
    localStorage.setItem('offsetscrollY', offsetscrollY.y)

    camera.rotation.set(THREE.MathUtils.degToRad(4.2), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(2));

  })
  return (
    <group ref={grref}>
      {textures.map((texture, index) => (
        <IMG key={index} data={index} texture={texture} />
      ))}
    </group>
  )
}
export default function Home() {
  const ref = useRef(null)
  const refNavSlider = useRef(null)
  const refitemxkaojf = useRef(null)
  const reftagbrand = useRef(null)
  useEffect(() => {

    const navItemSlider = Array.from(refNavSlider.current.children)

    let speed = 0;
    let position = 0;
    let roude = 0;
    let openMode = false
    let attractMode = false
    let attractTo = 0


    const handleScroll = (e) => {
      speed += e.deltaY * 0.0003;
    };
    refNavSlider.current.addEventListener('mouseenter', () => {

      attractMode = true

    })
    refNavSlider.current.addEventListener('mouseleave', () => {

      attractMode = false
    })
    navItemSlider.forEach((el) => {
      el.addEventListener('mouseover', (e) => {
        attractTo = Number(e.target.getAttribute('data-nav'))
      })
    })
    const raf = () => {
      position += speed;
      speed *= 0.8;

      roude = Math.round(position);
      let diff = roude - position;


      if (attractMode) {
        position += -(position + attractTo) * 0.07


      } else {

        position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015


      }
      reftagbrand.current.style.transform = `translateX(${position * 360}px)`;
      localStorage.setItem('posY', position)


      window.requestAnimationFrame(raf);
    };
    raf();
    window.addEventListener('wheel', handleScroll);


    return () => {
      window.removeEventListener('wheel', handleScroll);
    };


  }, []);

  return (
    <main>
      <div className='slider-wrapper'>
        <div className='nav-slider' id='nav-slider' ref={refNavSlider}>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="0">0</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="1">1</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="2">2</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="3">3</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="4">4</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="5">5</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="6">6</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="7">7</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="8">8</div>
          <div ref={refitemxkaojf} className='item-xkaojf' data-nav="9">9</div>

        </div>
        <div className='img-slider'>
          <div id='img-ww'>
            <Canvas >
              <Suspense fallback={null}>
                <IMGLIST />

              </Suspense>
     
            </Canvas>
          </div>

        </div>
        <div className='tag-brand' id="tag-brand" ref={reftagbrand}>
          <div className='tag-item-brand'>
            <h3>Modian&nbsp;Beef</h3>
            <span>2017&nbsp;-&nbsp;2022</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Recovere&nbsp;Ber</h3>
            <span>2016</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Dirty&nbsp;Coin</h3>
            <span>2022</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slay&nbsp;Count</h3>
            <span>2017&nbsp;-&nbsp;2029</span>
          </div>
          <div className='tag-item-brand'>
            <h3>God&nbsp;Father</h3>
            <span>2012&nbsp;-&nbsp;2029</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
          <div className='tag-item-brand'>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
        </div>
      </div>
    </main>
  )
}



