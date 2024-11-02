import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Snackbar } from '@mui/material';

const Contact: React.FC = () => {
  const handleSubmit = (values: any) => {
    // Submit form data logic here
    console.log(values);
  };

  return (
    <section>
      <h1>Contact</h1>
      <div>
        {/* Replace with actual video embeds */}
        <iframe src="https://www.youtube.com/embed/video-id" title="Video" />
      </div>
      <Formik initialValues={{ name: '', email: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <Field name="email" placeholder="Email" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
      <Snackbar open={false} message="Form submitted successfully!" />
    </section>
  );
};

export default Contact;
