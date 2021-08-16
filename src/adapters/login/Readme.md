# Login Adapter

## - Gist

- Function that verifies user credentials and sets the user token cookie

## - Params

* **email:** 
    - *type:* Required 
    - *significance:* email to verify
    - *default:* none
* **password:** 
    - *type:* Required 
    - *significance:* password to cross-check
    - *default:* none

## - Response

    {
        status: STATUS_CODE,
        payload: ERROR_MESSAGE / TOKEN
    }