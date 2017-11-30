# PANDA Boilerplate

PreAct-Nodejs-Dynamo-API (PA.N.D.A.) Minimalist full-stack boilerplate, demonstrated with a basic To-Do list

## Included Components and Directory Structure

* ./ - Docker Compose configuration (docker-compose.yml)
* ./api - Restify RESTful API
* ./dynamo - DynamoDB local install
* ./preact - Preact basic boilerplate with JSX, webpack, LESS

## How to Use

### Requirements

* [Docker](https://www.docker.com) (including Compose)
* [Amazon Web Services (AWS) CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* [NodeJS / NPM](https://nodejs.org/en/) (tested with NodeJS v6.12.0)

### Installation

**1. Ensure that your AWS CLI is properly configured by running:**

```
aws configure
```

Be sure to set the following environment variables if you have not already -- the region will default to us-east-1:
```
AWS_ACCESS_KEY_ID,
AWS_SECRET_ACCESS_KEY
```

**2. Run docker-compose:**
```
docker-compose up
```

**3. Connect:**

* front-end: `http://localhost:5000`
* API: `http://localhost:8080`
* DynamoDB: `http://localhost:8000`