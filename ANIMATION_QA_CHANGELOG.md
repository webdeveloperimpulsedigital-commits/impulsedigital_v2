# Animation QA Changelog

- Added a route-level background reset boundary so global WebGL material state starts consistently after direct loads, internal navigation, and browser history navigation.
- Scoped the case-study tunnel layer to its section trigger and keep its render work dormant outside that section or under reduced motion.
- Stabilized home and service hero split-text reveals by waiting for fonts/dependencies, setting hidden split states before reveal, and cleaning up timelines and split instances.
- Cleared pending service background polling timers and reset particle tweens during service route cleanup.
- Replaced first-fold hero SplitType rebuilds with one font-gated block-level copy reveal across home, service templates, About, Services index, Contact, Careers, case-study index, and the employer-branding hero so visible hero copy is not rewrapped after render.
