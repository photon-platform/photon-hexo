---
title: GFM 2
layout: post
figure:
#  image: figure.jpg
#  caption: use descriptive hyphenated file names for images
gallery:
  - image: gallery.jpg
    caption: >-
      if file name does not specify a directory, it will assume the post
      directory.
date: 2017-12-30 12:58:50
categories:
tags:
---
Example Markdown using the Github Flavored Markdown (GFM)
<!-- more -->
# GFM examples

## Headings


# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


## blockquote
1
> this is a blockquote

2
> this is a nested blockquote
>> lorem ipsum


## table (PHP-Markdown style)

### source
    ```md
    First Header  | Second Header
    ------------- | -------------
    Content Cell  | Content Cell
    Content Cell  | Content Cell
    ```
### result

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell


### source
    ```markdown
    | #   | Item        | Value |
    | --- | :---------: | -----:|
    | 1   | Computer    | $1600 |
    | 2   | Phone       |   $12 |
    | 3   | Pipe        |    $1 |
    ```
### result

| #   | Item        | Value |
| --- | :---------: | -----:|
| 1   | Computer    | $1600 |
| 2   | Phone       |   $12 |
| 3   | Pipe        |    $1 |


# code

    this is a plain code block


## Ruby

```ruby
get '/' do
  "Hello world "
end
```


autolink
--------

* source

```
http://mukaer.com
```

* result

http://mukaer.com



strikethrough
-------------

* source

```
this is ~~good~~ bad
```

* result

this is ~~good~~ bad


Task Lists
---------

* source

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

* result

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item



superscript
----------

* source

```
this is the 2^(nd) time
```

* result


this is the 2^(nd) time


underline
---------
* source

```
This is _underlined_ but this is still *italic*
```

* result

This is _underlined_ but this is still *italic*


highlight
--------

* source

```
This is ==highlighted==
```

* result

This is ==highlighted==



Index
---

* source

```
```

* result
