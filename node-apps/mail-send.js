/**
 * Created by comtech on 21/1/16.
 */

var AWS = require('aws-sdk');

AWS.config={
    accessKeyId: 'AKIAJARV47B2EM4SZMVA', secretAccessKey: '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', region: 'us-west-2'
}
AWS.config.apiVersions = {
    ses: '2010-12-01'
    // other service API versions
};
var ses = new AWS.SES();
var params = {
    Destination: { /* required */
        BccAddresses: [
            'shobhitmshr002@gmail.com',
            /* more items */
        ],
        CcAddresses: [
            'shobhitmshr002@gmail.com',
            /* more items */
        ],
        ToAddresses: [
            'shobhitmshr002@gmail.com',
            /* more items */
        ]
    },
    Message: { /* required */
        Body: { /* required */
            Html: {
                Data: 'TEST DATAAAAAAAAAAAAAA' /* required */

            },
            Text: {
                Data: 'HELLOOOOOOO TEXT' /* required */

            }
        },
        Subject: { /* required */
            Data: 'TEST SES' /* required */

        }
    },
    Source: 'shobhitmshr002@gmail.com', /* required */

};
ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});
