import { Box, Button, TextField } from '@mui/material';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

import auth from '../../store/auth';

// TODO remove all any later

const Login = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: { login: '' },
  });

  const onSubmit: SubmitHandler<any> = (data) => auth.signIn(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        render={({ field }) => <TextField placeholder="Введите логин" {...field} />}
      />
      <Button fullWidth type="submit">
        Отправить
      </Button>
    </Box>
  );
};

export default Login;
