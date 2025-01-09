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
import { Toast } from 'primereact/toast';


const CrudPLinea = () => {

  const crudPLineaService = new CrudPLineaService();
  const [lstEstacion, setLstEstacion] = useState([]);
  const [lstEspacios, setLstEspacios] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const [dlgAgregaEspacio, setDlgAgregaEspacio] = useState(false);
  const [dlgAgregaEstacion, setDlgAgregaEstacion] = useState(false);
  const [nombreAgregaEstacion, setNombreAgregaEstacion] = useState(null);
  const [espacioData, setEspacioData] = useState(null);
  const [agregaEspacioValues, setAgregaEspacioValues] = useState({
    'nombre': '',
    'dimensiones': '',
    'precio': null,
    'estado': '',
    'estacion': {'idEstacion': null}
  });
  const [dimension, setDimension] = useState(null);
  const dimensionesOptions = [
    { size: '1x1', code: '1x1'},
    { size: '2x2', code: '2x2'},
    { size: '3x3', code: '3x3'},
    { size: '4x4', code: '4x4'},
  ]
  const toast = useRef(null);

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

  const agregarEspacio = () => {
    let nuevoEspacio = {
      'nombre': agregaEspacioValues.nombre,
      'dimensiones': agregaEspacioValues.dimensiones.size,
      'precio': agregaEspacioValues.precio,
      'estado': agregaEspacioValues.estado,
      'estacion': {'idEstacion': espacioData.idEstacion}
    }
    if(nuevoEspacio.nombre == '' || nuevoEspacio.precio == null || nuevoEspacio.estado == ''){
      toast.current.show({ severity: 'warn', summary: 'Error', detail: 'No puedes dejar un campo vacío', life: 3000 });
    }else{
    crudPLineaService.agregarEspacio(nuevoEspacio).then(() => {
      setDlgAgregaEspacio(false)
      toast.current.show({ severity: 'success', summary: 'Espacio agregado', detail: 'Se ha agregado el espacio con éxito', life: 3000 });
    })
  }
  }

  const onRowExpand = (e) => {
    crudPLineaService.seleccionarEstacion(e.data.idEstacion).then((data) => {
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

  const footerAgregaEstacion = () => {
    return (
      <div>
        <Button
          label='Agregar'
          icon="pi pi-check"
          onClick={agregarEstacion}
        />
      </div>
    )
  }

  const footerAgregaEspacio = (rowData) => {
    return(
      <div>
        <Button
          label='Agregar'
          icon="pi pi-check"
          onClick={() => {agregarEspacio(rowData)}}
        />
      </div>
    )
  }

  const nombrarEstacion = (e) => {
    setNombreAgregaEstacion(e.target.value)
  }

  const agregarEstacion = () => {
    if (nombreAgregaEstacion == null || nombreAgregaEstacion == '') {
      toast.current.show({ severity: 'warn', summary: 'No se pudo agregar la estación', detail: 'El nombre de la estación no puede estar vacío' });
    } else {
      try {
        let nuevaEstacion = {
          'nombre': nombreAgregaEstacion,
          'lineaPadre': 1
        }
        crudPLineaService.agregarEstacion(nuevaEstacion).then((response) => {
          if (response) {
            toast.current.show({ severity: 'success', summary: 'Estación agregada', detail: 'Se ha agregado la estación con éxito', life: 3000 });
          }
        });
      } catch (error) { }
      setDlgAgregaEstacion(false)
    }
  }

  const iniciarAgregaEspacio = (rowData) => {
    setDlgAgregaEspacio(true);
    setEspacioData(rowData)
  }

  const agregarEspacioTemplate = (rowData) => {
    return (
      <div>
        <Button
        icon="pi pi-plus"
        onClick={() => {iniciarAgregaEspacio(rowData)}}
        tooltip='Agregar espacio' />
      </div>
    )
  }

  const colocarDimension = (e) => {
    setDimension(e.target.value)
    setAgregaEspacioValues({...agregaEspacioValues, dimensiones: e.target.value})
    console.log(agregaEspacioValues.dimensiones.size)
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
          <FloatLabel>
            <InputText
              id='buscaEstacion'
              onKeyDown={(e) => buscarEstacion(e)} />
            <label htmlFor="buscaEstacion">Buscar estación</label>
          </FloatLabel>
          <Button icon="pi pi-plus-circle" onClick={() => { setDlgAgregaEstacion(true) }} />
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
            <Column
              header="Acciones"
              body={agregarEspacioTemplate} />
          </DataTable>
        </div>
      </div>
      <Dialog
        visible={dlgAgregaEspacio}
        modal
        header="Agregar espacio"
        style={{ width: '50rem' }}
        onHide={() => { setDlgAgregaEspacio(false) }}
        footer={footerAgregaEspacio}
      >
        <div className='grid pt-4'>
        <div className='pt-4 col-6'>
          <FloatLabel>
            <InputText
            id='nombreEspacio'
            onChange={(e) => {setAgregaEspacioValues({agregaEspacioValues, nombre: e.target.value})}}
            />
            <label htmlFor="nombreEspacio">Nombre espacio</label>
            </FloatLabel>
            </div>
            <div className='pt-4 col-6'>
            <Dropdown 
            value={dimension} 
            onChange={(e) => {colocarDimension(e)}} 
            options={dimensionesOptions} 
            optionLabel="size" 
            placeholder="Selecciona un tamaño" 
            className="w-full md:w-15rem" />
            </div>
            <div className='pt-4 col-6'>
            <FloatLabel>
            <InputText
            id='precio'
            onChange={(e) => {setAgregaEspacioValues({...agregaEspacioValues, precio: e.target.value})}}
            keyfilter='int'
            />
            <label htmlFor="precio">Precio</label>
            </FloatLabel>
            </div>
            <div className='pt-4 col-6'>
            <FloatLabel>
            <InputText
            id='estado'
            onChange={(e) => {setAgregaEspacioValues({...agregaEspacioValues, estado: e.target.value})}}
            />
            <label htmlFor="estado">Estado</label>
            </FloatLabel>
            </div>
        </div>
      </Dialog>
      <Toast ref={toast} />
      <Dialog
        visible={dlgAgregaEstacion}
        modal
        header="Agregar estación"
        style={{ width: '50rem' }}
        footer={(footerAgregaEstacion)}
        onHide={() => { setDlgAgregaEstacion(false) }}
      >
        <div className='pt-4 p-inputgroup justify-content-end mb-5'>
          <FloatLabel>
            <InputText
              id='agregaEstacion'
              onChange={(e) => { nombrarEstacion(e) }}
            />
            <label htmlFor='agregaEstacion'>Nombre estación</label>
          </FloatLabel>
        </div>
      </Dialog>
    </div>
  );
};

export default CrudPLinea;