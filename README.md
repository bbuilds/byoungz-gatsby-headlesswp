# BYOUNGZ Gastby and WP Wordpress theme.

A custom built Gatsby theme leveraging WP as backend. Also built in is a custom IG feed using the Basic Display API and feeding into gatsby node. 

**LIVE URL**

[https://byoungz.com/](https://byoungz.com/)


## 🔨 Dev Notes

Some useful notes to help clriafy what is needed for the theme.

### ENV Vars

URL with WP Graphql Feed `WPGRAPHQL_URL`

If using a local URL (ignores self signed cert warnings) `NODE_TLS_REJECT_UNAUTHORIZED = '0'`

Needed User Access token if you want to use IG feed`IG_ACCESS_TOKEN`

Site URL needed for compiling things like sitemap`SITE_URL`

Google Tag Manager ID `GTM_ID`

Formspree URL `GATSBY_FORM_SPREE_URL`

### Needed WP Plugins

- [ACF](https://www.advancedcustomfields.com/)
- [Yoast](https://yoast.com/wordpress/plugins/seo/)
- [WP GraphQL](https://www.wpgraphql.com/)
- [WPGraphQL Yoast SEO Addon](https://wordpress.org/plugins/add-wpgraphql-seo/)
- [WPGraphQL for Advanced Custom Fields](https://www.wpgraphql.com/acf/)
- [WPGatsby](https://wordpress.org/plugins/wp-gatsby/) - optional but very useful


### Technology

- [Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework for rapidly building custom designs. Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs

- [React tsParticles](https://www.npmjs.com/package/react-tsparticles) Lightweight TypeScript library for creating particles. 

- [AOS](http://michalsnik.github.io/aos/) -Animate On Scroll Library

- [IG Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api/) - Using Basic Display API for feed - will need to create an app, add an IG user, and generate their access token to display YOUR feed.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.