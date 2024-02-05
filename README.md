# Node.js Application Deployment

This repository contains deployment files for running a Node.js application on Kubernetes.

## Deployment

To deploy the Node.js application, use the following command to apply the deployment YAML file:

```bash
kubectl apply -f deployment-node-app.yaml
```

## Starting Services
After deploying the application, you'll need to start the associated services. Use the following command to apply the service YAML file:

```bash
kubectl apply -f service-node-app.yaml
```

This command will expose the deployed application internally or externally, depending on the service configuration.

## Deleting Deployment
If you need to remove the deployed application, you can use the following command to delete the deployment:

```bash
kubectl delete -f deployment-node-app.yaml
```

This command will remove all resources associated with the deployment, including pods and services.

## Delete All
Alternatively, if you want to delete all resources related to the application, including deployments and services, you can use the following command:

```bash
kubectl delete all -l app=node-app
```

This command will delete all resources labeled with app=node-app, effectively removing the entire application stack.

Feel free to explore the deployment and service YAML files for more configuration details and customize them according to your requirements.

Happy deploying!

