# EmailJS Setup Instructions for Portfolio Contact Form

## 🚀 Quick Setup Guide

### Step 1: Create EmailJS Account
1. Go to [https://emailjs.com](https://emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - Select "Gmail"
   - Click "Connect Account" 
   - Sign in with `notification12457@gmail.com` or your preferred sending email
   - Allow EmailJS permissions
4. Copy the **Service ID** (something like `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Content:**
```
Subject: New Contact from {{from_name}} - Portfolio

Hi Debajyoti,

You received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Sender Reference: {{sender_email}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.

Best regards,
Portfolio Contact Form
```

**Template Variables:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{message}}` - The message content
- `{{sender_email}}` - Shows notification12457@gmail.com
- `{{to_email}}` - Your email (debajyotiupadhayaya@gmail.com)

4. Set the "To Email" field to: `{{to_email}}`
5. Set the "From Name" field to: `{{from_name}}`
6. Set the "Reply To" field to: `{{from_email}}`
7. Save and copy the **Template ID** (something like `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find "Public Key" section
3. Copy your **Public Key** (something like `abcXYZ123`)

### Step 5: Update Environment Variables
1. Open `.env` file in your portfolio root directory
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789  
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123
```

### Step 6: Test the Form
1. Save all files
2. Restart your development server: `npm run dev`
3. Go to `http://localhost:3001`
4. Fill out the contact form and submit
5. Check `debajyotiupadhayaya@gmail.com` for the email!

## 📧 How It Works

1. **User fills form** → Clicks "Send Message"
2. **EmailJS automatically sends email** to `debajyotiupadhayaya@gmail.com`
3. **From field shows** `notification12457@gmail.com` reference
4. **Reply-to is set** to the user's email for easy responses
5. **Success notification** appears to user
6. **Fallback**: If EmailJS fails, opens email client

## 🎯 Expected Result

When someone submits your contact form, you'll receive an email like:

```
From: John Doe <notification12457@gmail.com>
To: debajyotiupadhayaya@gmail.com
Subject: New Contact from John Doe - Portfolio

Hi Debajyoti,

You received a new message from your portfolio contact form:

From: John Doe
Email: john@example.com
Sender Reference: notification12457@gmail.com

Message:
Hi! I'd like to discuss a web development project...

---
Reply directly to this email to respond to John Doe.
```

## 🔧 Troubleshooting

**No emails received?**
- Check spam folder
- Verify EmailJS service is connected to correct email
- Check EmailJS dashboard for send logs
- Ensure `.env` values are correct

**Form shows error?**
- Check browser console for errors
- Verify all `.env` variables are set
- Try the fallback (email client) option

## 💳 EmailJS Limits

**Free Plan:**
- 200 emails/month
- Perfect for portfolio contact forms

**Paid Plans:**
- Higher limits available if needed

---

Once you complete this setup, your contact form will automatically send emails to `debajyotiupadhayaya@gmail.com` without requiring any backend server! 🎉