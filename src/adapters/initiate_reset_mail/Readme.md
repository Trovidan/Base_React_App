# Initiate Reset Password Adapter

## - Gist

- Function that ping the server to send mail to entered email id with reset password link

## - Params

- **email:**
  - _type:_ Required
  - _significance:_ email to verify and send mail to
  - _default:_ none

## - Response

    {
        status: STATUS_CODE,
        payload: ERROR_MESSAGE
    }