import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, DollarSign, Target, BarChart3, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const ROICalculatorPage = () => {
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [conversionRate, setConversionRate] = useState<number>(3);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(5000);
  const [closeRate, setCloseRate] = useState<number>(25);

  const results = useMemo(() => {
    const monthlyLeads = (adSpend / 100) * conversionRate;
    const closedDeals = (monthlyLeads * closeRate) / 100;
    const totalRevenue = closedDeals * avgOrderValue;
    const netProfit = totalRevenue - adSpend;
    const roas = adSpend > 0 ? totalRevenue / adSpend : 0;
    
    return {
      monthlyLeads: Math.round(monthlyLeads),
      closedDeals: Math.round(closedDeals),
      totalRevenue: Math.round(totalRevenue),
      netProfit: Math.round(netProfit),
      roas: roas.toFixed(2),
    };
  }, [adSpend, conversionRate, avgOrderValue, closeRate]);

  const chartData = [
    { name: "Ad Spend", value: adSpend, color: "hsl(199, 100%, 50%)" },
    { name: "Revenue", value: results.totalRevenue, color: "hsl(180, 100%, 50%)" },
    { name: "Net Profit", value: Math.max(0, results.netProfit), color: "hsl(142, 76%, 36%)" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Free ROI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Calculate Your <span className="gradient-text">Marketing ROI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your potential returns with our interactive ROI calculator. 
              Make data-driven decisions for your advertising budget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Input Section */}
            <AnimatedSection delay={0.1}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Target className="w-6 h-6 text-primary" />
                    Enter Your Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="adSpend" className="text-base flex items-center justify-between">
                      <span>Monthly Ad Spend</span>
                      <span className="text-primary font-semibold">₹{adSpend.toLocaleString()}</span>
                    </Label>
                    <Input
                      id="adSpend"
                      type="range"
                      min="10000"
                      max="500000"
                      step="5000"
                      value={adSpend}
                      onChange={(e) => setAdSpend(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹10K</span>
                      <span>₹5L</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="conversionRate" className="text-base flex items-center justify-between">
                      <span>Expected Conversion Rate</span>
                      <span className="text-primary font-semibold">{conversionRate}%</span>
                    </Label>
                    <Input
                      id="conversionRate"
                      type="range"
                      min="0.5"
                      max="15"
                      step="0.5"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0.5%</span>
                      <span>15%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="avgOrderValue" className="text-base flex items-center justify-between">
                      <span>Average Order Value</span>
                      <span className="text-primary font-semibold">₹{avgOrderValue.toLocaleString()}</span>
                    </Label>
                    <Input
                      id="avgOrderValue"
                      type="range"
                      min="500"
                      max="100000"
                      step="500"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹500</span>
                      <span>₹1L</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="closeRate" className="text-base flex items-center justify-between">
                      <span>Lead Close Rate</span>
                      <span className="text-primary font-semibold">{closeRate}%</span>
                    </Label>
                    <Input
                      id="closeRate"
                      type="range"
                      min="5"
                      max="80"
                      step="5"
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>80%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Results Section */}
            <AnimatedSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                    Your Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                      <p className="text-2xl font-bold gradient-text">₹{results.totalRevenue.toLocaleString()}</p>
                    </motion.div>
                    <motion.div 
                      className="p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm text-muted-foreground mb-1">ROAS</p>
                      <p className="text-2xl font-bold text-secondary">{results.roas}x</p>
                    </motion.div>
                    <motion.div 
                      className={`p-4 rounded-xl border ${results.netProfit >= 0 ? 'bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20' : 'bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm text-muted-foreground mb-1">Net Profit</p>
                      <p className={`text-2xl font-bold ${results.netProfit >= 0 ? 'text-green-400' : 'text-destructive'}`}>
                        ₹{results.netProfit.toLocaleString()}
                      </p>
                    </motion.div>
                    <motion.div 
                      className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm text-muted-foreground mb-1">Monthly Leads</p>
                      <p className="text-2xl font-bold text-primary">{results.monthlyLeads}</p>
                    </motion.div>
                  </div>

                  {/* Chart */}
                  <div className="h-64 mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} barSize={60}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(0 0% 20%)" />
                        <XAxis dataKey="name" stroke="hsl(0 0% 60%)" fontSize={12} />
                        <YAxis stroke="hsl(0 0% 60%)" fontSize={12} tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(0 0% 4%)', 
                            border: '1px solid hsl(0 0% 20%)',
                            borderRadius: '8px'
                          }}
                          formatter={(value: number) => [`₹${value.toLocaleString()}`, '']}
                        />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* CTA Section */}
          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Achieve These Results?</h3>
                <p className="text-muted-foreground mb-6">
                  Let our experts help you optimize your campaigns and maximize your ROI.
                </p>
                <Button variant="glow" size="lg" asChild>
                  <a href="/#contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ROICalculatorPage;
