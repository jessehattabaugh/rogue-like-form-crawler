# 🕯️ Rogue-like Form Crawler Style Guide: The Aesthetic of the Void

This grimoire outlines our aesthetic principles and coding practices to maintain a consistent atmosphere of digital occultism across the labyrinth.

## 📝 Code Structure & Formatting

### General Guidelines

-   **Indentation:** Use tabs for indentation, not spaces—each level deeper into the code is a step further into the void
-   **File Organization:** Group related functionality like components of a ritual
-   **Component Structure:** Each component should serve a singular arcane purpose

### Naming Conventions

-   **Files:** Use kebab-case for filenames (`eldritch-button.js`, not `eldritchButton.js`)
-   **Components:** Use PascalCase for component names (`EldritchButton`, not `eldritchButton`)
-   **Functions:** Use camelCase for function names (`summonEntity`, not `summon_entity`)
-   **CSS Classes:** Use kebab-case for CSS classes (`.void-container`, not `.voidContainer`)
-   **Constants:** Use UPPER_SNAKE_CASE for constants (`MAXIMUM_SANITY_LOSS`, not `maximumSanityLoss`)

### JavaScript Guidelines

-   **ES Modules:** Use ES modules exclusively for imports/exports—each module a page from a different grimoire
-   **Modern JavaScript:** Embrace template literals like incantations and destructuring like dissection
-   **Function Creation:** Only create new functions for code reuse (at least two call sites)—don't summon entities unnecessarily
-   **JSDoc Comments:** Include JSDoc type annotations as arcane sigils to guide the initiated

### CSS Guidelines

-   **Selectors:** Use simple, shallow selectors to invoke the right elements without disturbing others
-   **Variables:** Define CSS custom properties at the :root level for consistent theming across the void
-   **Nesting:** Avoid deeply nested CSS rules as they confuse the digital entities

## 🌑 Project-Specific Conventions

### Console Logging

-   Use two emojis per console message—one representing the file's domain, one for the specific message
-   Suggested emoji domains:
    -   🔮 Form generation
    -   💀 Player stats and damage
    -   🕯️ UI interactions
    -   🌙 Time-based events
    -   📜 Narrative elements
    -   🧪 State changes

### Form Element Guidelines

-   **Buttons:** Should pulse subtly when dangerous, remain still when safe
-   **Checkboxes:** May visually transform when selected to hint at their true nature
-   **Input Fields:** Should respond to input with subtle visual or audio feedback
-   **Select Dropdowns:** Options may rearrange based on time of day or player stats
-   **Radio Buttons:** Consider these as nodes in a ritual circle—their arrangement matters

## 🎨 Visual Design Guidelines

### Color Palette

```css
:root {
	--color-void: #121212;
	--color-void-lighter: #1e1e1e;
	--color-text-occult: #dacbf1;
	--color-text-mundane: #a6a6a6;
	--color-blood: #8b0000;
	--color-ritual: #7030a0;
	--color-arcane: #4a90e2;
	--color-warning: #ffa500;
	--color-success: #355e3b;
	--color-error: #cc0000;
	--shadow-inner: inset 0 0 10px rgba(0, 0, 0, 0.6);
	--glow-purple: 0 0 10px rgba(128, 0, 128, 0.6);
	--glow-blue: 0 0 10px rgba(0, 0, 255, 0.4);
}
```

### Typography

-   **Headings:** "Thoth", our eldritch serif font (fallback: serif)
-   **Body Text:** "Codex Sans", our readable sans-serif (system-ui, sans-serif)
-   **Ritualistic Text:** "Enochian", our special font for occult elements (monospace fallback)
-   **Font Sizes:** Use relative units (rem) with a base size of 16px
-   **Line Heights:** 1.5 for body text, 1.2 for headings

### Iconography

-   Use occult-themed SVG icons from our custom sigil library
-   Icon colors should respect our color palette
-   Icons may subtly animate on hover or during special time-based events

### Animation Guidelines

-   Keep animations subtle and purposeful—like whispers rather than shouts
-   More intense animations should be reserved for significant narrative moments
-   Time-based animations may become more pronounced during "witching hours" (midnight to 3am)

## 🌓 Time-Based Visual Changes

-   **Daytime Forms (6am-6pm):** More conventional, corporate aesthetic with subtle oddities
-   **Evening Forms (6pm-midnight):** Increasingly unusual with slight visual distortions
-   **Witching Hour (midnight-3am):** Most aberrant designs, increased animation, occult symbolism
-   **Pre-dawn (3am-6am):** Gradually returning to normalcy, but with lingering strangeness

## 🔮 Form Element States

-   **Neutral:** Standard appearance, minimal styling
-   **Beneficial:** Subtle blue or green glow, smooth animations
-   **Harmful:** Red undertones, slightly erratic animations
-   **Deceptive:** Appears beneficial but contains subtle warning signs (asymmetry, occasional glitches)
-   **Ritually Significant:** Purple highlights, symbolic animations, otherworldly behavior

Remember that these guidelines are meant to enhance the atmosphere of digital occultism and mystery. The user should never feel completely comfortable, but neither should they be overwhelmed with visual noise. Balance is key—like any good ritual.
