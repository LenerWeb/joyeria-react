import logo from '../Assets/Logoruttylilafondotrans3.png';

function Nav() {

    return (
        <section className='container'>
            <div className='table-responsive'>
                <nav className='navbar navbar-expand-lg'>
                    <div className='container-fluid'>
                        <div>
                            <img height="90" src={logo} alt="logo" />
                        </div>
                        <div className='container'>
                            <ul className='navbar-nav justify-content-end fs-3'>
                                <li className='nav-item'>
                                    <a className='nav-link' href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Portafolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );

}

export default Nav;