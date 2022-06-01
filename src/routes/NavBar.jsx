import {React,useRef} from 'react'
import {BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Contactanos} from '../components/fContactanos/Contactanos.jsx'
import {DonaVolunt} from '../components/fDonaVolunt/DonaVolunt.jsx'
import {Home} from '../components/fHome/Home.jsx'
import {Leyes} from '../components/fLeyes/Leyes.jsx'
import {Refugiados} from '../components/fRefugiados/Refugiados.jsx'
import {ReqAdop} from '../components/fReqAdop/ReqAdop.jsx'
import '../styles/NavBar.css'
function NavBar() {
    const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
  return (

    <BrowserRouter>
    <header>
        <h3>PATITAS AMIGAS</h3>
        <nav ref={navRef}>
            <ul>
                <li><NavLink to='/'>
                        Home
                    </NavLink></li>

                <li><NavLink to='/reqadop'>
                    Requisitos Adopcion
                    </NavLink></li>

                <li><NavLink to='/donacionvoluntariado'>
                    Donacion y Voluntariado
                    </NavLink></li>

                <li><NavLink to='/refugiados'>
                    Refugiados
                    </NavLink></li>

                <li><NavLink to='/leyesynormas'>
                    Leyes y Normas
                    </NavLink></li>

                <li><NavLink to='/contactanos'>
                    Contactanos
                    </NavLink></li>
            </ul> 
            <button className='nav-btn nav-close-btn'onClick={showNavBar}>
                <FaTimes></FaTimes>
            </button>
        </nav>

        <button className='nav-btn' onClick={showNavBar}>
                <FaBars></FaBars>
        </button>
    </header>
        <Routes>
            <Route path='reqadop' element={<ReqAdop></ReqAdop>}></Route>
            <Route path='donacionvoluntariado' element={<DonaVolunt></DonaVolunt>}></Route>
            <Route path='refugiados' element={<Refugiados></Refugiados>}></Route>
            <Route path='leyesynormas' element={<Leyes></Leyes>}></Route>
            <Route path='contactanos' element={<Contactanos></Contactanos>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='/*' element={<Navigate to='/home' replace></Navigate>}></Route>
        </Routes>
    </BrowserRouter>
    
  )
}

export  {NavBar}