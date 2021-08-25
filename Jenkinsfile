pipeline {
    agent any
    stages {
        stage('Staging') {
            steps {
                sh 'docker run -p 3000:3000 integral_front'
            }
        }
    }
}
