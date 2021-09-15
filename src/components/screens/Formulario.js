import React, { useEffect, useState } from "react";
import "../styles/formulario.css";
import { Footer } from "./Footer";

export const Formulario = (props) => {
  const initialFieldValues = {
    fullname: "",
    cedula: "",
    celular: "",
    message: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInpuntChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <>
      {/********Formulario********/}
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <div className="container-contact">
          <div id="mainContainer">
            <div>
              <div className="starsec"></div>
              <div className="starthird"></div>
              <div className="starfourth"></div>
              <div className="starfifth"></div>
            </div>

            <div className="container text-center text-dark mt-5">
              <div className="row">
                <div className="col-lg-4 d-block mx-auto mt-5">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-md-12">
                      <div className="card">
                        <div className="card-body wow-bg" id="formBg">
                          <h3 className="colorboard">Renovemos Colombia</h3>

                          <p className="text-muted">Marcamos la diferencia</p>

                          <div className="input-group mb-3">
                            <input
                              type="text"
                              name="fullname"
                              value={values.fullname}
                              onChange={handleInpuntChange}
                              required="value1"
                              className="form-control textbox-dg"
                              placeholder="Nombres"
                            />
                          </div>

                          <div class="input-group mb-4">
                            <input
                              type="text"
                              className="form-control textbox-dg"
                              placeholder="Cedula"
                              value={values.cedula}
                              onChange={handleInpuntChange}
                              name="cedula"
                              required="value2"
                            />
                          </div>

                          <div class="input-group mb-4">
                            <input
                              type="text"
                              name="celular"
                              required="value3"
                              value={values.celular}
                              onChange={handleInpuntChange}
                              className="form-control textbox-dg"
                              placeholder="Celular"
                            />
                          </div>

                          <div class="input-group mb-4">
                            <label htmlFor="message" />
                            <textarea
                              className="form-control textbox-dg"
                              name="message"
                              required="value4"
                              value={values.message}
                              onChange={handleInpuntChange}
                              placeholder="Mensaje"
                            />
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <input
                                type="submit"
                                required="value5"
                                value={props.currentId == "" ? "Enviar" : ""}
                                className="btn btn-primary btn-block enviar-btn"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
