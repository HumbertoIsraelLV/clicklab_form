import React, { useReducer, useState } from 'react';
import './App.css';
import logo from './assets/img/logo.png';
import Textfield from './components/textfield/textfield';
import Select from './components/select/select';
import RadioButtonGroup from './components/radio_button_group/radio_button_group';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const App = () => {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const submitForm = (event: any) => {
    event.preventDefault();
    console.log(formData);
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
  }

  const handleChange = (event: any) => {
    const isCheckeable = event.target.type === 'radio';
   
    setFormData({
      name: event.target.name,
      value: isCheckeable ? event.target.id : event.target.value,
    });
  }

  return (
    <div className="App">
      <header className='row'>
        <div className='col-md-12'>
          <img src={logo} className="rounded logo" alt="logo"/>
        </div>
      </header>
      <div className='container rounded clicklab_form_container'>
        {submitting &&
          <>
            <div>Submtting Form...</div>
          </>
        }
        <form className="row g-3" onSubmit={submitForm}>
          <div className="col-md-12">
            <Textfield 
              name={'name'} 
              label={'Nombre completo'} 
              placeholder={''} 
              type={'text'}
              set={handleChange} 
              />
          </div>
          <div className="col-sm-6 col-lg-9">
            <Textfield 
              name={'city'} 
              label={'Ciudad'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-sm-6 col-lg-3">
            <Textfield 
              name={'delegation'} 
              label={'Delegación'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-lg-4">
            <Textfield 
              name={'town_hall'} 
              label={'Alcaldía'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Textfield 
              name={'phone'} 
              label={'Teléfono móvil'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Textfield 
              name={'celphone'} 
              label={'Teléfono fijo'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-lg-4">
            <Textfield 
              name={'email'} 
              label={'Correo electrónico'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="col-lg-4">
            <Select 
              name={'test_type'} 
              label={'Tipo de examen'} 
              options={[
                'Covid-19',
                'Sangre',
                'Orina',
                'Glucosa',
              ]}            
              set={handleChange}
            />
          </div>
          <div className="col-lg-4">
            <Select 
              name={'mean'} 
              label={'Enterado a través de'} 
              options={[
                'Facebook',
                'Twitter',
                'Whatsapp',
                'Página Web',
                'Publicidad',
                'Otros',
              ]}            
              set={handleChange}
            />
          </div>
          <div className="col-lg-4">
            <Select 
              name={'campaign'} 
              label={'Campaña'} 
              options={[
                'ClickLab-Head Land',
              ]}            
              set={handleChange}
            />
          </div>
          <div className="col-lg-4">
            <Select 
              name={'agent'} 
              label={'Agente'} 
              options={[
                'ClickLab-Head Land',
              ]}            
              set={handleChange}
            />
          </div>
          <div className="col-lg-4">
            <RadioButtonGroup 
              name={'is_tracking_required'} 
              label={'¿Requiere seguimiento?'} 
              options={[
                {
                  value: 'yes',
                  label: 'Sí',  
                },
                {
                  value: 'no',
                  label: 'No',  
                },
              ]}            
              set={handleChange} 
            />
          </div>
          <div className="col-lg-12">
            <Textfield 
              name={'comments'} 
              label={'Comentarios adicionales'} 
              placeholder={''} 
              type={'text'} 
              set={handleChange} 
              />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
