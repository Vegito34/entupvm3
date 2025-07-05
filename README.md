# Université Paul Valéry Montpellier 3 - ENT Assistance Website

This is a complete recreation of the University FAQ website for ENT (Environnement Numérique de Travail) assistance.

## Features

- **Comprehensive FAQ System**: Interactive FAQ with collapsible sections for students and personnel
- **Account Management**: Help with ENT account validation, password recovery, and login issues
- **Messaging Support**: Information about university webmail access
- **WiFi & VPN**: Connection guides for university network services
- **Administrative Help**: Guidance for registration, Moodle access, and course enrollment
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
├── index.html              # Main FAQ page
├── webmail.html           # Webmail access page
├── server.py              # Simple Python HTTP server
├── assets/
│   ├── css/
│   │   ├── bootstrap.css    # Bootstrap 3 framework
│   │   ├── style_faq2.css   # FAQ-specific styles
│   │   ├── demo.css         # Demo page styles
│   │   └── style1.css       # Webmail page styles
│   ├── js/
│   │   ├── jquery.js        # jQuery library
│   │   ├── bootstrap.js     # Bootstrap JavaScript
│   │   ├── effet_faq2.js    # FAQ interactive effects
│   │   └── postMessage-resize-iframe-in-parent.js
│   └── images/
│       ├── logoUPVENT.png   # University logo
│       └── faq/             # FAQ screenshot images
```

## How to Run

### Option 1: Using Python (Recommended)

1. Make sure you have Python 3 installed:
   ```bash
   python3 --version
   ```

2. Run the server:
   ```bash
   python3 server.py
   ```

3. The website will automatically open in your browser at `http://localhost:8000`

### Option 2: Using Node.js

If you have Node.js installed:

```bash
npx http-server . -p 8000 -o
```

### Option 3: Using PHP

If you have PHP installed:

```bash
php -S localhost:8000
```

### Option 4: Using any web server

You can serve the files using any web server (Apache, Nginx, etc.) by pointing the document root to this directory.

## Pages

- **Main FAQ Page** (`index.html`): Interactive FAQ system with student and personnel sections
- **Webmail Access** (`webmail.html`): Direct access to university webmail

## Features Detail

### FAQ Categories

**For Students:**
- Account management (validation, login issues, password recovery)
- ENT environment usage
- University messaging system
- WiFi access
- Administrative procedures (registration, Moodle, course enrollment)
- Student card issues

**For Personnel:**
- Account validation and management
- ENT customization
- Messaging system access
- WiFi and VPN access

### Interactive Elements

- Collapsible accordion sections
- Click-to-expand questions
- Navigation buttons between questions
- Modal dialogs for additional help
- Responsive design for mobile devices

## Technologies Used

- **HTML5**: Semantic markup with French language support
- **CSS3**: Bootstrap 3 framework with custom styling
- **JavaScript**: jQuery for interactive elements and Bootstrap components
- **Python**: Simple HTTP server for local development

## Browser Compatibility

The website is designed to work with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 7+ (with graceful degradation)
- Mobile browsers (responsive design)

## License

This project recreates the original University website functionality for educational and demonstration purposes.

---

**Université Paul Valéry Montpellier 3**  
ENT Assistance - FAQ System