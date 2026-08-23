---
name: Carousel browser testing
description: Reliable pointer testing for carousels used below the site's sticky header.
---

When browser-testing a carousel, explicitly scroll its interactive stage into the centre of the viewport before clicking or dragging.

**Why:** If the stage is partly above the viewport, automated clicks can hit the sticky navigation or nearby controls while appearing to target a photo, producing misleading pointer-interaction failures.

**How to apply:** Before each pointer action, centre the carousel stage, wait for scrolling and animation to settle, and confirm the target's bounding box is below the sticky header.