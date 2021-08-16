# React App Base
It's a basic setup for initializing a react application.

## - How to Start?
Set environment variables if any and just start.

## - Directory Structure
    
    App
        -> node_modules
        -> public
        -> src
            -> adapters
                -> Functions interecting with server or other external resources
            -> assets
                -> any image, pdf etc. for website
            -> components
                -> Basic functional stateless components for rendering content in their respective folders
            -> container
                -> Class based statefull components for rendering complex functional content in their respective folders
            -> contexts
                -> Any contexts required at global levels
            -> pages
                -> Main Components for routing
            -> utils
                -> axios.js
                -> cookie.js
                -> routes.js
                -> status.js
                -> Utilty functions, intances or constants required throughout application
            -> App.js
            -> App.css
            -> index.css
            -> index.js
        -> .env
        -> .gitignore
        -> pakage.json