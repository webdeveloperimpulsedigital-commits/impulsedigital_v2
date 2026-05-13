import re
import sys

def replace_between(content, start_marker, end_marker, replacement):
    start = content.find(start_marker)
    if start == -1:
        print(f"Start marker not found: {start_marker[:30]}...")
        return content
    end = content.find(end_marker, start)
    if end == -1:
        print(f"End marker not found: {end_marker[:30]}...")
        return content
    end += len(end_marker)
    return content[:start] + replacement + content[end:]

with open('ai-video-production.html', 'r') as f:
    html = f.read()

# --- Problem Section ---
start_problem = '<!-- ============================================================\n         PROBLEM'
end_problem = '</section>'
problem_replacement = '''<!-- ============================================================
         PROBLEM — One Idea Should Travel Further
         ============================================================ -->
    <section class="svc-problem">
      <div class="container">
        <div class="svc-problem-grid">
          <div>
            <h2 class="svc-h2 split-text" style="margin-bottom: 0;">One Idea Should Travel Further</h2>
          </div>
          <div class="svc-problem-body">
            <p>A strong idea should not live as one video.</p>
            <p>It should become a campaign film, a product story, a teaser, a vertical cut, a training asset, a sales explainer, and a multilingual version when needed.</p>
            <p class="pivot">That is where AI video becomes powerful.</p>
            <p style="color: var(--soft-grey); font-size: 1.05rem; line-height: 1.6;">It helps you get more from every idea, every script, every campaign, and every visual direction without starting from scratch each time.</p>
          </div>
        </div>
      </div>
    </section>'''
html = replace_between(html, start_problem, end_problem, problem_replacement)


# --- VS Section ---
start_vs = '<!-- ============================================================\n         AI THAT DOES MORE THAN ANSWER'
end_vs = '</section>'
vs_replacement = '''<!-- ============================================================
         AI VIDEO WITH A HUMAN EYE
         ============================================================ -->
    <section class="svc-vs">
      <div class="container">
        <h2 class="svc-h2 split-text">AI Video With a Human Eye</h2>
        <div class="svc-vs-stack">
          <div class="svc-vs-line line-quiet">
            <div class="svc-vs-label">AI Video Tools</div>
            <div class="svc-vs-statement"><span class="svc-vs-strike">generate.</span></div>
          </div>
          <div class="svc-vs-line">
            <div class="svc-vs-label">Creative Direction</div>
            <div class="svc-vs-statement">tells <span class="svc-vs-highlight">a story</span>.</div>
          </div>
          <div style="height: 3rem;"></div>
          <p class="svc-vs-closing" style="font-size: 1.2rem; line-height: 1.7;">AI can generate visuals, avatars, voiceovers, edits, and variations. But taste still matters. So does context. Emotion. Pacing. Brand tone. Audience understanding.<br><br>Impulse Digital brings the creative direction that makes AI-led video feel intentional, useful, and brand-ready.<br><br><span style="color: white; font-weight: 500;">The goal is not AI-looking content. The goal is better video, made faster.</span></p>
        </div>
      </div>
    </section>'''
html = replace_between(html, start_vs, end_vs, vs_replacement)


# --- Uses Section ---
start_uses = '<!-- ============================================================\n         USE CASES'
end_uses = '</section>'
uses_replacement = '''<!-- ============================================================
         USE CASES — Where AI Video Creates Business Leverage
         ============================================================ -->
    <section class="svc-uses glass-panel" id="use-cases">
      <div class="container">
        <h2 class="svc-h2 split-text">Where AI Video Creates Business Leverage</h2>
        <div class="svc-uses-grid">
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
html = replace_between(html, start_uses, end_uses, uses_replacement)


# --- Channels Section ---
start_channels = '<!-- ============================================================\n         CHANNELS'
end_channels = '</section>'
channels_replacement = '''<!-- ============================================================
         CHANNELS — Built for the Screens People Actually Watch
         ============================================================ -->
    <section class="svc-channels">
      <div class="container">
        <h2 class="svc-h2 split-text">Built for the Screens People Actually Watch</h2>
        <p class="svc-channels-intro">AI-led videos can be created and adapted for:</p>
        <div class="svc-channels-stage" id="channels-stage">
          <svg class="svc-channels-orbit-svg" id="channels-orbit-lines" aria-hidden="true"></svg>
          <div class="svc-channels-center" aria-hidden="true">
            <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg">
              <path d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" />
            </svg>
          </div>
          <div class="svc-channels-orbit">
            <span class="svc-channel-chip" style="left: 18%; top: 20%;">Instagram Reels</span>
            <span class="svc-channel-chip" style="left: 50%; top: 8%;">YouTube Shorts</span>
            <span class="svc-channel-chip" style="left: 82%; top: 20%;">YouTube videos</span>
            <span class="svc-channel-chip" style="left: 92%; top: 50%;">LinkedIn videos</span>
            <span class="svc-channel-chip" style="left: 82%; top: 80%;">Website banners</span>
            <span class="svc-channel-chip" style="left: 50%; top: 92%;">Digital ads</span>
            <span class="svc-channel-chip" style="left: 18%; top: 80%;">Product explainers</span>
            <span class="svc-channel-chip" style="left: 8%; top: 50%;">Sales decks</span>
            <span class="svc-channel-chip" style="left: 30%; top: 35%;">Training modules</span>
            <span class="svc-channel-chip" style="left: 70%; top: 35%;">Employer branding</span>
            <span class="svc-channel-chip" style="left: 30%; top: 65%;">Internal communication</span>
            <span class="svc-channel-chip" style="left: 70%; top: 65%;">Multilingual updates</span>
          </div>
        </div>
        <p style="text-align: center; color: var(--white); font-size: 1.25rem; font-style: italic; margin-top: 4rem;">One idea can become a film, a teaser, a vertical cut, an internal video, and an ad asset.<br>That is where AI starts creating scale.</p>
      </div>
    </section>'''
html = replace_between(html, start_channels, end_channels, channels_replacement)


# --- Remove Connected Systems ---
start_systems = '<div class="svc-handoff" aria-hidden="true">\n      <div class="svc-handoff-line"></div>\n      <div class="svc-handoff-mark"><svg viewBox="801 344 274 272">\n          <use href="#impulse-mark" />\n        </svg></div>\n    </div>\n\n    <!-- ============================================================\n         CONNECTED SYSTEMS\n         ============================================================ -->\n    <section class="svc-section glass-panel">'
end_systems = '</section>\n\n    <div class="svc-handoff" aria-hidden="true">'
html = replace_between(html, start_systems, end_systems, '<div class="svc-handoff" aria-hidden="true">')


# --- Guardrails Section ---
start_guardrails = '<!-- ============================================================\n         GUARDRAILS'
end_guardrails = '</section>'
guardrails_replacement = '''<!-- ============================================================
         GUARDRAILS — Directed Like a Story. Built With AI.
         ============================================================ -->
    <section class="svc-guardrails">
      <div class="container">
        <h2 class="svc-h2 split-text">Directed Like a Story.<br>Built With AI.</h2>
        <div class="svc-guard-intro">
          <p>AI video needs direction.</p>
          <p class="pivot">Without it, the output can look random, inconsistent, or forgettable.</p>
          <p style="margin-top: 1.5rem;">We focus on:</p>
        </div>
        <div class="svc-guard-list">
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
        <p style="text-align: center; font-size: 1.5rem; line-height: 1.6; margin-top: 4rem;">The tool creates the asset.<br><span style="color: var(--impulse-violet); font-family: var(--font-heading); font-weight: 700; font-size: 2rem;">The thinking decides whether it is worth watching.</span></p>
      </div>
    </section>'''
html = replace_between(html, start_guardrails, end_guardrails, guardrails_replacement)


# --- Process Section ---
start_process = '<!-- ============================================================\n         PROCESS'
end_process = '</section>'
process_replacement = '''<!-- ============================================================
         PROCESS — How We Build AI-Led Videos
         ============================================================ -->
    <section class="services glass-panel" id="process">
      <div class="container">
        <h2 class="section-heading split-text">How We Build AI-Led Videos</h2>
        <div class="scrub-container">
          <div class="scrub-item">
            <div class="scrub-left">
              <div class="service-mark-draw" aria-hidden="true"><svg viewBox="801 344 274 272"><path class="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <span class="service-num">01</span>
            </div>
            <div class="scrub-right">
              <h3 class="scrub-title text-fill">Find the Message</h3>
              <p class="scrub-desc">We define the audience, goal, emotion, and business purpose.</p>
            </div>
          </div>
          <div class="scrub-item">
            <div class="scrub-left">
              <div class="service-mark-draw" aria-hidden="true"><svg viewBox="801 344 274 272"><path class="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <span class="service-num">02</span>
            </div>
            <div class="scrub-right">
              <h3 class="scrub-title text-fill">Shape the Script</h3>
              <p class="scrub-desc">We write the structure, scenes, voiceover, supers, and key moments.</p>
            </div>
          </div>
          <div class="scrub-item">
            <div class="scrub-left">
              <div class="service-mark-draw" aria-hidden="true"><svg viewBox="801 344 274 272"><path class="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <span class="service-num">03</span>
            </div>
            <div class="scrub-right">
              <h3 class="scrub-title text-fill">Build the Visual Direction</h3>
              <p class="scrub-desc">We define the style, mood, references, avatars, frames, and production approach.</p>
            </div>
          </div>
          <div class="scrub-item">
            <div class="scrub-left">
              <div class="service-mark-draw" aria-hidden="true"><svg viewBox="801 344 274 272"><path class="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <span class="service-num">04</span>
            </div>
            <div class="scrub-right">
              <h3 class="scrub-title text-fill">Generate and Assemble</h3>
              <p class="scrub-desc">We use AI tools to create visuals, motion, avatars, voiceovers, edits, and variations.</p>
            </div>
          </div>
          <div class="scrub-item">
            <div class="scrub-left">
              <div class="service-mark-draw" aria-hidden="true"><svg viewBox="801 344 274 272"><path class="service-mark-svg-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" stroke="#543D98" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" /></svg></div>
              <span class="service-num">05</span>
            </div>
            <div class="scrub-right">
              <h3 class="scrub-title text-fill">Polish and Adapt</h3>
              <p class="scrub-desc">We refine pacing, sound, subtitles, transitions, brand consistency, and platform versions.</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; max-width: 800px; margin: 5rem auto 0; padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.08);">
          <p style="font-size: 1.25rem; line-height: 1.6; color: var(--soft-grey); margin-bottom: 1rem; opacity: 0.85;">The aim is not to generate video and hope it works.</p>
          <p style="font-size: 1.4rem; line-height: 1.5; color: var(--white); font-family: var(--font-heading); font-weight: 600;">The aim is to make strong video ideas easier to produce and scale.</p>
        </div>
      </div>
    </section>'''
html = replace_between(html, start_process, end_process, process_replacement)


# --- Logos Section ---
html = html.replace(
    'Trusted by Teams That Expect Thinking Before Execution',
    'Trusted by Brands That Expect More Than Output'
)


# --- Fit Section ---
start_fit = '<!-- ============================================================\n         RIGHT FOR YOU'
end_fit = '</section>'
fit_replacement = '''<!-- ============================================================
         RIGHT FOR YOU — AI Video Production Is Right for You If
         ============================================================ -->
    <section class="svc-fit">
      <div class="container">
        <div class="svc-fit-grid">
          <div>
            <h2 class="svc-h2 split-text">AI Video Production Is Right for You If</h2>
            <p class="svc-fit-closer">If your brand has more stories to tell, AI video can help you create more from every idea.</p>
          </div>
          <ul class="svc-fit-list">
            <li>You need more video without turning every asset into a full shoot.</li>
            <li>You want more cuts, formats, or language versions from one idea.</li>
            <li>You need product, explainer, or training videos faster.</li>
            <li>You need short-form content more often.</li>
            <li>You want AI-led production, but not AI-looking content.</li>
            <li>You want speed without losing brand consistency.</li>
            <li>You want your ideas to travel further across platforms.</li>
          </ul>
        </div>
      </div>
    </section>'''
html = replace_between(html, start_fit, end_fit, fit_replacement)


# --- Final CTA ---
start_cta = '<!-- ============================================================\n         FINAL CTA'
end_cta = '</section>'
cta_replacement = '''<!-- ============================================================
         FINAL CTA — Build the Video Your Idea Deserves
         ============================================================ -->
    <section class="svc-final-cta glass-panel">
      <div class="svc-final-cta-mark" aria-hidden="true">
        <svg viewBox="801 344 274 272" xmlns="http://www.w3.org/2000/svg"><path class="svc-final-cta-path" d="M1014.2,569.56c1.74-38.31.87-92.29-14.17-126.43-4.45-10.09-11.39-18.02-21.2-22.92-19.98-9.99-55.06-15.74-77.2-15.78l-54.99-.1c-11.88-.02-22.87-4.01-24.19-14.77-1.4-11.46,9.4-19.23,20.5-20.7,37.6-5.01,74.9-7.39,112.77-5.34,18.7,1.01,36.2,3.78,53.65,9.6,17.16,5.73,29.66,17.62,35.66,34.79s8.71,34.06,9.87,52.44c2.45,39.04-.02,77.43-5.33,116.08-1.52,11.09-10.07,21.87-21.85,19.47-10.45-2.12-14.04-14.54-13.51-26.33Z" fill="none" /></svg>
      </div>
      <div class="container">
        <h2 class="split-text">Build the Video Your Idea Deserves</h2>
        <p class="svc-final-cta-body">Tell us what the video needs to achieve. We will help you decide whether AI video, traditional production, or a hybrid route gives you the strongest creative and commercial outcome.</p>
        <div class="svc-final-cta-actions">
          <a href="#connect" class="btn" data-cursor="START">
            <span class="btn-text">Start an AI Video Project</span>
            <div class="btn-fill"></div>
          </a>
          <a href="#connect" class="btn" data-cursor="HI">
            <span class="btn-text">Talk to Impulse Digital</span>
            <div class="btn-fill"></div>
          </a>
        </div>
        <p class="svc-final-cta-footnote">No generic templates. No AI gimmicks. Just sharper visual storytelling, built faster.</p>
      </div>
    </section>'''
html = replace_between(html, start_cta, end_cta, cta_replacement)

# --- FAQ ---
start_faq = '<!-- ============================================================\n         FAQs'
end_faq = '</section>'
faq_replacement = '''<!-- ============================================================
         FAQs — What to Know Before You Create With AI Video
         ============================================================ -->
    <section class="faq glass-panel">
      <div class="container">
        <h2 class="section-heading split-text">What to Know Before You Create With AI Video</h2>
        <div class="accordion">
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
              <p>AI video is right when the idea benefits from speed, scale, flexibility, multilingual adaptation, or visual imagination. It is not right when real people, live proof, or documentary credibility are essential.</p>
            </div>
          </div>
        </div>
      </div>
    </section>'''
html = replace_between(html, start_faq, end_faq, faq_replacement)


with open('ai-video-production.html', 'w') as f:
    f.write(html)
