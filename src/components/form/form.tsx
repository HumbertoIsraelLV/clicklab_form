import { useState } from 'react';
import axios from "axios";
import validator from 'validator';

import Textfield from '../../components/textfield/textfield';
import Select from '../../components/select/select';
import RadioButtonGroup from '../../components/radio_button_group/radio_button_group';
import { useForm } from '../../hooks/useForm';

const Form = () => {

  const [formErrors, setFormErrors] = useState({});

  const [formValues, handleInputChange] = useForm({
    nombre: '',
    ciudad: '',
    delegacion: '',
    colonia: '',
    movil: '',
    fijo: '',
    correo: '',
    t_examen: '',
    enterado: '',
    campaña: '',
    agente: '',
    seguimiento: '',
    comen: '',
  });

  const {
    nombre,
    ciudad,
    delegacion,
    colonia,
    movil,
    fijo,
    correo,
    t_examen,
    enterado,
    campaña,
    agente,
    // seguimiento,
    // comen,
  }: any = formValues;

  const submitForm = (event: any) => {
    event.preventDefault();
    if(!isFormValid()) return;
    // const isValid: boolean = isFormValid();
    sendFormData();
  }

  const isFormValid = () => {
    var isValid: boolean = true;
    var errors:any = {};
    if(validator.isEmpty(nombre)){
      errors['nombre'] = 'nombre completo requerido';
      isValid = false;
    }
    if(validator.isEmpty(ciudad)){
      errors['ciudad'] = 'ciudad requerida';
      isValid = false;
    }
    if(validator.isEmpty(delegacion)){
      errors['delegacion'] = 'delegacion requerida';
      isValid = false;
    }
    if(validator.isEmpty(colonia)){
      errors['colonia'] = 'colonia requerida';
      isValid = false;
    }
    if(validator.isEmpty(movil)){
      errors['movil'] = 'teléfono móvil requerido';
      isValid = false;
    }
    if(validator.isEmpty(fijo)){
      errors['fijo'] = 'télefono fijo requerido';
      isValid = false;
    }
    if(validator.isEmpty(correo)){
      errors['correo'] = 'correo electrónico requerido';
      isValid = false;
    }else{
      if(!validator.isEmail(correo)){
        errors['correo'] = 'correo electrónico invalido';
        isValid = false;
      }
    }
    if(validator.isEmpty(t_examen)){
      errors['t_examen'] = 'tipo de examen requerido';
      isValid = false;
    }
    if(validator.isEmpty(enterado)){
      errors['enterado'] = 'medio de difusión requerido';
      isValid = false;
    }
    if(validator.isEmpty(campaña)){
      errors['campaña'] = 'campaña requerida';
      isValid = false;
    }
    if(validator.isEmpty(agente)){
      errors['agente'] = 'agente requerido';
      isValid = false;
    }

    //@ts-ignore
    setFormErrors(errors);
    return isValid;
  }

  const sendFormData = () => {
    axios
      .post('http://elpuntoyseguido.com.mx:3006/capturardatos', formValues)
      .then((response) => {
        alert(response);
        console.log(response);
        
      }).catch(error => {
        console.log('Error at updating');
        console.log(error);
      });
  }

  return (
    <div className='container rounded clicklab_form_container'>
    <form className="row g-3" onSubmit={submitForm}>
        <div className="col-md-12">
        <Textfield 
            name={'nombre'} 
            label={'Nombre completo'} 
            placeholder={''} 
            type={'text'}
            set={handleInputChange}
            errors={formErrors}
        />
        </div>
        <div className="col-sm-6 col-lg-9">
        <Textfield 
            name={'ciudad'} 
            label={'Ciudad'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange}
            errors={formErrors} 
        />
        </div>
        <div className="col-sm-6 col-lg-3">
        <Textfield 
            name={'delegacion'} 
            label={'Delegación'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Textfield 
            name={'colonia'} 
            label={'Alcaldía'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-sm-6 col-lg-4">
        <Textfield 
            name={'movil'} 
            label={'Teléfono móvil'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-sm-6 col-lg-4">
        <Textfield 
            name={'fijo'} 
            label={'Teléfono fijo'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Textfield 
            name={'correo'} 
            label={'Correo electrónico'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
            />
        </div>
        <div className="col-lg-4">
        <Select 
            name={'t_examen'} 
            label={'Tipo de examen'} 
            options={[
            'Covid-19',
            'Sangre',
            'Orina',
            'Glucosa',
            ]}            
            set={handleInputChange}
            errors={formErrors}
            // validator={(event: any) => {
            //     if(validator.isEmpty(event.target.value)){
            //         //@ts-ignore
            //         setFormErrors({
            //             ...formErrors,
            //             't_examen': 'tipo de examen requerido',
            //         });
            //     }
            // }}
        />
        </div>
        <div className="col-lg-4">
        <Select 
            name={'enterado'} 
            label={'Enterado a través de'} 
            options={[
            'Facebook',
            'Twitter',
            'Whatsapp',
            'Página Web',
            'Publicidad',
            'Otros',
            ]}            
            set={handleInputChange}
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Select 
            name={'campaña'} 
            label={'Campaña'} 
            options={[
            'ClickLab-Head Land',
            ]}            
            set={handleInputChange}
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Select 
            name={'agente'} 
            label={'Agente'} 
            options={[
            'Agente 1',
            'Agente 2',
            ]}            
            set={handleInputChange}
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <RadioButtonGroup 
            name={'seguimiento'} 
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
            set={handleInputChange} 
        />
        </div>
        <div className="col-lg-12">
        <Textfield 
            name={'comen'} 
            label={'Comentarios adicionales'} 
            placeholder={''} 
            type={'text'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-submit">Guardar</button>
        </div>
    </form>
    </div>
  );
}

export default Form;