export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <p>Layout</p>
        {/* Include shared UI here e.g. a header or sidebar */}

   
        {children}
      </div>
    )
  }