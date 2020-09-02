enum Routes {
  DEFAULT = '/',
  LOGIN = '/login',
  CHART = '/chart',
  MATCHER = '/matcher',
  BUILDER = '/builder',
  SETUP = '/setup/:id',
  SETUPS = '/setups',
  USER = '/user/:id',
  ADMINTOOLS = '/admintools',
  ADDITEM = '/additem',
  ADDHARDWARE = '/addharware',
  ADDGAME = '/addgame',
  GAME = '/game/:id',
  RESET_PASSWORD_REQUEST = '/reset-password',
  RESET_PASSWORD = '/reset-password/:userId/:token',
}

export { Routes };
