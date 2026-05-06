"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitBranch, 
  ExternalLink, 
  Terminal as TerminalIcon, 
  Play, 
  Code, 
  CheckCircle2, 
  Search,
  X,
  Cpu,
  Globe,
  Database,
  Smartphone
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  featured: boolean;
  type: "web" | "iot" | "ai" | "system";
  testSteps: string[];
  architectureSnippet: string;
}

const projects: Project[] = [
  {
    title: "Smart Campus REST API",
    description: "A high-performance Java RESTful Web Service managing Smart Campus metadata and telemetry.",
    longDescription: "Engineered a robust backend using JAX-RS and Grizzly. This system handles complex campus metadata, user authentication, and real-time telemetry processing for smart buildings.",
    tags: ["Java", "JAX-RS", "Grizzly", "REST"],
    github: "https://github.com/dulnindu123/smart-campus-api",
    featured: true,
    type: "system",
    testSteps: ["Initializing Grizzly Server...", "Verifying JAX-RS Endpoints...", "Testing Database Connection...", "Simulating High-Load Traffic...", "Success: API is Operational."],
    architectureSnippet: "@Path(\"/metadata\")\npublic class MetadataResource {\n  @GET\n  @Produces(MediaType.APPLICATION_JSON)\n  public Response getMetadata() {\n    return Response.ok(metadataService.getAll()).build();\n  }\n}"
  },
  {
    title: "HelaDry IoT Dehydrator",
    description: "Led the hardware-software integration for an IoT-based solar agricultural dehydrator.",
    longDescription: "A sophisticated IoT system that uses real-time sensor data to optimize the drying process of crops, reducing post-harvest loss. Features automated fan control and cloud data logging.",
    tags: ["IoT", "C/C++", "Firebase", "Dart"],
    github: "https://github.com/dulnindu123/SDGP-HelaDry-CS154",
    featured: true,
    type: "iot",
    testSteps: ["Connecting to ESP32...", "Reading DHT22 Sensors...", "Checking Firebase Auth...", "Syncing Solar Data...", "Success: IoT Sync Optimal."],
    architectureSnippet: "void setup() {\n  Serial.begin(115200);\n  connectToWifi();\n  Firebase.begin(DB_URL, DB_SECRET);\n}"
  },
  {
    title: "BodySync AI",
    description: "Engineered a comprehensive health tracking mobile app utilizing Gemini AI analysis.",
    longDescription: "A mobile-first health solution that analyzes user fitness data and provides personalized insights using the Google Gemini AI engine.",
    tags: ["React Native", "AI", "Gemini", "Expo"],
    github: "https://github.com/dulnindu123/BodySyncAI",
    featured: false,
    type: "ai",
    testSteps: ["Initializing Gemini AI...", "Fetching Health Metrics...", "Running Neural Analysis...", "Generating Insights...", "Success: AI Analysis Complete."],
    architectureSnippet: "const generateInsights = async (data) => {\n  const result = await model.generateContent(data);\n  return result.response.text();\n};"
  },
  {
    title: "Task Manager System",
    description: "A multi-stage task manager evolving from CLI to a full Tkinter GUI with JSON storage.",
    longDescription: "Built a persistent task management tool that handles priority sorting, category filtering, and JSON-based local data storage.",
    tags: ["Python", "Tkinter", "JSON"],
    github: "https://github.com/dulnindu123/python-gui-task-manager",
    featured: false,
    type: "system",
    testSteps: ["Loading JSON Database...", "Parsing Task Objects...", "Sorting by Priority...", "Rendering Tkinter UI...", "Success: Tasks Loaded."],
    architectureSnippet: "def save_tasks(self):\n    with open('tasks.json', 'w') as f:\n        json.dump(self.tasks, f, indent=4)"
  },
  {
    title: "Parking Lot Management",
    description: "A comprehensive management system built using pure JavaScript, HTML, and CSS.",
    longDescription: "A logical system designed to manage vehicle entry, slot allocation, and fee calculation in a simulated parking environment.",
    tags: ["JavaScript", "Logic", "UI/UX"],
    github: "https://github.com/dulnindu123/Parking-lot-management-system",
    featured: false,
    type: "web",
    testSteps: ["Calculating Slot Availability...", "Verifying Vehicle Plate...", "Computing Duration Fee...", "Updating UI State...", "Success: Slot Allocated."],
    architectureSnippet: "class ParkingLot {\n  allocateSlot(vehicle) {\n    const slot = this.findFreeSlot();\n    this.occupy(slot, vehicle);\n  }\n}"
  },
  {
    title: "Student Registry CLI",
    description: "A robust CLI application for student registry management with persistent storage.",
    longDescription: "A specialized Python tool for educational administrative tasks, featuring CRUD operations for student records in a terminal environment.",
    tags: ["Python", "CLI", "File I/O"],
    github: "https://github.com/dulnindu123/Python-Student-Registry-cli",
    featured: false,
    type: "system",
    testSteps: ["Scanning CSV Headers...", "Running Data Validation...", "Indexing Student IDs...", "Executing Search Query...", "Success: Records Verified."],
    architectureSnippet: "with open('registry.csv', mode='a', newline='') as file:\n    writer = csv.writer(file)\n    writer.writerow([name, age, grade])"
  },
  {
    title: "Life on Land Awareness",
    description: "A responsive web project dedicated to UN Sustainable Development Goal 15.",
    longDescription: "A multi-page informational site focused on environmental conservation, designed for maximum accessibility and user engagement.",
    tags: ["HTML", "CSS", "UI/UX"],
    github: "https://github.com/dulnindu123/life-on-land-website",
    featured: false,
    type: "web",
    testSteps: ["Auditing Accessibility...", "Testing Responsiveness...", "Optimizing Asset Load...", "Verifying Form Logic...", "Success: Site Verified."],
    architectureSnippet: "<section id='awareness'>\n  <h1>Preserve Our Land</h1>\n  <p>Protecting ecosystems is our duty.</p>\n</section>"
  },
  {
    title: "Legacy Portfolio (v2)",
    description: "A modern, responsive personal portfolio built with HTML5 and Tailwind CSS.",
    longDescription: "The previous iteration of my digital identity, showcasing early expertise in Tailwind CSS and responsive design principles.",
    tags: ["HTML", "Tailwind", "Responsive"],
    github: "https://github.com/dulnindu123/personal-portfolio-website",
    featured: false,
    type: "web",
    testSteps: ["Testing JIT Compiler...", "Checking Utility Classes...", "Verifying Breakpoints...", "Auditing Performance...", "Success: Build Verified."],
    architectureSnippet: "<div class='flex flex-col md:flex-row items-center justify-between'>\n  <nav>...</nav>\n</div>"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [testMode, setTestMode] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const startTest = () => {
    setTestMode(true);
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep(prev => {
        if (selectedProject && prev < selectedProject.testSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 1000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "iot": return <Cpu className="text-accent" />;
      case "web": return <Globe className="text-accent" />;
      case "ai": return <Smartphone className="text-accent" />;
      default: return <Database className="text-accent" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative bg-black/50 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Project <span className="text-accent">Ecosystem</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl group hover:border-accent/50 transition-colors flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  {getIcon(project.type)}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                    <GitBranch size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 bg-white/5 border border-card-border rounded-xl font-bold hover:bg-accent hover:text-white transition-all group/btn flex items-center justify-center gap-2"
              >
                <Search size={18} className="group-hover/btn:scale-110 transition-transform" />
                Launch Explorer
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl bg-card border border-card-border rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => { setSelectedProject(null); setTestMode(false); }}
                className="absolute top-6 right-6 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-accent transition-colors"
              >
                <X size={20} />
              </button>

              {/* Sidebar Info */}
              <div className="md:w-1/3 bg-black/20 p-8 border-b md:border-b-0 md:border-r border-card-border overflow-y-auto">
                <div className="p-4 bg-accent/10 rounded-3xl inline-block mb-6">
                  {getIcon(selectedProject.type)}
                </div>
                <h3 className="text-3xl font-black mb-4 text-primary">{selectedProject.title}</h3>
                <p className="text-secondary leading-relaxed mb-8">
                  {selectedProject.longDescription}
                </p>
                <div className="space-y-4">
                   <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent font-bold hover:underline">
                      <GitBranch size={20} /> View Source Code
                   </a>
                </div>
              </div>

              {/* Main Explorer Tab */}
              <div className="md:w-2/3 p-8 overflow-y-auto bg-black/40">
                <div className="space-y-8">
                   {/* Verification Suite */}
                   <div className="glass p-6 rounded-3xl border border-card-border relative overflow-hidden">
                      <div className="flex items-center justify-between mb-6">
                         <div className="flex items-center gap-3">
                            <TerminalIcon size={20} className="text-accent" />
                            <h4 className="font-bold text-primary">Verification Suite</h4>
                         </div>
                         {!testMode ? (
                           <button onClick={startTest} className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-lg hover:bg-accent-hover transition-all flex items-center gap-2">
                             <Play size={14} /> Run Tests
                           </button>
                         ) : (
                           <div className="text-xs font-mono text-accent animate-pulse">EXECUTING TESTS...</div>
                         )}
                      </div>
                      
                      <div className="bg-black/60 rounded-xl p-6 font-mono text-xs md:text-sm space-y-3 min-h-[200px]">
                         {testMode ? (
                           selectedProject.testSteps.slice(0, activeStep + 1).map((step, i) => (
                             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex items-center gap-3 text-secondary">
                                <CheckCircle2 size={14} className="text-green-500" />
                                <span>{step}</span>
                             </motion.div>
                           ))
                         ) : (
                           <div className="h-full flex items-center justify-center text-secondary/30 italic">
                              Ready to verify project integrity.
                           </div>
                         )}
                      </div>
                   </div>

                   {/* Logic Inspector */}
                   <div className="glass p-6 rounded-3xl border border-card-border">
                      <div className="flex items-center gap-3 mb-6">
                         <Code size={20} className="text-accent" />
                         <h4 className="font-bold text-primary">Logic Inspector</h4>
                      </div>
                      <div className="bg-black/60 rounded-xl p-6 font-mono text-xs md:text-sm overflow-x-auto text-secondary border border-card-border/50">
                         <pre><code>{selectedProject.architectureSnippet}</code></pre>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
