import React, {useState, useRef, useEffect } from 'react';
import PrimeraLineaService from '../../service/PrimeraLineaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const PrimeraLinea = () => {

  const [lstEspacios, setLstEspacios] = useState([]);
  const primeraLineaService = PrimeraLineaService();


  return (
    <div className='card'>
      <DataTable value={lstEspacios}>
        <Column field="id" header="Id" />
        <Column field="dimensiones" header="dimensiones" />
        <Column field="precio" header="precio" />
        <Column field="estado" header="estado" />
      </DataTable>

    </div>
  );
};

export default PrimeraLinea;