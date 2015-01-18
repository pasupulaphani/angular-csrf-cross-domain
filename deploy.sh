# bash

echo "############### START: GRUNT #################\n"
grunt -v
echo "############### END: GRUNT #################\n"

git add .
git add -u

echo "############### FILE CHANGES #################\n"
git status

echo "############### START: COMMIT and PUSH #################\n"
git commit -m "setting up deployment"
git push origin master
echo "############### END: COMMIT and PUSH #################\n"

version=`cat ./bower.json | underscore select .version --outfmt text`

echo "############### START BOWER RELEASE: $version #################\n"
git tag -f -a v$version -m "Release version $version"
git push --tags
echo "############### END BOWER RELEASE: $version #################\n"