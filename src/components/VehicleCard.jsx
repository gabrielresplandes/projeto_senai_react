import { priceFmt } from '../data/vehicles'

export default function VehicleCard({v}){
  return (
    <article className="card">
      <div className="media">
        <img src={v.img} alt={`${v.brand} ${v.model}`} loading="lazy"/>
      </div>
      <div className="body">
        <div className="title">{v.brand} {v.model} • {v.year}</div>
        <div className="meta">
          <span>{v.km.toLocaleString('pt-BR')} km</span>
          <span>{v.fuel}</span>
          <span>{v.power} cv</span>
        </div>
        <div className="price">{priceFmt(v.price)}</div>
      </div>
    </article>
  )
}
