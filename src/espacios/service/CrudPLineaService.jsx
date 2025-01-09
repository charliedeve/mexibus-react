import axios from 'axios';

export default class CrudPLineaService {

    buscarEstacion(pBusqueda) {
        let baseUrl = 'http://localhost:8080/mexibus/estacion/buscaEstacionByLinea/1/';
        let pBusquedaValor = pBusqueda.trim() === '' ? '%20' : pBusqueda;
        return axios.get(baseUrl + pBusquedaValor, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
            .then(response => response.data);
    }

    seleccionarEstacion(idEstacion){
        let baseUrl = 'http://localhost:8080/mexibus/estacion/obtenerEstacionById/' +idEstacion;
        return axios.get(baseUrl, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        .then(response => response.data);
    }

    agregarEstacion(nuevaEstacion){
        let baseUrl = 'http://localhost:8080/mexibus/estacion/agregarEstacion';
        return axios.post(baseUrl, nuevaEstacion, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`, 'Content-type': 'application/json'}})
        .then(response => response.data);
    }

    agregarEspacio(nuevoEspacio){
        let baseUrl = 'http://localhost:8080/mexibus/espacio/agregarEspacio';
        return axios.post(baseUrl, nuevoEspacio, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`, 'Content-type': 'application/json'}})
        .then(response => response.data);
    }
}
