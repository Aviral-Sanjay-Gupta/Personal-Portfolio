# Excel Form Submission Setup Guide

This guide will help you connect your contact form to a Microsoft Excel spreadsheet or Google Sheets (which can be exported to Excel).

## Option 1: Google Sheets (Recommended - Free & Easy)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Submissions" (or any name you prefer)
4. Add headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Message`

### Step 2: Create Google Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the form data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾 icon)
4. Click **Deploy** → **New deployment**
5. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
6. Configure:
   - **Description**: Portfolio Contact Form
   - **Execute as**: Me
   - **Who has access**: Anyone
7. Click **Deploy**
8. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)
9. Click **Done**

### Step 3: Update Your React Code
1. Open `src/components/Contact.tsx`
2. Find this line (around line 25):
   ```typescript
   const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace it with your copied URL:
   ```typescript
   const SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```

### Step 4: Test
1. Run your app: `npm run dev`
2. Fill out and submit the contact form
3. Check your Google Sheet - you should see a new row!

### Step 5: Export to Excel (Optional)
- In Google Sheets, click **File** → **Download** → **Microsoft Excel (.xlsx)**
- You can do this anytime to get an Excel file with all submissions

---

## Option 2: Microsoft Excel Online with Power Automate

### Step 1: Create Excel Online Workbook
1. Go to [Office.com](https://office.com) and sign in
2. Open **Excel** and create a new workbook
3. Save it to **OneDrive** with name "Portfolio-Contacts"
4. Add headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Message`
5. Format as a **Table** (Select headers → Insert → Table → check "My table has headers")
6. Name the table "ContactSubmissions"

### Step 2: Create Power Automate Flow
1. Go to [Power Automate](https://make.powerautomate.com)
2. Create a new **Automated cloud flow**
3. Choose trigger: **When an HTTP request is received**
4. Click **Create**

### Step 3: Configure the Flow
1. In the HTTP trigger, click **Generate from sample**
2. Paste this JSON:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!",
  "timestamp": "2024-01-01T12:00:00Z"
}
```
3. Click **Done**

4. Add new step → Search for **Excel Online (Business)**
5. Choose **Add a row into a table**
6. Configure:
   - **Location**: OneDrive
   - **Document Library**: OneDrive
   - **File**: Select your "Portfolio-Contacts.xlsx"
   - **Table**: ContactSubmissions
   - Map fields:
     - Timestamp: `triggerBody()?['timestamp']`
     - Name: `triggerBody()?['name']`
     - Email: `triggerBody()?['email']`
     - Message: `triggerBody()?['message']`

7. Add a **Response** action:
   - Status Code: `200`
   - Body:
   ```json
   {
     "status": "success",
     "message": "Contact saved"
   }
   ```

8. **Save** the flow
9. Copy the **HTTP POST URL** from the trigger

### Step 4: Update React Code
1. Open `src/components/Contact.tsx`
2. Replace the SHEET_URL with your Power Automate URL
3. Remove `mode: 'no-cors'` from the fetch options (Power Automate supports CORS)

---

## Option 3: SheetDB (Alternative)

### Step 1: Create a SheetDB Account
1. Go to [SheetDB.io](https://sheetdb.io)
2. Sign up for free (allows 100 requests/month)
3. Create a new Google Sheet (as in Option 1)
4. Connect it to SheetDB
5. Copy your API endpoint

### Step 2: Update React Code
```typescript
const SHEET_URL = 'https://sheetdb.io/api/v1/YOUR_SHEET_ID';

const response = await fetch(SHEET_URL, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: [{
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }]
  }),
});
```

---

## Troubleshooting

### Form submits but data doesn't appear
- Check your Google Apps Script deployment settings
- Make sure "Who has access" is set to **Anyone**
- Verify the Web App URL is correct

### CORS errors
- For Google Sheets, use `mode: 'no-cors'` in fetch
- For Power Automate, ensure CORS is enabled in the response

### Script execution error
- In Google Apps Script, go to **Project Settings** → Enable **Show "appsscript.json" manifest**
- Ensure your Google account has permission to run scripts

### Testing locally
- Open browser DevTools (F12)
- Check the Console for error messages
- Check Network tab to see if request is sent

---

## Security Tips

1. **Never expose sensitive API keys** in client-side code
2. Consider adding **rate limiting** to prevent spam
3. Add **email validation** on the server side
4. For production, use **environment variables** for URLs:
   ```typescript
   const SHEET_URL = import.meta.env.VITE_SHEET_URL;
   ```

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify your script URL is correct
3. Test the script directly in Google Apps Script editor
4. Ensure the Google Sheet is not in "View only" mode

---

**Recommended**: Option 1 (Google Sheets) is the easiest to set up and completely free!
