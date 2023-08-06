"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import '../styles/aboutus.css'



export default function aboutus() {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
  
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const offsetX = event.clientX - position.x;
      const offsetY = event.clientY - position.y;
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
      console.log(position)
      // Move the element by updating its style
    //  const element = document.getElementById('draggable-element');
    //  element.style.transform = `translate(${element.offsetLeft + offsetX}px, ${element.offsetTop + offsetY}px)`;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
      <div
        id="viewSlider"
        className={`vavava draggable ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className='slider-img-kkkkk' style={{transform:`translateX(${position.x}px)`}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    );
  }