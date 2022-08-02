import React from 'react';

function Hamburger ({ isOpen }) {
    return (
        <>
            <div className="hamburger" >
                <div className="burger burger1"/>
                <div className="burger burger2"/>
                <div className="burger burger3"/>
            </div>

            <style jsx >{`
            .burger1{
                transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                margin-left: ${ isOpen ? '4px' : '0px'}
            }
            .burger2{
                transform: ${ isOpen ? 'scaleX(0)' : 'rotate(0)'}
            }
            .burger3{
                transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                margin-left: ${ isOpen ? '4px' : '0px'}
            }

            `}</style>
        </>
    )
}

export default Hamburger;