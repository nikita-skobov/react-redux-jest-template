pipeline {
  agent any

  stages {
    stage('Test') {
      sh 'node -v'
      sh 'npm -v'
      sh 'npm install'
      sh 'npm run test-CI'
    }
  }

  post {
    always {
      echo 'maybe delete some stuff here?'
    }
    success {
      echo 'Nice!!!'
    }
    unstable {
      echo 'Are we unstable?? why?'
    }
    failure {
      echo 'Im a failure :('
    }
  }
}