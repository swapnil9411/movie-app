import React from 'react';
import { Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Name</label>
        <div>
          <Field
            name="Title"
            component="input"
            type="text"
            placeholder="movie name..."
          />
        </div>
      </div>
      <div>
        <label>Actor</label>
        <div>
          <Field
            name="Actors"
            component="input"
            type="text"
            placeholder="actor..."
          />
        </div>
      </div>
      <div>
        <label>Production</label>
        <div>
          <Field
            name="Production"
            component="input"
            placeholder="production..."
          />
        </div>
      </div>
      <div>
        {/* <button type="submit" disabled={pristine || submitting}>
          Submit
        </button> */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button> */}
        <Button
          variant="contained"
          color="secondary"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          style={styles.Button}
        >
          Clear Values
        </Button>
      </div>
    </form>
  );
};

const movieform = reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

const styles = {
  Button: {
    margin: 10,
  },
};

export default movieform;
