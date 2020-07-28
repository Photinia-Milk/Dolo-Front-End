node{
	stage('Checkout Integration'){
		sh 'git init'
	    sh 'git pull https://github.com/Photinia-Milk/Dolo-Front-end feat_integration'
	    sh 'git checkout feat_integration'
	}
	stage('Set up Env'){
		sh 'npm install'
	}
	stage('Test'){
		sh 'npm run test:unit'
	}
	stage('Compile-Package'){
		sh 'npm run build'
	}
	stage('Pack Docker img'){
		sh 'docker build -t dolo:front-end .'
	}
}