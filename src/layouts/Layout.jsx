// src/layouts/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Inicio</Link> |{' '}
          <Link to="/about">Acerca de</Link> |{' '}
          <Link to="/contact">Contacto</Link>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center' }}>
        <p>&copy; 2025 - Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default Layout;
