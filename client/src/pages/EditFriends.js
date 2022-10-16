import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Formik, Form, Field } from 'formik'
import Button from '@mui/material/Button';
import { MdPersonAdd, MdOutlineCleaningServices, MdPostAdd } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import { TiArrowBack } from 'react-icons/ti';
import moment from 'moment'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { AiOutlineClose } from 'react-icons/ai';


function EditFriends() {

    let { id } = useParams();
    const [openAlert, setOpenAlert] = React.useState(false);

    let initialValues = {
        id: 0,
        first_name: "",
        last_name: "",
        phone_number: "",
        age: "",
        sex: 1,
        position: "",
        status: true,
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/Friends/GetOne/${id}`).then((resp) => {
            //setListFriends(resp.data);
            console.log(resp.data);
            initialValues.id = resp.data.id;
            initialValues.first_name = resp.data.first_name;
            initialValues.last_name = resp.data.last_name;
            initialValues.phone_number = resp.data.phone_number;
            initialValues.age = resp.data.age;
            initialValues.sex = resp.data.sex;
            initialValues.status = resp.data.status;
            initialValues.gender = resp.data.gender;
            initialValues.position = resp.data.position;

            document.getElementById("inputAddFriends_FirstName").value = resp.data.first_name;
            document.getElementById("inputAddFriends_LastName").value = resp.data.last_name;
            document.getElementById("inputAddFriends_Phone").value = resp.data.phone_number;
            document.getElementById("inputAddFriends_Age").value = resp.data.age;
            document.getElementById("inputAddFriends_Gender").value = resp.data.sex;
            document.getElementById("inputAddFriends_Status").value = resp.data.status;

            document.getElementById("inputAddFriends_Position").value = resp.data.position;
            document.getElementById("inputAddFriends_CreateAt").value = moment(resp.data.createdAt).format('DD/MM/YYYY');
            document.getElementById("inputAddFriends_UpdateAt").value = moment(resp.data.updatedAt).format('DD/MM/YYYY');
        });
    }, []);


    const validation = Yup.object().shape({
        first_name: Yup.string().required("Please enter name"),
        last_name: Yup.string().required("Please enter last name"),
        phone_number: Yup.string().min(10, "Must be exactly 10 characters").max(10, "Must be exactly 10 characters").required("Please enter phone number"),
        age: Yup.number().positive("Age must be a positive number").required("Please enter age"),
        position: Yup.string().required("Please enter position"),
    })

    const [gender, setGender] = React.useState(1);
    const [status, setStatus] = React.useState(1);

    const handleChange = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
        initialValues.sex = event.target.value;
        console.log(initialValues);
    };

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
        initialValues.status = event.target.value;
        console.log(initialValues);
    };

    return (
        <div className='content'>
            <div className="App"><h1>Edit Friends</h1></div>
            <Collapse in={openAlert}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpenAlert(false);
                                }}
                            >
                                <AiOutlineClose fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        This is a success alert — check it out!
                    </Alert>
                </Collapse>
            <Formik
                initialValues={initialValues}
                onSubmit={(value, formikHelpers) => {
                    console.log(value);
                    axios.put('http://localhost:3001/Friends/Update', value).then((resp) => {
                        setOpenAlert(true);
                        // setTimeout(() => {
                        //     window.location.reload(false);
                        // }, 5000)
                    });
                }}

                validationSchema={validation}
            >
                {({ errors, isValid, touched, dirty, setFieldValue, values }) =>
                    <Form>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_FirstName"
                                name="first_name"
                                as={TextField}
                                label="First name"
                                value={values.first_name}
                                error={Boolean(errors.first_name) && Boolean(touched.first_name)}
                                helperText={Boolean(touched.first_name) && errors.first_name}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_LastName"
                                name="last_name"
                                as={TextField}
                                label="Last name"
                                error={Boolean(errors.last_name) && Boolean(touched.last_name)}
                                helperText={Boolean(touched.last_name) && errors.last_name}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_Phone"
                                name="phone_number"
                                as={TextField}
                                type="tel"
                                label="Phone number"
                                value={values.phone_number}
                                onChange={e => {
                                    e.preventDefault();
                                    const { value } = e.target;
                                    const regex = /^(0*[0-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                                    if (regex.test(value.toString())) {
                                        setFieldValue("phone_number", value);
                                    }
                                }}
                                error={Boolean(errors.phone_number) && Boolean(touched.phone_number)}
                                helperText={Boolean(touched.phone_number) && errors.phone_number}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_Age"
                                name="age"
                                as={TextField}
                                type="number"
                                label="Age"
                                value={values.age}
                                error={Boolean(errors.age) && Boolean(touched.age)}
                                helperText={Boolean(touched.age) && errors.age}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Genders</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="inputAddFriends_Gender"
                                name="sex"
                                value={values.sex}
                                label="Genders"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="inputAddFriends_Status"
                                name="status"
                                value={values.status}
                                label="Status"
                                onChange={handleChangeStatus}
                            >
                                <MenuItem value={true}>Active</MenuItem>
                                <MenuItem value={false}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_Position"
                                name="position"
                                as={TextField}
                                label="Position"
                                value={values.position}
                                error={Boolean(errors.position) && Boolean(touched.position)}
                                helperText={Boolean(touched.position) && errors.position}
                            />
                        </FormControl><br />
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_CreateAt"
                                name="Create At"
                                as={TextField}
                                label="Create At"
                                disabled
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Field
                                id="inputAddFriends_UpdateAt"
                                name="Update At"
                                as={TextField}
                                label="Update At"
                                disabled
                            />
                        </FormControl>
                        <br /><br />
                        <center>
                            <Button variant="contained" color='success' startIcon={<MdPostAdd />} size='large' type="submit" disabled={!isValid}>Save</Button> <Button variant="contained" startIcon={<TiArrowBack />} size='large' color='info' onClick={() => { window.location.href = "/" }}>Back</Button>
                        </center>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default EditFriends