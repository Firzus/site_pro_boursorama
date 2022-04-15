module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3fec388dd7e2ffe04ee64e4ded467700'),
  },
});
