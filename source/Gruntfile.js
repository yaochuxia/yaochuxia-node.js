/// 包装函数
module.exports = function(grunt) {
    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    'build/index.min.css': ['styl/index.styl']//压缩后输出的位置及文件，要压缩的源文件，我们也可以用*表示通配，比如'styl/*.styl'
                }]
            }
        },
        // watch插件的配置信息
        watch: {
            another: {
                files: ['styl/*.styl',"build/*"],
                tasks: ['stylus'],
                options: {
                    livereload: 1337
                }
            }
        }
    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['watch']);
};
