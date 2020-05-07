<template>
  <Layout>
    <w-section>
      <w-grid-container>
        <w-grid-row>
          <w-grid-column :sm="12" :md="5">
            <w-text variant="display1">
              <strong>Modern and Beautiful UI Library.</strong>
            </w-text>
            <w-text variant="lead">
              Wolfi has everything you need to create amazing, responsive and
              mobile-first projects on the web using Vue.js
            </w-text>
            <g-link to="/docs/getting-started/">
              <w-button size="lg">Get Started</w-button>
            </g-link>
          </w-grid-column>
          <w-grid-column :sm="12" :md="7">
            <g-image src="~/assets/illustration.jpg" />

            <!-- <img :style="{ maxWidth: '100%', margin: '0 auto' }" src="~/assets/illustration.jpg" /> -->
          </w-grid-column>
        </w-grid-row>
      </w-grid-container>
    </w-section>

    <w-section>
      <w-grid-container>
        <w-grid-row>
          <w-grid-column :sm="12" :md="3">
            <w-icon name="expand" size="3x" :style="{ marginBottom: '.5em' }" />
            <w-text variant="h4">
              <strong>Responsive</strong>
            </w-text>
            <w-text>Design for mobile first.</w-text>
          </w-grid-column>
          <w-grid-column :sm="12" :md="3">
            <w-icon fab name="vuejs" size="3x" :style="{ marginBottom: '.5em' }" />
            <w-text variant="h4">
              <strong>Modern</strong>
            </w-text>
            <w-text>Built with latest version of Vue.js.</w-text>
          </w-grid-column>
          <w-grid-column :sm="12" :md="3">
            <w-icon name="sliders-h" size="3x" :style="{ marginBottom: '.5em' }" />
            <w-text variant="h4">
              <strong>Configurable</strong>
            </w-text>
            <w-text>Create themes programmatically.</w-text>
          </w-grid-column>
          <w-grid-column :sm="12" :md="3">
            <w-icon fab name="github" size="3x" :style="{ marginBottom: '.5em' }" />
            <w-text variant="h4">
              <strong>Free</strong>
            </w-text>
            <w-text>Open source on github</w-text>
          </w-grid-column>
        </w-grid-row>
      </w-grid-container>
    </w-section>
  </Layout>
</template>

<script>
import Logo from "@/components/Logo"
import {
  ArrowRightCircleIcon,
  ZapIcon,
  CodeIcon,
  MoonIcon,
  SearchIcon
} from "vue-feather-icons"

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = "Great Documentation starts here"
    const description =
      "DOCC is a starter theme with instant search and dark mode for writing great technical documentation. Based on Gridsome!"

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description
        },
        {
          key: "og:title",
          name: "og:title",
          content: title
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title
        },
        {
          key: "og:description",
          name: "og:description",
          content: description
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description
        }
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
