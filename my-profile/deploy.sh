Echo "Switching to the master branch"
git checkout master

Echo "Building the app ==>>>"
npm run build

Echo "Deploying the app ==>>> vm server"
scp -r build/* rootmegan@20.255.250.183:/var/www/react

Echo "Done!"