const express = require('express')
const router = express.Router()
const passport = require('passport')

//@desc Auth with Google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc Google Auth callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect:'/' }),
    (req, res) =>{
        res.redirect('/dashboard')
    } 
)

//@desc logout User
router.get('/logout', (req,res)=>{
    req.logOut()
    res.redirect('/')
})



module.exports = router