import { Navigate, Route, Routes, Link } from 'react-router-dom';

import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> 
        
        Link es para ir a una ruta especificada al hacer clic en un boton por ejemplo y no refresca la pagina
        Para estilizar el Link, se puede buscar por un a en el css
        */}
      <Navbar />
      <hr />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* <Route path="/*" element={ <LoginPage /> } /> 
            Es basicamente el comodin, lo que seria la pagina 404 cuando se ingresa a una ruta no especificada
          */}
        <Route path="/*" element={<Navigate to="/about" />
          //Navigate redirige a otra pagina
        } />

      </Routes>
    </UserProvider>
  )
}
