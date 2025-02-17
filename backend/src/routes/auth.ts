import express from 'express';
import passport from 'passport';
import { isAuthenticated } from '../middlewares/auth';

const router = express.Router();

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/dashboard'
  })
);

router.get('/logout', isAuthenticated, (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.redirect('/');
  });
});

router.get('/user', isAuthenticated, (req, res) => {
  res.json(req.user);
});

export default router;