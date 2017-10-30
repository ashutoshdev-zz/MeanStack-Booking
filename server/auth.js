module.exports = {

    'facebookAuth' : {
        'clientID'      : '1292275014234258', // your App ID
        'clientSecret'  : 'a90b9136c38cb3b8051aca3a45323fed', // your App Secret
        'callbackURL'   : 'http://slugr-env.gw2hpmqduf.us-west-2.elasticbeanstalk.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1065776256594-s0o8tsite59o3j0522fujqjismosjgt0.apps.googleusercontent.com',
        'clientSecret'  : 'Hf-ENbFcSI6b7N8X_vA3S2CR',
        'callbackURL'   : 'http://slugr-env.gw2hpmqduf.us-west-2.elasticbeanstalk.com/auth/google/callback'
    }

};