node{
	stage('Checkout Integration'){
		sh 'git init'
		sh 'git pull https://github.com/Photinia-Milk/Dolo-Front-end feat_integration'
	}
	stage('Set up Env'){
		sh '/etc/home/ec2-user/node/bin/npm install'
	}
	stage('Test'){
		sh '/etc/home/ec2-user/node/bin/npm run test:unit'
	}
	stage('Compile-Package'){
		sh '/etc/home/ec2-user/node/bin/npm run build'
	}
	stage('Pack Docker img'){
		sh 'docker build -t dolo:front-end .'
	}
}