import { INFO } from './src/constants/site';

const config = {
    siteMetadata: {
        author: `deBakatas`,
        description: INFO.description,
        siteUrl: INFO.URL,
        title: INFO.name,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `${__dirname}/static/fonts`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: INFO.name,
                short_name: INFO.name,
                start_url: `/`,
                background_color: INFO.color,
                theme_color: INFO.color,
                display: `minimal-ui`,
                icon: `static/images/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'REPLACE_ME',
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ['REPLACE_ME'],
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                },
            },
        },
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `u5hkgaly`,
                dataset: `production`,
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: [`/__generated/*`],
            },
        },
    ],
};

export default config;
