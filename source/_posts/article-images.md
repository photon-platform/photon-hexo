---
title: Article Images
layout: article
figure:
  image: figure.jpg
  caption: figure caption
gallery:
  - image: gallery.jpg
    caption: ''
date: 2018-05-11 15:34:21
categories:
tags:
  - articles
---
Every article can have a dedicated figure - used as the "hero" image and a gallery.
<!-- more -->

Photon is configured to create a corresponding asset folder when a new article is created.

place your full size images in this folder - no need to resize, Photon will take care of it when generating the site.

use hyphenated names for SEO

when site is generated, the [Responsive Images][69c7fdb0] plugin for Hexo will take care of multiple resized versions of the image in the generated output

setting for the default theme

```
responsive_images:
  pattern: '**/*.+(png|jpg|jpeg)'
  sizes:
    th:
      width: 600
    wb:
      width: 1920
      options:
        withoutEnlargement: true
```

  [69c7fdb0]: https://github.com/i-am-phi/hexo-filter-responsive-images "Hexo-Filter-Responsive-Images Plugin on Github"
