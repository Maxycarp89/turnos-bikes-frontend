import { create } from "zustand";

const initialState = {
  monthSelected: null,
  yearSelected: null,
  shifts: [],
  existShifts: [],
  searched: [],
  error: null,
};

export const useStore = create((set, get) => ({
  ...initialState,
  // actions
  getTurnos: ({ data, month, year, shifts }) =>
    set(() => ({ monthSelected: month, yearSelected: year, shifts: data, existShifts: shifts })),
  manageShiftBody: (payload) => set(() => ({ shifts: payload })),
  resetState: () => set(() => ({ ...initialState })),
  getCustomerSuccess: (payload) => set(() => ({ searched: payload, error: null })),
  getCustomerFail: () =>
    set(() => ({ searched: [], error: "No se encontro el cliente. Intentar realizar una busqueda por DNI (o cargar al cliente)." })),
}));
