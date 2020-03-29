// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Wolfi",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png"
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://example.com",
  settings: {
    web: process.env.URL_WEB || "https://example.com",
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || "https://github.com/xarples/wolfi",
    nav: {
      links: [
        { path: "/docs/getting-started/", title: "Docs" }
        // { path: "/docs/components/alerts/", title: "Components" }
      ]
    },
    sidebar: [
      {
        name: "docs",
        sections: [
          {
            title: "Getting Started",
            items: [
              "/docs/getting-started/",
              "/docs/getting-started/quick-start/"
            ]
          },
          {
            title: "Essentials",
            items: [
              "/docs/essentials/colors/",
              "/docs/essentials/grid/",
              "/docs/essentials/icons/",
              "/docs/essentials/typography/"
            ]
          },
          {
            title: "Customization",
            items: ["/docs/customization/"]
          },
          {
            title: "Components",
            items: [
              "/docs/components/alerts/",
              "/docs/components/badges/",
              "/docs/components/buttons/",
              "/docs/components/cards/",
              "/docs/components/collapse/",
              "/docs/components/dropdowns/",
              "/docs/components/forms/",
              "/docs/components/images/",
              "/docs/components/modals/",
              "/docs/components/navigations/",
              "/docs/components/popovers/",
              "/docs/components/tables/",
              "/docs/components/toasts/",
              "/docs/components/tooltips/"
            ]
          }
          // {
          //   title: "Getting Started",
          //   items: [
          //     "/docs/",
          //     "/docs/installation/",
          //     "/docs/writing-content/",
          //     "/docs/deploying/"
          //   ]
          // },
          // {
          //   title: "Configuration",
          //   items: ["/docs/settings/", "/docs/sidebar/"]
          // }
        ]
      }
    ]
  },
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "MarkdownPage", // Required
        path: "**/*.md",
        baseDir: "./content", // Where .md files are located
        template: "./src/templates/MarkdownPage.vue",
        plugins: ["@gridsome/remark-prismjs"]
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "**/*.md",
        typeName: "MarkdownPage",
        plugins: ["@gridsome/vue-remark"],
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    },

    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/]
        }
      }
    },

    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : "XX-999999999-9"
      }
    },

    {
      use: "@gridsome/plugin-sitemap",
      options: {}
    }
  ]
}
