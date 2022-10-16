import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdPersonAdd, MdOutlineCleaningServices, MdPostAdd } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { AiOutlineClose } from 'react-icons/ai';

function AddFriends() {

    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 480,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        console.clear();
    }
    const handleClose = () => setOpen(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    let initialValues = {
        first_name: "",
        last_name: "",
        phone_number: "",
        age: "",
        sex: 1, // set Male
        position: "",
        status: true,
        status_delete: false,
    }

    const validation = Yup.object().shape({
        first_name: Yup.string().required("Please enter name"),
        last_name: Yup.string().required("Please enter last name"),
        phone_number: Yup.string().min(10, "Must be exactly 10 characters").max(10, "Must be exactly 10 characters").required("Please enter phone number"),
        age: Yup.number().positive("Age must be a positive number").required("Please enter age"),
        position: Yup.string().required("Please enter position"),
    })
    
    return (
        <div className='AddFriendsPage'>
            <Button variant="contained" align="left" startIcon={<MdPersonAdd />} onClick={handleOpen}>
                Add Friends
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="App"><h1>Add Friend</h1></div>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Friends
                    </Typography> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box sx={{ width: '100%' }}>
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
                        </Box>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(value, formikHelpers) => {
                                axios.post('http://localhost:3001/Friends', value).then((resp) => {
                                    setOpenAlert(true);
                                    setTimeout(() => {
                                        window.location.reload(false);
                                    }, 3000)
                                });
                                formikHelpers.resetForm();
                                console.log(value);
                            }}

                            validationSchema={validation} >
                            {({ errors, isValid, touched, dirty, setFieldValue, values }) =>
                                <Form>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Field
                                            id="inputAddFriends"
                                            name="first_name"
                                            as={TextField}
                                            label="First name"
                                            error={Boolean(errors.first_name) && Boolean(touched.first_name)}
                                            helperText={Boolean(touched.first_name) && errors.first_name}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Field
                                            id="inputAddFriends"
                                            name="last_name"
                                            as={TextField}
                                            label="Last name"
                                            error={Boolean(errors.last_name) && Boolean(touched.last_name)}
                                            helperText={Boolean(touched.last_name) && errors.last_name}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Field
                                            id="inputAddFriends"
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
                                            id="inputAddFriends"
                                            name="age"
                                            as={TextField}
                                            type="number"
                                            label="Age"
                                            error={Boolean(errors.age) && Boolean(touched.age)}
                                            helperText={Boolean(touched.age) && errors.age}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-helper-label">Genders</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={values.sex}
                                            label="Genders"
                                            onChange={e => {
                                                e.preventDefault();
                                                const { value } = e.target;
                                                setFieldValue("sex", value);
                                            }}
                                        >
                                            <MenuItem value={1}>Male</MenuItem>
                                            <MenuItem value={2}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Field
                                            id="inputAddFriends"
                                            name="position"
                                            as={TextField}
                                            label="Position"
                                            error={Boolean(errors.position) && Boolean(touched.position)}
                                            helperText={Boolean(touched.position) && errors.position}
                                        />
                                    </FormControl>
                                    <br /><br />
                                    <div className='App'><Button variant="contained" color='success' startIcon={<MdPostAdd />} size='large' type="submit" disabled={!dirty || !isValid}>Save</Button> <Button variant="contained" startIcon={<MdOutlineCleaningServices />} size='large' color='info'>Claer</Button></div>
                                </Form>
                            }

                        </Formik>
                    </Typography>
                </Box>
            </Modal>
        </div >
    )
}

export default AddFriends