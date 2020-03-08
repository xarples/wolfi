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
      { text: "Guide", link: "/guide/" },
      { text: "Components", link: "/components/" },
      { text: "Languages", link: "/languages/" },
      { text: "Github", link: "https://google.com" }
    ],
    sidebar: {
      "/foundations": [
        {
          title: "Foundations",
          collapsable: false,
          children: getFoundationChildren()
        },
        {
          title: "Components",
          collapsable: false,
          children: getComponentChildren()
        }
      ],
      "/components": [
        {
          title: "Foundations",
          collapsable: false,
          children: getFoundationChildren()
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

function getFoundationChildren() {
  return [
    "/foundations/colors",
    "/foundations/grid",
    "/foundations/typography",
    "/foundations/icons"
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
