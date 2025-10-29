import React, {useState, useMemo} from 'react'

const services = [
  'Service Completo',
  'Alineación de ruedas',
  'Frenos y cambio',
  'Suspensión',
  'Instalación de accesorios',
  'Personalizado'
]

const generateDays = (n=14)=>{
  const days = []
  const today = new Date()
  for(let i=0;i<n;i++){
    const d = new Date()
    d.setDate(today.getDate()+i)
    days.push(d)
  }
  return days
}

const timeslots = [
  '09:00', '10:00','11:00','12:00','14:00','15:00','16:00'
]

const BookingForm = ()=>{
  const days = useMemo(()=> generateDays(14),[])
  const [selectedDay, setSelectedDay] = useState(days[0]?.toISOString().slice(0,10))
  const [selectedTime, setSelectedTime] = useState(timeslots[0])
  const [serviceType, setServiceType] = useState(services[0])
  const [notes, setNotes] = useState('')
  const [confirm, setConfirm] = useState(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setSending(true)
    // Simular envío
    setTimeout(()=>{
      setConfirm({day:selectedDay,time:selectedTime,service:serviceType,notes})
      setSending(false)
    },700)
  }

  return (
    <div className="card relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm text-gray-700">Seleccionar día</span>
          <select value={selectedDay} onChange={(e)=>setSelectedDay(e.target.value)} className="mt-1 block w-full p-2 border rounded">
            {days.map(d=> (
              <option key={d.toISOString()} value={d.toISOString().slice(0,10)}>
                {d.toLocaleDateString(undefined, {weekday:'short', day:'numeric', month:'short'})}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Horario disponible</span>
          <select value={selectedTime} onChange={(e)=>setSelectedTime(e.target.value)} className="mt-1 block w-full p-2 border rounded">
            {timeslots.map(t=> <option key={t} value={t}>{t}</option>)}
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Tipo de service</span>
          <select value={serviceType} onChange={(e)=>setServiceType(e.target.value)} className="mt-1 block w-full p-2 border rounded">
            {services.map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Notas adicionales</span>
          <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={4} className="mt-1 block w-full p-2 border rounded" placeholder="Ej: modelo, problema observado..."></textarea>
        </label>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={sending} className="bg-primary-600 text-white px-4 py-2 rounded font-semibold shadow">
            {sending? 'Enviando...' : 'Reservar cita'}
          </button>
          <button type="button" className="bg-gray-100 px-4 py-2 rounded" onClick={()=>{setSelectedDay(days[0].toISOString().slice(0,10)); setSelectedTime(timeslots[0]); setServiceType(services[0]); setNotes('')}}>Reset</button>
        </div>
      </form>

      {confirm && (
        <div className="confirmation fixed inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl p-8 w-full max-w-md text-center shadow-lg animate-confirm">
            <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            <h3 className="text-xl font-bold mb-2">Reserva confirmada</h3>
            <p className="text-gray-700">Has reservado <strong>{confirm.service}</strong> el <strong>{new Date(confirm.day).toLocaleDateString()}</strong> a las <strong>{confirm.time}</strong>.</p>
            {confirm.notes && <p className="text-sm text-gray-600 mt-2">Notas: {confirm.notes}</p>}
            <div className="mt-6">
              <button className="bg-primary-600 text-white px-4 py-2 rounded" onClick={()=> setConfirm(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingForm
