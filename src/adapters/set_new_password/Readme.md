# Set New Password Adapter

## - Gist

- Function that ping the server the server with post request to update password of the user

## - Params

- **new_password:**

  - _type:_ Required
  - _significance:_ the new password of user
  - _default:_ none

- **token:**
  - _type:_ Required
  - _significance:_ email to verify user (extracted from the URL)
  - _default:_ none

## - Response

    {
        status: STATUS_CODE,
        payload: ERROR_MESSAGE
    }
