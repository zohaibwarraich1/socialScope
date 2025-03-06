pipeline{
  agent any
  stages{
    stage("Clone"){
      steps{
        git url: "https://github.com/zohaibwarraich1/socialScope", branch: "main"
        echo "Cloned Successfully!"
      }
    }
    stage("Build"){
      steps{
        sh "docker build -t socialscope-nginx-image ./nginx"
        sh "docker build -t socialscope-image ."
        echo "Build Successfully!"
      }
    }
    stage("Push on Docker-Hub"){
      steps{
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]){
          sh "docker tag socialscope-nginx-image:latest ${env.USERNAME}/socialscope-nginx-image:latest"
          sh "docker tag socialscope-image:latest ${env.USERNAME}/socialscope-image:latest"
          sh "docker push ${env.USERNAME}/socialscope-nginx-image:latest"
          sh "docker push ${env.USERNAME}/socialscope-image:latest"
        }
        echo "Pushed on Docker-Hub Successfully!"
      }
    }
    stage("Deploy"){
      steps{
        sh "docker compose up -d"
      }
    }
  }
}
