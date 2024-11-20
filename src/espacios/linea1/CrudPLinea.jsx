import React, {useState, useRef, useEffect } from 'react';
import PrimeraLineaService from '../../service/PrimeraLineaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const CrudPLinea = () => {

  const [lstEspacios, setLstEspacios] = useState([]);
  const primeraLineaService = new PrimeraLineaService();

  useEffect(() => {
    primeraLineaService.obtenerLstEspacio().then((data) => {
      setLstEspacios(data);
    })
  }, []);

  return (
    <div className='card'>
      <DataTable value={lstEspacios} emptyMessage="No hay espacios">
        <Column field="id" header="Id" />
        <Column field="dimensiones" header="dimensiones" />
        <Column field="precio" header="precio" />
        <Column field="estado" header="estado" />
      </DataTable>
    </div>
  );
};

export default CrudPLinea;