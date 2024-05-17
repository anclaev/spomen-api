git add .
git commit -S -m "Release &1"
git tag -a %1 -m "Release %1"
git push origin main
git push origin %1