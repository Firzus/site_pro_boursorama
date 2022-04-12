module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b25babaae4845d4acecab0358287e98'),
  },
});
