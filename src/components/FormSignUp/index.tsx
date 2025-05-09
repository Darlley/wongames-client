import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        htmlFor="name"
        name="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
      <TextField
        htmlFor='email'
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        htmlFor='password'
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <TextField
        htmlFor='confirm-password'
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp