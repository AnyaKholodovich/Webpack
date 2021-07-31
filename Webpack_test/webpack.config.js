const config = {
    mode:"development",
    entry: "./src/index.js",
    output: "bundle.[hash].js",
    path: path.resolve(__dirname, "./dist/")
}

module.export = config;