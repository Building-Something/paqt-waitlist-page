# 🎯 Google Forms Waitlist Setup Guide

This guide will walk you through setting up Google Forms to collect waitlist signups using Google Apps Script.

## 🚀 Quick Setup (5 minutes)

### **Step 1: Create Google Sheet**
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new sheet called **"Paqt Waitlist"**
3. Add these columns in row 1:
   - **A1**: `Email`
   - **B1**: `Company`
   - **C1**: `Date`
   - **D1**: `Source`

### **Step 2: Set Up Google Apps Script**
1. In your sheet, go to **Extensions > Apps Script**
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add new row with timestamp
    sheet.appendRow([
      data.email,
      data.company || '',
      new Date(),
      'website'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Successfully added to waitlist'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
}

function doGet(e) {
  // Handle GET requests (for testing and CORS)
  if (e && e.parameter && e.parameter.email) {
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      
      // Add new row with timestamp
      sheet.appendRow([
        e.parameter.email,
        e.parameter.company || '',
        new Date(),
        'website'
      ]);
      
      return ContentService.createTextOutput('Successfully added to waitlist')
        .setHeader('Access-Control-Allow-Origin', '*');
    } catch (error) {
      return ContentService.createTextOutput('Error: ' + error.toString())
        .setHeader('Access-Control-Allow-Origin', '*');
    }
  }
  
  return ContentService.createTextOutput('Waitlist API is running')
    .setHeader('Access-Control-Allow-Origin', '*');
}
```

### **Step 3: Deploy as Web App**
1. Click **Deploy > New deployment**
2. Choose **Web app**
3. Set **Execute as**: `Me`
4. Set **Who has access**: `Anyone`
5. Click **Deploy**
6. **Copy the URL** it gives you

### **Step 4: Update Your Code**
1. Open `src/components/WaitlistForm.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual URL

### **Step 5: Test Everything**
1. Run `npm run dev`
2. Fill out the waitlist form
3. Check your Google Sheet - you should see a new row!

## 🎨 **What You Get:**

✅ **Free forever** - No monthly costs  
✅ **Easy to manage** - View data in Google Sheets  
✅ **Export anytime** - Download as CSV  
✅ **Real-time updates** - See signups instantly  
✅ **No backend needed** - Google handles everything  
✅ **CORS support** - Works from any domain  

## 🔧 **How It Works:**

1. **User fills out form** on your website
2. **Form sends data** to Google Apps Script via GET request
3. **Script adds new row** to Google Sheet
4. **You can view all signups** in real-time

## 📊 **Managing Your Waitlist:**

- **View signups** in Google Sheets
- **Export data** as CSV for email marketing
- **Filter and sort** by any column
- **Share access** with team members
- **Set up notifications** for new signups

## 🚨 **Important Notes:**

- **Keep your script URL private** (don't share publicly)
- **Test thoroughly** before going live
- **Monitor your sheet** for any errors
- **Backup data** regularly by exporting
- **The script now handles both GET and POST** requests

## 🔍 **Troubleshooting:**

### **If you get CORS errors:**
- The script now includes proper CORS headers
- Try using GET requests instead of POST
- Make sure you've deployed the updated script

### **If data isn't appearing:**
- Check the Google Apps Script execution logs
- Verify your sheet has the correct column headers
- Make sure the script is deployed as a web app

---

**🎉 That's it!** Your waitlist is now connected to Google Forms and ready to collect signups.
