import Crear from "./crear"
export default function Main() {
  return (
    <div>
        <div className="header">
        <Crear />
        </div>
        <div className="header">
            <div className="container">
            <div className="hea-container">
            <img src="/sora_y_shiro.jpg" className="icono" />
                  <div>
                    <h5>Gandro</h5>
                <div>
                    <a href="" style={{color: "blue", margin: "10px 0 0"}}>Amojugarvideojuagos.com</a>
                </div>
                  </div>

            </div>
            <div>
                <div className="hea-container">
                    <div className="hea-container">
                    <i style={{color: "#333"}}>3 min</i>
                    <img src="/puntos.svg" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="header imagenes">
            <div>
                <img src="/albion.jpg" alt="" />
                <div className="iconos">
                    <img className="ico" src="/corazon.svg" alt="" />
                    <img className="ico" src="/mensaje.svg" alt="" />
                    <img className="ico" src="/compartir.svg" alt="" />
                    <img className="ico" src="/avionsito.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
