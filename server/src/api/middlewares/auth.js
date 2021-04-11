const passport = require('passport');
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const {findEmployeeById} = require('../../domain/queries/employees');
const jwtConfig = require('../config/jwtConfig');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtConfig.secret,
};

passport.use('employeeJwt', new JwtStrategy(options, async ({id}, done) => {
  try {
    const employee = await findEmployeeById(id);

    if (!employee.length) {
      throw new Error('NO_SUCH_USER')
    }

    return done(null, employee[0]);
  } catch (error) {
    return done({status: 500, code: 'TOKEN_INVALID'}, null);
  }
}));

const employeeJwtMiddleware = (req, res, next) => {
  passport.authenticate('employeeJwt', {session: false}, (error, employee, _) => {
    if (error || !employee) {
      return res.status(400).send({
        error: {
          code: 'NOT_AUTHORIZED',
        },
      });
    }

    req.employee = employee;

    return next();
  })(req, res, next);
};

const managerMiddleware = (req, res, next) => {
  const {role} = req.employee;

  role === 'manager' ? next() : next(new Error('ACCESS_DENIED'));
};

const sellerMiddleware = (req, res, next) => {
  const {role} = req.employee;

  role === 'seller' ?
    next() :
    next(new Error('ACCESS_DENIED'));
};


module.exports = {
  passportMiddleware: passport.initialize(),
  employeeJwtMiddleware,
  managerMiddleware,
  sellerMiddleware
};
