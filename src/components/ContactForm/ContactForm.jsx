import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ value, handleSubmit, validation }) => {
  const nameID = useId();
  const numberID = useId();
  return (
    <Formik
      initialValues={value}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <label className={css.title} htmlFor={nameID}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameID} />
        <ErrorMessage className={css.message} name="name" component="span" />

        <label className={css.title} htmlFor={numberID}>
          Number
        </label>
        <Field className={css.field} type="text" name="number" id={numberID} />
        <ErrorMessage className={css.message} name="number" component="span" />

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
