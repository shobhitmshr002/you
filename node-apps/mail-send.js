/**
 * Created by comtech on 21/1/16.
 */

var AWS = require('aws-sdk');

AWS.config={
    accessKeyId: 'AKIAIMNMLHJY5MXLGH6A', secretAccessKey: '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', region: 'us-west-2'
}
AWS.config.apiVersions = {
    ses: '2010-12-01'
    // other service API versions
};
var ses = new AWS.SES();
var params = {
    Destination: { /* required */
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
                Data: 'Haapy Birthday' /* required */

            }
        },
        Subject: { /* required */
            Data: 'TEST SES' /* required */

        }
    },
    Source: 'shobhitmshr002@gmail.com', /* required */

};

var array=[{sub:'',data:''},{sub:'',data:''},{sub:'',data:''}]
ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});


//array.splice(0, 1);
