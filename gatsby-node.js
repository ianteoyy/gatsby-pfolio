exports.onPostBuild = async function ({ cache, store, graphql }, { query }) {
  const cacheKey = "iant-cache"
  let obj = await cache.get(cacheKey)
  if (!obj) {
    obj = { created: Date.now() }
    const data = await graphql(query)
    obj.data = data
  } else if (Date.now() > obj.lastChecked + 3600000) {
    /* Reload after a day */
    const data = await graphql(query)
    obj.data = data
  }
  obj.lastChecked = Date.now()
  await cache.set(cacheKey, obj)
}