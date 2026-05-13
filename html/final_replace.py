import re

with open('ai-video-production.html', 'r') as f:
    html = f.read()

def replace_block(text, start_str, end_str, replacement):
    start = text.find(start_str)
    if start == -1: return text
    end = text.find(end_str, start)
    if end == -1: return text
    end += len(end_str)
    return text[:start] + replacement + text[end:]

# 1. SEO & Navigation
html = html.replace('<title>Agentic AI Solutions for Business Growth | Impulse Digital</title>', '<title>AI Video Production Services | Impulse Digital</title>')
html = html.replace('Build AI agents that respond, qualify leads, follow up, update systems, and reduce manual work. Impulse Digital creates Agentic AI systems for sales, marketing, support, and operations.', 'Create AI-led videos for campaigns, explainers, launches, training, social media, and multilingual communication. Impulse Digital helps brands produce sharper video content faster.')

# Add custom override style for the underline highlight
style_override = '''
  <style>
    /* Override strikethrough to be an underline highlight for pros */
    .svc-problem-gaps .gap-text::after {
      top: 100% !important;
      height: 2px !important;
    }
  </style>
</head>'''
html = html.replace('</head>', style_override)

# 2. Hero
html = html.replace('AI That Follows<br>Through.', 'Imagine More.<br>Produce Faster.')

hero_start = '<p class="svc-hero-page-desc split-text">'
hero_end = '</p>'
hero_rep = '<p class="svc-hero-page-desc split-text">You have more stories to tell than traditional production can always keep up with. AI video gives those stories more room to move. More formats. More versions. More visual possibilities. More ways to turn one idea into content that works across platforms, audiences, and markets.<br><br>Impulse Digital creates AI-led videos for campaigns, explainers, product stories, training, social content, and multilingual communication, with human creative direction shaping every frame.<br><br>Think bigger. Move faster. Create more.</p>'
html = replace_block(html, hero_start, hero_end, hero_rep)

html = html.replace('Build Your First AI Workflow', 'Start an AI Video Project')
html = html.replace('See Practical Use Cases', 'See What AI Video Can Do')

# 3. Stats
html = html.replace('Built to Reduce the Work That Slows Teams Down', 'Built to Make Video Easier to Scale')
html = html.replace('data-stat-target="92"', 'data-stat-target="70"')
html = html.replace('Client productivity improvement through AI-assisted workflows and automation.', 'Lower production cost than traditional shoots.')
html = html.replace('data-stat-target="3" data-stat-suffix="X" data-stat-decimals="1"', 'data-stat-target="4" data-stat-suffix="X" data-stat-decimals="0"')
html = html.replace('Faster task execution with custom agent systems built for marketing, sales, and operations.', 'Faster content scalability using AI automation.')
html = html.replace('data-stat-target="1000"', 'data-stat-target="90"')
html = html.replace('Hours saved monthly for clients through intelligent AI automation.', 'Reduction in reshoots and retakes due to AI precision.')
html = html.replace('Before deployment, we define what success should look like, from response speed and time saved to lead movement, resolution quality, and manual effort reduced.', 'AI video works when the idea comes first. The tool helps produce, adapt, and scale it faster.')

# 4. Problem
html = html.replace('It’s Not Just a Resource Problem.<br>It’s a Workflow Problem.', 'One Idea Should<br>Travel Further.')
p_start = '<div class="svc-problem-body">'
p_end = '</div>\n        </div>\n      </div>\n    </section>'
p_rep = '''<div class="svc-problem-body">
            <p>A strong idea should not live as one video.</p>
            <p>It should become:</p>
            <ul class="svc-problem-gaps">
              <li><span class="gap-mark"><svg viewBox="0 0 24 24"><path d="M12 2L22 22H2L12 2Z"/></svg></span><span class="gap-text">A campaign film, a product story</span></li>
              <li><span class="gap-mark"><svg viewBox="0 0 24 24"><path d="M12 2L22 22H2L12 2Z"/></svg></span><span class="gap-text">A teaser, a vertical cut</span></li>
              <li><span class="gap-mark"><svg viewBox="0 0 24 24"><path d="M12 2L22 22H2L12 2Z"/></svg></span><span class="gap-text">A training asset, a sales explainer, and a multilingual version</span></li>
            </ul>
            <p class="pivot">That is where AI video becomes powerful.</p>
            <p>It helps you get more from every idea, every script, every campaign, and every visual direction without starting from scratch each time.</p>
          </div>
        </div>
      </div>
    </section>'''
html = replace_block(html, p_start, p_end, p_rep)

# 5. VS Section
html = html.replace('AI That Does More Than Answer', 'AI Video With a Human Eye')
html = html.replace('<div class="svc-vs-label">A Chatbot</div>', '<div class="svc-vs-label">AI Video Tools</div>')
html = html.replace('<span class="svc-vs-strike">replies.</span>', '<span class="svc-vs-strike">generate.</span>')
html = html.replace('<div class="svc-vs-label">Agentic AI</div>', '<div class="svc-vs-label">Creative Direction</div>')
html = html.replace('takes <span class="svc-vs-highlight">the next step</span>.', 'tells <span class="svc-vs-highlight">a story</span>.')

vs_pipe_start = '<div class="svc-vs-pipeline">'
vs_pipe_end = '</div>\n          <p class="svc-vs-closing">'
vs_pipe_rep = '<div style="height: 3rem;"></div>\n          <p class="svc-vs-closing" style="font-size: 1.15rem; line-height: 1.7;">'
html = replace_block(html, vs_pipe_start, vs_pipe_end, vs_pipe_rep)

html = html.replace('AI should not replace the people who understand your business. It should remove the repetitive work that stops them from doing their best work.', 'AI can generate visuals, avatars, voiceovers, edits, and variations. But taste still matters. So does context. Emotion. Pacing. Brand tone. Audience understanding.<br><br>Impulse Digital brings the creative direction that makes AI-led video feel intentional, useful, and brand-ready.<br><br><span style="color: white; font-weight: 500;">The goal is not AI-looking content. The goal is better video, made faster.</span>')


# 6. Uses
html = html.replace('Where Agentic AI Creates Business Leverage', 'Where AI Video Creates Business Leverage')

uses_start = '<div class="svc-uses-grid">'
uses_end = '</div>\n      </div>\n    </section>'
uses_rep = '''<div class="svc-uses-grid">
          <div class="svc-use-card" data-cursor="VIEW">
            <div class="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 class="svc-use-title">Campaign and Brand Films</h3>
            <p class="svc-use-body">Create campaign videos with more speed, scale, and creative flexibility.</p>
            <div class="svc-use-outcome">Useful for launch stories, festive campaigns, cause-led films, digital campaigns, and social-first storytelling.</div>
          </div>
          <div class="svc-use-card" data-cursor="VIEW">
            <div class="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 class="svc-use-title">Product and Explainer Videos</h3>
            <p class="svc-use-body">Make products, services, processes, and complex ideas easier to understand.</p>
            <div class="svc-use-outcome">Useful for product walkthroughs, B2B explainers, feature videos, category education, and sales support.</div>
          </div>
          <div class="svc-use-card" data-cursor="VIEW">
            <div class="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 class="svc-use-title">Social-First Video Assets</h3>
            <p class="svc-use-body">Create more short-form content from one strong creative direction.</p>
            <div class="svc-use-outcome">Useful for Reels, Shorts, hooks, teasers, ad cutdowns, and performance creatives.</div>
          </div>
          <div class="svc-use-card" data-cursor="VIEW">
            <div class="svc-use-corner"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></div>
            <h3 class="svc-use-title">Training and Corporate Comm.</h3>
            <p class="svc-use-body">Make internal communication easier to create, repeat, and localise.</p>
            <div class="svc-use-outcome">Useful for onboarding, SOPs, HR messaging, leadership updates, training modules, and multilingual communication.</div>
          </div>
        </div>
      </div>
    </section>'''
html = replace_block(html, uses_start, uses_end, uses_rep)

# 7. Channels
html = html.replace('Built for the Channels Where Business Happens', 'Built for the Screens People Actually Watch')
html = html.replace('AI agents can be deployed across:', 'AI-led videos can be created and adapted for:')
c_start = '<div class="svc-channels-orbit">'
c_end = '</div>\n        </div>\n      </div>\n    </section>'
c_rep = '''<div class="svc-channels-orbit">
            <span class="svc-channel-chip" style="left: 18%; top: 20%;">Instagram Reels</span>
            <span class="svc-channel-chip" style="left: 50%; top: 8%;">YouTube Shorts</span>
            <span class="svc-channel-chip" style="left: 82%; top: 20%;">YouTube videos</span>
            <span class="svc-channel-chip" style="left: 92%; top: 50%;">LinkedIn videos</span>
            <span class="svc-channel-chip" style="left: 82%; top: 80%;">Website banners</span>
            <span class="svc-channel-chip" style="left: 50%; top: 92%;">Digital ads</span>
            <span class="svc-channel-chip" style="left: 18%; top: 80%;">Product explainers</span>
            <span class="svc-channel-chip" style="left: 8%; top: 50%;">Sales decks</span>
            <span class="svc-channel-chip" style="left: 35%; top: 35%;">Training modules</span>
            <span class="svc-channel-chip" style="left: 65%; top: 35%;">Employer branding</span>
            <span class="svc-channel-chip" style="left: 35%; top: 65%;">Internal communication</span>
            <span class="svc-channel-chip" style="left: 65%; top: 65%;">Multilingual updates</span>
          </div>
        </div>
        <p style="text-align: center; color: var(--soft-grey); font-size: 1.15rem; margin-top: 3rem; font-style: italic;">One idea can become a film, a teaser, a vertical cut, an internal video, and an ad asset.<br>That is where AI starts creating scale.</p>
      </div>
    </section>'''
html = replace_block(html, c_start, c_end, c_rep)

# 8. Connected Systems
s_start = '<div class="svc-handoff" aria-hidden="true">\n      <div class="svc-handoff-line"></div>\n      <div class="svc-handoff-mark"><svg viewBox="801 344 274 272">\n          <use href="#impulse-mark" />\n        </svg></div>\n    </div>\n\n    <!-- ============================================================\n         CONNECTED SYSTEMS\n         ============================================================ -->\n    <section class="svc-section glass-panel">'
s_end = '</section>\n\n    <div class="svc-handoff" aria-hidden="true">'
html = replace_block(html, s_start, s_end, '<div class="svc-handoff" aria-hidden="true">')

# 9. Guardrails
html = html.replace('Speed Where It Can Be.<br>Control Where It Should Be.', 'Directed Like a Story.<br>Built With AI.')
html = html.replace('Autonomy is only useful if it’s safe.', 'AI video needs direction.')
html = html.replace('We build AI agents with strict guardrails so they never hallucinate answers, make unapproved offers, or access restricted data.', 'Without it, the output can look random, inconsistent, or forgettable.<br><br>We focus on:')

g_start = '<div class="svc-guard-list">'
g_end = '</div>\n        <h3 class="svc-guard-punchline">'
g_rep = '''<div class="svc-guard-list">
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Message clarity</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Script and structure</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Visual treatment</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Avatar, voice, and style consistency</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">AI-generated scenes and edits</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Voiceovers and language versions</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Human editing and final polish</div>
          </div>
          <div class="svc-guard-row" style="grid-template-columns: 60px 1fr; padding: 1.5rem 0;">
            <span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>
            <div class="svc-guard-title">Brand-safe review</div>
          </div>
        </div>
        <h3 class="svc-guard-punchline">'''
html = replace_block(html, g_start, g_end, g_rep)
html = html.replace('Speed matters.<br><span class="punch-loud">Control matters more.</span>', 'The tool creates the asset.<br><span class="punch-loud" style="font-size: 0.8em;">The thinking decides whether it is worth watching.</span>')

# 10. Process
html = html.replace('How We Build AI Agents Around Real Work', 'How We Build AI-Led Videos')
scrub_titles = ['Audit and Map', 'Design the Logic', 'Connect and Integrate', 'Test and Train', 'Deploy and Refine']
new_scrub_titles = ['Find the Message', 'Shape the Script', 'Build the Visual Direction', 'Generate and Assemble', 'Polish and Adapt']
scrub_descs = [
    'We break down your existing manual processes to find where AI can create the most leverage.',
    'We build the decision trees, prompts, and conditions the agent will use to act autonomously.',
    'We wire the agent into your CRM, databases, or communication channels securely.',
    'We run the agent through historical data and edge cases to ensure absolute accuracy.',
    'We launch the agent in a controlled environment and tighten its responses over time.'
]
new_scrub_descs = [
    'We define the audience, goal, emotion, and business purpose.',
    'We write the structure, scenes, voiceover, supers, and key moments.',
    'We define the style, mood, references, avatars, frames, and production approach.',
    'We use AI tools to create visuals, motion, avatars, voiceovers, edits, and variations.',
    'We refine pacing, sound, subtitles, transitions, brand consistency, and platform versions.'
]
for i in range(5):
    html = html.replace(f'<h3 class="scrub-title text-fill">{scrub_titles[i]}</h3>', f'<h3 class="scrub-title text-fill">{new_scrub_titles[i]}</h3>')
    html = html.replace(f'<p class="scrub-desc">{scrub_descs[i]}</p>', f'<p class="scrub-desc">{new_scrub_descs[i]}</p>')

scrub_end_start = '</div>\n      </div>\n    </section>'
scrub_end_rep = '''</div>
        <div style="text-align: center; max-width: 800px; margin: 5rem auto 0; padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.08);">
          <p style="font-size: 1.25rem; line-height: 1.6; color: var(--soft-grey); margin-bottom: 1rem; opacity: 0.85;">The aim is not to generate video and hope it works.</p>
          <p style="font-size: 1.4rem; line-height: 1.5; color: var(--white); font-family: var(--font-heading); font-weight: 600;">The aim is to make strong video ideas easier to produce and scale.</p>
        </div>
      </div>
    </section>'''
html = html.replace(scrub_end_start, scrub_end_rep, 1)

# 11. Logos
html = html.replace('Trusted by Teams That Expect Thinking Before Execution', 'Trusted by Brands That Expect More Than Output')

# 12. Fit
html = html.replace('Agentic AI Is Right for You If', 'AI Video Production Is Right for You If')
fit_start = '<ul class="svc-fit-list">'
fit_end = '</ul>'
fit_rep = '''<ul class="svc-fit-list">
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You need more video without turning every asset into a full shoot.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You want more cuts, formats, or language versions from one idea.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You need product, explainer, or training videos faster.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You need short-form content more often.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You want AI-led production, but not AI-looking content.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You want speed without losing brand consistency.</li>
            <li><span class="mark-glyph"><svg viewBox="801 344 274 272"><use href="#impulse-mark" /></svg></span>You want your ideas to travel further across platforms.</li>
          </ul>'''
html = replace_block(html, fit_start, fit_end, fit_rep)
html = html.replace('If your team is spending more time managing software than doing the work that moves the needle, Agentic AI can fix that.', 'If your brand has more stories to tell, AI video can help you create more from every idea.')

# 13. Final CTA
html = html.replace('Build AI Around the Work That Matters Most', 'Build the Video Your Idea Deserves')
html = html.replace('Stop hiring people to do the work of machines. Start building intelligent systems that give your team their time back.', 'Tell us what the video needs to achieve. We will help you decide whether AI video, traditional production, or a hybrid route gives you the strongest creative and commercial outcome.')
html = html.replace('Start an Agentic AI Project', 'Start an AI Video Project')
html = html.replace('See Practical Use Cases', 'Talk to Impulse Digital')
html = html.replace('Technology should scale the business, not just the IT budget.', 'No generic templates. No AI gimmicks. Just sharper visual storytelling, built faster.')

# 14. FAQs
html = html.replace('What to Know Before You Build Agentic AI', 'What to Know Before You Create With AI Video')

faq_start = '<div class="accordion">'
faq_end = '</div>\n      </div>\n    </section>'
faq_rep = '''<div class="accordion">
          <div class="acc-item">
            <div class="acc-header">
              <h3>What is AI video production?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>AI video production uses AI tools to support or create parts of the video process, including scripting, avatars, visuals, voiceovers, dubbing, editing, subtitles, and format adaptations. The best results still need human creative direction.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>Is AI video a replacement for traditional shoots?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>Not always. Some ideas need a live shoot. Some are better built with AI. Many work best as a hybrid.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>What types of videos can you create?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>Campaign films, explainers, product videos, social media videos, launch assets, training videos, onboarding videos, corporate communication, multilingual videos, and digital ad creatives.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>Will the video look obviously AI-generated?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>Not if it is directed properly. We focus on scripting, visual treatment, editing, sound, and brand checks so the output feels intentional.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>Can one video become multiple formats?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>Yes. One video direction can be adapted into vertical cuts, teasers, short-form edits, ad versions, internal videos, and presentation-ready assets.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>What do you need from us to start?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>We need the objective, audience, message, brand guidelines, references, timelines, platforms, and any mandatory product, legal, or compliance details.</p>
            </div>
          </div>
          <div class="acc-item">
            <div class="acc-header">
              <h3>Is AI video right for every brand?</h3><span class="acc-icon">+</span>
            </div>
            <div class="acc-content">
              <p>AI video is right when the idea benefits from speed, scale, flexibility, multilingual adaptation, or visual imagination.<br>It is not right when real people, live proof, or documentary credibility are essential.</p>
            </div>
          </div>
        </div>
      </div>
    </section>'''
html = replace_block(html, faq_start, faq_end, faq_rep)

# Finally, clean up JS animation references for removed blocks
html = html.replace('// --- 6. Pipeline sequential lighting ---', '/* Pipeline removed */\n/*')
html = html.replace('// --- 7. Connected Systems', '*/\n// --- 7. Connected Systems')

with open('ai-video-production.html', 'w') as f:
    f.write(html)
