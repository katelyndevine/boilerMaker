const router = require("express").Router();
const User = require("./User");
// module.exports = router;

router.put('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) res.status(401).send('User not found');
      else if (!user.hasMatchingPassword(req.body.password) res.status(401).send('Incorrect password');
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

// or soemthing like this:
// router.put('/login', async (req, res, next) => {
//   try {
//     console.log(req);
//     const { email, password } = req.body;
//     const user = await User.findOne({
//       where: {
//         email: email,
//         password: password,
//       },
//     });
//     if (user) {
//       req.session.userId = user.id;
//       res.json(user);
//     } else {
//       const err = new Error('Incorrect email or password!');
//       err.status = 401;
//       next(err);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

router.get('/me', (req, res, next) => {
  res.json(req.user);
});


router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy()
  res.sendStatus(204);
});

// or something like this:
// router.delete('/logout', async (req, res, next) => {
//   try {
//     req.session.destroy();
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
