import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
  });
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.name, values.number);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label>
            Name
            <div>
              <Field className={css.field} type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <label>
            Number
            <div>
              <Field
                className={css.field}
                type="tel"
                inputMode="tel"
                name="number"
              />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "tomato" }}
              />
            </div>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
