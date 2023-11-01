const jwt = require('jsonwebtoken');

let otpverify = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    try {
      let decoded = jwt.verify(token, process.env.access_token);
      // Verify the token using the correct secret/key
      if (decoded.Useremail) {
        req.body.Useremail = decoded.Useremail;
        next();
      } else {
        // Handle the case where the Useremail is missing in the token
        res.status(401).json({ error: 'Invalid token: Useremail is missing' });
      }
    } catch (err) {
      // Handle token verification errors
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    // Handle the case where there is no token provided
    res.status(401).json({ error: 'Token is missing' });
  }
};

module.exports = otpverify;
