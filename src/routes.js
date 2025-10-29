
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

const coreRoutes = [
    {
        path: '/turnos/',
        title: 'Panel de Turnos',
        component: Dashboard,
        roles: ['Postventa'],
        positions: ['Cajero', 'Vendedor', 'Referente', 'IT']
    },
    {
        path: '/turnos/admin',
        title: 'Administración de Turnos',
        component: Dashboard,
        roles: ['Postventa'],
        positions: ['Referente', 'IT']
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
