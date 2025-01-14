export default interface GlobalProps {
  isAuthenticated: boolean,
  setIsAuthenticated: (isAuthenticated: boolean) => {},
  activeLanguage: string,
  setActiveLanguage: (activeLanguage: string) => {},
}
