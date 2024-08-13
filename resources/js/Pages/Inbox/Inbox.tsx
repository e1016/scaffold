
import Dashboard from "@/Layout/Dashboard"
import { Mail } from "./components/mail"
import { accounts, mails } from "./data"

export default function Inbox() {
  return (
    <Mail
      accounts={accounts}
      mails={mails}
      defaultLayout={undefined}
      defaultCollapsed={undefined}
      navCollapsedSize={4}
    />
  )
}

Inbox.layout = (page: JSX.Element) => <Dashboard>{page}</Dashboard>
