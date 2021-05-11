pipeline {
    agent any
    stages {
        stage('Staging') {
            steps {
                sh 'docker-compose up --build -d'
            }
        }
    }
}