pipeline{
  agent { label "devops-agent" }
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
                    sh "docker tag socialscope-nginx-image:latest ${USERNAME}/socialscope-nginx-image:latest"
                    sh "docker tag socialscope-image:latest ${USERNAME}/socialscope-image:latest"
                    sh "docker push ${USERNAME}/socialscope-nginx-image:latest"
                    sh "docker push ${USERNAME}/socialscope-image:latest"
                }
                echo "Pushed on Docker-Hub Successfully!"
            }
        }
        stage("Deploy") {
            steps{
                sh "docker compose up -d"
            }
        }
    }
    post{
        failure {
            script {
                emailext (
                    from: "raveeddogar10@gmail.com",
                    subject: "Social Scope App build Successful",
                    body: "Social Scope App build Successfully deployed",
                    to: "muhammadzohaibwarraich0@gmail.com"
                    )
            }
        }
    }
}
