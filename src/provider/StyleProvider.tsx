import { ThemeProvider } from "@/components/theme-provider"

type props = {
    children: React.ReactNode
}
export const StyleProvider: React.FC<props> = ({children}) => {
  return (
    <ThemeProvider storageKey='vite-ui-theme' defaultTheme='dark'>
        {children}
    </ThemeProvider>
  )
}
