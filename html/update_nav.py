import re

files = ['index.html', 'agentic-ai.html', 'ai-video-production.html']

old_dropdown = """          <div class="dropdown-content">
            <a href="agentic-ai.html" class="dropdown-item">Agentic AI</a>
            <a href="index.html#services" class="dropdown-item">Growth Intelligence</a>
            <a href="index.html#services" class="dropdown-item">Brand Infrastructure</a>
          </div>"""

new_dropdown = """          <div class="dropdown-content">
            <a href="agentic-ai.html" class="dropdown-item">Agentic AI</a>
            <a href="ai-video-production.html" class="dropdown-item">AI Video Production</a>
            <a href="index.html#services" class="dropdown-item">Growth Intelligence</a>
            <a href="index.html#services" class="dropdown-item">Brand Infrastructure</a>
          </div>"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    if old_dropdown in content:
        content = content.replace(old_dropdown, new_dropdown)
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated {file}")
    else:
        print(f"Could not find old dropdown in {file}")

