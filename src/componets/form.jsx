import React from 'react';
import { Formik, Form, Field } from 'formik'; 

import { Schema } from "./yup.js"

import "./form.css"

function FormLogin () {
  const  handleSubmit = value => {
    alert(JSON.stringify(value, null, 2))
  }

  return ( 
    <Formik
        initialValues={{ 
          name: "", 
          email: "",
          cpf : "", 
          genre: "",
          road : "",
          zipcode: "",
          number: "",
          date: ""
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({values, errors, touched}) => (
          <Form>
            <fieldset>
                <legend> Informações pessoais</legend>

              <div className="wrapperForm">
                   <div>
                  <Field
                    type="text"
                    name="name"
                    id = "inputA"
                    placeholder="Name"
                  />
                  { touched.name && errors.name ? ( <p className="error">{ errors.name} </p> ) : null }
                   </div> 
                <div>
                  <Field
                      type="email"
                      name="email"
                      id="inputA"
                      placeholder="email"
                  />
                  {  touched.email && errors.email  ? ( <p className="error">{ errors.email} </p> ) : null }
                </div>
                <div>
                <Field
                    placeholder="cpf"
                    type="text"
                    name="cpf"
                    id="inputA"
                />
                { errors.cpf && touched.cpf ? ( <p className="error">{ errors.cpf} </p> ) : null }
               </div>
                  <div> 
                <Field
                
                  type="text"
                  name="road"
                  id="inputA"
                  placeholder="road"
                />
                { errors.road && touched.road ? ( <p  className="error" >{ errors.road} </p> ) : null }
                  </div>
                    <div> 
                <Field  
                    type="text"
                    name="zipcode"
                    id="inputA"
                    placeholder="zipcode"       
                />
                { errors.zipcode && touched.zipcode ? ( <p  className="error" >{ errors.zipcode} </p> ) : null }
                    </div>
                  <div>
                <Field
                  type="text"
                  name="number"
                  id="inputA"
                  placeholder="number"       
                />
                { errors.number && touched.number ? ( <p  className="error" >{ errors.number} </p> ) : null }
                  </div>
                  <div>
                <Field
                  type="date"
                  name="date"
                  id="inputA"
                  placeholder="date"       
                />
                { errors.date && touched.date ? ( <p  className="error" >{ errors.date} </p> ) : null }
                  </div>

                  <div className="my-radio-group">
                <Field type="radio" name="genre" value="feminino" className = "radio" />
                <label>
                 Feminino
                </label>
                 <Field type="radio" name="genre" value="Masculino" className = "radio" />
                <label>
                 Masculino
                </label>
                 <Field type="radio" name="genre" value="Outros" className = "radio" />
                <label>
                  outros
                </label>
                { errors.genre && touched.genre ? ( <p className="error">{ errors.genre} </p> ) : null }
                 </div>

                <button type="submit">Submit</button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
 
  )}; 


 
export default FormLogin ;