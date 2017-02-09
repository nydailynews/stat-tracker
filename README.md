# Stat Tracker
Track stats with a google sheets backend, publish them with d3 and jquery.

# How to's

## How to set up your dev environment

1. Clone this repo to your computer
2. Create a virtual environment for this project: `mkvirtualenv STAT` or something like that. 
  * If you don't have `mkvirtualenv` on your machine:
    1. `pip install virtualenv virtualenvwrapper`
    2. `echo "export WORKON_HOME=~/Env" >> ~/.bashrc`
    3. `echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc`
    4. `source ~/.bashrc`
3. Install the project requirements with `pip install -r requirements.txt`

## How to set up Oauth authentication for downloading data from sheets

[This article is marginally useful](https://developers.google.com/api-client-library/python/auth/service-accounts), but here's the essence:

1. If you don't have a project in [GoogleAPI's console](https://console.developers.google.com/iam-admin/projects), create a project.
2. [Create a service account under that project](https://console.developers.google.com/iam-admin/serviceaccounts/serviceaccounts-zero).
3. Once the service account is created, create a key for that account.
4. Share the spreadsheet with the email address for that key (it should have "@developer.gserviceaccount.com" in it)
5. Set the ACCOUNT_KEY env var to the private key value.

## How to create a new tracker

### How to get the back-end running

1. Open the shared Sports spreadsheet (in Google Drive, if you don't have access ask Boniface)
2. Create a new tab and give it a name. The name must be all-lowercase, also, use hyphens instead of spaces.
3. Update [deploy.bash](deploy.bash) with the name of the new tab.

### How to get the front-end displaying the data

Basically: Look at how it was done on the [Broncos Sacks Tracker](www/broncos-sacks-2016.html) and take it from there.

## How to update the [Broncos Sacks Tracker](http://www.denverpost.com/2016/09/14/denver-broncos-sack-tracker-2016/) for a new year

1. Open the shared Sports spreadsheet (in Google Drive, if you don't have access ask Boniface)
2. Create two new tabs: broncos-sacks-YEAR and broncos-sacks-by-player-YEAR
3. The layout for the new tabs should look like the previous years' sheets.
4. Add a row (insert it in row 2) in the broncos-sacks-per-season for the new year, give it a value of 0.
5. Copy the previous year's html file (such as [www/broncos-sacks-2016.html](www/broncos-sacks-2016.html) and edit these lines:
  * [The title element](www/broncos-sacks-2016.html#L7)
  * [Each instance of the article URL in the head](www/broncos-sacks-2016.html#L9)
  * [Each instance of the old year in the body](www/broncos-sacks-2016.html#L151)
6. Add the new html file to the repo, upload it to extras (in the app folder, in stat-tacker).
7. Update [deploy.bash](deploy.bash) with the names of the two new tabs.
8. SSH to prod, cd to the project directory, activate the virtual env and run ./deploy.bash

# License

The MIT License (MIT)

Copyright © 2015-2017 The Denver Post

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
