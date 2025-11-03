import { create } from "zustand";

const initialState = {
  monthSelected: null,
  yearSelected: null,
  shifts: [],
  existShifts: [],
  searched: [],
  error: null,
  isLoading: false
};

export const useStore = create((set) => ({
  ...initialState,
  // Acciones de turnos
  getTurnos: ({ data, month, year, shifts }) =>
    set({
      monthSelected: month,
      yearSelected: year,
      shifts: Array.isArray(data) ? data : [],
      existShifts: Array.isArray(shifts) ? shifts : [],
      error: null
    }),
  
  manageShiftBody: (payload) => 
    set({ 
      shifts: Array.isArray(payload) ? payload : [],
      error: null 
    }),
    
  // Acciones de búsqueda de clientes
  getCustomerSuccess: (payload) => 
    set({ 
      searched: Array.isArray(payload) ? payload : [], 
      error: null 
    }),
    
  getCustomerFail: () =>
    set({ 
      searched: [], 
      error: "No se encontró el cliente. Intentar realizar una búsqueda por DNI (o cargar al cliente)." 
    }),
    
  // Reset del estado
  resetState: () => set(initialState)
}));
