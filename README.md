# Stat Tracker
Track stats with a google sheets backend, publish them with d3 and jquery.

# How to's

## How to create a new tracker

## How to update the [Broncos Sacks Tracker](http://www.denverpost.com/2016/09/14/denver-broncos-sack-tracker-2016/) for a new year

1. Open the shared Sports spreadsheet
2. Create two new tabs: broncos-sacks-YEAR and broncos-sacks-by-player-YEAR
3. The layout for the new tabs should look like the previous years' sheets.
4. Add a row (insert it in row 2) in the broncos-sacks-per-season for the new year, give it a value of 0.
5. Copy the previous year's html file (such as [blob/master/www/broncos-sacks-2016.html](blob/master/www/broncos-sacks-2016.html) and edit these lines:
  * [The title element](blob/master/www/broncos-sacks-2016.html#L7)
  * [Each instance of the article URL in the head](blob/master/www/broncos-sacks-2016.html#L9)
  * [Each instance of the old year in the body](blob/master/www/broncos-sacks-2016.html#L151)
6. Add the new html file to the repo, upload it to extras (in the app folder, in stat-tacker).
7. SSH to prod, cd to the project directory, activate the virtual env and run ./deploy.bash

# License

The MIT License (MIT)

Copyright © 2015-2016 The Denver Post

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
