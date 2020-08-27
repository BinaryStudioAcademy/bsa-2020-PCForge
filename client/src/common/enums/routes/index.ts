enum Routes {
  DEFAULT = '/',
  LOGIN = '/login',
  CHART = '/chart',
  MATCHER = '/matcher',
  BUILDER = '/builder',
  SETUP = '/setup/:id',
  SETUPS = '/setups',
  USER = '/user/:id',
  EMAIL_VERIFICATION = '/verify-email/:token',
  ADMINTOOLS = '/admintools',
  ADDITEM = '/additem',
  ADDHARDWARE = '/addharware',
  ADDGAME = '/addgame',
  GAME = '/game/:id',
  RESET_PASSWORD_REQUEST = '/reset-password',
  RESET_PASSWORD = '/reset-password/:userId/:token',
  NEWS = '/news',
}

export { Routes };
