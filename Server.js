//File name: Server.js
//This file is my server, run "node Server.js" to start up the server on the command line
//Contains all the routes for my functionalities
const express = require('express')
const bodyParser = require('body-parser')
const isAuthenticated = require('./Middleware/Auth')
const Timestamp = require('./controllers/Timestamp')
const Announcement = require('./controllers/AnnouncementBoard')
const updateInfo = require('./controllers/updateInfo')
const TimeSchedule = require('./controllers/ViewSchedule')
const Auth = require('./controllers/Auth')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT || 5000

//Each request would need to go through isAuthenticated middleware to check for correct user creditials
app.post('/getSchedule', isAuthenticated, TimeSchedule.getSchedule)

app.post('/getAnnouncement', isAuthenticated, Announcement.getAnnouncement)

app.post('/createAnnouncement', isAuthenticated, Announcement.createAnnouncement)

app.post('/updateInfo', isAuthenticated, updateInfo.updateUserInfo)

app.post('/getClockStatus', isAuthenticated, Timestamp.getClockStatus)

app.post('/clockOut', isAuthenticated, Timestamp.getClockOut)

app.post('/clockIn', isAuthenticated, Timestamp.getClockIn)

app.post('/login', isAuthenticated, Auth.Login)

app.post('/createusers', isAuthenticated, Auth.createUsers)

app.listen(port, () => {
  console.log('server listening on port:' + port )
 })