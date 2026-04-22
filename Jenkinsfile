pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/nikhilpatill/playwrite_typescript_project.git',
                    branch: 'master',
                    credentialsId: 'e86d128c-fe66-4554-8807-840f74b1855c'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}