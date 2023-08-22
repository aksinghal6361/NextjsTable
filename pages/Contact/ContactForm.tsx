import React from "react";
import { useFormik } from "formik";
import Head from "next/head";

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Name Required";
  } else if (values.firstName.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.phone) {
    errors.phone = "Phone Required";
  } else if (values.firstName.length > 15) {
    errors.phone = "Must be 15 characters or less";
  }
  if (!values.procedure) {
    errors.procedure = "Procedure Required";
  } else if (values.procedure.length > 99) {
    errors.procedure = "Must be 99 characters or less";
  }
  if (!values.subject) {
    errors.subject = "Subject Required";
  } else if (values.subject.length > 15) {
    errors.subject = "Must be 15 characters or less";
  }

  if (!values.company) {
    errors.company = "Company Required";
  } else if (values.company.length > 20) {
    errors.company = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      procedure: "",
      subject: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container-fluid bg-light h-100 p-4">
        <div className="container w-75 pt-4 bg-white rounded ">
          <div
            className="text-center mb-4"
            style={{
              font: "bold 30px/38px Lexend Deca",
              fontSize: "30px",
              color: "#272727",
            }}
          >
            Have any questions for us?
          </div>
          <form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="input-group input-group-lg mb-4">
              <input
                type="text"
                className="form-control me-4"
                placeholder="Name"
                name="name"
              />
              <input
                type="email"
                className="form-control ms-4"
                placeholder="Work Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {formik.errors.name ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.name}
              </div>
            ) : null}
            {formik.errors.email ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.email}
              </div>
            ) : null}
            <div className="input-group input-group-lg mb-4">
              <input
                type="text"
                className="form-control me-4"
                placeholder="Company Name"
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
              />
              <input
                type="text"
                className="form-control ms-4"
                placeholder="Phone number"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            {formik.errors.company ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.company}
              </div>
            ) : null}
            {formik.errors.phone ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.phone}
              </div>
            ) : null}
            <div className="mb-4 input-group input-group-lg">
              <input
                className="form-control"
                id="subject"
                placeholder="Subject for Connecting"
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
              />
            </div>
            {formik.errors.subject ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.subject}
              </div>
            ) : null}
            <div className="mb-4input-group input-group-lg">
              <textarea
                className="form-control mb-4"
                id="procedure"
                placeholder="Write you would like to know about e-Procure"
                rows={3}
                name="procedure"
                onChange={formik.handleChange}
                value={formik.values.procedure}
              />
            </div>
            {formik.errors.procedure ? (
              <div className="alert alert-danger" role="alert">
                {formik.errors.procedure}
              </div>
            ) : null}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-danger btn-lg rounded-pill mb-4"
              >
                SUBMIT YOUR QUERY
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
