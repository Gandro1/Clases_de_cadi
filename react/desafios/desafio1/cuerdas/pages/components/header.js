// import '@/styles/header.css';
import Nav from './nav'
export default function Header() {
  return (
    <div>
      <div className="hea-container">
      <img className='logo' src="/instagram.png" />
      <div className="header">
      <Nav />
      </div>
      <img src="/opciones.svg" />

      </div>

    </div>
  )
}