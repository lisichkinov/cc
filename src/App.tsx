import { MantineProvider } from '@mantine/core'
import { CurrencyCard } from './components/currency/CurrencyCard'
import { Layout } from './components/layout/Layout'

function App() {

  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Layout>
        <CurrencyCard />
      </Layout>
    </MantineProvider>
  )
}

export default App
