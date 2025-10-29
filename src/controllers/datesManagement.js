export const getDatesOfMonth = (year, month, sucursal) => {
    var dates = [];
    var primerDia = new Date(year, month - 1, 1);
    var ultimoDia = new Date(year, month, 0);
    for (var i = 1; i <= ultimoDia.getDate(); i++) {
        dates.push(new Date(year, month - 1, i));
    }
    return dates.map(day => {
        const date = day.toISOString().slice(0,10)
        return {
            U_Fecha: date,
            U_CantServMax: 0,
            U_CantServComplejo: 0,
            U_BPLId: sucursal,
            U_HorarioRecep: [
                { hs: '08:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '08:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '09:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '09:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '10:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '10:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '11:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '11:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '12:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '12:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '13:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '13:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '14:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '14:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '15:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '15:30', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '16:00', cantrecep: 0, ocupado: 0, habilitad: 'N' },
                { hs: '16:30', cantrecep: 0, ocupado: 0, habilitad: 'N' }
            ]
        }
    })
};


export const messages = {
    next: 'Siguiente',
    previous: 'Anterior',
    today: 'Hoy',
    month: 'Mes',
    day: 'Día'
}