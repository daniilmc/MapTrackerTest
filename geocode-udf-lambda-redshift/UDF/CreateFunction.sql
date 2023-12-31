-- Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
-- SPDX-License-Identifier: MIT-0

CREATE OR REPLACE EXTERNAL FUNCTION public.f_geocode_address(VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR)
RETURNS VARCHAR
STABLE
LAMBDA '<GEOCODE_LAMBDA_FUNCTION_NAME>'
MAX_BATCH_ROWS 9000
IAM_ROLE '<REDSHIFT_LAMBDA_IAM_ROLE>';
