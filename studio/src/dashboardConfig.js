export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ab9993ec8cb743f44bb598",
                  title: "Sanity Studio",
                  name: "portfolio-sanity-gatsby-studio-gxhfgcwd",
                  apiId: "eacc5a90-0b85-449e-b801-bda587abe132",
                },
                {
                  buildHookId: "60ab9993bc42864cdcbd18dc",
                  title: "Blog Website",
                  name: "portfolio-sanity-gatsby-web",
                  apiId: "c96b45b3-f5c0-4913-870c-2bfefedde12f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Tomas-Lawton/Portfolio-Sanity-Gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://portfolio-sanity-gatsby-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
