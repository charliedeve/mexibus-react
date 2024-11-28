import React, { useState, useRef, useEffect } from 'react';
import PrimeraLineaService from '../../service/PrimeraLineaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import NavbarCrud from '../components/navbarCrud/NavbarCrud';
import './styleCrudPLinea.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const CrudPLinea = () => {

  const [lstEspacios, setLstEspacios] = useState([]);
  const primeraLineaService = new PrimeraLineaService();

  useEffect(() => {
    primeraLineaService.obtenerLstEspacio().then((data) => {
      setLstEspacios(data);
    })
  }, []);

  return (
    <div className='grid'>
      <div className='col-2'>
        <NavbarCrud />
      </div>
      <div className='col-9 ml-auto p-8'>
        <div className='p-inputgroup justify-content-end mb-5'>
          <Button icon="pi pi-search"/>
          <InputText />
        </div>
        <DataTable value={lstEspacios} tableStyle={{ minWidth: '50rem' }} emptyMessage="No hay espacios">
          <Column field="id" header="Id" />
          <Column field="dimensiones" header="dimensiones" />
          <Column field="precio" header="precio" />
          <Column field="estado" header="estado" />
          <Column header="Acciones" />
        </DataTable>
      </div>
    </div>
  );
};

export default CrudPLinea;