<template>
    <label class="deactive" for="check-box">
        <input type="checkbox" id="check-box">
        <span></span>
    </label>
</template>

<script>
</script>

<style scoped>
    label.active {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 68px;
        height: 34px;
        border-radius: 36px;
        border: 0px solid var(--Secondary-text, #52575C);
        background: var(--Main-dark, #119C59);
        padding: 5px;
    }

    label.deactive {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 68px;
        height: 34px;
        border-radius: 36px;
        border: 0px solid var(--Secondary-text, #52575C);
        background: var(--Inactive-states, #A0A4A8);
        padding: 5px;
    }

    label input {
        display: none;
    }
    label span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 50%;
    }
</style>