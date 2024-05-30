type Event = {
  routeId: string,
  url: URL
} 
export const actions = {
  login: async ({ url }: Event) => {
    console.log('hi', url.href);
  }
}