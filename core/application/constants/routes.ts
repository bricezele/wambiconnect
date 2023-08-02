/** Available navigation routes */
export enum NavRoutes {
  HOME = 'HOME'
}

export const Routes: Record<NavRoutes, (...args: string[]) => string> = {
  HOME: () => '/'
}
