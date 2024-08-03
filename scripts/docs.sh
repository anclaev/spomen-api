#!/bin/bash
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
yarn docs
git add docs
yarn commit --non-interactive --type=docs --subject="v$PACKAGE_VERSION"
yarn push