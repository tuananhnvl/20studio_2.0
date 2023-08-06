"use client"
import { Suspense, useEffect, useRef, useMemo } from 'react';
import './styles/home.css'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { textures } from './utils/load-img';
import shaderGallery from './data/shaderGalleryItem'
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



  let widthImg = texture.source.data.naturalWidth / 500
  let heightImg = texture.source.data.naturalHeight / 500
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
        <planeGeometry args={[widthImg, heightImg, 10, 10]} />

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

  const grref = useRef()
  useEffect(() => {
    camera.rotation.set(THREE.MathUtils.degToRad(4.2), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(2));
    camera.position.z = 1.42
    grref.current.position.x = 0.72
    camera.pov = 95
  }, [grref, camera])
  let offsetscrollY
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

  useEffect(() => {

    const navSlider = document.getElementById("nav-slider")
    const navItemSlider = [...document.querySelectorAll(".item-xkaojf")]
    const listTag = [...document.querySelectorAll(".tag-item-brand")]
    const tag = document.getElementById("tag-brand")
    let speed = 0;
    let position = 0;
    let roude = 0;
    let openMode = false
    let attractMode = false
    let attractTo = 0


    const handleScroll = (e) => {
      speed += e.deltaY * 0.0003;
    };
    navSlider.addEventListener('mouseenter', () => {

      attractMode = true

    })
    navSlider.addEventListener('mouseleave', () => {

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
      tag.style.transform = `translateX(${position * 360}px)`;
      localStorage.setItem('posY', position)


      window.requestAnimationFrame(raf);
    };

    window.addEventListener('wheel', handleScroll);
    raf();

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <main>
      <div className='slider-wrapper'>
        <div className='nav-slider' id='nav-slider' >
          <div className='item-xkaojf' data-nav="0">0</div>
          <div className='item-xkaojf' data-nav="1">1</div>
          <div className='item-xkaojf' data-nav="2">2</div>
          <div className='item-xkaojf' data-nav="3">3</div>
          <div className='item-xkaojf' data-nav="4">4</div>
          <div className='item-xkaojf' data-nav="5">5</div>
          <div className='item-xkaojf' data-nav="6">6</div>
          <div className='item-xkaojf' data-nav="7">7</div>
          <div className='item-xkaojf' data-nav="8">8</div>
          <div className='item-xkaojf' data-nav="9">9</div>

        </div>
        <div className='img-slider'>
          <div id='img-ww'>
            <Canvas >
              <Suspense>
                <IMGLIST />

              </Suspense>
              {/*      <OrbitControls/> */}
            </Canvas>
          </div>

        </div>
        <div className='tag-brand' id="tag-brand">
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



