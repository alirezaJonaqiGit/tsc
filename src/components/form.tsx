import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import Select from '@material-ui/core/Select';

interface IFormInput {
    phone: number;
    gender: boolean;
    ID: number;
    first_name: string;
    last_name: string;
}

const useStyle = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    item: {
        position: 'relative',
        marginBottom: '1rem'
    },
}));

export default function Form(props: any) {
    
    const classes = useStyle();

    const { control, handleSubmit, register } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => {
        let [...users] = props.users;

        // چون فرم فیلد ها مقادیر زیر رو به صورت استرینگ برمیگردونن
        data.ID = Number(data.ID);
        data.phone = Number(data.phone);
        
        // ایندکس کاربر بر اساس آیدی زیر رو برمیگردونه
        let userIndex = users.findIndex((item:any) => item.ID === data.ID);
        
        // اگر چنین کاربری وجود نداشت، به آرایه کاربر ها اضافه کن
        if (userIndex === -1) {   
            users.splice(0, 0, data);
        }else {
            users.splice(userIndex, 1, data);
        }

        props.setUsers(users);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}  noValidate autoComplete="off">
                <Grid container spacing={5}>

                    <Grid item className={classes.item} xs={12} md={6}>
                        <FormControl className={classes.formControl} >
                            <TextField label="First name" variant="filled" {...register("first_name")} value={props.user.first_name} />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.item} xs={12} md={6}>
                        <FormControl className={classes.formControl} >
                            <TextField label="Last name" variant="filled" {...register("last_name")} value={props.user.last_name} />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.item} xs={12} md={4}>
                        <FormControl className={classes.formControl} >
                            <TextField label="phone" variant="filled" {...register("phone")} value={props.user.phone} />
                        </FormControl>
                    </Grid>

                    <Grid item className={classes.item} xs={12} md={4}>
                        <FormControl className={classes.formControl} >
                            <TextField label="ID" variant="filled" {...register("ID")} value={props.user.ID} />
                        </FormControl>
                    </Grid>


                    <Grid item className={classes.item} xs={12} md={4}>
                        <FormControl className={classes.formControl} >
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup className='radio-group' aria-label="gender" name="gender" onChange={(x: any) => { console.log(x.target.value) }} >
                                <label className='form-gender-label' htmlFor="gender_male">
                                    <input
                                        {...register('gender', { required: true })}
                                        type="radio"
                                        name="gender"
                                        value="true"
                                        className="form-check-input"
                                        id='gender_male'
                                        checked={props.user.gender === 'true' ? true : undefined}
                                    />{' '}
                                    male
                                </label>
                                <label className='form-gender-label' htmlFor="gender_female">
                                    <input
                                        {...register('gender', { required: true })}
                                        id="gender_female"
                                        type="radio"
                                        name="gender"
                                        value="false"
                                        className="form-check-input"
                                        checked={props.user.gender === 'false' ? true : undefined}
                                    />{' '}
                                    female
                                </label>
                            </RadioGroup>


                        </FormControl>
                    </Grid>
                </Grid> 


                <input type="submit" className='btn btn-primary my-3' value="Save changes" />
            </form>
        </>
    );
}
