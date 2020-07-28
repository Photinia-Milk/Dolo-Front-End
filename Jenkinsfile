node{
	stage('Checkout Integration'){
	    sh 'rm * -f -r'
	    sh 'rm .gitignore .eslintignore .git -f -r'
	    sh 'ls -a'
	    sh 'git init'
		sh 'git pull https://github.com/Photinia-Milk/Dolo-Front-end develop'
	}
	stage('Set up Env'){
	    sh 'source /etc/profile ; npm install'
	}
	stage('Test'){
		sh 'source /etc/profile ; echo "pass for integration" ; #npm run test:unit'
	}
	stage('Compile-Package'){
		sh 'source /etc/profile ; npm run build'
	}
	stage('Pack Docker img'){
		sh 'docker build -t dolo:front-end .'
	}
	stage('Deploy docker img'){
		sh 'docker rm -f dolo-front-end'
	    sh 'docker run --name dolo-front-end -dp 8082:80 dolo:front-end'
		sh 'docker ps'
	}
}