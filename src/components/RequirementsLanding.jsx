import { CircleCheckBig } from 'lucide-react'; 

const items = [
  {id:1, title:'Llevar documento', body:'Trae tu DNI o comprobante.'},
  {id:2, title:'Estado de la bici', body:'Indica si hay daños visibles.'},
  {id:3, title:'Accesorios', body:'Retira accesorios sueltos si es necesario.'},
  {id:4, title:'Tiempo estimado', body:'Los servicios tardan entre 1-3 días según complejidad.'},
]

const RequirementsLanding = ()=>{
return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(i=> (
            <div key={i.id} className="card p-5 flex items-center justify-between gap-4">
                <div>
                    <h4 className="font-semibold text-lg text-gray-800">{i.title}</h4>
                    <p className="text-gray-600 mt-2">{i.body}</p>
                </div>
                <CircleCheckBig color='green'/>
            </div>
        ))}
    </div>
)
}

export default RequirementsLanding
