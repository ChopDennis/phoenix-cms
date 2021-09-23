module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: 'https://machi.codes/cms',	
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5ba95247213834be4bc8170658ddbfcc'),
    },
  },
});
