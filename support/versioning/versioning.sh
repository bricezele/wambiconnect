CURRENT_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

git add .
git commit -m "Bump version to version ${CURRENT_VERSION}"

PREVIOUS_VERSION=$(git tag --sort=-committerdate | head -1)
CHANGES=$(git log --pretty="- %s" $PREVIOUS_VERSION...HEAD)
printf "# 🎁 Release notes (\`$CURRENT_VERSION\`)\n\n## Changes\n$CHANGES\n\n## Metadata\n\`\`\`\nThis version -------- $CURRENT_VERSION\nPrevious version ---- $PREVIOUS_VERSION\nTotal commits ------- $(echo "$CHANGES" | wc -l)\n\`\`\`\n" > support/versioning/release_notes.md

git add .
git commit -m "Release notes | ${CURRENT_VERSION}" -m "${CHANGES}"

git tag $CURRENT_VERSION

git push origin $CURRENT_BRANCH $CURRENT_VERSION
