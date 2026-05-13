import re

with open('ai-video-production.html', 'r') as f:
    content = f.read()

# 1. SEO
content = content.replace(
    '<title>Agentic AI Solutions for Business Growth | Impulse Digital</title>',
    '<title>AI Video Production Services | Impulse Digital</title>'
)
content = content.replace(
    'content="Build AI agents that respond, qualify leads, follow up, update systems, and reduce manual work. Impulse Digital creates Agentic AI systems for sales, marketing, support, and operations."',
    'content="Create AI-led videos for campaigns, explainers, launches, training, social media, and multilingual communication. Impulse Digital helps brands produce sharper video content faster."'
)

# 2. Hero
content = content.replace(
    '<h1 class="svc-hero-headline split-text">AI That Follows<br>Through.</h1>',
    '<h1 class="svc-hero-headline split-text">Imagine More.<br>Produce Faster.</h1>'
)
content = content.replace(
    '<p class="svc-hero-page-desc split-text">Leads come in. Customers ask questions. Teams get busy. Follow-ups slip. Agentic AI closes that gap. Impulse Digital builds AI agents that respond, qualify, follow up, update your systems, and bring your team in when human judgment matters. So your people spend less time chasing work and more time moving the business forward.</p>',
    '<p class="svc-hero-page-desc split-text">You have more stories to tell than traditional production can always keep up with. AI video gives those stories more room to move. More formats. More versions. More visual possibilities. More ways to turn one idea into content that works across platforms, audiences, and markets.<br><br>Impulse Digital creates AI-led videos for campaigns, explainers, product stories, training, social content, and multilingual communication, with human creative direction shaping every frame.<br><br>Think bigger. Move faster. Create more.</p>'
)
content = content.replace(
    '<span class="btn-text">Build Your First AI Workflow</span>',
    '<span class="btn-text">Start an AI Video Project</span>'
)
content = content.replace(
    '<span class="btn-text">See Practical Use Cases</span>',
    '<span class="btn-text">See What AI Video Can Do</span>'
)

# 3. Stats
content = content.replace(
    '<h2 class="svc-h2 split-text">Built to Reduce the Work That Slows Teams Down</h2>',
    '<h2 class="svc-h2 split-text">Built to Make Video Easier to Scale</h2>'
)
content = content.replace(
    'data-stat-target="92"',
    'data-stat-target="70"'
)
content = content.replace(
    'Client productivity improvement through AI-assisted workflows and automation.',
    'Lower production cost than traditional shoots.'
)
content = content.replace(
    'data-stat-target="3" data-stat-suffix="X" data-stat-decimals="1"',
    'data-stat-target="4" data-stat-suffix="X" data-stat-decimals="0"'
)
content = content.replace(
    'Faster task execution with custom agent systems built for marketing, sales, and operations.',
    'Faster content scalability using AI automation.'
)
content = content.replace(
    'data-stat-target="1000"',
    'data-stat-target="90"'
)
content = content.replace(
    'Hours saved monthly for clients through intelligent AI automation.',
    'Reduction in reshoots and retakes due to AI precision.'
)
content = content.replace(
    'Before deployment, we define what success should look like, from response speed and time saved to lead movement, resolution quality, and manual effort reduced.',
    'AI video works when the idea comes first. The tool helps produce, adapt, and scale it faster.'
)

with open('ai-video-production.html', 'w') as f:
    f.write(content)
