import React from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import './form.css';
import { getDefaultNormalizer } from '@testing-library/react';

//STEP 1: Create UserForm
const UserForm = ({ errors, touched, values }) => {
    return (
        <div className='user-form'>
            <Form>
                <Field
                    className='username-field'
                    type='text'
                    name='username'
                    placeholder='username'
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                />
                {touched.username && errors.username && <p className='username'>{errors.username}</p>}
                <Field
                    className='password-field'
                    type='text'
                    name='password'
                    placeholder='password'
                    component={TextField}
                    margin="normal"
                    variant="outlined"
                />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <button data-testid='submit' type='submit'>Submit</button>
            </Form>
        </div>
    );
}
// // STEP 6: get status from props and add a useEffect
// const FormComponent = ({ status }) => {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         // status sometimes comes through as undefined
//         console.log('prevents infinite loop?');
//         if (status) {
//             setUsers(users => [...users, status])
//         }
//     }, [status]);
// }

//STEP 2: create Formik UserForm
const CopyUserForm = withFormik({
    //prop that handles state. values is an object
    mapPropsToValues({ username, password }) {
        //handles change, This object is passed into our map fxn with updated value
        return {
            username: username || '',
            password: password || '',
        };
    },
    //STEP 3: Yup validation
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Invalid Username'),
        password: Yup.string().required('Invalid password'),
    }),
    //STEP 4: prop that handles submit
    handleSubmit(values, { setStatus }) {
        console.log('Form submitted', values);
        axios
            //STEP 5: Make Post request
            .post('http://localhost:5000/api/register', values)
            .then(res => console.log(res))
            .then(res => {
                // call setStatus(a prop we get from formik). pass in object to add to state
                setStatus(res.data)
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default CopyUserForm;