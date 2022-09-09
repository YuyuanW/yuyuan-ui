rm -rf dist &&
yarn build:website && 
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:YuyuanW/yuyuan-ui-use.git && 
git push -f -u origin master && 
cd -
echo https://yuyuanw.github.io/yuyuan-ui-use