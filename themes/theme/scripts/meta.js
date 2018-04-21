// See: https://github.com/zhuochun/md-writer/wiki/Settings-for-Front-Matters
// Path: scripts/meta.js
// Author: Masayuki Higashino
// License: MIT
hexo.extend.generator.register('meta', function(locals) {
  var meta = {
    tags: [],
    posts: [],
    categories: []
  }
  locals.tags.sort('name').each(function(tag) {
    meta.tags.push(tag.name)
  })
  locals.categories.sort('name').each(function(category) {
    meta.categories.push(category.name)
  })
  locals.posts.sort('name').each(function(post) {
    meta.posts.push({
      title: post.title,
      url: encodeURI(post.permalink),
      date: post.updated.toDate().toISOString() || post.date.toDate().toISOString()
    })
  })
  return {path: 'meta.json', data: JSON.stringify(meta)}
})
