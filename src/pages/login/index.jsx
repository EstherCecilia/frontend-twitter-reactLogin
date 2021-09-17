import React from "react";

import Form from "../../components/molecules/Login/Form";
import Stand from "../../components/molecules/Login/Stand";
import Footer from "../../components/molecules/Login/Footer";

export function Login() {
  return (
    <div>
      <div className="d-flex w-100 flex-wrap flex-row-reverse">
        <Form />
        <Stand />
      </div>
      <Footer />
    </div>
  );
}
