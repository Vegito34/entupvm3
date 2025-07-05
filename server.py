#!/usr/bin/env python3
"""
Simple HTTP Server for the University FAQ Website
Université Paul Valéry Montpellier 3 - ENT Assistance
"""

import http.server
import socketserver
import webbrowser
import sys
import os

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"🎓 Université Paul Valéry Montpellier 3 - ENT Assistance")
            print(f"🌐 Server running at: http://localhost:{PORT}")
            print(f"📁 Serving files from: {os.getcwd()}")
            print(f"🔗 Main page: http://localhost:{PORT}/index.html")
            print(f"📧 Webmail page: http://localhost:{PORT}/webmail.html")
            print("Press Ctrl+C to stop the server")
            print("-" * 50)
            
            # Automatically open the website in the default browser
            webbrowser.open(f'http://localhost:{PORT}/index.html')
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use. Try a different port.")
            sys.exit(1)
        else:
            raise

if __name__ == "__main__":
    main()