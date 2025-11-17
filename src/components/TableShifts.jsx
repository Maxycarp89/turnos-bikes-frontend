import { clientAxios } from "../utils/clientAxios";
import toast from "react-hot-toast";
import { useStore } from "../store/useStore";
import { useCookies } from "react-cookie";

function TableShifts() {
  const shifts = useStore((s) => s.shifts);
  const manageShiftBody = useStore((s) => s.manageShiftBody);

  const [, setCookie] = useCookies();

  const handleChange = (event, date, hour) => {
    const maped = shifts.map((day) => {
      if (day.U_Fecha === date.U_Fecha) {
        return {
          ...day,
          U_HorarioRecep: date.U_HorarioRecep.map((hs) => {
            if (hs.hs === hour.hs) {
              const newCantrecep = Number(event.target.value);
              if (hs.ocupado > newCantrecep) {
                toast.error(
                  "La cantidad ocupada no puede ser mayor que la cantidad de recepciones."
                );
                return hs;
              }
              const newHabilitad = newCantrecep !== 0 ? "S" : "N";
              return {
                ...hs,
                cantrecep: newCantrecep,
                habilitad: newHabilitad,
              };
            } else return hs;
          }),
        };
      } else return day;
    });
    manageShiftBody(maped);
  };

  const generateCalendar = async () => {
    for (let day of shifts) {
      for (let hour of day.U_HorarioRecep) {
        if (hour.ocupado > hour.cantrecep) {
          toast.error(
            "Error de validación: ocupado no puede ser mayor que cantRecep."
          );
          return;
        }
      }
    }

    const bodyStringified = shifts.map((day) => ({
      ...day,
      U_HorarioRecep: JSON.stringify(day.U_HorarioRecep),
    }));
    setCookie("loading", true);
    const toastId = toast.loading(
      bodyStringified[0].DocEntry ? "Editando calendario..." : "Cargando calendario...",
      { duration: 0 }
    );

    if (bodyStringified[0].DocEntry) {
      await clientAxios.patch("/patchShiftList", bodyStringified);
    } else {
      const { data } = await clientAxios.post("/createShiftList", bodyStringified);
      manageShiftBody(data);
    }

    setCookie("loading", false);
    toast.dismiss(toastId);
    toast.success(bodyStringified[0].DocEntry ? "Calendario editado exitosamente." : "Calendario generado exitosamente.");
  };

function formatDate(dateString) {
  // Asegurar compatibilidad con ISO evitando la parte hora
  const cleanDate = dateString.split("T")[0];

  const [year, month, day] = cleanDate.split("-");
  const date = new Date(year, month - 1, day);

  if (isNaN(date)) {
    console.error("Fecha inválida:", dateString);
    return "";
  }

  const dayName = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
  }).format(date);

  return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)} ${day}/${month}/${year}`;
}


  return (
    <>
      {!Array.isArray(shifts) || shifts.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {!Array.isArray(!shifts) ? "Seleccione un mes y año para ver los turnos" : "No hay turnos disponibles para el período seleccionado"}
        </div>
      ) : (
        <div className="bg-white shadow rounded p-4">
          <div className="mb-4">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700" onClick={generateCalendar}>
              {shifts[0].DocEntry ? "Editar Calendario" : "Cargar Calendario"}
            </button>
          </div>

          <div className="overflow-auto">
            <table className="min-w-full table-auto border-collapse">
              <tbody>
                {shifts.map((head, rowIndex) => (
                  <tr key={rowIndex} className="align-top border-b">
                    <td className="p-4 bg-blue-600 text-white rounded-l w-60">{formatDate(head.U_Fecha)}</td>
                    {head.U_HorarioRecep.map((hour, index) => (
                      <td key={`${rowIndex}-${index}`} className={`p-3 border-l ${hour.ocupado > 0 ? 'bg-red-600 text-gray-100' : ''}`}>
                        <div className="bg-blue-600 text-white px-2 py-1 rounded inline-block mb-2">{hour.hs}</div>
                        <div className="text-sm mb-2">{hour.ocupado} de</div>
                        <input
                          type="number"
                          value={hour.cantrecep}
                          onChange={(event) => handleChange(event, head, hour)}
                          className="w-20 border rounded px-2 py-1 text-black"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default TableShifts;
