import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase";
import { Formulario } from "./Formulario";

export const Contacts = () => {
  var [contactObjects, setContactObjects] = useState(0);
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  return (
    <>
      <div className="separator">
        <div className="line"></div>
        <h2>Contactanos</h2>
        <div className="line"></div>
      </div>
      <Formulario {...{ addOrEdit, currentId, contactObjects }} />
    </>
  );
};
