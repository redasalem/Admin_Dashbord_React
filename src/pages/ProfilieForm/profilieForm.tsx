import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header';



const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
const numberRegex = /^(010|011|012|015)[0-9]{8}$/;

const data = [
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manger',
    label: 'Manger',
  },
];


const profilieForm = () => {
   const notify = () => toast("Account Created successfully ✔️");
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log('Done !')

  return (
     <Box
     onSubmit={handleSubmit(onSubmit)}
      component="form"
      display='flex'
      flexDirection='column'
      gap={2}
      noValidate
      autoComplete="off"
    >
      <Header title={'Create New Account'} subTitle={'create new Account in Dashbord'}/>
      <Stack sx={{display:'flex',flexDirection:'row', gap:2}}>
       <TextField  sx={{flex:1}} label="First Name" variant="filled"
        error={Boolean(errors.firstName)} 
        helperText={errors.firstName ?'First Name is required & charcters min 3':null }
        {...register("firstName", { required: true, minLength:3 })}
         />
      <TextField  sx={{flex:1}} label="Last Name" variant="filled"
        error={Boolean(errors.lastName)} 
        helperText={errors.lastName ?'last Name is required & charcters min 3':null }
        {...register("lastName", { required: true, minLength:3 })} />
      </Stack>
      <TextField 
       error={Boolean(errors.Email)} 

        helperText={errors.Email ?'Email is not valid':null }
        {...register("Email", { required: true , pattern:emailRegex})}
       label="Email" variant="filled" />
      <TextField 
       error={Boolean(errors.Number)} 
        helperText={errors.Number ?'Number is not valid':null }
        {...register("Number", { required: true , pattern:numberRegex})}
       label="Contact Number"
        variant="filled"
        />
      <TextField  label="Address1" variant="filled"
       error={Boolean(errors.Address1)} 
        helperText={errors.Address1 ?'Enter your address1':null }
        {...register("Address1", { required: true , minLength:10})}
       />
      <TextField 
       error={Boolean(errors.Address2)} 
        helperText={errors.Address2 ?'Enter your address2':null }
        {...register("Address2", { required: true , minLength:10})}
       label="Address2" variant="filled"  />

        <TextField
          id="outlined-select-currency"
          variant='filled'
          select
          label="Role"
          defaultValue="Admin"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         {/* button */}
      <Box textAlign={'right'} textTransform='capitalize'>
     <Button type='submit' variant='contained' sx={{textTransform:'capitalize'}}
     onClick={errors.lastName || errors.firstName 
     || errors.Email || errors.Number || 
     errors.Address1 || errors.Address2 || !watch('firstName') ?null:notify}>
          Create New User
          </Button>
       </Box>
        
       <ToastContainer />
    </Box>
  )
}

export default profilieForm