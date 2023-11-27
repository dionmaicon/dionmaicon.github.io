<template>
    <header className="relative w-full p-6 h-85px mx-auto the-header">
        <div class="w-full mx-auto flex justify-between container">
            <h1 class="title" style="display: inline-block;"> 
                <NuxtLink to="/" class="no-underline"> 
                    Dion's Blog    
                </NuxtLink>
            </h1>
            <theme-selector style="display: inline-block;"/>
        </div>
    </header>
</template>
<style>

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 700;
    font-size: 42px;
    letter-spacing: 1px;
}

@media screen and (max-width: 768px) {
    .title {
        font-size: 32px;
    }
}

.the-header {
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: 24px;
}

</style>
