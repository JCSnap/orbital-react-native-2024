from http.server import BaseHTTPRequestHandler, HTTPServer
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

class SimpleHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            payload = json.loads(body)
            message = payload.get("msg", "").strip()
        except Exception:
            self.send_error(400, "Invalid JSON in request body")
            return

        if not message:
            self.send_error(400, "Missing or empty 'msg' in request body")
            return

        to_send = "tell me more about the location in one sentence - " + message

        headers = {
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json"
        }
        data = {
            "model": "gpt-4",
            "messages": [{"role": "user", "content": to_send}]
        }

        try:
            response = requests.post(
                "https://api.openai.com/v1/chat/completions",
                headers=headers,
                data=json.dumps(data)
            )
            response.raise_for_status()
            result = response.json()
            reply = result["choices"][0]["message"]["content"]
        except Exception as e:
            reply = f"Error: {e}"

        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()
        self.wfile.write(json.dumps({"reply": reply}).encode())

if __name__ == "__main__":
    host = "localhost"
    port = 8000
    httpd = HTTPServer((host, port), SimpleHandler)
    print(f"Server running at http://{host}:{port}")
    httpd.serve_forever()

