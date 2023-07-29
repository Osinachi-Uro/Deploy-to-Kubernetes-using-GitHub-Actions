# Steps I followed to Deploy a Simple Web Application using GitHub Actions

## DevOps Tools & Platforms: Terraform, AWS, Digital Ocean, Docker, GitHub Actions

This repository contains my personal profile website files.
# Steps
1. Used [Terraform](https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/tree/main/Terraform) to deploy a Managed Kubernetes Cluster on Digital Ocean.

<img width="838" alt="terraform creating DOKS" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/d98f0ad6-df30-47f6-b99c-614ea6028740">

<img width="721" alt="K8s creation completed" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/97d46468-3a40-4c07-ad07-4ea77e9097fe"> 

* Checking Cluster Nodes
<img width="825" alt="connecting to cluster" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/32773044-9efe-42ae-addc-9c2259c2115d">

   
2. Created a simple [Dockerfile](https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/blob/main/Dockerfile) to build an image of my personal website app files using nginx as a base image.

   
3. Created the GitHub Actions file in a folder called [.github/workflows](https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/blob/main/.github/workflows/actions-ci.yml) with references from [GitHUb Marketplace](https://github.com/marketplace)

4. Created a repository on AWS ECR
<img width="478" alt="Image repo" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/ef8fc29d-7135-4f7e-bca4-56391e022be2">

5. Pushed the project folder to GitHub and triggered GitHub Action and the build was [successful](https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/actions)

<img width="677" alt="final build status" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/11c6b4c2-2055-4681-82b9-57b5063dfd48">

<img width="439" alt="build succeeded" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/aa094bb8-56a3-41bb-b351-3117d4b07e91">

6. Checked pods and tested the Load Balancer address
<img width="763" alt="pods running" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/089a3951-fd5c-4b7c-ab4d-1844af8a8a9e">

<img width="787" alt="Nodes Accepting traffic" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/61ba911c-925f-4eed-86ea-a9d6c2962a07">

* Web Page displayed
<img width="936" alt="Web-App Up and running" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/d2fb824d-ae00-4ba1-8473-73280e1e239c">


# Some Errors Faced

* To fix this I changed from a public image repository to a private image repository
<img width="609" alt="error 1" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/3b9db8cf-d1bf-4003-bcb1-da8a19a1bfee">

* This was caused by the deployment not being able to connect to the image repository and pull the image to create the pods. To solve this problem, I used the ```aws ecr get-login-password --region region``` command to set up [regcred](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/) required by Kubernetes to connect with private repositories. The reference article is listed below.
<img width="767" alt="error 2" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/78e753fd-39e1-4118-82c8-2f9d2f08f70c">

<img width="821" alt="failed 1" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/a2568490-ff0e-426f-9267-d5ebf9431df7">

<img width="809" alt="failed" src="https://github.com/Osinachi-Uro/Deploy-to-Kubernetes-using-GitHub-Actions/assets/83463641/5c9ea60e-8842-4c4e-afc0-35f2958d006f">


# Useful Commands

* ```aws ecr get-login-password --region <your aws region>``` This command generates a password that is used in the next command.
* ```kubectl create secret docker-registry regcred --docker-server=<your-registry-url> --docker-username=<the registry provider eg. AWS> --docker-password=<your-pword generated from the above command> --docker-email=<youraws account email>``` This command creates the regcred required by Kubernetes to connect to the private image registry
* ```kubectl get secret regcred --output=yaml``` This command displays the secret registry credential (regcred).

# References

* https://www.youtube.com/watch?v=9qSmFWwsxwA
* https://medium.com/@danieltse/pull-the-docker-image-from-aws-ecr-in-kubernetes-dc7280d74904
* https://skryvets.com/blog/2021/03/15/kubernetes-pull-image-from-private-ecr-registry/
