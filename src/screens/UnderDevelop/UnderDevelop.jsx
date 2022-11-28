import React, { useState, useEffect } from 'react';

import logo from '../../images/6ELx.gif'

const UnderDevelop = () => {

    return (
        <div style={{fontSize: '26px', marginTop: `60%`}}>
            Данный раздел находится в разработке
            <div>
                <img src={logo} alt="loading..." />
            </div>
        </div>
    )
};


export default UnderDevelop;
