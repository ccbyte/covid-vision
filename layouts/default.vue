<template>
  <div class="__layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <aside>
        <slot name="left-side" />
      </aside>
      <article>
        <slot name="content" />
      </article>
      <aside>
        <slot name="right-side" />
      </aside>
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<style>
.__layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #223645;
}

header {
  width: 100%;
  height: 50px;
  display: flex;
  /* background-color: red; */
}

main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

article,
aside {
  margin: 10px 0;
  overflow: auto;
}

aside {
  flex: 0 1 400px;
  /* background: yellow; */
}

article {
  flex: 1 0 768px;
  /* background-color: blue; */
}

footer {
  height: 50px;
  /* background-color: #eee; */
}

@media screen and (max-width: 1568px) {
  aside,
  article {
    flex: 1 0 100%;
    /* height: 800px; */
  }
}

</style>
