import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form } from 'formik';
import Yup from 'yup';
import classnames from 'classnames';

const formikEnhancer = withFormik({
  

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false);
  },
  displayName: 'MyForm',
});

const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback">{error}</div>
  ) : null;

const Label = ({
  error,
  className,
  children,
  ...props
}) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="firstName"
        type="text"
        label="First Name"
        placeholder="John"
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lastName"
        type="text"
        label="Last Name"
        placeholder="Doe"
        error={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);



const App = () => (
  <div className="app">
    <MyEnhancedForm
      user={{ email: '', firstName: '', lastName: '' }}
    />
  </div>
);

 // render(<App />, document.getElementById('root'));

export default Form;








// <form>
//               <GridContainer>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Dein Name"
//                     id="name"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <GridItem xs={12} sm={12} md={6}>
//                   <CustomInput
//                     labelText="Email Adresse"
//                     id="email"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                   />
//                 </GridItem>
//                 <CustomInput
//                   labelText="Deine Nachricht"
//                   id="message"
//                   formControlProps={{
//                     fullWidth: true,
//                     className: classes.textArea
//                   }}
//                   inputProps={{
//                     multiline: true,
//                     rows: 5
//                   }}
//                 />
//                 <GridContainer justify="center">
//                   <GridItem
//                     xs={12}
//                     sm={12}
//                     md={4}
//                     className={classes.textCenter}
//                   >
//                     <Button color="primary">Senden</Button>
//                   </GridItem>
//                 </GridContainer>
//               </GridContainer>
//             </form>
