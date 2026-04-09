/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/calendar` | `/calendar`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/camera` | `/camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/foodpedia` | `/foodpedia`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/calendar` | `/calendar`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/camera` | `/camera`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/foodpedia` | `/foodpedia`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/modal${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/calendar${`?${string}` | `#${string}` | ''}` | `/calendar${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/camera${`?${string}` | `#${string}` | ''}` | `/camera${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/foodpedia${`?${string}` | `#${string}` | ''}` | `/foodpedia${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/calendar` | `/calendar`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/camera` | `/camera`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/foodpedia` | `/foodpedia`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
    }
  }
}
