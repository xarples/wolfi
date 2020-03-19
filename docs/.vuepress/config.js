module.exports = {
  title: "Wolfi",
  description: "Just playing around",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.12.1/css/all.css",
        integrity:
          "sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv",
        crossorigin: "anonymous"
      }
    ]
  ],
  themeConfig: {
    // displayAllHeaders: true,
    nav: [
      { text: "Guide", link: "/getting-started/quick-start/" },
      { text: "Components", link: "/components/alerts/" },
      { text: "Languages", link: "/languages/" },
      { text: "Github", link: "https://google.com" }
    ],
    sidebar: {
      "/getting-started": [
        {
          title: "Getting started",
          collapsable: false,
          children: getGettingStarted()
        },
        {
          title: "Components",
          collapsable: false,
          children: getComponentChildren()
        }
      ],
      "/components": [
        {
          title: "Getting started",
          collapsable: false,
          children: getGettingStarted()
        },
        {
          title: "Components",
          collapsable: false,
          children: getComponentChildren()
        }
      ]
    }
  }
}

function getGettingStarted() {
  return [
    "/getting-started/quick-start",
    "/getting-started/colors",
    "/getting-started/grid",
    "/getting-started/typography",
    "/getting-started/icons"
  ]
}

function getComponentChildren() {
  return [
    "/components/alerts",
    "/components/badge",
    "/components/buttons",
    "/components/card",
    "/components/collapse",
    "/components/dropdowns",
    "/components/forms",
    "/components/images",
    "/components/modal",
    "/components/navigations",
    "/components/popovers",
    "/components/tables",
    "/components/toasts",
    "/components/tooltips"
  ]
}
