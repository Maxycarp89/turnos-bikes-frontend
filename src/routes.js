
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

const coreRoutes = [
    {
        path: '/turnos/*',
        title: 'Turnos',
        component: Dashboard,
        roles: ['Bikes'],
        positions: ['Cajero', 'Vendedor', 'Referente', 'IT']
    },{
        path: '/',
        title: 'Landing Page',
        component: Landing,
    }
];

// Helper para verificar si un usuario tiene acceso a una ruta
export const canAccessRoute = (route, userRoles) => {
    // Si la ruta no tiene roles definidos, es pública
    if (!route.roles) return true;
    
    if (!userRoles || !Array.isArray(userRoles)) return false;
    return userRoles.some(userRole => 
        route.roles.includes(userRole.name) && 
        route.positions.includes(userRole.nombPosicion)
    );
};

const routes = [...coreRoutes];
export default routes;
