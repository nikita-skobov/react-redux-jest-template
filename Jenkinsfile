pipeline {
  agent any

  stages {
    stage('Test') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
        sh 'npm run test-CI'
      }
    }

    stage('Generate report') {
      steps {
        sh 'mkdir reports'
        sh 'echo $(ls)'
        sh 'node ~/Desktop/coverage/node_modules/coverage-badger/lib/cli.js -e 90 -g 65 -r ./coverage/clover.xml -d ./reports/'
      }
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