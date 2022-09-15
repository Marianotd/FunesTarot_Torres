/* Import Bootstrap */
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
/* Import Iconos - Logo */
import { CgMenu } from 'react-icons/cg';
import Logo from '../Logo/Logo';
/* Import Componentes */
import NavLink from './NavLink';
import NavLinkCarrito from './NavLinkCarrito';
/* Import Imagenes */
import NavLinkImg from './NavLinkImg.png'
import NavTatuajes from './NavTatuajes.png'

export default function NavBar() {
    const [open, setOpen] = useState(false);

    return(
        <header>
            <div className="d-flex flex-row flex-wrap justify-content-around align-content-center pt-4 pb-2 px-md-2">
                <Logo />

                <div className="botonMenuHeader order-md-2 col-5 col-md-1 d-flex align-items-center justify-content-around justify-content-md-center">                   
                    <button className='d-md-none' type="button" onClick={() => setOpen(!open)}><CgMenu className='menuHamburguesa'/></button>      
                    <NavLinkCarrito/>
                </div>

                <Collapse className='collapseNav mt-3' in={open}>
                    <div className="collapse col-12 col-md-9 d-md-flex flex-row align-items-md-center" id="navHeader">
                        <nav className="col-12 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
                            <NavLink name="Ilustraciones" link="ilustraciones.html" img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Tarot"         link="tarot.html"         img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Astrología"    link="astrologia.html"    img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Cursos"        link="cursos.html"        img={NavLinkImg}  classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Tatuajes"      link="tatuajes.html"      img={NavTatuajes} classTxt="textNav" classImg="d-none d-xl-inline-block img-fluid" classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                            <NavLink name="Contacto"      link="contacto.html"      img=""            classTxt=""        classImg="d-none"                             classLink="col-12 col-md-2 text-center py-3 p-md-1"/>
                        </nav>
                    </div>
                </Collapse>
            </div>
        </header>
    )
};