
module.exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = 'Lambda function built with Terraform!';
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: responseMessage,
        author: "Ashutosh Bhujbal",
        portfolio: "https://ashutosh-bhujbal.vercel.app/"
      }),
    }
}