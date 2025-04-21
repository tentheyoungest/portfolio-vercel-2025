"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code, GraduationCap, Mail, MapPin, Phone, Award, ExternalLink, Linkedin } from "lucide-react"
import { FormEvent, useState } from "react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || "", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Jessica Bonzo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Jessica Bonzo</h1>
              <p className="text-xl text-muted-foreground">Front-end Developer specializing in Webflow and WordPress</p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <Link href="mailto:jessicabonzo.dev@gmail.com" className="hover:text-primary">
                    jessicabonzo.dev@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <Link href="https://linkedin.com/in/jessica-bonzo" target="_blank" className="hover:text-primary">
                    linkedin.com/in/jessica-bonzo
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:+639919383300" className="hover:text-primary">
                    +639919383300
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Philippines</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="/assets/files/CV - Dev Engineer - Jessica Bonzo.pdf" target="_blank">View Resume</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/assets/images/Jessica Bonzo.jpeg?height=256&width=256"
                  alt="Jessica Bonzo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* EngineRoom Applications */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold"><Link href="https://www.engineroom.com.au/" target="_blank">EngineRoom Applications</Link></h3>
                    <p className="text-muted-foreground">Developer: Webflow (Platform)</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline" className="mb-1">
                      Jan 2025 – Apr 2025
                    </Badge>
                    <p className="text-sm text-muted-foreground">South Yarra, Victoria 3141, AU (Remote)</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built dynamic templates for user-inputted content-heavy websites</li>
                  <li>
                    Cross-Functional Collaboration: Actively engaged in huddles and collaborated with UI/UX Designers,
                    Project Managers, and the SEO Team across Australia, New Zealand, and the Philippines.
                  </li>
                  <li>
                    Knowledge Sharing: Contributed to internal knowledge articles and shared best practices and
                    efficient development techniques that are being implemented on the on-going improvements in
                    operations. e.g project management process and dev reviews.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 500 Designs LLC */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold"><Link href="https://500designs.com/" target="_blank">500 Designs LLC</Link></h3>
                    <p className="text-muted-foreground">
                      Developer: WordPress and Webflow (Platform; Certified Enterprise Partner)
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline" className="mb-1">
                      Mar 2021 – Jan 2025
                    </Badge>
                    <p className="text-sm text-muted-foreground">Irvine, California, US (Remote)</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Developed and optimized frontend design-intensive websites for clients and provided post-development
                    maintenance (SEO and analytics)
                  </li>
                  <li>
                    Cross-Functional Collaboration: Actively engaged in huddles, project kick-offs, and design and
                    development reviews to align project goals with Tech and Design Project Managers, UI/UX and Graphic
                    Designers, QA Analysts, and the SEO Team. Worked closely with colleagues across the US, Latin
                    America, and Asia.
                  </li>
                  <li>
                    Webflow Project Lead (Pioneer Dev): Introduced and standardized Webflow projects within the team.
                    Established best practices for scalable website development.
                  </li>
                  <li>
                    Knowledge Sharing: Lead and Contributed to internal knowledge articles and presentations. Promoted
                    best practices and efficient development techniques.
                  </li>
                  <li>
                    Team MVP 2023 Award: Company-wide recognition for exceptional contributions in leadership,
                    innovation, and client satisfaction.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bliimo Technologies Inc */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold"><Link href="https://www.linkedin.com/company/bliimo/" target="_blank">Bliimo Technologies Inc</Link></h3>
                    <p className="text-muted-foreground">Front-End Web Developer</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline" className="mb-1">
                      Jul 2019 – Feb 2021
                    </Badge>
                    <p className="text-sm text-muted-foreground">Ortigas Center, Pasig, Metro Manila, PH (On-site)</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>WordPress Project Lead (Pioneer Dev), ReactJS (web-based) in-house projects</li>
                  <li>
                    Cross-Functional Collaboration: Actively engages in daily stand-up meetings, code reviews, sprint
                    planning, and retros to ensure continuous improvement and alignment with team goals. Worked closely
                    with a team locally from the PH. Practiced Agile methodologies to enhance team collaboration,
                    productivity, and project delivery.
                  </li>
                  <li>Team Rookie of the Year 2019</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Code className="h-6 w-6" />
            Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillumina */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/assets/images/portfolio/pillumina.jpg" alt="Pillumina" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Pillumina</h3>
                    <p className="text-sm text-muted-foreground">Solo Developer, 2024</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.pillumina.com/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit Pillumina</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Delta 360 */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/assets/images/portfolio/delta.png" alt="Delta 360" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Delta 360</h3>
                    <p className="text-sm text-muted-foreground">Solo Developer, 2024</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.delta360.energy/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit Delta 360</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* BarTrack */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/assets/images/portfolio/bartrack.png" alt="BarTrack" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">BarTrack</h3>
                    <p className="text-sm text-muted-foreground">Solo/Lead Developer, 2023</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.bartrack.beer/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit BarTrack</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Web3Auth */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/assets/images/portfolio/web3auth.png" alt="Web3Auth" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Web3Auth</h3>
                    <p className="text-sm text-muted-foreground">Solo Developer, 2021-2023</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://web3auth.io/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit Web3Auth</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Refine Recovery */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/assets/images/portfolio/refine-recovery.png"
                  alt="Refine Recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Refine Recovery</h3>
                    <p className="text-sm text-muted-foreground">Lead Developer, 2024</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://www.linkedin.com/posts/activity-7252873702327926785-rs-O" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit Refine Recovery</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* KBS */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/assets/images/portfolio/KBS.jpeg" alt="KBS" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">KBS</h3>
                    <p className="text-sm text-muted-foreground">Lead Developer, 2024</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="https://kbs.com/" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit KBS</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>        {/* Skills Section */}
        <section id="skills" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design & Management</TabsTrigger>
              <TabsTrigger value="hosting">Hosting & SEO</TabsTrigger>
            </TabsList>
            <TabsContent value="development" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Development and Debugging</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>HTML</Badge>
                        <Badge>Bootstrap CSS</Badge>
                        <Badge>JavaScript</Badge>
                        <Badge>jQuery</Badge>
                        <Badge>Flexbox</Badge>
                        <Badge>Animations</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Currently Learning</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Tailwind</Badge>
                        <Badge variant="outline">Styled Components</Badge>
                        <Badge variant="outline">Playwright</Badge>
                        <Badge variant="outline">Jest</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Other Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Basic SQL</Badge>
                        <Badge>Git</Badge>
                        <Badge>NPM</Badge>
                        <Badge>Yarn</Badge>
                        <Badge>Webpack</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Testing and Reviews</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>BugHerd</Badge>
                        <Badge>Chrome Dev Tools</Badge>
                        <Badge>Device Simulators</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Website Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-primary">WordPress CMS</Badge>
                        <Badge className="bg-primary">Webflow</Badge>
                        <Badge>Finsweet/Client-First Standard</Badge>
                        <Badge>Relume</Badge>
                        <Badge>CMS</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="design" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Design and Tasks Project Management</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Figma</Badge>
                    <Badge>UI/UX Design Systems</Badge>
                    <Badge>Wireframes</Badge>
                    <Badge>Layouts</Badge>
                    <Badge>Clickup</Badge>
                    <Badge>Trello</Badge>
                    <Badge>Monday.com</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="hosting" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Hosting, SEO, Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>WPEngine</Badge>
                    <Badge>Hubspot Forms</Badge>
                    <Badge>Zapier Integration</Badge>
                    <Badge>Google Analytics (GA)</Badge>
                    <Badge>Google Tag Manager (GTM)</Badge>
                    <Badge>accessiBe</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">University of the Philippines</h3>
                    <p className="text-muted-foreground">Master of Technology Management (MTM)</p>
                    <p className="text-sm mt-2">
                      Current Coursework: Management of R&D; Tech Acquisition and Assimilation; Tech-Based
                      Entrepreneurship
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline">2024 - 2027 (Expected)</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Diliman, Quezon City, Metro Manila, PH</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Pangasinan State University</h3>
                    <p className="text-muted-foreground">Bachelor of Science in Information Technology (BSIT)</p>
                    <p className="text-sm mt-2">Dean's Lister AY 2017-2018; App System Dev - Thesis Leader</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline">2014 - 2019</Badge>
                    <p className="text-sm text-muted-foreground mt-1">Lingayen, Pangasinan, PH</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Section */}
        <section id="additional" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Award className="h-6 w-6" />
            Certifications & Additional Activities
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Tech Certifications & Conferences</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Singapore Tech Week 2024</h4>
                    <p className="text-sm text-muted-foreground">
                      Oct 9-10, 2024, Marina Bay Sands Expo and Convention Centre, Singapore
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                      <li>Personal initiative funded by the company to attend tech workshops.</li>
                      <li>
                        Proactively networked with global tech professionals then presented insights from the event to
                        our dev team.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Alumna Guest Speaker, IT Program Event, Pangasinan State University</h4>
                    <p className="text-sm text-muted-foreground">Oct 2, 2024</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                      <li>
                        Shared my career journey in tech and offered practical advice to students on navigating the tech
                        industry.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary">Webflow Enterprise Partner</Badge>
                  <Badge>Responsive Web Design (freeCodeCamp)</Badge>
                  <Badge>
                    National Certificate III in Visual Graphics Design (TESDA, Credential ID ULI: BJB-98-531-01055-001)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Volunteering</h3>
                <p className="text-muted-foreground">Stray Animal Feeding (Independent)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <Link href="mailto:jessicabonzo.dev@gmail.com" className="hover:text-primary">
                      jessicabonzo.dev@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <Link href="https://linkedin.com/in/jessica-bonzo" target="_blank" className="hover:text-primary">
                      linkedin.com/in/jessica-bonzo
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <Link href="tel:+639919383300" className="hover:text-primary">
                      +639919383300
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Philippines</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                  )}
                  
                  {submitSuccess ? (
                    <div className="p-3 bg-green-100 text-green-700 rounded-md">
                      Thank you for your message! I'll get back to you soon.
                    </div>
                  ) : (
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Jessica Bonzo. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:jessicabonzo.dev@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://linkedin.com/in/jessica-bonzo"
              target="_blank"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
