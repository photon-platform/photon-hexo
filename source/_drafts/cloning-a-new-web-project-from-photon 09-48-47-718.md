---
title: Cloning a new web project from photon with Git
layout: post
figure:
  image: figure.jpg
  caption: use descriptive hyphenated file names for images
gallery:
  - image: gallery.jpg
    caption: >-
      if file name does not specify a directory, it will assume the post
      directory.
date: 2017-12-30 13:35:04
categories:
tags:
---
- create a fork of `photon` in your own repo.
- create a new empty web project repo
- pull photon as an upstream master

<!-- more -->
# Process to fork your own Photon repo

thanks to...

[http://www.tilcode.com/fork-your-own-repo-on-github/](http://www.tilcode.com/fork-your-own-repo-on-github/)


- create **new-project** repo in **i-am-phi** github
- clone this new repo locally
- add **photon** as the upstream remote
- pull from the upstream remote
-

```bash
git clone https://github.com/i-am-phi/new-project.git
cd new-project
git remote add upstream https://github.com/i-am-phi/photon.git
git pull upstream master
git add .
git commit -m "init commit - internal fork of photon"
git push origin master
npm install

```

> you may get an alert from GitHub stating **"One of your dependencies may have a security vulnerability"**
>
> this is due to a common library in hexo that is suddenly an isue.
>
> seeking to understand

## why fork the repo?

why not just call `hexo init`?

quite a few plugins and theme elements need to be in the Hexo environment

# updating from the upstream

this is the key benefit to the going through this upstream fork/clone process

you can maintain a common baseline configuration for all your web projects - then estend or override the baseline for each projects requirements.

> run `npm install` directly after upstream pull to update dependencies

```bash
git pull upstream master
npm install
```
i believe you could push a change back to the upstream master - therefore maintain things like tempaltes within each project. need to think it through


## Update the `config.yaml` file

TODO: update automatically after upstream

- port
- meta

```
hexo init?????
hexo server -o
```
