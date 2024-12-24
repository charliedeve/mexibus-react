import React, { useState, useRef, useEffect } from 'react';
import CrudPLineaService from '../service/CrudPLineaService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import NavbarCrud from '../components/navbarCrud/NavbarCrud';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';

const CrudPLinea = () => {

  const crudPLineaService = new CrudPLineaService();
  const [lstEstacion, setLstEstacion] = useState([]);
  const [lstEspacios, setLstEspacios] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [dlgAgregaEspacio, setDlgAgregaEspacio] = useState(false);

  const buscarEstacion = (e) => {
    if (e.keyCode === 13) {
      listaEstacion(e.target.value)
    }
  }

  const listaEstacion = (pBusqueda) => {
    crudPLineaService.buscarEstacion(pBusqueda).then((data) => {
      setLstEstacion(data);
    })
  }

  const agregaEspacio = () => {

  }

  const onRowExpand = (e) => {
    crudPLineaService.seleccionaEstacion(e.data.idEstacion).then((data) => {
      setLstEspacios(data.espacios);
    })
  }

  const colapseRows = (e) => {
    if (expandedRows && expandedRows.idEstacion == e.data.idEstacion) {
      setExpandedRows(null)
    } else {
      setExpandedRows(e.data)
    }
  }

  const rowExpansionTemplate = () => {
    return (
      <div className='p-3'>
        <DataTable
          value={lstEspacios}
          emptyMessage={'No hay espacios'}
        >
          <Column
            field='nombre'
            header="Nombre"
          />
          <Column
            field='dimensiones'
            header="Dimensiones"
          />
          <Column
            field='precio'
            header="Precio"
            sortable={true}
          />
          <Column
            field='estado'
            header="Estado"
          />
          <Column
            body={actionTemplate}
            header="Acciones"
          />
        </DataTable>
      </div>
    )
  }

  const actionTemplate = () => {
    return (
      <div className='grid'>
        <div className='col'>
          <Button
            icon="pi pi-plus"
            onClick={() =>{setDlgAgregaEspacio(true)}}
          />
        </div>
        <div className='col'>
          <Button
            icon="pi pi-pencil"
          />
        </div>
        <div className='col'>
          <Button
            icon="pi pi-trash"
          />
        </div>
      </div>
    )
  }

  return (
    <div className='grid'>
      <div className='col-3'>
        <NavbarCrud />
      </div>
      <div className='col-9 ml-auto p-7 bg-g surface-100'>
        <div className='flex justify-content-between top-0 pb-4'>
          <li className='text-xs text-700'>Home / CrudPrimeraLinea</li>
          <Dropdown />
        </div>
        <div className='p-inputgroup justify-content-end mb-5'>
          <Button icon="pi pi-search" />
          <FloatLabel>
            <InputText
              id='buscaEstacion'
              onKeyDown={(e) => buscarEstacion(e)} />
            <label htmlFor="buscaEstacion">Buscar estación</label>
          </FloatLabel>
          <Button />
        </div>
        <div className='card'>
          <DataTable
            value={lstEstacion}
            onRowExpand={onRowExpand}
            expandedRows={expandedRows}
            onRowToggle={colapseRows}
            rowExpansionTemplate={rowExpansionTemplate}
            tableStyle={{ minWidth: '50rem' }}
            emptyMessage="No hay estaciones"
            paginator
            rows={5}>
            <Column expander={true} />
            <Column field="idEstacion" header="Id" />
            <Column field="nombre" header="nombre" />
          </DataTable>
        </div>
      </div>
      <Dialog
      visible={dlgAgregaEspacio}
      modal
      header={"Agrega espacio"}
      style={{width: '50rem'}}
      onHide={() =>{ setDlgAgregaEspacio(false)}}
      >
      </Dialog>
    </div>
  );
};

export default CrudPLinea;