type CacheControlObject = {
  'Cache-Control': string
};

type MaxAgeFunction = (seconds: number) => CacheControlObject;

declare module "cachecontrol" {
  export function public(): {
      maxAge: MaxAgeFunction
  }
  export function private(): {
    maxAge: MaxAgeFunction
  }
  export function noCache(): CacheControlObject
  export function noStore(): {
    maxAge: MaxAgeFunction
  }
}
