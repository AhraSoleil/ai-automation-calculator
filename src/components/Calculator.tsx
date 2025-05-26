import React, { useState } from 'react';
import './Calculator.css';

interface Workflow {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  tasks: string[];
  defaultTimeReduction: number;
  tools: string[];
}

const automationWorkflows: Workflow[] = [
  {
    id: 'lead-processing',
    name: 'Lead Processing & CRM Update',
    icon: '🎯',
    category: 'Sales',
    description: 'Automatically process new leads from multiple sources and update your CRM',
    tasks: [
      'Form submission processing',
      'Lead enrichment with company data',
      'CRM record creation/update',
      'Sales team notification',
      'Follow-up email scheduling'
    ],
    defaultTimeReduction: 85,
    tools: ['n8n', 'HubSpot/Salesforce', 'Clearbit', 'Slack', 'Gmail']
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing & Accounting',
    icon: '📄',
    category: 'Finance',
    description: 'Automate invoice processing, approval, and accounting system updates',
    tasks: [
      'Invoice data extraction',
      'Validation and categorization',
      'Approval workflow',
      'Accounting system update',
      'Payment scheduling'
    ],
    defaultTimeReduction: 75,
    tools: ['n8n', 'Xero/QuickBooks', 'OCR API', 'Google Drive', 'Slack']
  },
  {
    id: 'social-media',
    name: 'Social Media Management',
    icon: '📱',
    category: 'Marketing',
    description: 'Automate content publishing and engagement across social platforms',
    tasks: [
      'Content scheduling',
      'Cross-platform posting',
      'Engagement monitoring',
      'Analytics collection',
      'Report generation'
    ],
    defaultTimeReduction: 70,
    tools: ['n8n', 'Buffer/Hootsuite', 'Twitter API', 'LinkedIn API', 'Google Sheets']
  },
  {
    id: 'customer-support',
    name: 'Customer Support Automation',
    icon: '💬',
    category: 'Support',
    description: 'Streamline customer support with automated ticket management',
    tasks: [
      'Ticket categorization',
      'Auto-response generation',
      'Team assignment',
      'SLA monitoring',
      'Customer satisfaction surveys'
    ],
    defaultTimeReduction: 65,
    tools: ['n8n', 'Zendesk/Intercom', 'Slack', 'Email', 'Survey tools']
  },
  {
    id: 'data-backup',
    name: 'Automated Data Backup',
    icon: '💾',
    category: 'IT',
    description: 'Schedule and manage automated backups across systems',
    tasks: [
      'File system backup',
      'Database backup',
      'Cloud storage sync',
      'Backup verification',
      'Status reporting'
    ],
    defaultTimeReduction: 90,
    tools: ['n8n', 'AWS S3', 'Google Cloud', 'FTP', 'Slack']
  },
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding',
    icon: '👥',
    category: 'HR',
    description: 'Automate the employee onboarding process end-to-end',
    tasks: [
      'Account creation',
      'Tool access setup',
      'Document generation',
      'Training scheduling',
      'Team notifications'
    ],
    defaultTimeReduction: 80,
    tools: ['n8n', 'Google Workspace', 'Slack', 'HR System', 'DocuSign']
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    icon: '📦',
    category: 'Operations',
    description: 'Automate inventory tracking and reordering processes',
    tasks: [
      'Stock level monitoring',
      'Reorder trigger',
      'Supplier communication',
      'Receipt processing',
      'Report generation'
    ],
    defaultTimeReduction: 75,
    tools: ['n8n', 'ERP System', 'Supplier APIs', 'Email', 'Slack']
  },
  {
    id: 'custom',
    name: 'Custom Workflow',
    icon: '✨',
    category: 'Custom',
    description: 'Design a custom automation workflow for your specific needs',
    tasks: [
      'Process analysis',
      'Workflow design',
      'Integration setup',
      'Testing and validation',
      'Deployment and monitoring'
    ],
    defaultTimeReduction: 70,
    tools: ['n8n', 'Custom integrations']
  }
];

const categories = Array.from(new Set(automationWorkflows.map(w => w.category)));

const steps = [
  { id: 1, title: 'Select Workflow' },
  { id: 2, title: 'Current Details' },
  { id: 3, title: 'Results' }
];

const Calculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    employees: 3,
    hoursPerWeek: 5,
    hourlyRate: 50,
  });

  const calculateAutomationSetup = () => {
    // Calculate implementation cost based on workflow complexity
    const baseImplementationCost = 2000;
    const taskComplexityFactor = selectedWorkflow ? selectedWorkflow.tasks.length * 200 : 0;
    const implementationCost = baseImplementationCost + taskComplexityFactor;

    // Calculate monthly cost based on volume and integrations
    const baseMonthlyCost = 200;
    const volumeFactor = formData.employees * formData.hoursPerWeek * 2;
    const integrationFactor = selectedWorkflow ? selectedWorkflow.tools.length * 20 : 0;
    const monthlyCost = baseMonthlyCost + volumeFactor + integrationFactor;

    // Get time reduction from workflow
    const timeReduction = selectedWorkflow ? selectedWorkflow.defaultTimeReduction : 70;

    // Confidence level based on workflow maturity
    const confidenceLevel = 90; // High confidence as these are proven workflows

    return {
      implementationCost,
      monthlyCost,
      timeReduction,
      confidenceLevel
    };
  };

  const calculateSavings = () => {
    const setup = calculateAutomationSetup();
    const annualHours = formData.employees * formData.hoursPerWeek * 52;
    const currentAnnualCost = annualHours * formData.hourlyRate;
    const timeReductionFactor = setup.timeReduction / 100;
    const confidenceFactor = setup.confidenceLevel / 100;
    
    const annualSavings = currentAnnualCost * timeReductionFactor * confidenceFactor;
    const annualCost = setup.monthlyCost * 12 + setup.implementationCost;
    const netSavings = annualSavings - annualCost;
    const roi = (netSavings / annualCost) * 100;
    const paybackMonths = (annualCost / (annualSavings / 12));
    
    return {
      timeSaved: annualHours * timeReductionFactor,
      annualSavings,
      netSavings,
      roi,
      paybackMonths,
      implementationCost: setup.implementationCost,
      monthlyCost: setup.monthlyCost,
      timeReduction: setup.timeReduction,
      confidenceLevel: setup.confidenceLevel
    };
  };

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderWorkflowSelection = () => {
    const filteredWorkflows = selectedCategory 
      ? automationWorkflows.filter(w => w.category === selectedCategory)
      : automationWorkflows;

    return (
      <div className="workflow-selection">
        <div className="category-filter">
          <button 
            className={`category-button ${!selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="workflow-grid">
          {filteredWorkflows.map((workflow) => (
            <div
              key={workflow.id}
              className={`workflow-card ${selectedWorkflow?.id === workflow.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedWorkflow(workflow);
                handleNext();
              }}
            >
              <div className="workflow-header">
                <span className="workflow-icon">{workflow.icon}</span>
                <span className="workflow-category">{workflow.category}</span>
              </div>
              <h3 className="workflow-name">{workflow.name}</h3>
              <p className="workflow-description">{workflow.description}</p>
              <div className="workflow-details">
                <div className="workflow-tasks">
                  <h4>Automated Tasks:</h4>
                  <ul>
                    {workflow.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="workflow-tools">
                  <h4>Tools Used:</h4>
                  <div className="tool-tags">
                    {workflow.tools.map((tool, index) => (
                      <span key={index} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return renderWorkflowSelection();

      case 2:
        return (
          <div className="calculator-form">
            <div className="selected-workflow-summary">
              <div className="summary-header">
                <span className="workflow-icon">{selectedWorkflow?.icon}</span>
                <div className="summary-titles">
                  <h3>{selectedWorkflow?.name}</h3>
                  <span className="workflow-category">{selectedWorkflow?.category}</span>
                </div>
              </div>
              <p className="workflow-description">{selectedWorkflow?.description}</p>
              <div className="tasks-summary">
                <h4>Tasks to be Automated:</h4>
                <ul>
                  {selectedWorkflow?.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="form-divider">
              <span>Current Process Details</span>
            </div>

            <div className="form-group">
              <label>Number of Employees Involved</label>
              <input
                type="number"
                value={formData.employees}
                onChange={(e) => setFormData(prev => ({ ...prev, employees: Number(e.target.value) }))}
                min="1"
              />
              <span className="input-help">How many people currently perform these tasks?</span>
            </div>

            <div className="form-group">
              <label>Hours Spent per Week (per employee)</label>
              <input
                type="number"
                value={formData.hoursPerWeek}
                onChange={(e) => setFormData(prev => ({ ...prev, hoursPerWeek: Number(e.target.value) }))}
                min="0"
                step="0.5"
              />
              <span className="input-help">Average time each employee spends on these tasks</span>
            </div>

            <div className="form-group">
              <label>Hourly Rate (€)</label>
              <input
                type="number"
                value={formData.hourlyRate}
                onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: Number(e.target.value) }))}
                min="0"
              />
              <span className="input-help">Average hourly cost per employee</span>
            </div>
          </div>
        );

      case 3:
        const results = calculateSavings();
        return (
          <div className="results-dashboard">
            <div className="results-grid">
              <div className="result-card highlight">
                <h4>Annual Net Savings</h4>
                <p className="main-result">€{Math.round(results.netSavings).toLocaleString()}</p>
                <span className="result-detail">After all costs</span>
              </div>
              <div className="result-card">
                <h4>Time Saved Annually</h4>
                <p>{Math.round(results.timeSaved).toLocaleString()} hours</p>
                <span className="result-detail">{results.timeReduction}% reduction in time</span>
              </div>
              <div className="result-card">
                <h4>Return on Investment</h4>
                <p>{Math.round(results.roi)}%</p>
                <span className="result-detail">Payback in {Math.round(results.paybackMonths)} months</span>
              </div>
              <div className="result-card">
                <h4>Confidence Level</h4>
                <p>{results.confidenceLevel}%</p>
                <span className="result-detail">Based on similar implementations</span>
              </div>
            </div>

            <div className="cost-breakdown">
              <h4>Cost Breakdown</h4>
              <div className="cost-items">
                <div className="cost-item">
                  <span>One-time Implementation</span>
                  <span>€{Math.round(results.implementationCost).toLocaleString()}</span>
                </div>
                <div className="cost-item">
                  <span>Monthly Subscription</span>
                  <span>€{Math.round(results.monthlyCost).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="next-steps">
              <button className="cta-button primary">Book Free Strategy Call</button>
              <button className="cta-button secondary">Download Full Report</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <div className="calculator-header">
          <h2>Calculate Your AI Automation Savings</h2>
          <div className="progress-bar">
            {steps.map((s) => (
              <div
                key={s.id}
                className={`progress-step ${step >= s.id ? 'active' : ''} ${step === s.id ? 'current' : ''}`}
                onClick={() => step > s.id && setStep(s.id)}
              >
                <div className="step-number">{s.id}</div>
                <div className="step-title">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="calculator-content">
          {renderStepContent()}
        </div>

        <div className="calculator-navigation">
          {step > 1 && (
            <button className="nav-button secondary" onClick={handleBack}>
              Back
            </button>
          )}
          {step < steps.length && (
            <button className="nav-button primary" onClick={handleNext}>
              {step === steps.length - 1 ? 'Calculate' : 'Next'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator; 