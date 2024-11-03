const { Router } = require('express')
const router = new Router()

const {
    isLoading,
    success,
    callback,
    logout,
    entrance,
    } = require('../controllers/google')


//http://localhost:5000/api/auth/google
router.get('/google', entrance);

//http://localhost:5000/api/auth/google/callback
router.get('/google/callback', callback );

//http://localhost:5000/api/auth/google/success
router.get('/google/success', isLoading, success)

//http://localhost:5000/api/auth/google/logout
router.post('/google/logout', logout)


module.exports = router