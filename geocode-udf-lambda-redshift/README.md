# Access Amazon Location Service from Amazon Redshift

This sample code is part of AWS Big Data Blog [Access Amazon Location Service from Amazon Redshift](https://aws.amazon.com/blogs/big-data/access-amazon-location-service-from-amazon-redshift/). It creates and configures a Lambda function to geocode address data stored in Amazon Redshift using Amazon Location Service. Please refer to the blog for solution details.

1. Run the CloudFormation template `geocode-lambda-redshift.yml` to create the solution stack. The template requires Amazon Redshift cluster identifier.
2. Use `CreateFunction.sql` to create the Lambda user-defined function in Amazon Redshift cluster. Replace the placeholders `<GEOCODE_LAMBDA_FUNCTION_NAME>` and `<REDSHIFT_LAMBDA_IAM_ROLE>` with actual values provided in the CloudFormation stack output.
3. Use `CreateTable.sql` to create customer_address table with the fields required to geocode address data. Load customer address data in this table.
4. Run the sample SQL queries provided in the blog to geocode address data.

## Source Code
### Lambda
`geocode.py`
    Common module containing geocode_address function
    
`lambda_function.py`
    Event handler for Redshift invocation

### UDF
`CreateFunction.sql`
    Lambda UDF to call GeocodeAddresses-Redshift Lambda function

`CreateTable.sql`
    Customer Address table

### CloudFormation
`geocode-lambda-redshift.yml`
    CloudFormation template to configure solution resources - Place index, Lambda functions and IAM permissions

[![Launch Stack](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2017/02/10/launchstack.png)](https://console.aws.amazon.com/cloudformation/home#/stacks/quickcreate?templateUrl=https://amazon-location-service-lambda-udf.s3.amazonaws.com/geocode-lambda-redshift.yml)