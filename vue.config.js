// export const publicPath = process.env.NODE_ENV === "production" ? "/portal-front/" : "/";
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8181',
        changeOrigin: true,
      }
    }
  }
};