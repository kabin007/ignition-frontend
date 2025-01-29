import React from "react";
import {
  DollarSign,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

const FinancialPlanning = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* Main Financial Content */}
      <div className="lg:col-span-2 space-y-6 mt-10">
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Total Cost Breakdown</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                  $54,000/year
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {[
                { category: "Tuition Fees", amount: 35000, percentage: 65 },
                { category: "Living Expenses", amount: 12000, percentage: 22 },
                { category: "Health Insurance", amount: 3000, percentage: 6 },
                { category: "Travel & Visa", amount: 4000, percentage: 7 },
              ].map((item) => (
                <div
                  key={item.category}
                  className="space-y-2 mb-4 hover:bg-gray-50 p-3 rounded-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span className="text-gray-800 font-medium">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-gray-700 font-semibold">
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    {item.percentage}% of total expenses
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Funding Sources */}
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Funding Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  source: "Education Loan",
                  amount: 30000,
                  status: "Processing",
                  provider: "International Student Bank",
                  interest: "6.5%",
                },
                {
                  source: "Personal Savings",
                  amount: 15000,
                  status: "Available",
                  provider: "Self-funded",
                  interest: "N/A",
                },
                {
                  source: "Merit Scholarship",
                  amount: 10000,
                  status: "Pending",
                  provider: "University Grant",
                  interest: "N/A",
                },
              ].map((fund) => (
                <div
                  key={fund.source}
                  className="p-4 border rounded-lg pt-9 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-gray-800 font-semibold">
                        {fund.source}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Provider: {fund.provider}
                      </p>
                      {fund.interest !== "N/A" && (
                        <p className="text-sm text-gray-500">
                          Interest Rate: {fund.interest}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-green-600 font-bold">
                        ${fund.amount.toLocaleString()}
                      </p>
                      <span
                        className={`inline-block mt-1 px-2 py-0.5 rounded text-xs ${
                          fund.status === "Available"
                            ? "bg-green-100 text-green-600"
                            : fund.status === "Processing"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {fund.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sidebar Content */}
      <div className="space-y-6 mt-10">
        {/* Financial Status */}
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Financial Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Funds Secured</span>
                  <span className="text-green-600 font-bold">83%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: "83%" }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">$45,000 of $54,000</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
                  <p className="text-gray-500 text-sm">Monthly Budget</p>
                  <p className="text-gray-800 text-lg font-bold mt-1">$1,500</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
                  <p className="text-gray-500 text-sm">Emergency Fund</p>
                  <p className="text-gray-800 text-lg font-bold mt-1">$5,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Payments */}
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Tuition Deposit", amount: 5000, due: "15 days" },
                { title: "Visa Fee", amount: 160, due: "30 days" },
                { title: "Insurance", amount: 800, due: "45 days" },
              ].map((payment) => (
                <div
                  key={payment.title}
                  className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-gray-800">{payment.title}</p>
                      <p className="text-sm text-gray-500">Due in {payment.due}</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">
                    ${payment.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Financial Tips */}
        <motion.div variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Financial Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { tip: "Apply for work-study programs", impact: "Extra $800/month" },
                { tip: "Open local bank account", impact: "Save on conversion fees" },
                { tip: "Track daily expenses", impact: "Better budgeting" },
              ].map((item) => (
                <div key={item.tip} className="flex gap-2 items-start hover:bg-gray-50 p-2 rounded-lg transition">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-gray-800 font-semibold">{item.tip}</p>
                    <p className="text-sm text-gray-500">{item.impact}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialPlanning;
