module.exports = {
  requireAuth: (req, res, next) => {
    if (!req.user) {
      return res.status(403).redirect('/auth');
    }
    return next();
  },
  requireNotAuth: (req, res, next) => {
    if (req.user) {
      return res.status(403).redirect('/');
    }

    return next();
  },
  requireAluno: (req, res, next) => {
    if (req.user.tipo !== 'aluno') {
      return res.status(403).redirect('/');
    }

    return next();
  },
  requireProfessor: (req, res, next) => {
    if (req.user.tipo !== 'professor') {
      return res.status(403).redirect('/');
    }

    return next();
  },
  requreAdmin: (req, res, next) => {
    if (req.user.tipo !== 'admin') {
      return res.status(403).redirect('/');
    }

    return next();
  }
};
