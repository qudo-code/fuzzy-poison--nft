<main>
  <div class="p-1">
    <h1>Svelte Single File Template</h1>
    <p>
      This is a template repository focused on building small web apps. When you build this project the resulting file is a single index.html with all assets inlined. While I made this project with the focus of building/minting HTML NFTs, it really could be used for anything.
    </p>
    
    <Counter />
  </div>

  <div class="p-1">
    <p>
        Made by
        <a href="https://twitter.com/_qudo" class="text-green" target="_blank" rel="noreferrer">_qudo</a>
    </p>
  </div>
</main>

<script>
  import Counter from "src/components/counter.svelte";
</script>