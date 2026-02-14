export const dynamic = 'force-dynamic'

import { createClient } from '@supabase/supabase-js'

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { id } = params

  const { data } = await supabase
    .from('responses')
    .select('*')
    .eq('id', id)
    .single()

  if (!data) {
    return (
      <div style={{ padding: "50px" }}>
        <h2>Invalid response</h2>
      </div>
    )
  }

  // ✅ Proper status logic
  const status = data.status?.toLowerCase()

  let statusText = ""
  let statusColor = "orange"

  if (status === "complete") {
    statusText = "COMPLETED"
    statusColor = "green"
  } else if (status === "terminate") {
    statusText = "TERMINATED"
    statusColor = "red"
  } else if (status === "quotafull") {
    statusText = "QUOTA FULL"
    statusColor = "red"
  } else {
    statusText = status?.toUpperCase() || "UNKNOWN"
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Thank you !
      </h1>

      <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
        Your survey has been{" "}
        <span style={{ color: statusColor, fontWeight: "bold" }}>
          {statusText}
        </span>
      </h2>

      <table
        style={{
          borderCollapse: "collapse",
          width: "650px",
          textAlign: "center",
          fontSize: "16px",
        }}
        border={1}
      >
        <thead>
          <tr>
            <th style={{ padding: "12px" }}>UID</th>
            <th style={{ padding: "12px" }}>PID</th>
            <th style={{ padding: "12px" }}>STATUS</th>
            <th style={{ padding: "12px" }}>IP Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "12px" }}>{data.uid}</td>
            <td style={{ padding: "12px" }}>{data.project_id}</td>
            <td style={{ padding: "12px" }}>{statusText}</td>
            <td style={{ padding: "12px" }}>{data.ip}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
