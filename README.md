# {{projectName}}

Un proyecto React moderno creado con Vite, Tailwind CSS y Zustand, incluyendo un dashboard completo con sistema de autenticación.

## 🚀 Características

- ⚡ **Vite** - Build tool ultrarrápido
- ⚛️ **React 18** - Biblioteca de UI con las últimas características
- 🎨 **Tailwind CSS** - Framework CSS utilitario con tema personalizado
- 🐻 **Zustand** - Estado global ligero y simple con persistencia
- 📦 **Axios** - Cliente HTTP para APIs
- 🔧 **ESLint** - Linter para código limpio
- 🔐 **Sistema de Autenticación** - Login completo con validación
- 📊 **Dashboard Completo** - Panel de control con estadísticas y gráficos
- 📱 **Responsive Design** - Optimizado para todos los dispositivos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.jsx      # Componente de botón personalizable
│   └── Card.jsx        # Componente de tarjeta
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── Login.jsx
├── store/              # Estado global con Zustand
│   └── useCounter.js   # Store de ejemplo
├── utils/              # Utilidades y helpers
│   └── clientAxios.js  # Configuración de Axios
└── assets/             # Recursos estáticos
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎨 Componentes Incluidos

### Button
Componente de botón altamente personalizable con múltiples variantes:

```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```

**Variantes:** `primary`, `secondary`, `danger`, `success`
**Tamaños:** `sm`, `md`, `lg`

### Card
Componente de tarjeta con estilos base:

```jsx
<Card>
  <h2>Título</h2>
  <p>Contenido de la tarjeta</p>
</Card>
```

## 🐻 Estado Global con Zustand

### Store de Contador
```jsx
import { useCounter } from './store/useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter();
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### Store de Autenticación
```jsx
import { useAuthStore } from './store/useAuthStore';

function LoginComponent() {
  const { login, logout, user, isAuthenticated } = useAuthStore();
  
  const handleLogin = () => {
    login({ id: 1, name: 'Usuario', email: 'user@email.com' });
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Hola {user.name}!</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Iniciar Sesión</button>
      )}
    </div>
  );
}
```

## 🌐 Configuración de Axios

Cliente HTTP preconfigurado en `src/utils/clientAxios.js`:

```jsx
import clientAxios from './utils/clientAxios';

// GET request
const data = await clientAxios.get('/api/users');

// POST request
const newUser = await clientAxios.post('/api/users', userData);
```

## 🎨 Personalización de Tailwind

El proyecto incluye:
- Paleta de colores personalizada con `primary`
- Fuente Inter de Google Fonts
- Componentes CSS reutilizables
- Configuración optimizada para React

### Colores Primarios
```css
primary-50   #eff6ff
primary-500  #3b82f6
primary-600  #2563eb
primary-900  #1e3a8a
```

## 📚 Recursos Útiles

- [Documentación de React](https://react.dev/)
- [Guía de Vite](https://vitejs.dev/guide/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Axios Documentation](https://axios-http.com/docs/intro)

## 🔐 Sistema de Autenticación

El template incluye un sistema de autenticación completo:

- **Página de Login**: Formulario con validación de email y contraseña
- **Persistencia**: La sesión se mantiene en localStorage
- **Protección de rutas**: Acceso condicional a dashboard
- **Demo**: Usa cualquier email y contraseña para probar

## 📊 Dashboard Completo

Panel de control profesional que incluye:

- **Estadísticas**: Cards con métricas y cambios porcentuales
- **Gráficos**: Barras, líneas y pie charts con datos de ejemplo
- **Tablas**: Componente reutilizable para mostrar datos
- **Layout Responsivo**: Sidebar colapsable y header con perfil
- **Actividad Reciente**: Feed de actividades del sistema
- **Acciones Rápidas**: Botones para tareas comunes

### Componentes del Dashboard

- `StatCard`: Tarjetas de estadísticas con iconos y cambios
- `Chart`: Gráficos personalizables (bar, line, pie)
- `DataTable`: Tabla de datos con columnas configurables
- `Layout`: Layout principal con sidebar y header

## 🎨 Componentes Incluidos

### Button Mejorado
```jsx
<Button variant="primary" size="lg" disabled={loading}>
  {loading ? 'Cargando...' : 'Enviar'}
</Button>
```

### StatCard
```jsx
<StatCard
  title="Usuarios Totales"
  value="2,543"
  change="+12%"
  changeType="increase"
  icon="👥"
  description="vs mes anterior"
/>
```

### DataTable
```jsx
<DataTable
  title="Usuarios"
  data={users}
  columns={userColumns}
  emptyMessage="No hay usuarios"
/>
```

## 🚀 Empezar

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

4. **¡Prueba el sistema!**
   - Usa cualquier email y contraseña en el login
   - Explora el dashboard completo
   - Personaliza los componentes según tus necesidades

## 🎯 Próximos Pasos

- Conecta con tu API real
- Personaliza los colores en `tailwind.config.js`
- Agrega más páginas al dashboard
- Implementa rutas con React Router
- Añade tests con Vitest

¡Feliz codificación! 🎉
# turnos-bikes-frontend
