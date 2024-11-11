import axios from 'axios';

export default class PrimeraLineaService{

    obtenerLstEspacio(estacionId){
        let baseUrl = 'http://localhost:8080/mexibus/espacio/obtenerEspacioEstacion/' + estacionId;
        return axios.get(baseUrl, { headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        .then(response => response.data);
    }
}
