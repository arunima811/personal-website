"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

// Define roles and expertise areas with project details
const roles = [
  { id: "backend", label: "Backend Engineer" },
  { id: "data", label: "Data Engineer" },
  { id: "mle", label: "MLE" },
  { id: "academic", label: "Academician and Researcher" },
]

const expertiseAreas = [
  {
    id: "infra",
    label: "Infrastructure and Platform",
    projects: [
      {
        title: "ElasticSearch Upgrade",
        description: "Led the upgrade of ElasticSearch data-store containing 5+ TB of critical order data.",
        workplace: "Dell-EMC",
      },
      {
        title: "Database Migration to AWS S3",
        description: "Migrated 2.8 PB internal object datastore to AWS S3, saving millions in vendor payments.",
        workplace: "Goldman Sachs",
      },
    ],
  },
  {
    id: "pipeline",
    label: "Data Pipelining and Streaming",
    projects: [
      {
        title: "Market Risk Calculation Pipeline",
        description: "Improved error analysis and resiliency by 30% for data orchestration pipelines.",
        workplace: "Goldman Sachs",
      },
      {
        title: "High Throughput Event Flow",
        description: "Automated high throughput event flow (100K+ events/hour) with pub-sub based applications.",
        workplace: "Dell-EMC",
      },
    ],
  },
  {
    id: "analytics",
    label: "Data Science and Analytics",
    projects: [
      {
        title: "Anomaly Detection Dashboard",
        description: "Developed a realtime anomaly detection dashboard with candlestick visualizations.",
        workplace: "Niyo",
      },
      {
        title: "Developer Progress Analysis Tool",
        description: "Created a tool to analyze developers' progress by analyzing Gitlab commit history.",
        workplace: "Dell-EMC",
      },
    ],
  },
  {
    id: "llm",
    label: "LLMs and Deep Learning",
    projects: [
      {
        title: "LSTM-based RL Model",
        description: "Developed a model to simulate Grid and Place brain cells for navigation in a 2-D environment.",
        workplace: "Research Project",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    projects: [
      {
        title: "Key-Value Store",
        description:
          "File-based, cloud-agnostic, Key-Value store utilizing Map-Reduce for efficient search and storage.",
        workplace: "Personal Project",
      },
      {
        title: "Budgeting App Performance Improvement",
        description: "Improved user experience and performance by 5% by decoupling heavy calculations with Kafka.",
        workplace: "Goldman Sachs",
      },
    ],
  },
]

// Define connections between roles and expertise areas
const connections = [
  { from: "backend", to: "infra" },
  { from: "data", to: "infra" },
  { from: "data", to: "pipeline" },
  { from: "mle", to: "pipeline" },
  { from: "mle", to: "analytics" },
  { from: "academic", to: "analytics" },
  { from: "academic", to: "llm" },
  { from: "backend", to: "projects" },
  { from: "data", to: "projects" },
  { from: "mle", to: "projects" },
  { from: "academic", to: "projects" },
]

export function SkillsGraph() {
  const [activeRole, setActiveRole] = useState<string | null>(null)
  const [activeArea, setActiveArea] = useState<string | null>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Get connected expertise areas for a role
  const getConnectedAreas = (roleId: string) => {
    return connections.filter((conn) => conn.from === roleId).map((conn) => conn.to)
  }

  // Check if an expertise area is connected to the active role
  const isConnected = (areaId: string) => {
    if (activeArea === areaId) return true
    if (!activeRole) return false
    return getConnectedAreas(activeRole).includes(areaId)
  }

  // Check if a connection should be visible
  const isConnectionVisible = (fromId: string, toId: string) => {
    return activeRole === fromId || activeArea === toId
  }

  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="min-w-[768px] max-w-[1200px] mx-auto">
        {/* Column Headers */}
        <div className="grid grid-cols-2 mb-6 px-4">
          <div className="text-center font-bold text-lg">I am:</div>
          <div className="text-center font-bold text-lg">I have worked on:</div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-8 relative">
          {/* Left Column - Roles */}
          <div className="flex flex-col space-y-6 items-center">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`w-64 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer
                  ${
                    activeRole === role.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg transform scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700"
                  }`}
                onMouseEnter={() => setActiveRole(role.id)}
                onMouseLeave={() => setActiveRole(null)}
              >
                <h3 className="text-center font-medium">{role.label}</h3>
              </div>
            ))}
          </div>

          {/* Right Column - Expertise Areas */}
          <div className="flex flex-col space-y-6 items-center">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className={`w-full max-w-md p-4 rounded-lg border-2 transition-all duration-300
                  ${
                    isConnected(area.id)
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30 shadow-lg"
                      : (activeRole || activeArea)
                        ? "border-gray-200 dark:border-gray-700 opacity-50"
                        : "border-gray-200 dark:border-gray-700"
                  }`}
                onMouseEnter={() => setActiveArea(area.id)}
                onMouseLeave={() => setActiveArea(null)}
              >
                <h3 className="font-medium mb-2">{area.label}</h3>

                {/* Only show projects when this area is connected to the active role or is the active area */}
                {isConnected(area.id) && (
                  <div className="mt-3 space-y-3">
                    <h4 className="text-sm font-medium text-purple-600 dark:text-purple-400">Related Projects:</h4>
                    {area.projects.map((project, idx) => (
                      <div key={idx} className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                        <div className="flex justify-between items-start">
                          <h5 className="font-medium text-sm">{project.title}</h5>
                          <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                            {project.workplace}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{ position: "absolute", zIndex: -1 }}>
              {connections.map((conn, idx) => {
                const fromRole = roles.findIndex((r) => r.id === conn.from)
                const toArea = expertiseAreas.findIndex((a) => a.id === conn.to)

                // Calculate positions (approximate)
                const fromY = 80 + fromRole * 104 // 80px initial offset + 104px per item (including gap)
                const toY = 80 + toArea * 104

                const isActive = activeRole === conn.from

                return (
                  <line
                    key={idx}
                    x1="32%" // End of left column
                    y1={fromY}
                    x2="68%" // Start of right column
                    y2={toY}
                    stroke={isConnectionVisible(conn.from, conn.to) ? "#8B5CF6" : "transparent"}
                    strokeWidth={isConnectionVisible(conn.from, conn.to) ? 2 : 0}
                    strokeDasharray="none"
                    className="transition-all duration-300"
                  />
                )
              })}
            </svg>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          Hover over a role or expertise area to see connections and related projects
        </div>
      </div>
    </div>
  )
}
