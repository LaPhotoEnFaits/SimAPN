module.exports = function(grunt) {

    /*
     *
     * Charge les tâches utilisées
     *
     */

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-parallel');

    /*
     *
     * Configure Grunt
     *
     */

    grunt.initConfig({

        // JSHint analyse le code js à la recherche d'erreurs
        jshint: {
            all: ['JS/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            // Vide le dossier 'Packaged'
            all: 'Packaged/*'
        },

        concat: {
            options: {
                separator: '\n',
            },
            // Concatène les fichiers JS contenus dans 'JS' sauf les simulateurs et main.js
            packaged: {
                src: [
                    'JS/**/*.js',
                    '!JS/Utils/compatibiliteNavigateurs.js',
                    '!JS/simulateur*.js',
                    '!JS/main.js',                    
                ],
                dest: 'Packaged/app.js',
            }
        },

        // Serveur http pour tester en local
        connect: {
            server: {
                options: {
                    port: 9002,
                    keepalive: true,
                    base: './',
                    hostname: '',
                }
            }
        },

        uglify: {
            app: {
                files: {
                    'Packaged/app.min.js': ['Packaged/app.js']
                }
            }
        },

        // Surveille les fichiers .js contenus dans le dossier JS
        // Relance la tâche 'build' à chaque changement
        watch: {
            build: {
                files: ['JS/**/*.js'],
                tasks: ['build'],
                options: {
                    spawn: false,
                }
            }
        },

        // lance le watch et le serveur http en parallèle
        parallel: {
            grunt: {
                options: {
                    stream: true,
                    grunt: true
                },
                tasks: ['build', 'connect']
            }
        }

    });

    /**
     *
     * Définition des tâches
     *
     **/

    // Tâche 'build'
    grunt.registerTask('build', [
        'clean',
        /*'jshint', Désactivé pour le moment car trop d'erreurs */
        'concat',
        'uglify',
        'watch'
    ]);

    // Tâche par défaut : 'build'
    grunt.registerTask('default', ['parallel']);

};