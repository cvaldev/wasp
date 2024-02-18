import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    FormGroup,
    FormHelperText,
    Typography,
    Checkbox,
    FormControlLabel,
    Snackbar,
    Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { SuccessSnackBar } from "../components/SuccessSnackBar";

const UserTypeEnum = {
    senior: "Senior",
    volunteer: "Volunteer",
};

const SignUpCommunity = ({ userType }) => {
    const [formData, setFormData] = useState({
        seniorName: "",
        seniorAddress: "",
        seniorPhone: "",
        seniorEmail: "",
        //for guardian, helper and not senior
        name: "",
        // birthday: "",
        phone: "",
        city: "",
        email: "",
        // password: "",
        // consentForm: "",
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const renderFormFields = () => {
        switch (userType) {
            case "senior":
                return (
                    <>
                        <TextField
                            label="Guardian Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Senior's Name"
                            name="seniorName"
                            value={formData.seniorName}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Address"
                            name="seniorAddress"
                            value={formData.seniorAddress}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Phone"
                            name="seniorPhone"
                            value={formData.seniorPhone}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Email"
                            name="seniorEmail"
                            value={formData.seniorEmail}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Guardian's Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian's Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        /> */}
                    </>
                );
            case "volunteer":
                return (
                    <>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        /> */}
                    </>
                );
            default:
                return (
                    <>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Birthday"
                            name="birthday"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.birthday}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
        }
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            let endpoint;
            switch (userType) {
                case "senior":
                    endpoint = "insertSenior";
                    break;
                case "volunteer":
                    endpoint = "inserVolunteer";
                    break;
                default:
                    throw new Error("INVALID USER TYPE");
            }
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_HOST}/api/${endpoint}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                // Handle successful form submission
                console.log("Form submitted successfully!");
                setOpenSnackbar(true);
            } else {
                // Handle error response
                console.error("Error submitting form:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <>
            <Typography
                style={{
                    marginBottom: "50px",
                    textAlign: "center",
                    fontSize: "30px",
                }}
            >
                {UserTypeEnum[userType]} Registration Form
            </Typography>

            <FormControl fullWidth>
                <FormGroup>
                    <InputLabel id="user-type-label" shrink disabled>
                        User Type
                    </InputLabel>
                    <Select
                        labelId="user-type-label"
                        id="user-type-select"
                        value={userType}
                        label="User Type"
                        fullWidth
                        margin="normal"
                        disabled
                    >
                        <MenuItem value="guardian">Guardian</MenuItem>
                        <MenuItem value="volunteer">Volunteer</MenuItem>
                        <MenuItem value="senior">Senior</MenuItem>
                    </Select>
                    {renderFormFields()}
                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="Do you agree to our terms of service?"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: 20 }}
                        type="submit"
                        onClick={onSubmitHandler}
                    >
                        Submit
                    </Button>
                </FormGroup>
            </FormControl>
            {/* <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert icon={<CheckIcon fontSize="large" />} severity="success">
                    <Typography fontSize="2em" fontWeight="bold">
                        Success!
                    </Typography>
                </Alert>
            </Snackbar> */}
            <SuccessSnackBar
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
            />
        </>
    );
};

export default SignUpCommunity;
