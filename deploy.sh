#!/bin/bash
set -e

# Set global git config
echo $GITHUB_AUTH_SECRET > ~/.git-credentials && chmod 0600 ~/.git-credentials
git config --global credential.helper store
git config --global user.email "dnolte-holding-travis@users.noreply.github.com"
git config --global user.name "dnolte-holding-travis"
git config --global push.default simple

# Current dir is build root (with "build" directory containg the fresh build)

# Prepare deployment directory (separate git repo)
git clone -n -b master https://github.com/denolteholding/denolteholding.github.io.git deployment

# Copy all files from build into the deployment directory
ls -l .
ls -l deployment
rsync -av --exclude ".git" ./build/ deployment

# Perform GIT push ("|| true" for no content changes)
cd deployment
git add -A
git commit -m "Rebuilding site on `date`, commit ${TRAVIS_COMMIT} and job ${TRAVIS_JOB_NUMBER}" || true
git push
cd ..

# Perform cleanup (in case build env gets cached)
rm -rf build deployment