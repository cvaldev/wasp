import { Snackbar, Alert, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const SuccessSnackBar = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert icon={<CheckIcon fontSize='large' />} severity='success'>
        <Typography fontSize='2em' fontWeight='bold'>
          {message ?? 'Success!'}
        </Typography>
      </Alert>
    </Snackbar>
  );
};

export default SuccessSnackBar;
