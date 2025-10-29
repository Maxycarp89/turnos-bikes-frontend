import Landing from "./pages/Landing";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
import { Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "./pages/Login";
import routes, { canAccessRoute } from "./routes";

function App() {
  const [cookies] = useCookies();
  const isLoggedIn = cookies.isLoggedIn;
  const userRoles = cookies.rol ? cookies.rol : [];

  // Filtrar rutas accesibles según los roles del usuario
  const accessibleRoutes = routes.filter((route) =>
    canAccessRoute(route, userRoles)
  );

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Loading />
      <div className="app-container">
        <div className="app-body">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas protegidas */}
            {isLoggedIn && accessibleRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}

            {/* Redirección por defecto */}
            <Route
              path="*"
              element={
                <Navigate
                  to={isLoggedIn ? (accessibleRoutes.length > 0 ? accessibleRoutes[0].path : '/login') : '/'}
                  replace
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
