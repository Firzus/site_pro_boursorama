module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8230cbe9ea7eae46e5f76529cd85520'),
  },
});
