module.exports = {
  "presets":
    [
      [
        "@vue/cli-plugin-babel/preset",
        {
          "targets":
          {
            "chrome": "35",
          },
          "useBuiltIns": "usage",
          "corejs": "3.6.5"
        }

      ]
    ],
}
