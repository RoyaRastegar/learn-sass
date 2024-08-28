const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildSass() {
  return src("style.scss").pipe(sass()).pipe(dest("css"));
}
function watchSass() {
  watch(["style.sass"], buildSass);
}
exports.default = series(buildSass, watchSass);
