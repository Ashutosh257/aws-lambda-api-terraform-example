
## AWS Lambda and API Gateway built with Terraform

This is a simple example of how to create an AWS Lambda function and an API Gateway using Terraform.

You can test the api - https://j5o2j2yfif.execute-api.eu-west-2.amazonaws.com/prod/hello

### Files

- `main.tf` - Contains the main configuration of the AWS Lambda and API Gateway.
- `variables.tf` - Contains the variables used in the configuration.
- `outputs.tf` - Contains the output variables.
- `api_gateway.tf` - Contains the configuration for the API Gateway.
- `lambda.tf` - Contains the configuration for the Lambda function.
- `s3.tf` - Contains the configuration for the S3 bucket.


### Prerequisites

- [Terraform](https://www.terraform.io/downloads.html)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [AWS Account](https://aws.amazon.com/)
- [AWS Access Key and Secret Access Key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)
- [AWS CLI Configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [API Gateway](https://aws.amazon.com/api-gateway/)

### Usage

1. Clone the repository:

```bash
    git clone https://github.com/Ashutosh257/aws-lambda-api-terraform-example.git
```

2. Change into the directory:

```bash
    cd aws-lambda-api-terraform-example
```

3. Initialize the directory:

```bash
    terraform init
```

4. Setup your AWS Access Key and Secret Access Key using the AWS CLI:

```bash
    aws configure
```

5. Perform Terraform Plan:

```bash
    terraform plan
```

6. Apply the changes:

```bash
    terraform apply
```

7. After applying the changes, you will see the API Gateway URL in the output. You can use this URL to test the API.

8. Make sure to destroy the resources after you are done testing the API. Run the following command to destroy the resources:

```bash
    terraform destroy
```


### Output

```bash
Outputs:

api_gateway_url = "https://xxxxxxxxxx.execute-api.[aws-region].amazonaws.com/dev"
```

### Terraform Commands

```bash
terraform init
terraform plan
terraform apply
terraform destroy
```

