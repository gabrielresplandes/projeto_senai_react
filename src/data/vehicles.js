export const vehicles = [
  {
    id: 'rwgv-911',
    brand: 'Porsche', model: '911 Carrera', year: 2022,
    km: 12500, fuel: 'Gasolina', power: 379,
    price: 899000, img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'rwgv-x6',
    brand: 'BMW', model: 'X6 M', year: 2021,
    km: 23000, fuel: 'Gasolina', power: 600,
    price: 589000, img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'rwgv-a200',
    brand: 'Mercedes-Benz', model: 'A200', year: 2020,
    km: 34000, fuel: 'Gasolina', power: 163,
    price: 164900, img: 'https://cdn.motor1.com/images/mgl/AkgmrN/s3/mercedes-benz-a200-2023.webp'
  },
  {
    id: 'rwgv-compass',
    brand: 'Jeep', model: 'Compass Limited', year: 2022,
    km: 28000, fuel: 'Flex', power: 185,
    price: 149900, img: 'https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNDE0Mjc2L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzU0NzUwNTIwOTY5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0='
  },
  {
    id: 'rwgv-onix',
    brand: 'Chevrolet', model: 'Onix Premier', year: 2023,
    km: 9000, fuel: 'Flex', power: 116,
    price: 97900, img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'rwgv-hilux',
    brand: 'Toyota', model: 'Hilux SRV', year: 2019,
    km: 65000, fuel: 'Diesel', power: 177,
    price: 199900, img: 'https://s3.ecompletocarros.dev/images/lojas/274/veiculos/220771/veiculoInfoVeiculoImagesMobile/vehicle_image_1734210642_ab488cc36deb0219a97a691504c7e7e3.png'
  }
]

export function priceFmt(n){
  return n.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}
