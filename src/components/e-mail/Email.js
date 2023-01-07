import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from '@mui/material/';

const Email = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message || !phone) {
      return toast.error('please fill out the form correctly');
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
        phone,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (error) {
      setLoading(false);
      toast.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <div style={{ minHeight: 600 }}>
      <ToastContainer position="top-right" limit={1} />
      <Card style={{ maxWidth: 450, margin: '0 auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Me
          </Typography>
          <Typography
            gutterBottom
            color="GrayText"
            variant="body2"
            component="p"
          >
            it is my honor and pleasure that you send me an email
          </Typography>
          <form onSubmit={submitHandler}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  label="Subject"
                  placeholder="Enter Subject"
                  variant="outlined"
                  //   required
                  fullWidth
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  label="e-mail"
                  placeholder="Enter e-mail"
                  variant="outlined"
                  //   required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="number"
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  label="phone"
                  placeholder="Enter phone number"
                  variant="outlined"
                  //   required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  label="message"
                  placeholder="Enter message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  disabled={loading}
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                >
                  {loading ? 'Sending' : 'Submit'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Email;
