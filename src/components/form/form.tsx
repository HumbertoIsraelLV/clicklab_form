import { useRef, useState } from 'react';
import axios from "axios";
import validator from 'validator';

import Textfield from '../../components/textfield/textfield';
import Select from '../../components/select/select';
import RadioButtonGroup from '../../components/radio_button_group/radio_button_group';
import { useForm } from '../../hooks/useForm';
import { FormValuesInterface } from '../../interfaces/form';

const Form = () => {

  const initFormValues: FormValuesInterface = {
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
    seguimiento: 'false',
    comen: '',
  };

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [formErrors, setFormErrors] = useState<FormValuesInterface>({});

  const [formValues, setFormValues, handleInputChange] = useForm(initFormValues);

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
    // agente,
    // seguimiento,
    // comen,
  }: any = formValues;

  const submitForm = (event: any) => {
    event.preventDefault();
    if(!isFormValid()) return;
    sendFormData();
    event.target.reset();    
    submitButtonRef.current?.blur();
    setFormValues(initFormValues);    
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
    }else{
      if(!RegExp('^[0-9]{10}$').test(movil)){
        errors['movil'] = 'ingresa un formato válido (10 digitos)';
        isValid = false;
      }
    }
    if(validator.isEmpty(fijo)){
      errors['fijo'] = 'teléfono fijo requerido';
      isValid = false;
    }else{
      if(!RegExp('^[0-9]{10}$').test(fijo)){
        errors['fijo'] = 'ingresa un formato válido (10 digitos)';
        isValid = false;
      }
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
    setFormErrors(errors);
    return isValid;
  }

  const sendFormData = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const idLlamada = queryParams.get("idllamada");
    const tel = queryParams.get("tel");

    axios
      .post('http://elpuntoyseguido.com.mx:3006/capturardatos', {idllamada: idLlamada, tel, ...formValues})
      .then((response) => {
        alert('Formulario enviado');
        // console.log(response);
        
      }).catch(error => {
        console.log('Error at sending data');
        console.log(error);
      });
  }

  return (
    <div className='container rounded clicklab_form_container'>
    <form className="row g-3" onSubmit={submitForm}>
        <div className="col-md-12">
        <Textfield 
            name={'nombre'} 
            placeholder={'Nombre completo'} 
            set={handleInputChange}
            errors={formErrors}
        />
        </div>
        <div className="col-sm-6 col-lg-9">
        <Textfield 
            name={'ciudad'} 
            placeholder={'Ciudad'} 
            set={handleInputChange}
            errors={formErrors} 
        />
        </div>
        <div className="col-sm-6 col-lg-3">
        <Textfield 
            name={'delegacion'} 
            placeholder={'Delegación'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Textfield 
            name={'colonia'} 
            placeholder={'Alcaldía'}
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-sm-6 col-lg-4">
        <Textfield 
            name={'movil'} 
            placeholder={'Teléfono móvil'} 
            set={handleInputChange} 
            errors={formErrors}
            type={'tel'}
        />
        </div>
        <div className="col-sm-6 col-lg-4">
        <Textfield 
            name={'fijo'} 
            placeholder={'Teléfono fijo'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <Textfield 
            name={'correo'} 
            placeholder={'Correo electrónico'} 
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
            //Proof of concept for reactive validation 
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
          ]}            
          set={handleInputChange}
          errors={formErrors}
        />
        </div>
        <div className="col-lg-4">
        <RadioButtonGroup 
          name={'seguimiento'}
          default={'false'}
          label={'¿Requiere seguimiento?'} 
          options={[
          {
              value: 'true',
              label: 'Sí',  
          },
          {
              value: 'false',
              label: 'No',  
          },
          ]}            
          set={handleInputChange} 
        />
        </div>
        <div className="col-lg-12">
        <Textfield 
            name={'comen'} 
            placeholder={'Comentarios adicionales'} 
            set={handleInputChange} 
            errors={formErrors}
        />
        </div>
        <div className="text-center">
            <button ref={submitButtonRef} type="submit" className="btn btn-submit">Guardar</button>
        </div>
    </form>
    </div>
  );
}

export default Form;