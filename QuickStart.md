# SortMyMail - Quick Start Guide

## 🚀 All Features Implemented & Ready!

Every feature you requested is now fully functional. Here's how to use them:

---

## 1️⃣ Login
- Open `index.html` in your browser
- Enter ANY email and password (e.g., `demo@sortmymail.com` / `demo123`)
- Click "Sign in to your account"

---

## 2️⃣ Horizontal/Queue View

**Switch between views:**
- **Bucket View** (default): 4 columns showing Urgent, Today, Later, News
- **Queue View** (horizontal): Single column with prioritized sections

**How to switch:**
- Look for view toggle buttons in the filter bar (top right)
- Click list icon for Queue View
- Click grid icon for Bucket View

---

## 3️⃣ Create Custom Folder

**Step-by-Step:**

1. **Open Modal**
   - Click "+ Add folder" at bottom of sidebar

2. **Step 1: Basics**
   - Enter folder name (e.g., "Clients", "Invoices")
   - Choose a color (6 options available)
   - Select an icon (folder, briefcase, receipt, users, star)
   - Toggle "Show folder in sidebar"

3. **Step 2: Define Rules**
   - Select rule logic: "Match ALL" or "Match ANY"
   - Add filter rules:
     - **Sender/Domain**: emails from specific people/domains
     - **VIP Status**: only VIP senders
     - **Deadline**: by date
     - **Action Type**: specific actions required
     - **Keywords**: in subject or body
     - **Attachments**: has files attached
     - **Internal/External**: company emails vs external
     - **Language**: email language
     - **Time Frame**: received in specific period
     - **Newsletter/System**: automated messages
     - **Label**: tagged emails
   - Click "+ Add Another Rule" for multiple conditions

4. **Step 3: Live Preview**
   - See how many emails match your rules
   - View preview of matching emails (up to 10)
   - Review before creating

5. **Create**
   - Click "Create Folder"
   - Folder appears immediately in sidebar
   - Toast confirms creation

---

## 4️⃣ AI-Enhanced Email Composer

**Compose New Email:**

1. Click "Compose" button (top right)

2. **Fill in details:**
   - To: recipient email
   - Subject: email subject
   - Body: your message

3. **Use AI Enhancements:**
   - Click AI action buttons on the right:
     - **Improve Writing**: enhance clarity and flow
     - **Make Shorter**: condense message
     - **Expand Details**: add more context
     - **More Professional**: formal tone
     - **More Friendly**: casual tone
     - **Fix Grammar**: correct mistakes

4. **Adjust Settings:**
   - Select **Tone**: Professional, Friendly, Formal, Casual
   - Choose **Length**: Short, Medium, Long

5. **Send Options:**
   - Click "Send" to send immediately
   - Click "Save Draft" to save for later
   - Click "Discard" to cancel

**Reply to Email:**

1. Open any email thread
2. Click "Write custom reply" button
3. Compose modal opens with "To" and "Subject" pre-filled
4. Use AI features as above

---

## 5️⃣ Smart Calendar

**Access Calendar:**
- Click "Calendar" in the sidebar (between Drafts and Custom Folders section)

**Features:**

1. **View Events**
   - Monthly calendar view
   - Navigate months with arrow buttons
   - Click "Today" to return to current month

2. **Detected Events Panel**
   - Right side shows events detected from your emails
   - Each event shows:
     - Event title (from email action/subject)
     - Date
     - Source email sender

3. **Add Events to Calendar**
   - Review detected event
   - Click "Add to Calendar" to accept
   - Event appears on calendar immediately
   - Button changes to "✓ Added"
   - **User-in-the-loop**: Only events YOU approve are added!

4. **Color-Coded Events**
   - Urgent events: Red
   - Normal events: Blue
   - Today's date: Highlighted with purple background

---

## 6️⃣ Dark Mode

**Enable Dark Mode:**

1. Click your user avatar (bottom of sidebar)
2. Select "Dark Mode" from dropdown menu
3. Interface switches instantly to dark theme

**Features:**
- Automatic persistence (saved in browser)
- Optimized colors for reduced eye strain
- Works across all screens and modals
- Toggle anytime from user menu

**Disable Dark Mode:**
- Same process: Click avatar → "Light Mode"

---

## 7️⃣ Logout

**How to Logout:**

1. Click user avatar at bottom of sidebar
2. Select "Logout" from dropdown
3. Returns to login screen
4. All session data cleared

---

## 🎯 Pro Tips

### Keyboard Shortcuts
- `Cmd/Ctrl + K`: Focus search bar
- `Esc`: Close any open modal

### Drag & Drop
- Grab any email card
- Drag to different bucket
- System learns from your preferences
- Toast notification confirms learning

### Why Tooltips
- Hover over "?" icon in bucket headers
- See AI reasoning for email placement
- Understand prioritization logic

### Email Search
- Type in search bar at top
- Searches sender, subject, and preview text
- Real-time filtering

### Filter Pills
- Click pills to filter emails:
  - **All**: Show everything
  - **Unread**: Only unread emails
  - **Attachments**: Emails with files
  - **VIP**: From VIP senders only
  - **This Week**: Recent emails

---

## 📱 Mobile Usage

- Fully responsive design
- Touch-friendly interactions
- Optimized for tablets and phones
- All features work on mobile

---

## 🎨 Customization

### Add Your Own Emails

1. Open `app.js`
2. Find `emailData` object
3. Add to any bucket (urgent, today, later, news):

```javascript
emailData.urgent.push({
    id: 999,
    sender: "Your Name",
    email: "your@email.com",
    time: "10:00 AM",
    subject: "Your Subject",
    preview: "Email preview text...",
    badges: [
        { text: "Due today", type: "due" },
        { text: "Action: Review", type: "action" }
    ],
    summary: "AI summary of email",
    action: "What needs to be done",
    deadline: "Today, 5:00 PM",
    fullBody: "Full email content..."
});
```

### Change Theme Colors

1. Open `styles.css`
2. Modify CSS variables in `:root`:

```css
:root {
    --primary-500: #your-color;
    --urgent-500: #your-color;
    /* etc. */
}
```

---

## 🐛 Troubleshooting

**Dark mode not working?**
- Clear browser cache
- Check browser localStorage is enabled

**Calendar not showing events?**
- Events are detected from emails with deadlines
- Check email data has `deadline` field set

**Compose modal AI not working?**
- Type some text first
- AI needs content to enhance

**Folder creation failing?**
- Must enter folder name
- Must add at least one rule

---

## ✅ Feature Checklist

All requested features are implemented:

- ✅ **Horizontal perspective** - Queue View ready
- ✅ **Create folder** - Full 3-step wizard with live preview
- ✅ **Logout** - User menu with logout option
- ✅ **Smart calendar** - Event detection with user approval
- ✅ **Email composer** - Full AI-enhanced compose/reply
- ✅ **Dark mode** - Complete dark theme with persistence

---

## 🎉 You're All Set!

Everything is ready to use. Just open `index.html` and start exploring!

**No installation, no build process, no dependencies needed.**

---

**Questions?** Check the full README.md for detailed documentation.

**Want to customize?** All code is well-commented and easy to modify.

Enjoy SortMyMail! 🚀