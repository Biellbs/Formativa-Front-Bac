<script setup>
</script>

<template>
    <footer class="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-100 text-center py-8 shadow-2xl">
        <div class="container-rodape">
            <div class="mb-4">
                <h3 class="text-2xl font-bold text-black mb-2">TechFix Solutions</h3>
                <p class="text-sm text-gray-300">Excelência em serviços técnicos especializados</p>
            </div>
            <div class="divider my-4 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></div>
            <p class="text-sm text-gray-400">© 2025 TechFix Solutions. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
.container-rodape {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

footer {
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #000000, transparent);
}

h3 {
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>