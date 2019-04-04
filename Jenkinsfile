pipeline {
  agent any

  currentBuild.result = "SUCCESS"

  try {
    stages {
      stage('Test') {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
        sh 'npm run test-CI'
      }
    }
  }
  catch (err) {
    currentBuild.result = "FAILURE"
    // mail here?
    throw err
  }
}