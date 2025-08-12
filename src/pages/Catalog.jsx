import { useMemo, useState } from 'react'
import VehicleCard from '../components/VehicleCard'
import { vehicles as base } from '../data/vehicles'

export default function Catalog(){
  const [q, setQ] = useState('')
  const [brand, setBrand] = useState('')
  const [fuel, setFuel] = useState('')
  const [sort, setSort] = useState('recent')

  const brands = useMemo(()=> Array.from(new Set(base.map(v=>v.brand))),[])
  const fuels = useMemo(()=> Array.from(new Set(base.map(v=>v.fuel))),[])

  const vehicles = useMemo(()=>{
    let arr = base.filter(v=> {
      const term = (v.brand + ' ' + v.model + ' ' + v.year).toLowerCase()
      return term.includes(q.toLowerCase())
        && (!brand || v.brand===brand)
        && (!fuel || v.fuel===fuel)
    })
    if(sort==='price-asc') arr.sort((a,b)=> a.price-b.price)
    if(sort==='price-desc') arr.sort((a,b)=> b.price-a.price)
    if(sort==='year-desc') arr.sort((a,b)=> b.year-a.year)
    return arr
  }, [q, brand, fuel, sort])

  return (
    <main className="section">
      <div className="container">
        <h2>Catálogo</h2>
        <p className="lead">Filtre por marca, combustível e ordene como preferir.</p>

        <div className="filterbar">
          <input className="input" placeholder="Buscar modelo, marca ou ano..." value={q} onChange={e=>setQ(e.target.value)} />
          <select value={brand} onChange={e=>setBrand(e.target.value)}>
            <option value="">Todas as marcas</option>
            {brands.map(b=> <option key={b} value={b}>{b}</option>)}
          </select>
          <select value={fuel} onChange={e=>setFuel(e.target.value)}>
            <option value="">Todos combustíveis</option>
            {fuels.map(f=> <option key={f} value={f}>{f}</option>)}
          </select>
          <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="recent">Mais recentes</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="year-desc">Mais novo</option>
          </select>
        </div>

        <div className="grid">
          {vehicles.map(v=> <VehicleCard key={v.id} v={v} />)}
        </div>
      </div>
    </main>
  )
}
