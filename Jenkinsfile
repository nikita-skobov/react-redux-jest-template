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
  }

  post {
    always {
      echo 'maybe delete some stuff here?'
      sh 'mkdir -p reports'
      sh 'echo $(ls)'
      sh 'node /home/linaro/Desktop/coverage/node_modules/coverage-badger/lib/cli.js -e 90 -g 65 -r ./coverage/clover.xml -d ./reports/'
      sh 'sudo curl http://localhost:8080/buildStatus/icon?job=react-redux-jest-template -o ./reports/buildstatus.svg'
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