/* jshint node: true */

//************************************************************
//  server.js                                               //
//  Active Learning 2110                                    //
//                                                          //
//  Created by Odell Mizrahi on 9/13/16.                    //
//  Copyright © 2016 Odell Mizrahi. All rights reserved.    //
//                                                          //
//  Date        Name        Description                     //
//  -------     ---------   --------------                  //
//  13Sep16     O. Mizrahi  Initial Design                  //
//                                                          //
//************************************************************
"use strict";

var app_api    = require('./app_api');
var app_client = require('./app_client');
var bodyparser = require('body-parser');
var express    = require('express');
var mongoose   = require('mongoose');
var path       = require('path');

var app = express();

/**
Must have MongoDB installed and run mongod
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ActiveLearning2110');

app.set('views', path.join(__dirname, './app_client/views'));
app.set('view engine', 'pug');

app.use(bodyparser.json());
app.use(express.static(__dirname + '/app_client'));

app_api(app);
app_client(app);


/**
Binds and listens for connections on the specified host and port

- parameter PORT:  8081
- parameter HANDLER:    callback
*/
app.listen(process.env.PORT || 8081, function() {
    console.log('listening on port 8081');
});
