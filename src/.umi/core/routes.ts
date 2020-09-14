// @ts-nocheck
import { ApplyPluginsType } from '/Users/kagawa/workspace/github/schema-form/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/_demos/demo",
    "component": require('../../../docs/demo.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"SchemaForm","meta":{}}]}},"locales":[],"navs":{},"title":"@opd/schema-form","mode":"doc","repoUrl":"https://github.com/kagawagao/schema-form"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1600069251506,
          "title": "SchemaForm",
          "slugs": [
            {
              "depth": 1,
              "value": "SchemaForm",
              "heading": "schemaform"
            },
            {
              "depth": 2,
              "value": "Installation",
              "heading": "installation"
            },
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 3,
              "value": "Basic",
              "heading": "basic"
            }
          ]
        },
        "title": "SchemaForm"
      }
    ],
    "title": "@opd/schema-form"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
