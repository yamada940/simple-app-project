# FirebaseでHostingする方法と流れ
1. コマンドライン操作
	1. コマンド `firebase init` を実行
		1. > Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub 
		 (半角スペース押すと選択。その後エンター)
	2. Please select an option
		1. > Use an existing project
	3. Select a default Firebase project for this directory: (Use arrow keys)
		1. > 任意のプロジェクト選択（事前にFirebaseで新規のFirestoreプロジェクトを作成が終わっている必要アリ）
	4. What do you want to use as your public directory?
		1. dist へ変更
	5. Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
		1. > n
	6. File dist/index.html already exists. Overwrite? (y/N)
		1. > n
	7. Set up automatic builds and deploys with GitHub? (y/N)
		1. > y
	8. For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
		1. そのままエンター
	9.  Set up the workflow to run a build script before every deploy? (y/N) 
		1. > y
	10. What script should be run before every deploy? (npm ci && npm run build) 
		1. そのままエンター
	11. Set up automatic deployment to your site's live channel when a PR is merged? (Y/n)
		1. > y
	12. What is the name of the GitHub branch associated with your site's live channel?(main)  
		1. > そのままエンター
2. htmlファイルを手動でdist/へ移す。それだけだとassets/以下のパスが一致しないので、手動で書き換える（コピペ可）
3. 1. コマンド `firebase deploy` を実行。またはGitHubアクション連携済みなら、mainブランチにマージするだけで自動でデプロイされる。

成功したらコマンドラインに 下記のように表示される

```
=== Deploying to 'project-name'...

i  deploying hosting

i  hosting[project-name]: releasing new version...
✔  hosting[project-name]: release complete
... (略) ...
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/project-name/overview
Hosting URL: https://project-name.web.app
```