
import './styles/home.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='slider-wrapper'>
        <div className='img-slider'>
          <Image src='/home.jpg' alt="" width={420} height={260} />
        </div>
        <div className='tag-brand'>
          <div>
            <h3>Modian&nbsp;Beef</h3>
            <span>2017&nbsp;-&nbsp;2022</span>
          </div>
          <div>
            <h3>Recovere&nbsp;Ber</h3>
            <span>2016</span>
          </div>
          <div>
            <h3>Dirty&nbsp;Coin</h3>
            <span>2022</span>
          </div>
          <div>
            <h3>Slay&nbsp;Count</h3>
            <span>2017&nbsp;-&nbsp;2029</span>
          </div>
          <div>
            <h3>God&nbsp;Father</h3>
            <span>2012&nbsp;-&nbsp;2029</span>
          </div>
          <div>
            <h3>Slodibdien</h3>
            <span>2020</span>
          </div>
        </div>
      </div>
    </main>
  )
}



