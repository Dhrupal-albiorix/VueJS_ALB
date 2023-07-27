<template>
  <div>
    <div><h1>Provide & Inject Intro</h1></div>
    <a href="https://vuejs.org/guide/components/provide-inject.html">Doc</a>
    <p>
      Usually, when we need to pass data from the parent to a child component,
      we use props. However, imagine the case where we have a large component
      tree, and a deeply nested component needs something from a distant
      ancestor component. With only props, we would have to pass the same prop
      across the entire parent chain
    </p>

    <p>
      If there is a longer parent chain, more components would be affected along
      the way. This is called "props drilling" and definitely isn't fun to deal
      with.
    </p>

    <p>
      We can solve props drilling with provide and inject. A parent component
      can serve as a dependency provider for all its descendants. Any component
      in the descendant tree, regardless of how deep it is, can inject
      dependencies provided by components up in its parent chain.

   
    </p>
  </div>
</template>

<script>
</script>