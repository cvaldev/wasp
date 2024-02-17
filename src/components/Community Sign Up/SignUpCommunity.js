import React, { useState } from 'react';
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
} from '@mui/material';

const SignUpCommunity = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    seniorName: '',
    seniorAddress: '',
    seniorContact: '',
    seniorEmail: '',
    //for guardian, helper and not senior
    name: '',
    birthday: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    consentForm: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const renderFormFields = () => {
    switch (userType) {
      case 'Senior':
        return window.location.href = '/seniors';
      case 'Guardian':
        return (
          <>
            <TextField
              label='Guardian Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label="Senior's Name"
              name='seniorName'
              value={formData.seniorName}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label="Senior's Address"
              name='seniorAddress'
              value={formData.seniorAddress}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label="Senior's Contact"
              name='seniorContact'
              value={formData.seniorContact}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label="Senior's Email"
              name='seniorEmail'
              value={formData.seniorEmail}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <FormControl fullWidth margin='normal'>
              <InputLabel id='consent-form-label'>Consent Form</InputLabel>
              <Select
                labelId='consent-form-label'
                id='consent-form-select'
                value={formData.consentForm}
                onChange={handleChange}
                label='Consent Form' // Ensures the label floats correctly
              >
                <MenuItem value=''>Select Agreement</MenuItem>
                <MenuItem value='I agree'>I agree</MenuItem>
              </Select>
            </FormControl>
            <FormHelperText>
              You must agree to our terms of service to use our services.
            </FormHelperText>
            <TextField
              label="Guardian's Email"
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label="Guardian's Password"
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
          </>
        );
      case 'Community Helper':
        return (
          <>
            <TextField
              label='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label='Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Contact'
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <Select
              labelId='consent-form-label'
              id='consent-form'
              name='consentForm'
              value={formData.consentForm}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            >
              <MenuItem value=''>Select Agreement</MenuItem>{' '}
              {/* Add an empty option to enforce selection */}
              <MenuItem value='I agree'>I agree</MenuItem>
            </Select>
            <FormHelperText>
              You must agree to our terms of service to use our services.
            </FormHelperText>
            <TextField
              label='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label='Password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
          </>
        );
      default:
        return (
          <>
            <TextField
              label='Name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label='Birthday'
              name='birthday'
              type='date'
              InputLabelProps={{ shrink: true }}
              value={formData.birthday}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Contact'
              name='contact'
              value={formData.contact}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin='normal'
            />
            <TextField
              label='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
            <TextField
              label='Password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              margin='normal'
            />
          </>
        );
    }
  };

  return (
    <>
      <Typography
        style={{ marginBottom: '50px', textAlign: 'center', fontSize: '30px' }}
      >
        Registration Form
      </Typography>

      <FormControl fullWidth>
        <FormGroup>
          <InputLabel id='user-type-label'>Are you a</InputLabel>
          <Select
            labelId='user-type-label'
            id='user-type-select'
            value={userType}
            label=' '
            onChange={handleUserTypeChange}
            fullWidth
            margin='normal'
          >
            <MenuItem value='Guardian'>Guardian</MenuItem>
            <MenuItem value='Community Helper'>Community Helper</MenuItem>
            <MenuItem value='Senior'>Senior</MenuItem>
            <MenuItem value='Not Senior'>Not Senior</MenuItem>
          </Select>
          {renderFormFields()}
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: 20 }}
            type='submit'
          >
            Submit
          </Button>
        </FormGroup>
      </FormControl>
    </>
  );
};

export default SignUpCommunity;
