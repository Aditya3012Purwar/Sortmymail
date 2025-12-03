// ==================== //
// SortMyMail - Complete & Working
// ==================== //

/*
 * WHERE TO FIND EVERYTHING:
 * 
 * 1. HORIZONTAL/QUEUE VIEW:
 *    - Click the LIST ICON (three horizontal lines) in the top-right filter bar
 *    - Toggle between Bucket View (grid icon) and Queue View (list icon)
 * 
 * 2. LOGOUT:
 *    - Click your USER AVATAR at the bottom of the sidebar (shows "David Jones")
 *    - Select "Logout" from the dropdown menu
 * 
 * 3. DARK MODE:
 *    - Click your USER AVATAR at the bottom of the sidebar
 *    - Select "Dark Mode" from the dropdown menu
 * 
 * 4. CALENDAR:
 *    - Click "Calendar" in the sidebar navigation (between Drafts and Custom Folders)
 *    - If not visible, it will be added automatically when app loads
 * 
 * 5. COMPOSE EMAIL:
 *    - Click the "Compose" button in the top-right corner
 *    - Or click "Write custom reply" from any email thread
 */

// ==================== //
// Email Data
// ==================== //

const emailData = {
   urgent: [
       {
           id: 1,
           sender: "Max Mueller",
           email: "max.mueller@client.com",
           time: "10:30 AM",
           subject: "Invoice #2024-11 - Payment Overdue",
           preview: "The invoice from October 15th is still outstanding. Please transfer payment by tomorrow to avoid late fees.",
           badges: [
               { text: "Due today", type: "due" },
               { text: "Action: Pay", type: "action" }
           ],
           summary: "Overdue invoice requires immediate payment by tomorrow to avoid late fees.",
           action: "Process payment",
           deadline: "Nov 24, 2025",
           fullBody: "Dear Customer,\n\nWe would like to remind you that invoice #2024-11 from October 15, 2025 for €2,450.00 is still outstanding.\n\nPlease transfer the amount by tomorrow, November 24, 2025 at the latest to avoid late payment fees.\n\nIf you have any questions, please don't hesitate to contact us.\n\nBest regards,\nMax Mueller\nAccounting Department"
       },
       {
           id: 2,
           sender: "Sarah Schmidt",
           email: "sarah.schmidt@company.com",
           time: "09:15 AM",
           subject: "URGENT: Project Meeting Today 2:00 PM",
           preview: "Important meeting for Q4 project. Please prepare all documents and bring status report.",
           badges: [
               { text: "VIP", type: "vip" },
               { text: "Action: Prepare", type: "action" }
           ],
           summary: "Meeting preparation for Q4 project required. Status report and documents must be ready by 2:00 PM.",
           action: "Prepare documents",
           deadline: "Today, 2:00 PM",
           fullBody: "Hi Team,\n\nQuick reminder about our important Q4 project meeting today at 2:00 PM.\n\nPlease bring the following:\n- Current status report\n- Budget overview\n- Next steps and timeline\n\nZoom link will follow in a separate email.\n\nSee you later!\nSarah"
       },
       {
           id: 3,
           sender: "IT Support",
           email: "support@company.com",
           time: "08:45 AM",
           subject: "Server Maintenance in 2 Hours - Backup Required",
           preview: "Scheduled maintenance starting at 11:00 AM. Back up all important data now, system will be offline for 30 minutes.",
           badges: [
               { text: "Due: 11:00", type: "due" },
               { text: "Action: Backup", type: "action" }
           ],
           summary: "Data backup required before server maintenance at 11:00 AM. System offline for 30 minutes.",
           action: "Create backup",
           deadline: "11:00 AM",
           fullBody: "Dear Team,\n\nToday's scheduled server maintenance will take place from 11:00 AM to 11:30 AM.\n\nImportant:\n- Please back up all important data BEFORE 11:00 AM\n- No editing of cloud documents during maintenance\n- System will be unavailable for approximately 30 minutes\n\nFor issues, contact us at: support@company.com\n\nThank you for your understanding!\nYour IT Team"
       },
       {
           id: 4,
           sender: "Anna Weber - Legal",
           email: "anna.weber@law.com",
           time: "08:12 AM",
           subject: "Contract Signature Required - Deadline EOD",
           preview: "The revised contract is ready. Please review and sign by end of day.",
           badges: [
               { text: "Due: EOD", type: "due" },
               { text: "Action: Sign", type: "action" }
           ],
           summary: "Contract review and signature required by end of day.",
           action: "Review and sign contract",
           deadline: "End of day",
           fullBody: "Good morning,\n\nThe revised contract for Project XY is now ready.\n\nI've incorporated all discussed changes. Please review the document (attached) and send me the signed version by end of day.\n\nFeel free to reach out with any questions.\n\nBest regards,\nAnna Weber"
       },
       {
           id: 5,
           sender: "Thomas Klein",
           email: "thomas.klein@partner.de",
           time: "Yesterday, 10:45 PM",
           subject: "Escalation: Client Waiting for Response",
           preview: "Client Meier complained that his inquiry has been unanswered for 3 days. Please respond immediately.",
           badges: [
               { text: "VIP", type: "vip" },
               { text: "Escalation", type: "due" }
           ],
           summary: "Customer complaint due to missing response. Immediate action required.",
           action: "Contact client",
           deadline: "Immediately",
           fullBody: "Hi,\n\nMr. Meier (VIP client) is unhappy because his inquiry from Monday still hasn't been answered.\n\nHe just called me to complain and is threatening to cancel the contract.\n\nPlease contact him IMMEDIATELY and resolve the situation.\n\nCC: meier@customer.com\n\nThanks!\nThomas"
       }
   ],
   today: [
       {
           id: 6,
           sender: "Marketing Team",
           email: "marketing@company.com",
           time: "Yesterday",
           subject: "Review: Newsletter Draft for Next Week",
           preview: "Please review the newsletter draft for next week and provide feedback by end of day.",
           badges: [
               { text: "Due: EOD", type: "due" },
               { text: "Action: Review", type: "action" }
           ],
           summary: "Newsletter review needed. Feedback required by end of day.",
           action: "Provide feedback",
           deadline: "End of day",
           fullBody: "Hi everyone,\n\nThe newsletter draft for next week is ready. Could you please take a look?\n\nEspecially important:\n- Are all links correct?\n- Is the tone of voice right?\n- Any missing information?\n\nFeedback please by end of day so we can finalize tomorrow.\n\nLink to draft: [Google Docs Link]\n\nThanks!\nMarketing Team"
       },
       {
           id: 7,
           sender: "Anna Weber",
           email: "anna.weber@company.com",
           time: "Yesterday",
           subject: "Quick Question About the Proposal",
           preview: "Could you quickly explain the details of last week's proposal? Client is asking.",
           badges: [
               { text: "Quick task", type: "action" }
           ],
           summary: "Quick response needed for proposal inquiry. Estimated time: <5 min.",
           action: "Explain details",
           deadline: "Today",
           fullBody: "Hi,\n\nQuick question: Can you explain the details of the proposal for Client ABC from last week again?\n\nThe client is asking and I want to make sure I pass on all information correctly.\n\nThanks!\nAnna"
       },
       {
           id: 8,
           sender: "Julia Becker",
           email: "julia.becker@company.com",
           time: "Yesterday",
           subject: "Feedback on Design Mockup",
           preview: "The new mockups are ready. Please provide feedback so we can start development.",
           badges: [
               { text: "Action: Review", type: "action" }
           ],
           summary: "Review design mockups. Feedback blocks development start.",
           action: "Review mockups",
           deadline: "Today",
           fullBody: "Hey,\n\nThe mockups for the new feature are finally ready!\n\nCould you please take a look and provide feedback? The developers are waiting to start.\n\nFigma link: [Link]\n\nParticularly interested in:\n- Does it match the brand?\n- Is the user flow logical?\n\nThanks!\nJulia"
       },
       {
           id: 9,
           sender: "Michael Schneider",
           email: "m.schneider@company.com",
           time: "2 days ago",
           subject: "Quick Sync This Afternoon?",
           preview: "Would you have 15 minutes this afternoon for a quick sync? Need to clarify a few things.",
           badges: [
               { text: "Meeting request", type: "info" }
           ],
           summary: "Meeting request for quick sync this afternoon, 15 minutes.",
           action: "Confirm meeting",
           deadline: "Today",
           fullBody: "Hi,\n\nWould you have about 15 minutes this afternoon for a quick sync?\n\nWant to discuss the following:\n- Project Y status\n- Next steps timeline\n- Budget update\n\nTime slots that work for me:\n- 2:00 PM\n- 3:30 PM\n- 4:00 PM\n\nBest,\nMichael"
       },
       {
           id: 10,
           sender: "Product Team",
           email: "product@company.com",
           time: "2 days ago",
           subject: "User Feedback Summary - Action Items",
           preview: "Summary of this week's user feedback with 3 action items that need your input today.",
           badges: [
               { text: "Action: Input", type: "action" },
               { text: "Due: EOD", type: "due" }
           ],
           summary: "User feedback analysis with action items requiring input by end of day.",
           action: "Review and respond",
           deadline: "End of day",
           fullBody: "Hi,\n\nHere's the weekly user feedback summary with key action items:\n\n1. Feature request: Export function - Should we prioritize?\n2. Bug report: Login issue on Safari - Needs investigation\n3. UI improvement: Dashboard layout - Quick win?\n\nYour input would be great by EOD so we can plan next sprint.\n\nThanks!\nProduct Team"
       }
   ],
   later: [
       {
           id: 11,
           sender: "HR Department",
           email: "hr@company.com",
           time: "2 days ago",
           subject: "Q4 Performance Review - Schedule Appointment",
           preview: "Please suggest appointment times for your Q4 performance review next week.",
           badges: [
               { text: "Due: Friday", type: "due" }
           ],
           summary: "Schedule performance review appointment. Deadline: This week.",
           action: "Suggest times",
           deadline: "Friday",
           fullBody: "Good day,\n\nFor the upcoming Q4 performance review, I would like to schedule an appointment with you.\n\nPlease share your preferred times for next week by Friday.\n\nThe meeting will take approximately 60 minutes.\n\nThank you!\nHR Team"
       },
       {
           id: 12,
           sender: "Project Management",
           email: "project@company.com",
           time: "3 days ago",
           subject: "Code Review: Feature Branch XY",
           preview: "When you have time, please review the feature branch. No rush, but would be good by end of week.",
           badges: [
               { text: "Backlog", type: "action" }
           ],
           summary: "Code review without urgent deadline. Priority: Low.",
           action: "Review code",
           deadline: "End of week",
           fullBody: "Hi,\n\nThe feature branch for the XY feature is complete and waiting for review.\n\nNo rush - but would appreciate if you could take a look by end of week.\n\nGitHub PR: [Link]\n\nThanks!\nDev Team"
       },
       {
           id: 13,
           sender: "Finance Department",
           email: "finance@company.com",
           time: "4 days ago",
           subject: "2025 Budget Planning",
           preview: "Please submit budget proposals for 2025. Deadline is December 15th.",
           badges: [
               { text: "Due: Dec 15", type: "info" }
           ],
           summary: "Budget planning for 2025. Deadline: December 15th.",
           action: "Create budget",
           deadline: "December 15th",
           fullBody: "Dear Department Heads,\n\n2025 budget planning has begun.\n\nPlease submit your budget proposals by December 15th.\n\nTemplate: [Link to template]\n\nThe Finance team is available for any questions.\n\nBest regards,\nFinance Department"
       },
       {
           id: 14,
           sender: "Training Coordinator",
           email: "training@company.com",
           time: "5 days ago",
           subject: "Q1 2025 Training Sessions - Registration",
           preview: "New training sessions available for Q1 2025. Register for courses that interest you.",
           badges: [
               { text: "Info", type: "info" }
           ],
           summary: "Training registration for Q1 2025. Optional participation.",
           action: "Review and register",
           deadline: "End of month",
           fullBody: "Hello everyone,\n\nWe're excited to announce our Q1 2025 training program:\n\n- Leadership Skills (3 days)\n- Data Analysis with Python (2 days)\n- Project Management Certification (5 days)\n- Effective Communication (1 day)\n\nRegistration link: [Portal]\n\nSeats are limited, first come first served.\n\nBest regards,\nTraining Team"
       }
   ],
   news: [
       {
           id: 15,
           sender: "TechCrunch Daily",
           email: "newsletter@techcrunch.com",
           time: "1 hour ago",
           subject: "Today's Top Tech News",
           preview: "Today: OpenAI AI breakthrough, Tesla quarterly results exceed expectations, new EU regulation for tech companies...",
           badges: [
               { text: "Newsletter", type: "info" }
           ],
           summary: "Daily tech newsletter. No action required.",
           action: "Read for information",
           deadline: "None",
           fullBody: "Top Stories Today:\n\n1. OpenAI announces breakthrough in AI reasoning\n2. Tesla Q4 earnings beat expectations\n3. EU announces new tech regulation framework\n4. Microsoft acquires AI startup for $2B\n5. Apple unveils new Vision Pro features\n\nRead more at techcrunch.com"
       },
       {
           id: 16,
           sender: "GitHub Notifications",
           email: "noreply@github.com",
           time: "2 hours ago",
           subject: "Weekly Digest: 5 New Issues in sortmymail/backend",
           preview: "Overview of new issues and pull requests from last week in your repositories...",
           badges: [
               { text: "System", type: "info" }
           ],
           summary: "GitHub weekly digest. System notification.",
           action: "Review if needed",
           deadline: "None",
           fullBody: "Weekly Activity Summary\n\nYour repositories:\n\nsortmymail/backend\n- 5 new issues\n- 3 closed PRs\n- 2 open PRs\n\nsortmymail/frontend\n- 2 new issues\n- 1 merged PR\n\nView on GitHub"
       },
       {
           id: 17,
           sender: "LinkedIn News",
           email: "news@linkedin.com",
           time: "3 hours ago",
           subject: "What's Happening in Your Network Today",
           preview: "Michael started a new job, Sarah shared an article, 5 new people want to connect...",
           badges: [
               { text: "Social", type: "info" }
           ],
           summary: "LinkedIn activity digest. Informational.",
           action: "None",
           deadline: "None",
           fullBody: "Today in your network:\n\n- Michael started a new position at Company X\n- Sarah shared an article about AI\n- 5 people want to connect with you\n- 12 people viewed your profile\n- 3 new job opportunities match your profile\n\nStay active on LinkedIn"
       },
       {
           id: 18,
           sender: "AWS Newsletter",
           email: "aws-newsletter@amazon.com",
           time: "1 day ago",
           subject: "New AWS Services and Updates - November 2025",
           preview: "Discover the latest AWS services: improved Lambda performance, new AI/ML tools and more...",
           badges: [
               { text: "Newsletter", type: "info" }
           ],
           summary: "AWS newsletter with service updates. Informational.",
           action: "None",
           deadline: "None",
           fullBody: "What's New at AWS - November 2025\n\n- Lambda performance improvements (up to 40% faster)\n- New AI/ML services (SageMaker Studio 2.0)\n- Enhanced security features (Zero Trust architecture)\n- Cost optimization tools (new recommendation engine)\n\nLearn more in the AWS Console"
       },
       {
           id: 19,
           sender: "Product Hunt Daily",
           email: "digest@producthunt.com",
           time: "1 day ago",
           subject: "🚀 Today's Top 5 Product Launches",
           preview: "Check out today's most upvoted products: AI video editor, productivity tool, dev framework...",
           badges: [
               { text: "Newsletter", type: "info" }
           ],
           summary: "Product Hunt daily digest. Inspirational content.",
           action: "None",
           deadline: "None",
           fullBody: "Top Products Today:\n\n1. 🎬 VideoAI - AI-powered video editor\n2. 📊 DataViz Pro - Advanced data visualization\n3. ⚡ FastAPI 2.0 - High-performance web framework\n4. 🎨 DesignKit - UI component library\n5. 🔒 SecureVault - Password manager\n\nExplore at producthunt.com"
       },
       {
           id: 20,
           sender: "Medium Daily Digest",
           email: "noreply@medium.com",
           time: "2 days ago",
           subject: "Recommended Reading: AI & Machine Learning",
           preview: "Top stories picked for you based on your interests: Future of AI, ML best practices, career advice...",
           badges: [
               { text: "Newsletter", type: "info" }
           ],
           summary: "Medium curated articles. Reading recommendations.",
           action: "None",
           deadline: "None",
           fullBody: "Recommended for you:\n\n1. The Future of AI in 2025 (12 min read)\n2. 10 Machine Learning Best Practices (8 min read)\n3. How to Become a Senior Engineer (15 min read)\n4. Building Scalable Systems (10 min read)\n\nHappy reading!\nThe Medium Team"
       }
   ]
};

// Tooltip texts
const tooltipTexts = {
   urgent: "Deadline today/overdue, VIP sender, direct action request, or follow-up >24h without response.",
   today: "Due by end of day, small tasks (<5 min), or responses that unblock others today.",
   later: "Due after today, reviews/backlog items, or tasks scheduled for this week/Friday.",
   news: "Newsletters, reports, system messages, or social notifications. No immediate action required."
};

// ==================== //
// Application State
// ==================== //

let activeFilter = 'all';
let draggedCard = null;
let draggedFromBucket = null;

// ==================== //
// Initialization
// ==================== //

document.addEventListener('DOMContentLoaded', () => {
   console.log('📄 DOM Content Loaded');
   
   // Initial setup for login screen
   setupLoginForm();
   
   // Don't initialize main app yet - wait for login
   console.log('⏸️  Waiting for login...');
});

// This will be called after successful login
function initializeMainApp() {
   console.log('🔐 Login successful, initializing main app...');
   initializeApp();
}

function initializeApp() {
   console.log('🚀 Initializing SortMyMail...');
   
   // Check if we're on the main app screen
   const mainApp = document.getElementById('mainApp');
   if (!mainApp || mainApp.classList.contains('hidden')) {
       console.log('⏸️  Main app not visible yet, initialization paused');
       return;
   }
   
   // Initialize dark mode first
   initializeDarkMode();
   
   // Add calendar nav item if it doesn't exist
   const calendarAdded = ensureCalendarNavExists();
   
   // Setup all components
   setupLoginForm();
   
   // Setup event listeners (do this AFTER adding calendar nav)
   setupEventListeners();
   
   // Render emails - CRITICAL
   console.log('📧 Rendering email cards...');
   renderEmailCards();
   console.log('✅ Email cards rendered');
   
   setupDragAndDrop();
   setupTooltips();
   setupKeyboardShortcuts();
   setupCreateFolderModal();
   setupComposeModal();
   setupCalendar();
   setupUserMenu();
   
   console.log('✨ SortMyMail initialized successfully!');
   
   if (calendarAdded) {
       console.log('📅 Calendar navigation is ready - check sidebar!');
   }
   
   // Verify emails were rendered
   const emailCards = document.querySelectorAll('.email-card');
   console.log(`📊 Total email cards rendered: ${emailCards.length}`);
   
   if (emailCards.length === 0) {
       console.error('⚠️  WARNING: No email cards were rendered!');
       console.log('Attempting to re-render...');
       setTimeout(() => renderEmailCards(), 500);
   }
}

// Ensure calendar navigation item exists
function ensureCalendarNavExists() {
   const sidebar = document.querySelector('.sidebar-nav');
   const existingCalNav = document.querySelector('.nav-item[data-view="calendar"]');
   
   if (!existingCalNav && sidebar) {
       console.log('📅 Adding calendar navigation item...');
       const calendarNav = document.createElement('button');
       calendarNav.className = 'nav-item';
       calendarNav.setAttribute('data-view', 'calendar');
       calendarNav.innerHTML = `
           <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
           </svg>
           <span>Calendar</span>
       `;
       
       // Insert before the divider
       const divider = sidebar.querySelector('.nav-divider');
       if (divider) {
           sidebar.insertBefore(calendarNav, divider);
       } else {
           // If no divider, just append
           sidebar.appendChild(calendarNav);
       }
       
       console.log('✅ Calendar nav added successfully');
       
       // Event handler will be added by setupEventListeners
       return true;
   }
   
   return false;
}

// ==================== //
// Login Functionality
// ==================== //

function setupLoginForm() {
   const loginForm = document.getElementById('loginForm');
   if (loginForm) {
       loginForm.addEventListener('submit', handleLogin);
   }
}

function handleLogin(e) {
   e.preventDefault();
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   if (email && password) {
       const submitBtn = e.target.querySelector('button[type="submit"]');
       const originalText = submitBtn.innerHTML;
       submitBtn.innerHTML = '<svg class="loading" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"/></svg> Signing in...';
       submitBtn.disabled = true;

       setTimeout(() => {
           document.getElementById('loginScreen').classList.add('hidden');
           document.getElementById('mainApp').classList.remove('hidden');
           
           // Initialize the main app NOW
           initializeMainApp();
           
           showToast('Welcome back! Your inbox is ready.', 'success');
       }, 1000);
   }
}

// ==================== //
// Event Listeners
// ==================== //

function setupEventListeners() {
   // Navigation items
   document.querySelectorAll('.nav-item').forEach(item => {
       item.addEventListener('click', handleNavigation);
   });

   // Filter pills
   document.querySelectorAll('.pill').forEach(pill => {
       pill.addEventListener('click', handleFilterChange);
   });

   // Modal close buttons
   const closeModalBtn = document.getElementById('closeThreadModal');
   if (closeModalBtn) {
       closeModalBtn.addEventListener('click', closeThreadModal);
   }

   const backToInbox = document.getElementById('backToInbox');
   if (backToInbox) {
       backToInbox.addEventListener('click', closeThreadModal);
   }

   // Modal overlay click
   const modalOverlay = document.getElementById('threadModal');
   if (modalOverlay) {
       modalOverlay.addEventListener('click', (e) => {
           if (e.target === modalOverlay) {
               closeThreadModal();
           }
       });
   }

   // Smart reply chips
   document.querySelectorAll('.smart-reply-chip').forEach(chip => {
       chip.addEventListener('click', handleSmartReply);
   });

   // Toast action button
   const toastAction = document.getElementById('toastAction');
   if (toastAction) {
       toastAction.addEventListener('click', handleToastAction);
   }

   // Search input
   const searchInput = document.getElementById('searchInput');
   if (searchInput) {
       searchInput.addEventListener('input', handleSearch);
   }

   // Compose button - FIXED
   const composeBtn = document.getElementById('composeBtn');
   if (composeBtn) {
       composeBtn.addEventListener('click', () => openComposeModal());
   }

   // Add folder button
   const addFolderBtn = document.getElementById('addFolderBtn');
   if (addFolderBtn) {
       addFolderBtn.addEventListener('click', openCreateFolderModal);
   }
}

// ==================== //
// Navigation
// ==================== //

function handleNavigation(e) {
   const navItem = e.currentTarget;
   const view = navItem.dataset.view;

   // Check if view exists
   if (!view) {
       console.warn('Navigation item missing data-view attribute');
       return;
   }

   // Update active state
   document.querySelectorAll('.nav-item').forEach(item => {
       item.classList.remove('active');
   });
   navItem.classList.add('active');

   // Handle view change
   if (view === 'inbox') {
       renderEmailCards();
   } else if (view === 'calendar') {
       openCalendar();
   } else {
       showToast(`${view.charAt(0).toUpperCase() + view.slice(1)} view coming soon!`, 'info');
   }
}

// ==================== //
// Filter Functionality
// ==================== //

function handleFilterChange(e) {
   const pill = e.currentTarget;
   const filter = pill.dataset.filter;

   document.querySelectorAll('.pill').forEach(p => {
       p.classList.remove('active');
   });
   pill.classList.add('active');

   activeFilter = filter;
   filterEmailCards();
}

function filterEmailCards() {
   const allCards = document.querySelectorAll('.email-card');

   allCards.forEach(card => {
       const badges = Array.from(card.querySelectorAll('.badge')).map(b => b.textContent.toLowerCase());
       let show = true;

       switch(activeFilter) {
           case 'all':
               show = true;
               break;
           case 'unread':
               show = Math.random() > 0.5;
               break;
           case 'attachments':
               show = badges.some(b => b.includes('attachment'));
               break;
           case 'vip':
               show = badges.some(b => b.includes('vip'));
               break;
           case 'this-week':
               const time = card.querySelector('.card-time').textContent.toLowerCase();
               show = time.includes('today') || time.includes('yesterday') || time.includes('day');
               break;
       }

       card.style.display = show ? 'block' : 'none';
   });
}

// ==================== //
// Search Functionality
// ==================== //

function handleSearch(e) {
   const query = e.target.value.toLowerCase();
   
   if (query.length === 0) {
       document.querySelectorAll('.email-card').forEach(card => {
           card.style.display = 'block';
       });
       return;
   }

   document.querySelectorAll('.email-card').forEach(card => {
       const sender = card.querySelector('.card-sender').textContent.toLowerCase();
       const subject = card.querySelector('.card-subject').textContent.toLowerCase();
       const preview = card.querySelector('.card-preview').textContent.toLowerCase();

       const matches = sender.includes(query) || subject.includes(query) || preview.includes(query);
       card.style.display = matches ? 'block' : 'none';
   });
}

// ==================== //
// Render Email Cards
// ==================== //

function renderEmailCards() {
   console.log('🎨 Starting renderEmailCards...');
   
   Object.keys(emailData).forEach(bucket => {
       const container = document.getElementById(`${bucket}Cards`);
       console.log(`Looking for container: ${bucket}Cards`, container ? 'FOUND' : 'NOT FOUND');
       
       if (container) {
           container.innerHTML = '';
           console.log(`Rendering ${emailData[bucket].length} emails in ${bucket}`);
           
           emailData[bucket].forEach(email => {
               const card = createEmailCard(email, bucket);
               container.appendChild(card);
           });
       } else {
           console.error(`❌ Container not found: ${bucket}Cards`);
       }
   });

   updateBucketCounts();
   console.log('✅ renderEmailCards complete');
}

function createEmailCard(email, bucket) {
   const card = document.createElement('div');
   card.className = 'email-card';
   card.dataset.emailId = email.id;
   card.dataset.bucket = bucket;
   card.draggable = true;

   const badges = email.badges.map(badge => 
       `<span class="badge badge-${badge.type}">${badge.text}</span>`
   ).join('');

   card.innerHTML = `
       <div class="card-header">
           <div class="card-sender">${email.sender}</div>
           <div class="card-time">${email.time}</div>
       </div>
       <div class="card-subject">${email.subject}</div>
       <div class="card-preview">${email.preview}</div>
       <div class="card-badges">${badges}</div>
   `;

   card.addEventListener('click', () => openThreadModal(email));

   return card;
}

function updateBucketCounts() {
   Object.keys(emailData).forEach(bucket => {
       const count = emailData[bucket].length;
       const countElement = document.querySelector(`.bucket[data-bucket="${bucket}"] .bucket-count`);
       if (countElement) {
           countElement.textContent = count;
       }
   });

   const totalCount = Object.values(emailData).reduce((sum, bucket) => sum + bucket.length, 0);
   const inboxBadge = document.querySelector('.nav-item[data-view="inbox"] .nav-badge');
   if (inboxBadge) {
       inboxBadge.textContent = totalCount;
   }
}

// ==================== //
// Drag and Drop
// ==================== //

function setupDragAndDrop() {
   document.querySelectorAll('.bucket-cards').forEach(dropZone => {
       dropZone.addEventListener('dragover', handleDragOver);
       dropZone.addEventListener('drop', handleDrop);
       dropZone.addEventListener('dragleave', handleDragLeave);
   });
}

function handleDragOver(e) {
   e.preventDefault();
   e.currentTarget.style.background = 'rgba(99, 102, 241, 0.05)';
}

function handleDragLeave(e) {
   e.currentTarget.style.background = '';
}

function handleDrop(e) {
   e.preventDefault();
   e.currentTarget.style.background = '';

   if (!draggedCard) return;

   const targetBucket = e.currentTarget.id.replace('Cards', '');
   
   if (draggedFromBucket !== targetBucket) {
       e.currentTarget.appendChild(draggedCard);
       moveEmailBetweenBuckets(draggedCard.dataset.emailId, draggedFromBucket, targetBucket);
       showToast('Noted. Future ranking will be adjusted based on your preference.', 'success', true);
   }

   draggedCard.classList.remove('dragging');
   draggedCard = null;
   draggedFromBucket = null;
}

document.addEventListener('dragstart', (e) => {
   if (e.target.classList.contains('email-card')) {
       draggedCard = e.target;
       draggedFromBucket = e.target.dataset.bucket;
       e.target.classList.add('dragging');
   }
});

document.addEventListener('dragend', (e) => {
   if (e.target.classList.contains('email-card')) {
       e.target.classList.remove('dragging');
   }
});

function moveEmailBetweenBuckets(emailId, fromBucket, toBucket) {
   const emailIndex = emailData[fromBucket].findIndex(e => e.id == emailId);
   if (emailIndex !== -1) {
       const email = emailData[fromBucket].splice(emailIndex, 1)[0];
       emailData[toBucket].push(email);
       updateBucketCounts();
   }
}

// ==================== //
// Thread Modal
// ==================== //

function openThreadModal(email) {
   document.getElementById('summaryText').textContent = email.summary;
   document.getElementById('actionText').textContent = email.action;
   document.getElementById('deadlineText').textContent = email.deadline;

   const messagesContainer = document.getElementById('threadMessages');
   messagesContainer.innerHTML = `
       <div class="message">
           <div class="message-header">
               <span class="message-sender">${email.sender}</span>
               <span class="card-time">${email.time}</span>
           </div>
           <div class="message-body">${email.fullBody.replace(/\n/g, '<br>')}</div>
       </div>
   `;

   // Setup custom reply button
   const customReplyBtn = document.querySelector('.btn-full-reply');
   if (customReplyBtn) {
       customReplyBtn.onclick = () => {
           closeThreadModal();
           openComposeModal(email);
       };
   }

   document.getElementById('threadModal').classList.add('active');
   document.body.style.overflow = 'hidden';
}

function closeThreadModal() {
   document.getElementById('threadModal').classList.remove('active');
   document.body.style.overflow = '';
}

// ==================== //
// Smart Replies
// ==================== //

function handleSmartReply(e) {
   const action = e.currentTarget.dataset.action;
   const actionText = e.currentTarget.textContent.trim();
   
   e.currentTarget.innerHTML = '<svg class="loading" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"/></svg> Sending...';
   e.currentTarget.disabled = true;

   setTimeout(() => {
       showToast(`Reply sent: "${actionText}"`, 'success');
       setTimeout(() => {
           closeThreadModal();
       }, 500);
   }, 1000);
}

// ==================== //
// Tooltips
// ==================== //

function setupTooltips() {
   document.querySelectorAll('.why-btn').forEach(btn => {
       btn.addEventListener('mouseenter', showTooltip);
       btn.addEventListener('mouseleave', hideTooltip);
   });
}

function showTooltip(e) {
   const type = e.currentTarget.dataset.tooltip;
   const text = tooltipTexts[type];
   
   if (!text) return;

   const tooltip = document.getElementById('tooltip');
   tooltip.textContent = text;
   tooltip.classList.add('show');

   const rect = e.currentTarget.getBoundingClientRect();
   tooltip.style.top = (rect.bottom + 10) + 'px';
   tooltip.style.left = (rect.left - 100) + 'px';
}

function hideTooltip() {
   const tooltip = document.getElementById('tooltip');
   tooltip.classList.remove('show');
}

// ==================== //
// Toast Notifications
// ==================== //

let toastTimeout;
let lastMoveAction = null;

function showToast(message, type = 'success', showUndo = false) {
   const toast = document.getElementById('toast');
   const toastText = document.getElementById('toastText');
   const toastAction = document.getElementById('toastAction');
   const toastIcon = toast.querySelector('.toast-icon');

   if (type === 'success') {
       toastIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>';
   } else if (type === 'info') {
       toastIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>';
   } else if (type === 'error') {
       toastIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
   }

   toastText.textContent = message;
   toastAction.style.display = showUndo ? 'block' : 'none';

   if (toastTimeout) {
       clearTimeout(toastTimeout);
   }

   toast.classList.add('show');

   toastTimeout = setTimeout(() => {
       toast.classList.remove('show');
   }, 3000);
}

function handleToastAction() {
   if (lastMoveAction) {
       moveEmailBetweenBuckets(lastMoveAction.emailId, lastMoveAction.toBucket, lastMoveAction.fromBucket);
       renderEmailCards();
       showToast('Move undone', 'info');
       lastMoveAction = null;
   } else {
       document.getElementById('toast').classList.remove('show');
   }
}

// ==================== //
// Keyboard Shortcuts
// ==================== //

function setupKeyboardShortcuts() {
   document.addEventListener('keydown', (e) => {
       if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
           e.preventDefault();
           document.getElementById('searchInput').focus();
       }

       if (e.key === 'Escape') {
           closeThreadModal();
           closeComposeModal();
           closeCalendar();
           closeCreateFolderModal();
       }
   });
}

// ==================== //
// Dark Mode - FIXED & WORKING
// ==================== //

function initializeDarkMode() {
   const savedTheme = localStorage.getItem('sortmymail-theme') || 'light';
   console.log('Initializing dark mode, saved theme:', savedTheme);
   applyTheme(savedTheme);
   updateDarkModeText(savedTheme);
}

function toggleDarkMode() {
   const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
   
   console.log('Toggling dark mode from', currentTheme, 'to', newTheme);
   
   applyTheme(newTheme);
   localStorage.setItem('sortmymail-theme', newTheme);
   updateDarkModeText(newTheme);
   
   showToast(`${newTheme === 'dark' ? 'Dark' : 'Light'} mode activated`, 'success');
}

function applyTheme(theme) {
   document.documentElement.setAttribute('data-theme', theme);
   console.log('Theme applied:', theme);
}

function updateDarkModeText(theme) {
   const darkModeText = document.getElementById('darkModeText');
   if (darkModeText) {
       darkModeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
   }
}

// ==================== //
// Create Folder Modal
// ==================== //

let currentFolderStep = 1;
let selectedFolderColor = '#10b981';
let selectedFolderIcon = 'folder';

function setupCreateFolderModal() {
   const addFolderBtn = document.getElementById('addFolderBtn');
   const closeFolderBtn = document.getElementById('closeFolderModal');
   const folderModal = document.getElementById('createFolderModal');
   const nextBtn = document.getElementById('folderNextBtn');
   const backBtn = document.getElementById('folderBackBtn');
   const createBtn = document.getElementById('folderCreateBtn');
   const addRuleBtn = document.getElementById('addRuleBtn');
   
   if (closeFolderBtn) {
       closeFolderBtn.addEventListener('click', closeCreateFolderModal);
   }
   
   if (nextBtn) {
       nextBtn.addEventListener('click', nextFolderStep);
   }
   
   if (backBtn) {
       backBtn.addEventListener('click', prevFolderStep);
   }
   
   if (createBtn) {
       createBtn.addEventListener('click', createCustomFolder);
   }
   
   if (addRuleBtn) {
       addRuleBtn.addEventListener('click', addNewRule);
   }
   
   // Color picker
   document.querySelectorAll('.color-option').forEach(btn => {
       btn.addEventListener('click', function() {
           document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
           this.classList.add('active');
           selectedFolderColor = this.dataset.color;
       });
   });
   
   // Icon picker
   document.querySelectorAll('.icon-option').forEach(btn => {
       btn.addEventListener('click', function() {
           document.querySelectorAll('.icon-option').forEach(b => b.classList.remove('active'));
           this.classList.add('active');
           selectedFolderIcon = this.dataset.icon;
       });
   });
}

function openCreateFolderModal() {
   document.getElementById('createFolderModal').classList.add('active');
   document.body.style.overflow = 'hidden';
   currentFolderStep = 1;
   updateFolderStepDisplay();
}

function closeCreateFolderModal() {
   document.getElementById('createFolderModal').classList.remove('active');
   document.body.style.overflow = '';
   resetFolderModal();
}

function nextFolderStep() {
   if (currentFolderStep === 1) {
       const folderName = document.getElementById('folderName').value;
       if (!folderName.trim()) {
           showToast('Please enter a folder name', 'error');
           return;
       }
   }
   
   if (currentFolderStep === 2) {
       generateFolderPreview();
   }
   
   if (currentFolderStep < 3) {
       currentFolderStep++;
       updateFolderStepDisplay();
   }
}

function prevFolderStep() {
   if (currentFolderStep > 1) {
       currentFolderStep--;
       updateFolderStepDisplay();
   }
}

function updateFolderStepDisplay() {
   document.querySelectorAll('.step').forEach((step, index) => {
       step.classList.remove('active', 'completed');
       const stepNum = index + 1;
       if (stepNum < currentFolderStep) {
           step.classList.add('completed');
       } else if (stepNum === currentFolderStep) {
           step.classList.add('active');
       }
   });
   
   for (let i = 1; i <= 3; i++) {
       const stepContent = document.getElementById(`folderStep${i}`);
       if (stepContent) {
           stepContent.classList.toggle('hidden', i !== currentFolderStep);
       }
   }
   
   const backBtn = document.getElementById('folderBackBtn');
   const nextBtn = document.getElementById('folderNextBtn');
   const createBtn = document.getElementById('folderCreateBtn');
   
   if (backBtn) backBtn.classList.toggle('hidden', currentFolderStep === 1);
   if (nextBtn) nextBtn.classList.toggle('hidden', currentFolderStep === 3);
   if (createBtn) createBtn.classList.toggle('hidden', currentFolderStep !== 3);
}

function addNewRule() {
   const rulesContainer = document.querySelector('.rule-group');
   const newRule = document.createElement('div');
   newRule.className = 'rule-item';
   newRule.innerHTML = `
       <select class="form-select rule-type">
           <option value="sender">Sender/Domain</option>
           <option value="vip">VIP Status</option>
           <option value="deadline">Deadline</option>
           <option value="action">Action Type</option>
           <option value="keywords">Keywords</option>
           <option value="attachments">Has Attachments</option>
           <option value="internal">Internal/External</option>
       </select>
       <select class="form-select rule-operator">
           <option value="is">is</option>
           <option value="contains">contains</option>
           <option value="starts">starts with</option>
           <option value="ends">ends with</option>
       </select>
       <input type="text" class="form-input rule-value" placeholder="Value">
       <button class="icon-btn btn-remove-rule" onclick="this.parentElement.remove()">
           <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
           </svg>
       </button>
   `;
   rulesContainer.appendChild(newRule);
}

function generateFolderPreview() {
   const rules = collectFolderRules();
   const matchingEmails = findMatchingEmails(rules);
   
   document.getElementById('previewCount').textContent = matchingEmails.length;
   document.getElementById('previewRules').textContent = rules.length;
   
   const previewList = document.getElementById('previewList');
   previewList.innerHTML = '';
   
   matchingEmails.slice(0, 10).forEach(email => {
       const previewCard = createEmailCard(email, 'preview');
       previewCard.style.pointerEvents = 'none';
       previewList.appendChild(previewCard);
   });
   
   if (matchingEmails.length > 10) {
       const moreInfo = document.createElement('div');
       moreInfo.style.textAlign = 'center';
       moreInfo.style.padding = 'var(--space-lg)';
       moreInfo.style.color = 'var(--gray-600)';
       moreInfo.textContent = `+ ${matchingEmails.length - 10} more emails`;
       previewList.appendChild(moreInfo);
   }
}

function collectFolderRules() {
   const rules = [];
   document.querySelectorAll('.rule-item').forEach(item => {
       const type = item.querySelector('.rule-type').value;
       const operator = item.querySelector('.rule-operator').value;
       const value = item.querySelector('.rule-value').value;
       if (value.trim()) {
           rules.push({ type, operator, value });
       }
   });
   return rules;
}

function findMatchingEmails(rules) {
   const ruleLogic = document.getElementById('ruleLogic').value;
   let allEmails = [];
   
   Object.values(emailData).forEach(bucket => {
       allEmails = allEmails.concat(bucket);
   });
   
   return allEmails.filter(email => {
       if (ruleLogic === 'all') {
           return rules.every(rule => emailMatchesRule(email, rule));
       } else {
           return rules.some(rule => emailMatchesRule(email, rule));
       }
   });
}

function emailMatchesRule(email, rule) {
   const value = rule.value.toLowerCase();
   
   switch(rule.type) {
       case 'sender':
           return email.sender.toLowerCase().includes(value);
       case 'keywords':
           return email.subject.toLowerCase().includes(value) || 
                  email.preview.toLowerCase().includes(value);
       case 'vip':
           return email.badges.some(b => b.type === 'vip');
       default:
           return false;
   }
}

function createCustomFolder() {
   const folderName = document.getElementById('folderName').value;
   const rules = collectFolderRules();
   
   if (!folderName.trim()) {
       showToast('Please enter a folder name', 'error');
       return;
   }
   
   if (rules.length === 0) {
       showToast('Please add at least one rule', 'error');
       return;
   }
   
   const folderNav = document.querySelector('.nav-section-title').parentElement;
   const newFolder = document.createElement('button');
   newFolder.className = 'nav-item';
   newFolder.innerHTML = `
       <svg class="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
       </svg>
       <span>${folderName}</span>
       <span class="folder-color" style="background: ${selectedFolderColor};"></span>
   `;
   
   folderNav.insertBefore(newFolder, document.getElementById('addFolderBtn'));
   
   showToast(`Folder "${folderName}" created successfully!`, 'success');
   closeCreateFolderModal();
}

function resetFolderModal() {
   document.getElementById('folderName').value = '';
   document.querySelectorAll('.rule-item').forEach((item, index) => {
       if (index > 0) item.remove();
   });
   currentFolderStep = 1;
}

// ==================== //
// Compose Modal - ENHANCED
// ==================== //

function setupComposeModal() {
   const closeComposeBtn = document.getElementById('closeComposeModal');
   const sendBtn = document.getElementById('sendEmailBtn');
   
   if (closeComposeBtn) {
       closeComposeBtn.addEventListener('click', closeComposeModal);
   }
   
   if (sendBtn) {
       sendBtn.addEventListener('click', sendEmail);
   }
   
   // AI action buttons
   document.querySelectorAll('.ai-action-btn').forEach(btn => {
       btn.addEventListener('click', function() {
           const action = this.dataset.action;
           applyAIAction(action);
       });
   });
   
   // Length buttons
   document.querySelectorAll('.length-btn').forEach(btn => {
       btn.addEventListener('click', function() {
           document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
           this.classList.add('active');
       });
   });
}

function openComposeModal(replyTo = null) {
   const modal = document.getElementById('composeModal');
   const title = document.getElementById('composeTitle');
   
   if (replyTo) {
       title.textContent = `Reply to ${replyTo.sender}`;
       document.getElementById('composeTo').value = replyTo.email;
       document.getElementById('composeSubject').value = `Re: ${replyTo.subject}`;
   } else {
       title.textContent = 'New Message';
       document.getElementById('composeTo').value = '';
       document.getElementById('composeSubject').value = '';
       document.getElementById('composeBody').value = '';
   }
   
   modal.classList.add('active');
   document.body.style.overflow = 'hidden';
   
   setTimeout(() => {
       document.getElementById('composeTo').focus();
   }, 100);
}

function closeComposeModal() {
   document.getElementById('composeModal').classList.remove('active');
   document.body.style.overflow = '';
   
   document.getElementById('composeTo').value = '';
   document.getElementById('composeSubject').value = '';
   document.getElementById('composeBody').value = '';
}

function sendEmail() {
   const to = document.getElementById('composeTo').value;
   const subject = document.getElementById('composeSubject').value;
   const body = document.getElementById('composeBody').value;
   
   if (!to || !subject || !body) {
       showToast('Please fill in all fields', 'error');
       return;
   }
   
   const sendBtn = document.getElementById('sendEmailBtn');
   const originalHTML = sendBtn.innerHTML;
   sendBtn.innerHTML = '<svg class="loading" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="4" stroke-dasharray="32" stroke-linecap="round"/></svg> Sending...';
   sendBtn.disabled = true;
   
   setTimeout(() => {
       showToast('Email sent successfully!', 'success');
       closeComposeModal();
       sendBtn.innerHTML = originalHTML;
       sendBtn.disabled = false;
   }, 1500);
}

function applyAIAction(action) {
   const textarea = document.getElementById('composeBody');
   const currentText = textarea.value;
   
   if (!currentText) {
       showToast('Please write some text first', 'info');
       return;
   }
   
   showToast(`Applying AI: ${action}...`, 'info');
   
   setTimeout(() => {
       let newText = currentText;
       
       switch(action) {
           case 'improve':
               newText = improveText(currentText);
               break;
           case 'shorten':
               newText = currentText.substring(0, Math.floor(currentText.length / 2)) + '.';
               break;
           case 'expand':
               newText = currentText + '\n\nAdditionally, I wanted to provide more context on this matter. This will help ensure we are all aligned on the key points and next steps.';
               break;
           case 'professional':
               newText = 'Dear Sir/Madam,\n\n' + currentText + '\n\nBest regards,\n[Your Name]';
               break;
           case 'friendly':
               newText = 'Hi there!\n\n' + currentText + '\n\nCheers,\n[Your Name]';
               break;
           case 'grammar':
               newText = currentText.replace(/  +/g, ' ').trim();
               break;
       }
       
       textarea.value = newText;
       showToast('AI enhancement applied!', 'success');
   }, 1000);
}

function improveText(text) {
   return text
       .replace(/\b(is|are|was|were)\b/gi, match => match)
       .replace(/\.{2,}/g, '.')
       .replace(/\s+/g, ' ')
       .trim();
}

// ==================== //
// Smart Calendar - FIXED & WORKING
// ==================== //

let currentCalendarDate = new Date();
let detectedEvents = [];

function setupCalendar() {
   const closeCalBtn = document.getElementById('closeCalendarModal');
   if (closeCalBtn) {
       closeCalBtn.addEventListener('click', closeCalendar);
   }
   
   const prevBtn = document.getElementById('calPrevMonth');
   const nextBtn = document.getElementById('calNextMonth');
   const todayBtn = document.getElementById('calToday');
   
   if (prevBtn) prevBtn.addEventListener('click', () => changeMonth(-1));
   if (nextBtn) nextBtn.addEventListener('click', () => changeMonth(1));
   if (todayBtn) todayBtn.addEventListener('click', goToToday);
   
   detectEventsFromEmails();
}

function openCalendar() {
   document.getElementById('calendarModal').classList.add('active');
   document.body.style.overflow = 'hidden';
   renderCalendar();
   renderDetectedEvents();
}

function closeCalendar() {
   document.getElementById('calendarModal').classList.remove('active');
   document.body.style.overflow = '';
}

function changeMonth(direction) {
   currentCalendarDate.setMonth(currentCalendarDate.getMonth() + direction);
   renderCalendar();
}

function goToToday() {
   currentCalendarDate = new Date();
   renderCalendar();
}

function renderCalendar() {
   const year = currentCalendarDate.getFullYear();
   const month = currentCalendarDate.getMonth();
   
   const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
   document.getElementById('calendarMonth').textContent = `${monthNames[month]} ${year}`;
   
   const firstDay = new Date(year, month, 1).getDay();
   const daysInMonth = new Date(year, month + 1, 0).getDate();
   const today = new Date();
   
   const calendarDays = document.getElementById('calendarDays');
   calendarDays.innerHTML = '';
   
   // Previous month days
   const prevMonthDays = new Date(year, month, 0).getDate();
   for (let i = firstDay - 1; i >= 0; i--) {
       const day = createCalendarDay(prevMonthDays - i, true);
       calendarDays.appendChild(day);
   }
   
   // Current month days
   for (let i = 1; i <= daysInMonth; i++) {
       const isToday = today.getDate() === i && 
                      today.getMonth() === month && 
                      today.getFullYear() === year;
       const day = createCalendarDay(i, false, isToday);
       calendarDays.appendChild(day);
   }
   
   // Next month days
   const remainingDays = 42 - (firstDay + daysInMonth);
   for (let i = 1; i <= remainingDays; i++) {
       const day = createCalendarDay(i, true);
       calendarDays.appendChild(day);
   }
}

function createCalendarDay(dayNum, otherMonth, isToday = false) {
   const day = document.createElement('div');
   day.className = 'calendar-day';
   if (otherMonth) day.classList.add('other-month');
   if (isToday) day.classList.add('today');
   
   day.innerHTML = `
       <div class="day-number">${dayNum}</div>
       <div class="day-events"></div>
   `;
   
   // Add events for this day (only accepted events)
   const dayEvents = detectedEvents.filter(event => {
       if (!event.accepted) return false;
       const eventDate = new Date(event.date);
       return eventDate.getDate() === dayNum && 
              eventDate.getMonth() === currentCalendarDate.getMonth() &&
              eventDate.getFullYear() === currentCalendarDate.getFullYear();
   });
   
   const eventsContainer = day.querySelector('.day-events');
   dayEvents.forEach(event => {
       const eventEl = document.createElement('div');
       eventEl.className = `day-event ${event.priority}`;
       eventEl.textContent = event.title.substring(0, 20);
       eventsContainer.appendChild(eventEl);
   });
   
   return day;
}

function detectEventsFromEmails() {
   detectedEvents = [];
   
   Object.values(emailData).flat().forEach(email => {
       if (email.deadline && email.deadline !== 'None') {
           const event = {
               id: email.id,
               title: email.action || email.subject,
               date: parseDateFromText(email.deadline),
               email: email,
               priority: email.badges.some(b => b.type === 'due') ? 'urgent' : 'today',
               accepted: false
           };
           detectedEvents.push(event);
       }
   });
   
   console.log('Detected events:', detectedEvents);
}

function parseDateFromText(text) {
   const today = new Date();
   
   if (text.toLowerCase().includes('today')) {
       return today.toISOString().split('T')[0];
   }
   
   if (text.toLowerCase().includes('tomorrow')) {
       const tomorrow = new Date(today);
       tomorrow.setDate(tomorrow.getDate() + 1);
       return tomorrow.toISOString().split('T')[0];
   }
   
   if (text.toLowerCase().includes('friday')) {
       const friday = new Date(today);
       const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
       friday.setDate(today.getDate() + daysUntilFriday);
       return friday.toISOString().split('T')[0];
   }
   
   // Default to today
   return today.toISOString().split('T')[0];
}

function renderDetectedEvents() {
   const eventsList = document.getElementById('detectedEvents');
   eventsList.innerHTML = '';
   
   detectedEvents.forEach(event => {
       const eventItem = document.createElement('div');
       eventItem.className = `event-item ${event.accepted ? 'accepted' : ''}`;
       eventItem.innerHTML = `
           <div class="event-details">
               <div class="event-title">${event.title}</div>
               <div class="event-meta">
                   <span>
                       <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                       </svg>
                       ${event.date}
                   </span>
                   <span>From: ${event.email.sender}</span>
               </div>
           </div>
           <div class="event-actions">
               <button class="btn-accept-event" onclick="acceptEvent(${event.id})" ${event.accepted ? 'disabled' : ''}>
                   ${event.accepted ? '✓ Added' : 'Add to Calendar'}
               </button>
           </div>
       `;
       eventsList.appendChild(eventItem);
   });
}

function acceptEvent(eventId) {
   console.log('Accepting event:', eventId);
   const event = detectedEvents.find(e => e.id === eventId);
   if (event && !event.accepted) {
       event.accepted = true;
       renderDetectedEvents();
       renderCalendar();
       showToast(`Event added to calendar: ${event.title}`, 'success');
   }
}

// Make acceptEvent globally accessible
window.acceptEvent = acceptEvent;

// ==================== //
// User Menu & Logout - FIXED & WORKING
// ==================== //

function setupUserMenu() {
   console.log('🔧 Setting up user menu...');
   
   const userMenuBtn = document.querySelector('.user-menu');
   const userMenuDropdown = document.getElementById('userMenuDropdown');
   const logoutBtn = document.getElementById('logoutBtn');
   const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
   
   console.log('User menu button:', userMenuBtn ? 'FOUND' : 'NOT FOUND');
   console.log('User menu dropdown:', userMenuDropdown ? 'FOUND' : 'NOT FOUND');
   
   if (userMenuBtn && userMenuDropdown) {
       // Set initial hidden state with proper CSS
       userMenuDropdown.style.display = 'none';
       userMenuDropdown.style.position = 'absolute';
       userMenuDropdown.style.bottom = '70px';
       userMenuDropdown.style.left = '16px';
       userMenuDropdown.style.zIndex = '9999';
       userMenuDropdown.style.width = '240px';
       userMenuDropdown.style.backgroundColor = 'white';
       userMenuDropdown.style.border = '1px solid #e5e7eb';
       userMenuDropdown.style.borderRadius = '12px';
       userMenuDropdown.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
       userMenuDropdown.style.padding = '8px';
       
       // Remove any existing listeners first
       const newUserMenuBtn = userMenuBtn.cloneNode(true);
       userMenuBtn.parentNode.replaceChild(newUserMenuBtn, userMenuBtn);
       
       newUserMenuBtn.addEventListener('click', (e) => {
           e.preventDefault();
           e.stopPropagation();
           console.log('👤 User menu clicked!');
           
           const isHidden = userMenuDropdown.style.display === 'none';
           console.log('Dropdown is currently:', isHidden ? 'HIDDEN' : 'VISIBLE');
           
           if (isHidden) {
               userMenuDropdown.style.display = 'block';
               userMenuDropdown.style.visibility = 'visible';
               userMenuDropdown.style.opacity = '1';
               userMenuDropdown.classList.remove('hidden');
               console.log('✅ Dropdown shown');
           } else {
               userMenuDropdown.style.display = 'none';
               userMenuDropdown.classList.add('hidden');
               console.log('❌ Dropdown hidden');
           }
       });
       
       console.log('✅ User menu click handler attached');
   } else {
       console.error('❌ User menu elements not found!');
   }
   
   // Close dropdown when clicking outside
   document.addEventListener('click', (e) => {
       if (!userMenuDropdown) return;
       
       if (userMenuDropdown.style.display === 'block') {
           const userMenuBtn = document.querySelector('.user-menu');
           if (userMenuBtn && !userMenuDropdown.contains(e.target) && !userMenuBtn.contains(e.target)) {
               userMenuDropdown.style.display = 'none';
               userMenuDropdown.classList.add('hidden');
               console.log('Dropdown closed (clicked outside)');
           }
       }
   });
   
   if (logoutBtn) {
       logoutBtn.addEventListener('click', handleLogout);
       console.log('✅ Logout button handler attached');
   } else {
       console.error('❌ Logout button not found!');
   }
   
   if (toggleDarkModeBtn) {
       toggleDarkModeBtn.addEventListener('click', (e) => {
           e.stopPropagation();
           toggleDarkMode();
       });
       console.log('✅ Dark mode toggle handler attached');
   } else {
       console.error('❌ Dark mode toggle button not found!');
   }
   
   console.log('✅ User menu setup complete');
}

function handleLogout() {
   console.log('Logging out...');
   showToast('Logging out...', 'info');
   
   setTimeout(() => {
       // Hide main app
       document.getElementById('mainApp').classList.add('hidden');
       
       // Show login screen
       document.getElementById('loginScreen').classList.remove('hidden');
       
       // Clear form fields
       document.getElementById('email').value = '';
       document.getElementById('password').value = '';
       
       // Close dropdown
       document.getElementById('userMenuDropdown').classList.add('hidden');
       
       showToast('You have been logged out', 'success');
   }, 800);
}

// ==================== //
// Utility Functions
// ==================== //

function formatTime(date) {
   const now = new Date();
   const diff = now - date;
   const days = Math.floor(diff / (1000 * 60 * 60 * 24));

   if (days === 0) return 'Today';
   if (days === 1) return 'Yesterday';
   if (days < 7) return `${days} days ago`;
   
   return date.toLocaleDateString();
}

// ==================== //
// Animation on Load
// ==================== //

window.addEventListener('load', () => {
   document.body.classList.add('loaded');
});

console.log('✨ SortMyMail - AI-powered email management system initialized');