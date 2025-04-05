import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HouseDoorFill, FileEarmarkFill, Window, PersonSquare } from 'react-bootstrap-icons'


const Navbar = () => {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    return (
        <nav className="navbar navbar-dark p-3">
            <div className='container-fluid'>
                <div className="col-2">
                    <Link className="navbar-brand" to="/"><HouseDoorFill size={"1.75em"} color='white' className='m-2' /></Link>
                </div>
                <div className="d-flex row col-10 justify-content-around text-center" >
                    <div className='col-3'>
                        <Link className="navbar-brand fw-bold my-auto nav-link " to="/projects" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{hover ? "Projects" : <Window size={"1.5em"} color='white' />}</Link>
                    </div>
                    <div className='col-3'>
                        <Link className="navbar-brand fw-bold my-auto nav-link " to="/contact" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>{hover2 ? "About Me" : <PersonSquare size={"1.5em"} color='white' />}</Link>
                    </div>
                    <div className='col-3'>
                        <Link className="navbar-brand fw-bold my-auto nav-link " to="/résumé" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>{hover3 ? "Résumé" : <FileEarmarkFill size={"1.5em"} color='white' />}</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;