module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'dennis.huang@webcomm.com.tw',
      defaultReplyTo: 'dennis.huang@webcomm.com.tw',
      testAddress: 'chop.chop.dennis@gmail.com',
    },
  },
});
