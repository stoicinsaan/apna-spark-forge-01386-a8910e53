import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Globe, 
  Mail, 
  Zap, 
  Smartphone, 
  Shield, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  Download,
  ArrowRight,
  Loader2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

type AuditStatus = "idle" | "scanning" | "complete";

interface AuditResult {
  category: string;
  score: number;
  status: "good" | "warning" | "error";
  issues: string[];
}

const SiteAuditPage = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [auditStatus, setAuditStatus] = useState<AuditStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [currentScan, setCurrentScan] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const { toast } = useToast();

  const mockResults: AuditResult[] = [
    {
      category: "SEO Performance",
      score: 72,
      status: "warning",
      issues: ["Missing meta descriptions on 3 pages", "No alt text on 12 images", "Duplicate title tags detected"],
    },
    {
      category: "Page Speed",
      score: 58,
      status: "error",
      issues: ["Large image files need compression", "Render-blocking JavaScript", "No browser caching configured"],
    },
    {
      category: "Mobile Friendliness",
      score: 85,
      status: "good",
      issues: ["Tap targets slightly small", "Content wider than screen on 1 page"],
    },
    {
      category: "Security",
      score: 90,
      status: "good",
      issues: ["SSL certificate valid", "No mixed content warnings"],
    },
  ];

  const scanSteps = [
    "Connecting to website...",
    "Analyzing SEO elements...",
    "Testing page speed...",
    "Checking mobile responsiveness...",
    "Scanning security protocols...",
    "Generating report...",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!websiteUrl || !email) {
      toast({
        title: "Missing Information",
        description: "Please enter both website URL and email address.",
        variant: "destructive",
      });
      return;
    }

    setAuditStatus("scanning");
    setProgress(0);

    // Simulate scanning process
    for (let i = 0; i < scanSteps.length; i++) {
      setCurrentScan(scanSteps[i]);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setProgress(((i + 1) / scanSteps.length) * 100);
    }

    setAuditStatus("complete");
  };

  const getStatusIcon = (status: "good" | "warning" | "error") => {
    switch (status) {
      case "good":
        return <CheckCircle2 className="w-6 h-6 text-green-400" />;
      case "warning":
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case "error":
        return <XCircle className="w-6 h-6 text-destructive" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-destructive";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-400";
    if (score >= 60) return "bg-yellow-400";
    return "bg-destructive";
  };

  const overallScore = Math.round(mockResults.reduce((acc, r) => acc + r.score, 0) / mockResults.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Search className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Free Technical Audit</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technical <span className="gradient-text">Site Audit</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive analysis of your website's SEO, speed, mobile-friendliness, 
              and security. Identify issues and opportunities for improvement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {auditStatus === "idle" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-xl mx-auto"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Enter Your Website Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="websiteUrl" className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-primary" />
                          Website URL
                        </Label>
                        <Input
                          id="websiteUrl"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <Button type="submit" variant="glow" size="lg" className="w-full">
                        <Search className="w-5 h-5 mr-2" />
                        Start Free Audit
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { icon: Search, label: "SEO Analysis" },
                    { icon: Zap, label: "Speed Test" },
                    { icon: Smartphone, label: "Mobile Check" },
                    { icon: Shield, label: "Security Scan" },
                  ].map((feature, index) => (
                    <AnimatedSection key={feature.label} delay={0.1 * index}>
                      <div className="flex flex-col items-center p-4 rounded-xl bg-card/30 border border-border/30">
                        <feature.icon className="w-8 h-8 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground text-center">{feature.label}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </motion.div>
            )}

            {auditStatus === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-xl mx-auto text-center"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="py-12">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full border-4 border-primary/20 border-t-primary"
                    />
                    <h3 className="text-2xl font-bold mb-4">Analyzing Your Website</h3>
                    <p className="text-primary mb-6">{currentScan}</p>
                    <div className="relative">
                      <Progress value={progress} className="h-3" />
                      <span className="absolute right-0 -top-6 text-sm text-muted-foreground">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      Scanning: <span className="text-foreground">{websiteUrl}</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {auditStatus === "complete" && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                {/* Overall Score */}
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
                  <CardContent className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Audit Complete!</h3>
                        <p className="text-muted-foreground">
                          We've analyzed <span className="text-primary">{websiteUrl}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="relative w-32 h-32">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke="hsl(0 0% 20%)"
                              strokeWidth="8"
                              fill="none"
                            />
                            <motion.circle
                              cx="64"
                              cy="64"
                              r="56"
                              stroke={overallScore >= 80 ? "hsl(142, 76%, 36%)" : overallScore >= 60 ? "hsl(45, 93%, 47%)" : "hsl(0, 84%, 60%)"}
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: "0 352" }}
                              animate={{ strokeDasharray: `${(overallScore / 100) * 352} 352` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
                              {overallScore}
                            </span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">Overall Score</p>
                          <p className={`text-lg font-semibold ${getScoreColor(overallScore)}`}>
                            {overallScore >= 80 ? "Good" : overallScore >= 60 ? "Needs Work" : "Critical"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Results */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {mockResults.map((result, index) => (
                    <AnimatedSection key={result.category} delay={0.1 * index}>
                      <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              {getStatusIcon(result.status)}
                              <h4 className="text-lg font-semibold">{result.category}</h4>
                            </div>
                            <span className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                              {result.score}
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
                            <motion.div
                              className={`h-full ${getProgressColor(result.score)}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${result.score}%` }}
                              transition={{ duration: 0.8, delay: 0.2 * index }}
                            />
                          </div>
                          <ul className="space-y-2">
                            {result.issues.map((issue, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>

                {/* CTA */}
                <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Get Your Full Detailed Report</h3>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                      Download a comprehensive PDF report with actionable recommendations 
                      and a personalized improvement roadmap.
                    </p>
                    <Button 
                      variant="glow" 
                      size="lg" 
                      onClick={() => setShowContactModal(true)}
                      className="gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download Full Report
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="bg-card border-border/50">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get Your Complete Report</DialogTitle>
            <DialogDescription>
              Our team will send you a detailed PDF report with all findings and recommendations.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <p className="text-sm text-muted-foreground">
              We'll contact you at <span className="text-primary">{email}</span> with your personalized report 
              and expert recommendations to improve your website.
            </p>
            <Button variant="glow" className="w-full" asChild>
              <a href="/#contact" onClick={() => setShowContactModal(false)}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default SiteAuditPage;
