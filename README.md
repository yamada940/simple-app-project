# Hosting 
1. Setup Firebase Hosting
	1. firebase init
		1. > Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub 
		 (半角スペース押すと選択。その後エンター)
	2. Please select an option
		1. > Use an existing project
	3. Select a default Firebase project for this directory: (Use arrow keys)
		1. > 任意のプロジェクト選択（事前にFirebaseで新規のFirestoreプロジェクトを作成が終わっている必要アリ）
	3. Action deploys
	4. Use an existing project

	5. What do you want to use as your public directory?
		1. dist
	6. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) n
	7. File dist/index.html already exists. Overwrite? (y/N) n
	8. Set up automatic builds and deploys with GitHub? (y/N) y
	9. For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) (seito-developer/db-test) 
		1. just Enter
	10.  Set up the workflow to run a build script before every deploy? (y/N) y
	11. What script should be run before every deploy? (npm ci && npm run build) 
		1. just Enter
	12. Set up automatic deployment to your site's live channel when a PR is merged? (Y/n) y
	13. What is the name of the GitHub branch associated with your site's live channel? (main) 
2. htmlを手動でdist/へ。コピペでassets読み込ませる
3. firebase deploy / merge to main