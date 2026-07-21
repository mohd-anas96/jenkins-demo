pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-demo .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop jenkins-demo || true
                docker rm jenkins-demo || true

                docker run -d \
                  --name jenkins-demo \
                  -p 3000:3000 \
                  jenkins-demo
                '''
            }
        }
    }
}
