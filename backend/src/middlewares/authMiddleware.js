const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-passwordHash');
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

exports.requireRole = (role) => async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== role && payload.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
    req.user = await User.findById(payload.id).select('-passwordHash');
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
