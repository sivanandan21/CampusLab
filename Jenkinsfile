pipeline {
    agent any

    stages {
        stage('1. Clone Repository') {
            steps {
                echo 'Pulling latest CampusLab code from GitHub...'
                git branch: 'main', url: 'https://github.com/sivanandan21/CampusLab.git'
            }
        }

        stage('2. Verify Toolchain') {
            steps {
                echo 'Verifying Docker and Server Environment...'
                sh 'docker --version'
                sh 'terraform -version'
                sh 'nginx -v'
            }
        }

        stage('3. Build KTU Linux Lab Container') {
            steps {
                echo 'Building Docker Image with all Linux commands...'
                sh 'docker build -t campuslab/ktu-base-linux:2024 lab-images/ktu-base-linux'
            }
        }

        stage('4. Test Container Sandbox') {
            steps {
                echo 'Testing GCC and Python inside isolated Docker container...'
                sh 'docker run --rm campuslab/ktu-base-linux:2024 gcc --version'
                sh 'docker run --rm campuslab/ktu-base-linux:2024 python3 --version'
            }
        }
    }

    post {
        success {
            echo '🎉 CampusLab CI/CD Build Succeeded!'
        }
        failure {
            echo '❌ Build failed. Check logs above.'
        }
    }
}
