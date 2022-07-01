const {src, dest, parallel} = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');

function html(){
    return ('src/*.html')
        .pipe(dest('public/'));
}

function js(){
    return('src/js/index.js')
        .pipe(named())
        .pipe(webpack({
            mode:'production',
            output:{
                filename:'[name].js'
            },
            module:{
                rules:[
                    {
                        test:/\.(js|jsx)$/,
                        use:{
                            loader:'babel-loader',
                            options:{
                                presets:['@babel/preset-env', '@babel/preset-react']
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(dest('public/assets/js/'));

}