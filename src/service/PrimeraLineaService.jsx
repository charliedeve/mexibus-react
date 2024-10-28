import React, { PureComponent } from 'react';
import axios from 'axios';

export default class PrimeraLineaService{

    obtenerLstEspacio(){
        axios.get('http://localhost:8080/mexibus/espacio/obtenerEspacio', data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

}


