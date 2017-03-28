module.exports = function (grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON('package.json'),

        // Banner definitions
        meta: {
            banner: '/*\n' +
            ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
            ' *  <%= pkg.description %>\n' +
            ' *  <%= pkg.homepage %>\n' +
            ' *\n' +
            ' *  Made by <%= pkg.author.name %>\n' +
            ' *  Under <%= pkg.license %> License\n' +
            ' */\n'
        },

        // Concat definitions
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['src/jquery.ez-plus.js'],
                dest: 'dist/jquery.ez-plus.js'
            }
        },

        // Lint definitions
        jshint: {
            files: ['src/jquery.ez-plus.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // JSCS definitions
        jscs: {
            src: 'src/*.js',
            options: {
                config: '.jscsrc',
                requireCurlyBraces: ['if']
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: 'src/jquery.ez-plus.js',
                dest: 'dist/jquery.ez-plus.min.js'
            },
            options: {
                banner: '<%= meta.banner %>'
            }
        },

        // CoffeeScript compilation
        coffee: {
            compile: {
                files: {
                    'dist/jquery.ez-plus.js': 'src/jquery.ez-plus.coffee'
                }
            }
        },

        // watch for changes to source
        // Better than calling grunt a million times
        // (call 'grunt watch')
        watch: {
            files: ['src/*'],
            tasks: ['default']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['jshint', 'jscs', 'build']);
    grunt.registerTask('travis', ['default']);

};
