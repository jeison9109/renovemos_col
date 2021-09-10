import React, { useState } from "react";
import "../styles/formulario.css";
import { Footer } from "../screens/Footer";
import { useForm } from "../hooks/useForm";

export const Contactenos = (props) => {
  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Contactanos</h2>
        <div className="line"></div>
      </div>

      {/********Formulario********/}
      <form autoComplete="off">
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
                            {" "}
                            <input
                              type="text"
                              name="fullName"
                              required="value"
                              className="form-control textbox-dg"
                              placeholder="Nombres"
                            />{" "}
                          </div>

                          <div class="input-group mb-4">
                            <input
                              type="text"
                              className="form-control textbox-dg"
                              placeholder="Cedula"
                              name="cedula"
                              required="value2"
                            />
                          </div>

                          <div class="input-group mb-4">
                            <input
                              type="text"
                              className="form-control textbox-dg"
                              placeholder="Celular"
                            />
                          </div>

                          <div class="input-group mb-4">
                            <label htmlFor="message" />
                            <textarea
                              className="form-control textbox-dg"
                              name="message"
                              placeholder="Mensaje"
                              name="message"
                            />
                          </div>

                          <div className="row">
                            <div className="col-12">
                              {" "}
                              <button
                                type="button"
                                className="btn btn-primary btn-block enviar-btn"
                              >
                                Enviar
                              </button>{" "}
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
      <Footer />
    </>
  );
};
