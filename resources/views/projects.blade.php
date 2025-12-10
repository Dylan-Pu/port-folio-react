<x-layout title="Projets">
    <section class="py-20 px-6">
        <h1 class="text-5xl md:text-7xl font-black text-center mb-16">
            Mes projets
        </h1>

        <!-- Le truc magique qui centre vraiment avec seulement 2 cartes -->
        <div class="flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full justify-items-center">




                <!-- Ta carte 1 (MH Wilds) -->
                <div
                    class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">

                    <div class="bg-gradient-to-br from-emerald-500 to-teal-600 h-56 flex items-center justify-center">
                        <span class="text-white text-3xl font-bold">MH Wilds DB</span>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold mb-3">Bestiaire Monster Hunter Wilds</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            Base de données complète des monstres avec fiches détaillées, icônes HD et recherche.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Laravel</span>
                            <span
                                class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">Tailwind</span>
                            <span
                                class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm">Blade</span>
                        </div>
                        <a href="https://mh-wilds-db-production.up.railway.app/"
                            class="text-indigo-600 font-semibold hover:underline">
                            Voir le projet →
                        </a>
                    </div>
                </div>

                <!-- Ta carte 2 (Calorie Tracker) -->
                <div
                    class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">

                    <div class="bg-gradient-to-br from-pink-500 to-rose-500 h-56 flex items-center justify-center">
                        <span class="text-white text-3xl font-bold">Calorie Tracker</span>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold mb-3">Suivi calorique & nutrition</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            Application moderne pour tracker repas, calories et objectifs au quotidien.
                        </p>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            Le Projet n'est pas en ligne voir directement sur mon github
                        </p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span
                                class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Laravel</span>
                            <span
                                class="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">Tailwind</span>
                            <span
                                class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm">Blade</span>
                        </div>
                        <a href="https://github.com/Dylan-Pu/CalorieTracker"
                            class="text-indigo-600 font-semibold hover:underline">
                            Voir le code source →
                        </a>
                    </div>
                </div>


            </div>
        </div>
    </section>
</x-layout>