const nodeMailer = require('nodemailer');
const { google } = require('googleapis');
const { gmail } = require('googleapis/build/src/apis/gmail');

const CLIENT_ID = '524637891174-6v6m63b51g7v0hne5cma6hjnq1m31p42.apps.googleusercontent.com'
const ClIENT_SECRET = 'xNkqM-psKQZkqDLAh1YHtTql'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const refresh_token = '1//04KfgEecf-juECgYIARAAGAQSNwF-L9Ir5QhVZDtWfTwIs14w-nlquhVQ2qT2ZSp9TU6B1GL3lWKE27wsUTD_DEYIXrZDvZqu3b4'

const email = 'doancnpmnhomnike@gmail.com';
const oAuth2Client = new google.auth.OAuth2({
    CLIENT_ID: CLIENT_ID,
    ClIENT_SECRET: ClIENT_SECRET,
    REDIRECT_URI: REDIRECT_URI,
});

oAuth2Client.setCredentials({
    refresh_token: refresh_token,
});

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true, // true for 465, false for other ports
    pool: true,
    auth: {
        type: 'OAuth2',
        user: email,
        // Get From Google Console OAuth Credential
        clientId: CLIENT_ID,
        clientSecret: ClIENT_SECRET,
        // Get From Google Developer OAuth20 PlayGround
        refreshToken: refresh_token,
        access_token: async () => oAuth2Client.getAccessToken(),
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmail = function (receiverEmail, event) {
    const mailOptions = {
        from: `"NikeSign" ${email}`,
        to: `${receiverEmail}`,
        subject: 'NikeSign Notification',
        text: `${event}`,
    };
    return new Promise((resolve) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                resolve({
                    success: false,
                    error,
                });
            } else {
                resolve({
                    success: true,
                    info,
                });
            }
        });
    });
}

// sendEmail('hienorton@gmail.com', 'test1')

module.exports = {
    sendEmail
}