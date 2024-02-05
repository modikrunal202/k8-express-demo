# Kubernetes Deployment for Node.js and MongoDB

This repository contains Kubernetes deployment files for running a Node.js application with MongoDB on a Kubernetes cluster. 

## Deployment Overview

The deployment consists of two main components: the Node.js application and MongoDB. 

### Node.js Application Deployment

The Node.js application is deployed using the following deployment YAML file:

```bash
kubectl apply -f node-app.yaml
```

This file specifies the deployment configuration for the Node.js application, including the number of replicas, container image, and environment variables sourced from a ConfigMap.

### MongoDB Deployment

The MongoDB instance is deployed using the following deployment YAML file:

```bash
kubectl apply -f mongo-db.yaml
```

This file defines the deployment configuration for the MongoDB pod, including the container image and any necessary configuration.

### ConfigMap Usage

Both the Node.js application and MongoDB deployments utilize environment variables sourced from a ConfigMap named mongo-config.

The ConfigMap is deployed using the following command:
```bash
kubectl apply -f mongo-config.yaml
```

It contains key-value pairs for configuring the MongoDB host and port, which are then injected into the respective pods as environment variables.

## Usage
To deploy the entire stack, follow these steps:

1. Apply the ConfigMap for MongoDB configuration:
```bash
kubectl apply -f mongo-config.yaml
```

2. Deploy the MongoDB pod:
```bash
kubectl apply -f mongo-db.yaml
```

3. Deploy the Node.js application:
```bash
kubectl apply -f node-app.yaml
```

The stack should now be up and running on your Kubernetes cluster.

Feel free to explore the deployment and service YAML files for more configuration details and customize them according to your requirements.

Happy deploying!

