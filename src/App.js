
import './App.css';
import CompAgregarClientes from './Componentes/CompAgregarClientes';
import CompClienteMostrar from './Componentes/CompClienteMostrar';
import CompModClientes from './Componentes/CompModClientes';
import CompProveedorMostrar  from './Componentes/CompProveedorMostar';
import CompModProveedor from './Componentes/CompModProveedor';
import CompAgregarProveedor from './Componentes/CompAgreegarProveedor';
import CompProductosMostrar from './Componentes/CompProductoMostrar';
import CompAgregarProductos from './Componentes/CompAgregarProducto';

import MenuC from './Componentes/CompMenu';
import Footer from './Componentes/CompFooter';
import CompModProducto from './Componentes/CompModProducto';
// importamos router
import { BrowserRouter, Route,Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <MenuC/>
       <BrowserRouter>
      <Routes> 
        <Route path=  '/proveedor/'element = {<CompProveedorMostrar/>} />
        <Route path= '/proveedor/agregar' element = {<CompAgregarProveedor/>}/>
        <Route path=  '/proveedor/editar/:id'element = {<CompModProveedor/>} />
        <Route path=  '/clientes/'element = {<CompClienteMostrar/>} />
        <Route path=  '/clientes/agregar'element = {<CompAgregarClientes/>} />
        <Route path=  '/clientes/editar/:id'element = {<CompModClientes/>} />
        <Route path=  '/productos/'element = {<CompProductosMostrar/>} />
        <Route path= '/productos/agregar' element = {<CompAgregarProductos/>}/>
        <Route path=  '/productos/editar/:id'element = {<CompModProducto/>} />
      </Routes> 
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
