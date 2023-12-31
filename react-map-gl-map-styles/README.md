# Map Styles Sample

This sample app demonstrates using Amazon Location Service to show an interactive map, and how to switch between map styles. The sample uses [`react-map-gl`](https://visgl.github.io/react-map-gl/) with
[MapLibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/), [Amazon Location
Service](https://aws.amazon.com/location), and [AWS Amplify](https://aws.amazon.com/amplify/).

## Implementation

See [`src/main.jsx`](src/main.jsx).

## Dependencies

[`react-map-gl`](https://visgl.github.io/react-map-gl/): React components used to display maps.

[`maplibre-gl-js`](https://github.com/maplibre/maplibre-gl-js): Used to draw Amazon Location Service provided maps.

[`aws-amplify`](https://github.com/aws-amplify/amplify-js): Helps with authentication to get map resources from Amazon Location Service.

[`maplibre-gl-js-amplify`](https://github.com/aws-amplify/maplibre-gl-js-amplify): Used to get map resources from Amazon Location Service using aws-amplify.

See more in [`package.json`](package.json)

App has been tested on Node.js v16.13.2 and NPM v8.1.2

## Getting started

1. Install [`Node.js`](https://nodejs.org)
2. Set up map resources for Amazon Location Service by following [`this guide`](https://docs.aws.amazon.com/location/latest/developerguide/using-maps.html).
   - You will need to set up two map resources, one for vector style and one for satellite imagery, to be able to toggle between the two map styles.
3. Create an Amazon Cognito identity pool by following [`this guide`](https://docs.aws.amazon.com/location/latest/developerguide/authenticating-using-cognito.html).

   - The maps policy will need to have both the vector style and satellite imagery resources created so the app can access both of the resources.

     ```
     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Effect": "Allow",
                 "Action": "geo:GetMap*",
                 "Resource": [
                     "arn:aws:geo:<region>:<AWSAccountID>:map/<VectorStyleMapName>",
                     "arn:aws:geo:<region>:<AWSAccountID>:map/<SatelliteImageryMapName>"
                 ]
             }
         ]
     }
     ```

4. Install project dependencies: run `npm install` from the sample app location on your computer.
5. Fill in required fields for Amazon Cognito and Amazon Location Service in [`src/configuration.js`](src/configuration.js).
6. Start the app: run `npm start` from the sample app location on your computer.

## Security

See [CONTRIBUTING](../CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
