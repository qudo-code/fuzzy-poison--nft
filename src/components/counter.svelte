<!-- Exmaple component -->
<style>
    .counter {
        display: flex;
        margin: 2rem 0;
        justify-content: space-around;
    }
</style>

<div class="counter">
    <div>
        <h2 class="p-1">Count: {count}</h2>
    </div>
    <div>
        <button class="button border border-radius p-1" on:click={() => (count += 1)}>Up</button>
        <button class="button border border-radius p-1" on:click={() => (count -= 1)}>Down</button>
    </div>
</div>

<script>
    let count = 0;

    const test = {
        test : "dd",
    };
</script>