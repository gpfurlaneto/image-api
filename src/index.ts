import dotenv from 'dotenv';
import express from 'express';

dotenv.config()

const app = express();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!23" );
} );

// start the Express server
app.listen( process.env.PORT, () => {
    console.log( `server started at http://localhost:${process.env.PORT}` );
} );