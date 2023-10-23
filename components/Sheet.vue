<template>
    <div class="sheet">
        <div class="sheet-header">
            <p>Show more</p>
            <p>30</p>
            <button class="transition-[1s]" @click="() => sheetStatus = !sheetStatus">
                <Icon class="transition-[1s]" :class="sheetStatus ? 'rotate-180':'' " name="simple-line-icons:arrow-down" color="black"  />
            </button>
        </div>
        <ul class="sheet-body" :class="sheetStatus ? 'active':'deactive'">
            <li>sheet-item</li>
            <li>sheet-item</li>
            <li>sheet-item</li>
            <li>sheet-item</li>
            <li>sheet-item</li>
            <li>sheet-item</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sheetStatus:false
            }
        }
    }
</script>   

<style scoped>

    .sheet {
        display: flex;
        flex-direction: column;
        width: 256px;
        height: 48px;
    }
    .sheet-header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
        widows: 100%; 
        flex-shrink: 0;
        background: var(--Background-and-disabled-background-for-buttons, #FAF9F7);
    }

    .sheet-body {
        background: var(--Background-and-disabled-background-for-buttons, #f4f0ec);
        transition: 0.4s;
    }
    .sheet-body.active {
        display: block;
    }
    .sheet-body.deactive {
        display: none;
    }
    .sheet-body li {
        padding: 4px 8px;
        margin: 3px 0;
    }
</style>