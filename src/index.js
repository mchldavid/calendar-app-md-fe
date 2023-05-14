import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { QueryClient, QueryClientProvider } from "react-query"
import "./index.css"
import { AuthContextProvider } from "./context/AuthContext"
import { FormContextProvider } from "./context/FormContext"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
